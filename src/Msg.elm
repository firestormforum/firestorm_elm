module Msg exposing (Msg(..))

import Routes exposing (Sitemap)
import Types.Category as Category


type Msg
    = NoOp
    | RouteChanged Sitemap
    | GotCategories (List Category.Model)
