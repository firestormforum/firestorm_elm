module View.Threads.Show exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.User as User
import Types.Post as Post
import Types.Thread as Thread
import Types.Store as Store
import Dict exposing (Dict)
import Markdown


view : Store.Model -> Thread.Model -> Html msg
view store thread =
    let
        user =
            store.users
                |> Dict.get thread.userId
                |> Maybe.withDefault User.new
    in
        div
            [ class "layout-content" ]
            [ div [ class "thread-header" ]
                [ h2 [] [ text thread.title ]
                , div
                    [ class "item-metadata" ]
                    [ a [ href "#", class "username" ]
                        [ text <| "@" ++ user.username ]
                    ]
                ]
            , ol
                [ class "post-list" ]
                (List.map (postListItem store) (postsFor store.posts thread))
            ]


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


postsFor : Dict Int Post.Model -> Thread.Model -> List Post.Model
postsFor posts thread =
    posts
        |> Dict.filter (\k v -> List.member k thread.postIds)
        |> Dict.toList
        |> List.map (\( k, v ) -> v)
