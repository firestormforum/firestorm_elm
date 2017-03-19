module Model exposing (Model)

import Types.Store as Store
import Routes exposing (Sitemap)
import Dict exposing (Dict)


type alias Model =
    { store : Store.Model
    , apiBaseUrl : String
    , route : Sitemap
    }
