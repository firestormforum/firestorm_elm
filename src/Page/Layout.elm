module Page.Layout exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Route exposing (Route(..))


view : Html msg -> Html msg
view body =
    div
        [ class "page-layout" ]
        [ drawer
        , div [ class "body" ]
            [ body ]
        ]


drawer : Html msg
drawer =
    div
        [ class "side-drawer" ]
        [ homeLink
        , categoriesLink
        ]


homeLink : Html msg
homeLink =
    a [ Route.href Home ] [ text "Home" ]


categoriesLink : Html msg
categoriesLink =
    a [ Route.href Categories ] [ text "Categories" ]
