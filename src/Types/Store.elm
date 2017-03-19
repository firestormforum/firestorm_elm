module Types.Store
    exposing
        ( Model
        , Msg(..)
        , StoreUpdate
        , ReplenishRequest
        , findThread
        , findCategory
        , findUser
        , new
        , unknownCategoryIds
        , unknownThreadIds
        , unknownPostIds
        , unknownUserIds
        )

import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Types.Post as Post
import Dict exposing (Dict)


type alias Model =
    { categories : Dict Int Category.Model
    , threads : Dict Int Thread.Model
    , users : Dict Int User.Model
    , posts : Dict Int Post.Model
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
