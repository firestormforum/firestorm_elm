port module Main exposing (main)

import Api
import Brand
import Browser
import Browser.Navigation as Nav
import Element
    exposing
        ( Element
        , column
        , el
        , fill
        , height
        , inFront
        , rgb
        , row
        , text
        , width
        )
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Graphql.Document
import Graphql.SelectionSet exposing (with)
import Helpers exposing (idToString, stringToId)
import Html as H
import Json.Decode exposing (Decoder, field, string)
import Json.Encode
import Layout
import Model exposing (Model)
import Msg exposing (Msg(..))
import Pages.Categories
import Pages.Category
import Pages.Thread
import Queries
import Route exposing (Route(..))
import Subscriptions
import Types exposing (..)
import Url exposing (Url)


main =
    Browser.application
        { init = init
        , view = Layout.view
        , update = update
        , subscriptions = subscriptions
        , onUrlRequest = onUrlRequest
        , onUrlChange = onUrlChange
        }


subscriptions model =
    gotSubscriptionData GotSubscriptionData


onUrlRequest =
    always NoOp


onUrlChange =
    UrlChanged


update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        RoutePushed route ->
            ( model, Route.pushUrl model.key route )

        UrlChanged url ->
            let
                route =
                    Route.fromUrl url
                        |> Maybe.withDefault Route.FourOhFour

                nextModel =
                    Model.handleNewRoute route model
            in
            ( nextModel
            , Cmd.batch
                [ fetchDataFor nextModel
                , nextModel
                    |> graphqlSubscriptions
                    |> createSubscriptions
                ]
            )

        GotCategories result ->
            case result of
                Err e ->
                    ( model, Cmd.none )

                Ok paginatedResult ->
                    ( Model.gotCategories paginatedResult model, Cmd.none )

        GotCategory result ->
            case result of
                Err e ->
                    ( model, Cmd.none )

                Ok category ->
                    ( Model.gotCategory category model, Cmd.none )

        GotThread result ->
            case result of
                Err e ->
                    ( model, Cmd.none )

                Ok thread ->
                    ( Model.gotThread thread model, Cmd.none )

        SetEmail email ->
            ( Model.setEmail email model, Cmd.none )

        SetPassword password ->
            ( Model.setPassword password model, Cmd.none )

        Authenticate ->
            ( model
            , Api.authenticate model.endpoint
                model.email
                model.password
            )

        AuthenticateResponse result ->
            case result of
                Err r ->
                    ( model, Cmd.none )

                Ok token ->
                    ( Model.gotToken token model
                    , Route.replaceUrl model.key Route.Categories
                    )

        SetThreadTitle threadTitle ->
            ( Model.setThreadTitle threadTitle model, Cmd.none )

        SetThreadBody threadBody ->
            ( Model.setThreadBody threadBody model, Cmd.none )

        CreateThread categoryId ->
            case model.authentication of
                Unauthenticated ->
                    ( model, Cmd.none )

                Authenticated token ->
                    ( model
                    , Api.createThread
                        model.endpoint
                        token
                        categoryId
                        model.threadTitle
                        model.threadBody
                    )

        CreateThreadResponse categoryId result ->
            case result of
                Err r ->
                    ( model, Cmd.none )

                Ok thread ->
                    ( Model.clearThreadForm model, Route.replaceUrl model.key (Route.Thread (idToString categoryId) (idToString thread.id)) )

        SetPostBody postBody ->
            ( Model.setPostBody postBody model, Cmd.none )

        SetNewPostTab newPostTab ->
            ( Model.setNewPostTab newPostTab model, Cmd.none )

        CreatePost categoryId threadId ->
            case model.authentication of
                Unauthenticated ->
                    ( model, Cmd.none )

                Authenticated token ->
                    ( model
                    , Api.createPost
                        model.endpoint
                        token
                        categoryId
                        threadId
                        model.postBody
                    )

        CreatePostResponse categoryId threadId result ->
            case result of
                Err r ->
                    ( model, Cmd.none )

                Ok thread ->
                    ( Model.clearPostForm model
                    , Route.replaceUrl model.key (Route.Thread (idToString categoryId) (idToString threadId))
                    )

        SetNewThreadTab newThreadTab ->
            ( Model.setNewThreadTab newThreadTab model, Cmd.none )

        GotSubscriptionData subscriptionData ->
            let
                categoryAddedDecoder =
                    Graphql.Document.decoder
                        Subscriptions.categoryAdded

                categoryId =
                    case model.category of
                        Nothing ->
                            stringToId ""

                        Just category ->
                            category.id

                threadAddedDecoder =
                    Graphql.Document.decoder <|
                        Subscriptions.threadAdded
                            categoryId

                threadId =
                    case model.thread of
                        Nothing ->
                            stringToId ""

                        Just thread ->
                            thread.id

                postAddedDecoder =
                    Graphql.Document.decoder <|
                        Subscriptions.postAdded
                            threadId

                subscriptionDataDecoder =
                    Json.Decode.oneOf
                        [ categoryAddedDecoder |> Json.Decode.map CategoryAddedSubscription
                        , threadAddedDecoder |> Json.Decode.map ThreadAddedSubscription
                        , postAddedDecoder |> Json.Decode.map PostAddedSubscription
                        ]

                data =
                    subscriptionData
                        |> Json.Decode.decodeValue subscriptionDataDecoder
            in
            case data of
                Ok decoded ->
                    case decoded of
                        CategoryAddedSubscription category ->
                            ( Model.categoryAdded category model, Cmd.none )

                        ThreadAddedSubscription thread ->
                            ( Model.threadAdded thread model, Cmd.none )

                        PostAddedSubscription post ->
                            ( Model.postAdded post model, Cmd.none )

                Err e ->
                    ( model, Cmd.none )


