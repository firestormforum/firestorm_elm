module Page.Categories exposing (query, view)

import Data.Category as Category exposing (Category)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class)
import Model exposing (Model)
import Route exposing (Route)
import Store exposing (Store)


type alias ViewModel =
    { categories : List Category
    , currentDate : Date
    }


query : Model -> ViewModel
query model =
    let
        categories =
            model.store
                |> Store.categories
    in
    { categories = categories
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { categories, currentDate } =
    div [ class "page-categories" ]
        [ h2 [] [ text "Categories" ]
        , ol [ class "category-list" ]
            (List.map (categoryView currentDate) categories)
        ]


categoryView : Date -> Category -> Html msg
categoryView currentDate category =
    li
        []
        [ h2 []
            [ a [ Route.href <| Route.Category category.slug ]
                [ text category.title ]
            ]
        ]
