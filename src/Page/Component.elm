module Page.Component
    exposing
        ( badgeBlock
        , categoryLink
        , categoryPills
        , itemMetadata
        , threadLink
        , timeAbbr
        , userLink
        )

import Data.Category as Category
import Data.Thread as Thread
import Data.User as User exposing (User)
import Date
import Date.Distance as Distance
import Date.Distance.I18n.En
import Date.Distance.Types
import Html exposing (..)
import Html.Attributes exposing (class, classList, href, title)
import Route


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


userLink : Maybe User -> Html msg
userLink maybeUser =
    case maybeUser of
        Just user ->
            a
                [ Route.href <| Route.User user.username
                , class "user-name"
                ]
                [ text <| User.usernameToString user.username ]

        Nothing ->
            div [] []


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
