module Page.Category exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class, href)
import Data.Category as Category
import Data.Thread as Thread
import Route exposing (Route(..))
import Date
import Page.Component exposing (timeAbbr, userLink, threadLink, badgeBlock)


view : Category.Category -> Html msg
view category =
    div [ class "page-category" ]
        [ h2 [] [ text category.title ]
        , ol [ class "thread-list" ]
            (List.map threadView threads)
        ]


threadView : Thread.Thread -> Html msg
threadView thread =
    li
        []
        [ details thread
        , supplemental thread
        ]


details : Thread.Thread -> Html msg
details thread =
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
                [ timeAbbr <| Date.fromTime thread.updatedAt ]
            ]


supplemental : Thread.Thread -> Html msg
supplemental thread =
    div [ class "supplemental" ]
        [ badgeBlock True 3 ]


threads : List Thread.Thread
threads =
    List.repeat 4 Thread.mockThread