type alias Flags = 
    { endpoint : String
    }

flagsDecoder : Decoder Flags
flagsDecoder =
    Json.Decode.map Flags (field "endpoint" string)

init : Json.Decode.Value -> Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    let
        decodedFlags = 
            flags
            |> Json.Decode.decodeValue flagsDecoder
            |> Result.withDefault { endpoint = "localhost:4000" }

        model =
            Model.init key url decodedFlags.endpoint

    in
    ( model
    , Cmd.batch
        [ fetchDataFor model
        , model
            |> graphqlSubscriptions
            |> createSubscriptions
        ]
    )


fetchDataFor : Model -> Cmd Msg
fetchDataFor { endpoint, route } =
    case route of
        Route.Categories ->
            Pages.Categories.fetchDataFor endpoint

        Route.Category categoryId ->
            Pages.Category.fetchDataFor endpoint (stringToId categoryId)

        Route.Thread categoryId threadId ->
            Pages.Thread.fetchDataFor endpoint (stringToId threadId)

        _ ->
            Cmd.none


port createSubscriptions : Json.Encode.Value -> Cmd msg


graphqlSubscriptions : Model -> Json.Encode.Value
graphqlSubscriptions model =
    Json.Encode.list Json.Encode.string <|
        case model.route of
            Route.Categories ->
                [ Subscriptions.categoryAdded
                    |> Graphql.Document.serializeSubscription
                ]

            Route.Category categoryId ->
                [ Subscriptions.threadAdded (stringToId categoryId)
                    |> Graphql.Document.serializeSubscription
                ]

            Route.Thread categoryId threadId ->
                [ Subscriptions.postAdded (stringToId threadId)
                    |> Graphql.Document.serializeSubscription
                ]

            _ ->
                []


type SubscriptionData
    = CategoryAddedSubscription Category
    | ThreadAddedSubscription Thread
    | PostAddedSubscription Post


port gotSubscriptionData : (Json.Encode.Value -> msg) -> Sub msg
