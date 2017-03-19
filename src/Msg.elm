module Msg exposing (Msg(..))

import Routes exposing (Sitemap)
import Types.Store as Store
import Dict exposing (Dict)


type Msg
    = NoOp
    | RouteChanged Sitemap
    | StoreMsg Store.Msg
