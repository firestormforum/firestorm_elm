module Main exposing (..)

import App exposing (init, subscriptions, update)
import Json.Decode exposing (Value)
import Model exposing (Model)
import Msg exposing (Msg(SetRoute))
import Navigation exposing (Location)
import Route
import View exposing (view)


main : Program Value Model Msg
main =
    Navigation.programWithFlags
        (Route.fromLocation >> SetRoute)
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
