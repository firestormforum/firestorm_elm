module Types.Category exposing (Model, isRoot, roots, new, finder)

import Types.Thread as Thread
import Dict exposing (Dict)


type alias Model =
    { id : Int
    , title : String
    , slug : String
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
    , slug = ""
    , insertedAt = ""
    , updatedAt = ""
    , parentId = Nothing
    , childrenIds = []
    , threadIds = []
    }


finder : Model -> String
finder category =
    case category.slug of
        "" ->
            toString category.id

        s ->
            s
