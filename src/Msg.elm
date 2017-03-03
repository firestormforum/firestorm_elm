module Msg exposing (Msg(..))

import Routes exposing (Sitemap)


type Msg
    = NoOp
    | RouteChanged Sitemap
