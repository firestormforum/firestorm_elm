module Types.Category exposing (Model)

import Types.Thread as Thread
import Dict exposing (Dict)


type alias Model =
    { id : Int
    , title : String
    , insertedAt : String
    , updatedAt : String
    , threads : Dict Int Thread.Model
    }
