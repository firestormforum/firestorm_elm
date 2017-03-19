module Types.Thread exposing (Model, new, finder)

import Types.User as User
import Types.Post as Post


type alias Model =
    { id : Int
    , title : String
    , slug : String
    , userId : Int
    , postIds : List Int
    , categoryId : Int
    }


new : Model
new =
    { id = -1
    , title = ""
    , slug = ""
    , userId = -1
    , postIds = []
    , categoryId = -1
    }


finder : Model -> String
finder thread =
    case thread.slug of
        "" ->
            toString thread.id

        s ->
            s
