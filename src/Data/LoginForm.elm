module Data.LoginForm exposing (LoginForm, new, setPassword, setUsername)


type alias LoginForm =
    { username : String
    , password : String
    }


new : LoginForm
new =
    { username = ""
    , password = ""
    }


setUsername : String -> LoginForm -> LoginForm
setUsername username loginForm =
    { loginForm | username = username }


setPassword : String -> LoginForm -> LoginForm
setPassword password loginForm =
    { loginForm | password = password }
