module App exposing (..)

import Json.Decode exposing (Value)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Navigation exposing (Location)
import Ports
import Route exposing (Route(..))
import Time
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


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every Time.second Tick
