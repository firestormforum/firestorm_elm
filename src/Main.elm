module Main exposing (..)

import App exposing (..)
import Html exposing (programWithFlags)
import Navigation exposing (Location)
import Json.Decode exposing (Value)
import Route


main : Program Value Model Msg
main =
    Navigation.programWithFlags
        (Route.fromLocation >> SetRoute)
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
