module Model exposing (Model, init, isLoggedIn)

import Data.LoginForm as LoginForm exposing (LoginForm)
import Data.NewPostForm as NewPostForm exposing (NewPostForm)
import Maybe.Extra as Maybe
import Route exposing (Route)
import Store exposing (Store)
import Time exposing (Time)


type alias Model =
    { currentRoute : Route
    , currentTime : Time
    , store : Store
    , loginForm : LoginForm
    , newPostForm : NewPostForm
    , apiToken : Maybe String
    }


init : Route -> Model
init initialRoute =
    { currentRoute = initialRoute
    , currentTime = 0
    , store = Store.empty
    , apiToken = Nothing
    , loginForm = LoginForm.new
    , newPostForm = NewPostForm.new
    }


isLoggedIn : Model -> Bool
isLoggedIn { apiToken } =
    Maybe.isJust apiToken
