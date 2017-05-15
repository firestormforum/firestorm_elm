module View.Layouts.Drawer exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.NavItem exposing (NavItem)
import Routes


view : List NavItem -> Html msg
view navItems =
    div
        [ class "pure-menu pure-menu-vertical" ]
        [ ul
            [ class "pure-menu-list" ]
            (List.map viewNavItem navItems)
        ]


viewNavItem : NavItem -> Html msg
viewNavItem navItem =
    li
        [ class "pure-menu-item" ]
        [ a
            [ Routes.href navItem.route
            , class "pure-menu-link"
            ]
            [ text navItem.text ]
        ]
