module Types.Thread exposing (Model)

import Types.User as User


type alias Model =
    { title : String
    , user : User.Model
    }
