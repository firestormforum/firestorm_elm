module Model exposing (Model, init)

import Route exposing (Route)
import Store exposing (Store)
import Time exposing (Time)


type alias Model =
    { currentRoute : Route
    , currentTime : Time
    , store : Store
    }


init : Route -> Model
init initialRoute =
    { currentRoute = initialRoute
    , currentTime = 0
    , store = Store.mock
    }
