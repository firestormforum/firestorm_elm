module Types.Category exposing (Model)

import Types.Thread as Thread


type alias Model =
    { id : Int
    , title : String
    , insertedAt : String
    , updatedAt : String
    , threads : List Thread.Model
    }
