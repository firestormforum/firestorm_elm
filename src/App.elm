module App exposing (..)

import Html exposing (Html, text, div, img)
import Page.Layout
import Page.Home
import Page.Categories
import Page.Category
import Page.Thread
import Data.Category as Category
import Data.Thread as Thread
import Route exposing (Route(..))
import Navigation exposing (Location)
import Json.Decode exposing (Value)
import Time exposing (Time)
import Date
import Title
import Ports


type alias Model =
    { currentRoute : Route
    , currentTime : Time
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
        ( { currentRoute = initialRoute
          , currentTime = 0
          }
        , Ports.setTitle (Title.forRoute initialRoute)
        )


type Msg
    = SetRoute (Maybe Route)
    | Tick Time


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetRoute route ->
            let
                currentRoute =
                    Maybe.withDefault NotFound route
            in
                ( { model | currentRoute = currentRoute }
                , Ports.setTitle <| Title.forRoute currentRoute
                )

        Tick time ->
            ( { model | currentTime = time }
            , Cmd.none
            )


view : Model -> Html Msg
view model =
    let
        currentDate =
            model.currentTime
                |> Date.fromTime
    in
        Page.Layout.view <|
            case model.currentRoute of
                Home ->
                    Page.Home.view

                Categories ->
                    Page.Categories.view

                Category categorySlug ->
                    Page.Category.view currentDate Category.mockCategory

                Thread categorySlug threadSlug ->
                    Page.Thread.view currentDate Category.mockCategory Thread.mockThread

                NotFound ->
                    text "Not found"


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every Time.second Tick
