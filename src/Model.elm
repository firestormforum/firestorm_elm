module Model exposing (Model, init, isLoggedIn)

import Maybe.Extra as Maybe
import Route exposing (Route)
import Store exposing (Store)
import Store.Mocks
import Time exposing (Time)


type alias Model =
    { currentRoute : Route
    , currentTime : Time
    , store : Store
    , apiToken : Maybe String
    , username : String
    , password : String
    }


init : Route -> Model
init initialRoute =
    { currentRoute = initialRoute
    , currentTime = 0
    , store = Store.empty
    , apiToken = Nothing
    , username = ""
    , password = ""
    }


isLoggedIn : Model -> Bool
isLoggedIn { apiToken } =
    Maybe.isJust apiToken
