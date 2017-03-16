module Types.User exposing (Model, new)


type alias Model =
    { id : Int
    , username : String
    , email : String
    , name : String
    }


new : Model
new =
    { id = -1
    , username = ""
    , email = ""
    , name = ""
    }
