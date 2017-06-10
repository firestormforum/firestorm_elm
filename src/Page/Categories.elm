module Page.Categories exposing (view)

import Data.Category as Category exposing (Category)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class)
import Route exposing (Route)


view : Date -> List Category -> Html msg
view currentDate categories =
    div [ class "page-categories" ]
        [ h2 [] [ text "Categories" ]
        , ol [ class "category-list" ]
            (List.map (categoryView currentDate) categories)
        ]


categoryView : Date -> Category -> Html msg
categoryView currentDate category =
    li
        []
        [ a [ Route.href <| Route.Category category.slug ]
            [ h2 [] [ text category.title ] ]
        ]
