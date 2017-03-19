module Update exposing (update, handleRoute)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Api.Home
import Api.Fetch
import Types.Store as Store
import Update.Store
import Routes exposing (Sitemap(..))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        RouteChanged route ->
            ( { model | route = route }, Cmd.none )

        StoreMsg storeMsg ->
            let
                ( nextStore, storeCmd ) =
                    Update.Store.update model.apiBaseUrl storeMsg model.store
            in
                ( { model | store = nextStore }
                , Cmd.map StoreMsg storeCmd
                )


handleRoute : Sitemap -> Model -> ( Model, Cmd Msg )
handleRoute route model =
    case route of
        HomeR ->
            ( model
            , Cmd.map StoreMsg <|
                Api.Home.index
                    model.apiBaseUrl
                    Store.NewData
                    (always Store.NoOp)
            )

        CategoryR categoryId ->
            ( model
            , Cmd.map StoreMsg <|
                Api.Fetch.getCategory categoryId
                    model.apiBaseUrl
                    Store.NewData
                    (always Store.NoOp)
            )

        ThreadR categoryId threadId ->
            let
                idResult =
                    threadId
                        |> String.toInt
            in
                case idResult of
                    Ok id ->
                        ( model
                        , Cmd.map StoreMsg <|
                            Api.Fetch.post
                                { categories = []
                                , threads = [ id ]
                                , posts = []
                                , users = []
                                }
                                model.apiBaseUrl
                                Store.NewData
                                (always Store.NoOp)
                        )

                    Err e ->
                        ( model
                        , Cmd.none
                        )

        _ ->
            ( model, Cmd.none )
