module App exposing (..)

import Html exposing (Html, text, div, img)
import Html.Attributes exposing (src)
import Page.Layout
import Page.Home
import Page.Categories
import Page.Category
import Page.Thread
import Route exposing (Route(..))
import Navigation exposing (Location)
import Json.Decode exposing (Value)


type alias Model =
    { currentRoute : Route
    }


init : Value -> Location -> ( Model, Cmd Msg )
init value location =
    -- NOTE: value is not yet used but we can pass flags in with it...
    let
        initialRoute =
            case Route.fromLocation location of
                Just route ->
                    route

                Nothing ->
                    Home
    in
        ( { currentRoute = initialRoute }
        , Cmd.none
        )


type Msg
    = SetRoute (Maybe Route)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetRoute route ->
            ( { model | currentRoute = Maybe.withDefault NotFound route }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    Page.Layout.view <|
        case model.currentRoute of
            Home ->
                Page.Home.view

            Categories ->
                Page.Categories.view

            Category categorySlug ->
                Page.Category.view

            Thread categorySlug threadSlug ->
                Page.Thread.view

            NotFound ->
                text "Not found"


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
