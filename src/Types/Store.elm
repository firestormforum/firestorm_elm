module Types.Store
    exposing
        ( Model
        , Msg(..)
        , StoreUpdate
        , newStoreUpdate
        , ReplenishRequest
        , findThread
        , findCategory
        , findUser
        , new
        , unknownCategoryIds
        , unknownThreadIds
        , unknownPostIds
        , unknownUserIds
        , fetchWants
        , storeUpdateDecoder
        , newReplenishRequest
        , wants
        , channels
        )

import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Types.Post as Post
import Dict exposing (Dict)
import Json.Encode as Encode exposing (..)
import Json.Decode as Decode exposing (Decoder)
import Phoenix
import Phoenix.Push as Push exposing (Push)
import Phoenix.Socket as Socket exposing (Socket)
import Phoenix.Channel as Channel exposing (Channel)
import Decoders


type alias Model =
    { categories : Dict Int Category.Model
    , threads : Dict Int Thread.Model
    , users : Dict Int User.Model
    , posts : Dict Int Post.Model
    , wants : ReplenishRequest
    }


type alias StoreUpdate =
    { categories : Dict Int Category.Model
    , threads : Dict Int Thread.Model
    , users : Dict Int User.Model
    , posts : Dict Int Post.Model
    }


type alias ReplenishRequest =
    { categories : List Int
    , threads : List Int
    , posts : List Int
    , users : List Int
    }


type Msg
    = NewData StoreUpdate
    | NoOp


new : Model
new =
    { categories = Dict.empty
    , threads = Dict.empty
    , users = Dict.empty
    , posts = Dict.empty
    , wants = newReplenishRequest
    }


newReplenishRequest : ReplenishRequest
newReplenishRequest =
    { categories = []
    , threads = []
    , posts = []
    , users = []
    }


findCategory : Model -> Int -> Maybe Category.Model
findCategory model categoryId =
    model.categories
        |> Dict.get categoryId


findThread : Model -> Int -> Maybe Thread.Model
findThread model threadId =
    model.threads
        |> Dict.get threadId


findUser : Model -> Int -> Maybe User.Model
findUser model userId =
    model.users
        |> Dict.get userId


unknownCategoryIds : Model -> List Int
unknownCategoryIds model =
    let
        -- gather all of the category ids and filter out any we have in our dict
        -- already
        knownCategoryIds =
            model.categories
                |> Dict.keys

        threadCategoryIds =
            model.threads
                |> Dict.toList
                |> List.map (\( _, v ) -> v)
                |> List.map .categoryId

        known catId =
            knownCategoryIds
                |> List.member catId
    in
        threadCategoryIds
            |> List.filter (not << known)
            |> List.filter ((<) 0)


unknownThreadIds : Model -> List Int
unknownThreadIds model =
    let
        knownThreadIds =
            model.threads
                |> Dict.keys

        categoryThreadIds =
            model.categories
                |> Dict.toList
                |> List.map (\( _, v ) -> v)
                |> List.concatMap .threadIds

        known threadId =
            knownThreadIds
                |> List.member threadId
    in
        categoryThreadIds
            |> List.filter (not << known)
            |> List.filter ((<) 0)


unknownPostIds : Model -> List Int
unknownPostIds model =
    let
        knownPostIds =
            model.posts
                |> Dict.keys

        threadPostIds =
            model.threads
                |> Dict.toList
                |> List.map (\( _, v ) -> v)
                |> List.concatMap .postIds

        known postId =
            knownPostIds
                |> List.member postId
    in
        threadPostIds
            |> List.filter (not << known)
            |> List.filter ((<) 0)


unknownUserIds : Model -> List Int
unknownUserIds model =
    let
        knownUserIds =
            model.users
                |> Dict.keys

        postUserIds =
            model.posts
                |> Dict.toList
                |> List.map (\( _, v ) -> v)
                |> List.map .userId

        known userId =
            knownUserIds
                |> List.member userId
    in
        postUserIds
            |> List.filter (not << known)
            |> List.filter ((<) 0)


newStoreUpdate : StoreUpdate
newStoreUpdate =
    { categories = Dict.empty
    , threads = Dict.empty
    , users = Dict.empty
    , posts = Dict.empty
    }


wantsSomething : Model -> Bool
wantsSomething model =
    ((List.length model.wants.categories) > 1)
        || ((List.length model.wants.threads) > 1)
        || ((List.length model.wants.users) > 1)
        || ((List.length model.wants.posts) > 1)


wantsNothing : Model -> Bool
wantsNothing =
    not << wantsSomething


wants : ReplenishRequest -> Model -> Model
wants replenishRequest model =
    -- NOTE: We want to probably merge this in and then make sure we remove it
    -- when we get the corresponding data
    { model
        | wants = replenishRequest
    }


fetchWants : Model -> Cmd Msg
fetchWants model =
    if wantsNothing model then
        Cmd.none
    else
        Phoenix.push "ws://localhost:4000/socket/websocket/"
            (fetchData
                NewData
                model.wants
            )


fetchData : (StoreUpdate -> msg) -> ReplenishRequest -> Push msg
fetchData tagger replenishRequest =
    let
        payload =
            encodeReplenishRequest replenishRequest

        decodingTagger : Value -> msg
        decodingTagger v =
            Decode.decodeValue storeUpdateDecoder v
                |> Result.withDefault newStoreUpdate
                |> tagger
    in
        Push.init "store:home" "fetch"
            |> Push.withPayload payload
            |> Push.onOk decodingTagger


encodeReplenishRequest : ReplenishRequest -> Encode.Value
encodeReplenishRequest replenishRequest =
    object
        [ ( "categories", intList replenishRequest.categories )
        , ( "threads", intList replenishRequest.threads )
        , ( "posts", intList replenishRequest.posts )
        , ( "users", intList replenishRequest.users )
        ]


storeUpdateDecoder : Decoder StoreUpdate
storeUpdateDecoder =
    Decode.map4 StoreUpdate
        Decoders.categoriesDecoder
        Decoders.threadsDecoder
        Decoders.usersDecoder
        Decoders.postsDecoder


intList : List Int -> Encode.Value
intList listInts =
    list <|
        List.map
            int
            listInts


{-| returns a list of channels for every entity in the store
-}
channels : (Msg -> msg) -> Model -> List (Channel msg)
channels mapper model =
    let
        valToStoreUpdate val =
            val
                |> Decode.decodeValue storeUpdateDecoder
                |> Result.withDefault newStoreUpdate
                |> NewData

        entityChannel entityType id =
            Channel.init (entityType ++ ":" ++ (toString id))
                |> Channel.on "update"
                    valToStoreUpdate
                |> Channel.map mapper
                |> Channel.withDebug

        categoryChannel id =
            entityChannel "categories" id

        threadChannel id =
            entityChannel "threads" id

        postChannel id =
            entityChannel "posts" id

        userChannel id =
            entityChannel "users" id

        categoryChannels =
            model.categories
                |> Dict.keys
                |> List.map categoryChannel

        threadChannels =
            model.threads
                |> Dict.keys
                |> List.map threadChannel

        postChannels =
            model.posts
                |> Dict.keys
                |> List.map postChannel

        userChannels =
            model.users
                |> Dict.keys
                |> List.map userChannel
    in
        categoryChannels ++ threadChannels ++ postChannels ++ userChannels
