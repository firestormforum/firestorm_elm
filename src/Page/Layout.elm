module Page.Layout exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Route exposing (Route(..))
import Data.Category as Category
import Data.Thread as Thread


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
        , categoryLink Category.mockCategory
        , threadLink Category.mockCategory Thread.mockThread
        ]


homeLink : Html msg
homeLink =
    a [ Route.href Home ] [ text "Home" ]


categoriesLink : Html msg
categoriesLink =
    a [ Route.href Categories ] [ text "Categories" ]


categoryLink : Category.Category -> Html msg
categoryLink category =
    a [ Route.href <| Category category.slug ]
        [ text <|
            "Category: "
                ++ category.title
        ]


threadLink : Category.Category -> Thread.Thread -> Html msg
threadLink category thread =
    a
        [ Route.href <|
            Thread category.slug thread.slug
        ]
        [ text <|
            "Thread: "
                ++ category.title
                ++ "/"
                ++ thread.title
        ]
