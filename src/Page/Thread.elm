module Page.Thread exposing (view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class, href)
import Page.Component
    exposing
        ( categoryLink
        , categoryPills
        , itemMetadata
        , timeAbbr
        )


view : Date -> List Post -> Category -> Thread -> Html msg
view currentDate posts category thread =
    div []
        [ div [ class "thread-header" ]
            [ h2 []
                [ text thread.title ]
            , itemMetadata
                [ a [ href "#", class "username" ]
                    [ text "@someuser" ]
                , timeAbbr currentDate (Date.fromTime thread.updatedAt)
                ]
            , itemMetadata
                [ categoryPills [ category ] ]
            ]
        , ol
            [ class "post-list" ]
            (List.map (postView currentDate) posts)
        ]


postView : Date -> Post -> Html msg
postView currentDate post =
    li
        [ class "post-item" ]
        [ Post.bodyToHtml
            post.body
            [ class "body" ]
        ]
