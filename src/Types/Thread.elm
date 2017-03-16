module Types.Thread exposing (Model, new)

import Types.User as User
import Types.Post as Post


type alias Model =
    { id : Int
    , title : String
    , userId : Int
    , postIds : List Int
    }


new : Model
new =
    { id = -1
    , title = ""
    , userId = -1
    , postIds = []
    }
