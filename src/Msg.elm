module Msg exposing (Msg(..))

import Routes exposing (Sitemap)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Dict exposing (Dict)


type Msg
    = NoOp
    | RouteChanged Sitemap
    | GotCategoriesAndThreadsAndUsers ( Dict Int Category.Model, Dict Int Thread.Model, Dict Int User.Model )
