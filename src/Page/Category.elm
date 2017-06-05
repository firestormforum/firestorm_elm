module Page.Category exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class, href)
import Data.Category as Category
import Data.Thread as Thread
import Route exposing (Route(..))
import Date
import Page.Component exposing (timeAbbr, userLink, threadLink, badgeBlock)


view : Date.Date -> Category.Category -> Html msg
view currentDate category =
    div [ class "page-category" ]
        [ h2 [] [ text category.title ]
        , ol [ class "thread-list" ]
            (List.map (threadView currentDate) threads)
        ]


threadView : Date.Date -> Thread.Thread -> Html msg
threadView currentDate thread =
    li
        []
        [ details currentDate thread
        , supplemental thread
        ]


details : Date.Date -> Thread.Thread -> Html msg
details currentDate thread =
    let
        category =
            Category.mockCategory
    in
        div [ class "details" ]
            [ div [ class "summary" ]
                [ threadLink category thread
                , userLink "@username"
                ]
            , div [ class "metadata" ]
                [ timeAbbr currentDate (Date.fromTime thread.updatedAt) ]
            ]


supplemental : Thread.Thread -> Html msg
supplemental thread =
    div [ class "supplemental" ]
        [ badgeBlock True 3 ]


threads : List Thread.Thread
threads =
    List.repeat 4 Thread.mockThread
