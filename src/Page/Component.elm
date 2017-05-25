module Page.Component
    exposing
        ( timeAbbr
        , categoryLink
        , itemMetadata
        , threadLink
        , userLink
        , badgeBlock
        , categoryPills
        )

import Date
import Html exposing (..)
import Html.Attributes exposing (class, classList, href)
import Data.Category as Category
import Data.Thread as Thread
import Route


timeAbbr : Date.Date -> Html msg
timeAbbr date =
    abbr
        [ class "time" ]
        [ text <| toString <| date ]


categoryLink : Category.Category -> Html msg
categoryLink category =
    a
        [ Route.href <| Route.Category category.slug ]
        [ text category.title ]


threadLink : Category.Category -> Thread.Thread -> Html msg
threadLink category thread =
    a
        [ Route.href <| Route.Thread (category.slug) thread.slug
        , class "title"
        ]
        [ text thread.title ]


userLink : String -> Html msg
userLink username =
    a
        [ href "#"
        , class "user-name"
        ]
        [ text username ]


itemMetadata : List (Html msg) -> Html msg
itemMetadata =
    div
        [ class "item-metadata" ]


badgeBlock : Bool -> Int -> Html msg
badgeBlock highlighted count =
    div
        [ classList [ ( "badge-block", True ), ( "-highlight", highlighted ) ] ]
        [ text <| toString count ]


categoryPills : List Category.Category -> Html msg
categoryPills categories =
    let
        categoryItem : Category.Category -> Html msg
        categoryItem category =
            li
                [ class "category -color-20" ]
                [ categoryLink category ]
    in
        ul
            [ class "category-pill" ]
            (List.map categoryItem categories)
