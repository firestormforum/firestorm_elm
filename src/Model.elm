module Model exposing (Model, init, isLoggedIn)

import Data.LoginForm as LoginForm exposing (LoginForm)
import Maybe.Extra as Maybe
import Route exposing (Route)
import Store exposing (Store)
import Store.Mocks
import Time exposing (Time)


type alias Model =
    { currentRoute : Route
    , currentTime : Time
    , store : Store
    , loginForm : LoginForm
    , apiToken : Maybe String
    }


init : Route -> Model
init initialRoute =
    { currentRoute = initialRoute
    , currentTime = 0
    , store = Store.empty
    , apiToken = Nothing
    , loginForm = LoginForm.new
    }


isLoggedIn : Model -> Bool
isLoggedIn { apiToken } =
    Maybe.isJust apiToken
