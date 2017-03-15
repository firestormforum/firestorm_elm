module Types.User exposing (Model)


type alias Model =
    { id : Int
    , username : String
    , email : String
    , name : String
    }
