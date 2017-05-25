module Page.Categories exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Data.Category as Category
import Route exposing (Route(..))


view : Html msg
view =
    div [ class "page-categories" ]
        [ h2 [] [ text "Categories" ]
        , ol [ class "categories-list" ]
            (List.map categoryView categories)
        ]


categoryView : Category.Category -> Html msg
categoryView category =
    li
        [ class "category-item" ]
        [ a [ Route.href <| Category category.slug ]
            [ text category.title ]
        ]


categories : List Category.Category
categories =
    List.repeat 4 Category.mockCategory
