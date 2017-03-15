module Types.Thread exposing (Model)

import Types.User as User
import Types.Post as Post


type alias Model =
    { id : Int
    , title : String
    , user : User.Model
    , posts : List Post.Model
    }
