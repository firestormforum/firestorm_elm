module Page.Thread exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class, href)
import Data.Category as Category
import Data.Thread as Thread
import Data.Post as Post
import Date
import Page.Component
    exposing
        ( timeAbbr
        , categoryLink
        , itemMetadata
        , categoryPills
        )


view : Category.Category -> Thread.Thread -> Html msg
view category thread =
    div []
        [ div [ class "thread-header" ]
            [ h2 []
                [ text thread.title ]
            , itemMetadata
                [ a [ href "#", class "username" ]
                    [ text "@someuser" ]
                , timeAbbr <| Date.fromTime thread.updatedAt
                ]
            , itemMetadata
                [ categoryPills [ category ] ]
            ]
        , ol
            [ class "post-list" ]
            (List.map postView posts)
        ]


posts : List Post.Post
posts =
    List.repeat 4 Post.mockPost


postView : Post.Post -> Html msg
postView post =
    li
        [ class "post-item" ]
        [ Post.bodyToHtml
            post.body
            [ class "body" ]
        ]
