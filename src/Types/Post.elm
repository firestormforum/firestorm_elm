module Types.Post exposing (Model)


type alias Model =
    { id : Int
    , body : String
    , threadId : Int
    , userId : Int
    , insertedAt : String
    }
