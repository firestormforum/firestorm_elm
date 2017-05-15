module Components exposing (threadHeader, layoutContent, postList)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.User as User
import Types.Post as Post
import Types.Thread as Thread
import Types.Store as Store
import Markdown


layoutContent : List (Html msg) -> Html msg
layoutContent =
    div
        [ class "layout-content" ]


threadHeader : Thread.Model -> User.Model -> Html msg
threadHeader thread user =
    div [ class "thread-header" ]
        [ h2 [] [ text thread.title ]
        , div
            [ class "item-metadata" ]
            [ a [ href "#", class "username" ]
                [ text <| "@" ++ user.username ]
            ]
        ]


postList : Store.Model -> List Post.Model -> Html msg
postList store posts =
    posts
        |> List.map (postListItem store)
        |> ol [ class "post-list" ]


postListItem : Store.Model -> Post.Model -> Html msg
postListItem store post =
    let
        user =
            post.userId
                |> Store.findUser store
                |> Maybe.withDefault User.new
    in
        li []
            [ div
                [ class "post-item"
                , id <| "post-" ++ (toString post.id)
                ]
                [ div
                    [ class "item-metadata" ]
                    [ a [ href "#" ] [ text user.username ]
                    , abbr [] [ text post.insertedAt ]
                    ]
                , div
                    [ class "body" ]
                    [ Markdown.toHtml [] post.body ]
                , div
                    [ class "post-item-actions" ]
                    [ div [ class "spacer" ] []
                    , ul [ class "actions" ]
                        [ li []
                            [ a
                                [ href "#" ]
                                [ i [ class "fa fa-link" ] [] ]
                            ]
                        , li []
                            [ a
                                [ href "#" ]
                                [ i [ class "emoticon-faces" ] [] ]
                            ]
                        , li []
                            [ a
                                [ href "#" ]
                                [ i [ class "fa fa-quote-right" ] [] ]
                            ]
                        , li []
                            [ a
                                [ href "#" ]
                                [ i [ class "fa fa-reply" ] [] ]
                            ]
                        ]
                    ]
                ]
            ]
