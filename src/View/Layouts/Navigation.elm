module View.Layouts.Navigation exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Routes exposing (Sitemap(..))


view : Html msg
view =
    div
        [ class "pure-menu pure-menu-horizontal navigation-menu" ]
        [ a
            [ class "pure-menu-heading pure-menu-link navigation-logo-link"
            , Routes.href HomeR
            ]
            [ logo
            ]
        ]


logo : Html msg
logo =
    div
        [ class "navigation-logo" ]
        [ img
            [ alt "Firestorm logo"
            , src "/images/firestorm-logo.png"
            ]
            []
        , span [] [ text "Firestorm" ]
        ]
