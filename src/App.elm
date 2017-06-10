module App exposing (..)

import Data.Category as Category
import Data.Thread as Thread
import Date
import Html exposing (Html, div, img, text)
import Json.Decode exposing (Value)
import Model exposing (Model)
import Navigation exposing (Location)
import Page.Categories
import Page.Category
import Page.Home
import Page.Layout
import Page.Thread
import Ports
import Route exposing (Route(..))
import Store
import Time exposing (Time)
import Title


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
    ( Model.init initialRoute
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
                let
                    mockCategory =
                        Category.mockCategory
                in
                model.store
                    |> Store.getCategory mockCategory.id
                    |> Maybe.map (Page.Category.view currentDate)
                    |> Maybe.withDefault (text "No such category")

            Thread categorySlug threadSlug ->
                Page.Thread.view currentDate Category.mockCategory Thread.mockThread

            NotFound ->
                text "Not found"


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every Time.second Tick
