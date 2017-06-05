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
import Html.Attributes exposing (class, classList, href, title)
import Data.Category as Category
import Data.Thread as Thread
import Route
import Date.Distance as Distance
import Date.Distance.I18n.En
import Date.Distance.Types


locale : Date.Distance.Types.Locale
locale =
    Date.Distance.I18n.En.locale { addSuffix = True }


dateDiffInWords : Date.Date -> Date.Date -> String
dateDiffInWords =
    let
        defaultConfig =
            Distance.defaultConfig
    in
        Distance.inWordsWithConfig
            { defaultConfig | locale = locale }


timeAbbr : Date.Date -> Date.Date -> Html msg
timeAbbr currentDate date =
    abbr
        [ class "time"
        , title <| toString date
        ]
        [ text <| dateDiffInWords currentDate date ]


categoryLink : Category.Category -> Html msg
categoryLink category =
    a
        [ Route.href <| Route.Category category.slug ]
        [ text category.title ]


threadLink : Category.Category -> Thread.Thread -> Html msg
threadLink category thread =
    a
        [ Route.href <| Route.Thread category.slug thread.slug
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
