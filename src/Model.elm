module Model exposing (Model)

import Types.Category as Category
import Dict exposing (Dict)


type alias Model =
    { categories : Dict Int Category.Model
    }
