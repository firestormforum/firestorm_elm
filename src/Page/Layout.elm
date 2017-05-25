module Page.Layout exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Route exposing (Route(..))


view : Html msg -> Html msg
view body =
    div
        [ class "page-layout" ]
        [ drawer
        , body
        ]


drawer : Html msg
drawer =
    div
        [ class "page-drawer" ]
        [ homeLink
        , categoriesLink
        , categoryLink "foo"
        , threadLink "foo" "bar"
        ]


homeLink : Html msg
homeLink =
    a [ Route.href Home ] [ text "Home" ]


categoriesLink : Html msg
categoriesLink =
    a [ Route.href Categories ] [ text "Categories" ]


categoryLink : String -> Html msg
categoryLink categorySlug =
    a [ Route.href <| Category categorySlug ]
        [ text <|
            "Category: "
                ++ categorySlug
        ]


threadLink : String -> String -> Html msg
threadLink categorySlug threadSlug =
    a [ Route.href <| Thread categorySlug threadSlug ]
        [ text <|
            "Thread: "
                ++ categorySlug
                ++ "/"
                ++ threadSlug
        ]
