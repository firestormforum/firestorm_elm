module Main exposing (..)

import App exposing (..)
import Json.Decode exposing (Value)
import Model exposing (Model)
import Navigation exposing (Location)
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
