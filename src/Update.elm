module Update exposing (update, handleRoute)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Api.Home
import Routes exposing (Sitemap(..))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        RouteChanged route ->
            ( model, Cmd.none )

        GotCategories categories ->
            ( { model | categories = categories }
            , Cmd.none
            )


handleRoute : Sitemap -> Model -> ( Model, Cmd Msg )
handleRoute route model =
    case Debug.log "handleRoute" route of
        HomeR ->
            ( model
            , Api.Home.index
                model.apiBaseUrl
                GotCategories
                (always NoOp)
            )

        _ ->
            ( model, Cmd.none )
