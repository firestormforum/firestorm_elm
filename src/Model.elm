module Model exposing (Model)

import Types.Category as Category


type alias Model =
    { categories : List Category.Model
    , apiBaseUrl : String
    }
