module Page.Layout exposing (view)

import Html exposing (..)
import Html.Attributes exposing (alt, attribute, class, for, id, src, type_)
import Route exposing (Route(..))


view : Html msg -> Html msg
view body =
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
            , for "pure-toggle-right"
            ]
            [ span
                [ class "pure-toggle-icon" ]
                []
            ]
        , div
            [ class "pure-drawer"
            , attribute "data-position" "right"
            ]
            [ drawer ]
        , div
            [ class "pure-pusher-container" ]
            [ div
                [ class "pure-pusher" ]
                [ navigation
                , div [ class "layout-content" ]
                    [ div
                        [ class "layout-drawer-tablet" ]
                        [ drawer ]
                    , div [ class "layout-content-main" ]
                        [ div [ class "body" ]
                            [ body ]
                        ]
                    ]
                ]
            ]
        ]


navigation : Html msg
navigation =
    div
        [ class "pure-menu pure-menu-horizontal navigation-menu" ]
        [ a
            [ class "pure-menu-heading pure-menu-link navigation-logo-link"
            , Route.href Home
            ]
            [ div [ class "navigation-logo" ]
                [ img
                    [ alt "Firestorm logo"
                    , src "./images/firestorm-logo.png"
                    ]
                    []
                , span [] [ text "Firestorm" ]
                ]
            ]
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
