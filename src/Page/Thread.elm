module Page.Thread exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class, href)
import Data.Category as Category
import Data.Thread as Thread
import Data.Post as Post
import Route exposing (Route(..))
import Date


view : Category.Category -> Thread.Thread -> Html msg
view category thread =
    div []
        [ div [ class "thread-header" ]
            [ h2 []
                [ text thread.title ]
            , div [ class "item-metadata" ]
                [ a [ href "#", class "username" ]
                    [ text "@someuser" ]
                , abbr
                    [ class "time" ]
                    [ text <| toString <| Date.fromTime thread.updatedAt ]
                ]
            , div [ class "item-metadata" ]
                [ ul [ class "category-pill" ]
                    [ li [ class "category -color-20" ]
                        [ a [ Route.href <| Route.Category category.slug ]
                            [ text category.title ]
                        ]
                    ]
                ]
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
