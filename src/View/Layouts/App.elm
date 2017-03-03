module View.Layouts.App exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Msg exposing (Msg)
import Types.NavItem exposing (NavItem)
import Routes exposing (Sitemap(..))
import View.Layouts.Drawer as Drawer
import View.Layouts.Navigation as Navigation


view : List (Html Msg) -> Html Msg
view children =
    div
        [ class "pure-container"
        , attribute "data-effect" "pure-effect-slide"
        ]
        [ input
            [ id "pure-toggle-right"
            , class "pure-toggle"
            , attribute "data-toggle" "right"
            , type_ "checkbox"
            ]
            []
        , label
            [ class "pure-toggle-label"
            , attribute "data-toggle-label" "right"
            , attribute "for" "pure-toggle-right"
            ]
            [ span [ class "pure-toggle-icon" ] []
            ]
        , div
            [ class "pure-drawer"
            , attribute "data-position" "right"
            ]
            -- FIXME: Make this dynamic based on the current route
            [ Drawer.view drawerItems ]
        , div
            [ class "pure-pusher-container" ]
            [ div
                [ class "pure-pusher" ]
                [ Navigation.view
                , div
                    [ class "layout-content" ]
                    children
                ]
            ]
        , label
            [ class "pure-overlay"
            , attribute "data-overlay" "right"
            , attribute "for" "pure-toggle-right"
            ]
            []
        ]


drawerItems : List NavItem
drawerItems =
    [ NavItem HomeR "Home"
    ]
