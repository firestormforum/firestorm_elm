module Update exposing (update, handleRoute)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Api.Home
import Api.Categories
import Routes exposing (Sitemap(..))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        RouteChanged route ->
            ( { model | route = route }, Cmd.none )

        GotCategoriesAndThreadsAndUsers ( categories, threads, users ) ->
            ( { model
                | categories = categories
                , threads = threads
                , users =
                    users
              }
            , Cmd.none
            )


handleRoute : Sitemap -> Model -> ( Model, Cmd Msg )
handleRoute route model =
    case route of
        HomeR ->
            ( model
            , Api.Home.index
                model.apiBaseUrl
                GotCategoriesAndThreadsAndUsers
                (always NoOp)
            )

        CategoryR categoryId ->
            ( model
            , Api.Categories.get categoryId
                model.apiBaseUrl
                GotCategoriesAndThreadsAndUsers
                (always NoOp)
            )

        _ ->
            ( model, Cmd.none )
