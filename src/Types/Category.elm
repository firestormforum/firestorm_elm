module Types.Category exposing (Model, isRoot, roots, new)

import Types.Thread as Thread
import Dict exposing (Dict)


type alias Model =
    { id : Int
    , title : String
    , insertedAt : String
    , updatedAt : String
    , parentId : Maybe Int
    , childrenIds : List Int
    , threadIds : List Int
    }


isRoot : Model -> Bool
isRoot category =
    category.parentId == Nothing


roots : Dict Int Model -> Dict Int Model
roots categories =
    categories
        |> Dict.filter (\k v -> isRoot v)


new : Model
new =
    { id = -1
    , title = ""
    , insertedAt = ""
    , updatedAt = ""
    , parentId = Nothing
    , childrenIds = []
    , threadIds = []
    }
