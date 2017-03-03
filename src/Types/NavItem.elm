module Types.NavItem exposing (NavItem)

import Routes exposing (Sitemap)


type alias NavItem =
    { route : Sitemap
    , text : String
    }
