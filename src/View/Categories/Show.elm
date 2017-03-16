module View.Categories.Show exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category
import Types.User as User
import Types.Thread as Thread
import Dict exposing (Dict)


view : Dict Int User.Model -> Dict Int Thread.Model -> Category.Model -> Html msg
view users threads category =
    div
        [ class "layout-content" ]
        [ div
            [ class "category-header" ]
            [ h2 [] [ text category.title ]
            , div [ class "spacer" ] []
            , ul [ class "actions" ]
                [ li []
                    [ a [ class "pure-button", href "#" ]
                        [ i [ class "fa fa-plus" ] []
                        , text "New Category"
                        ]
                    ]
                , li []
                    [ a [ class "pure-button pure-button-primary", href "#" ]
                        [ i [ class "fa fa-plus" ] []
                        , text "New Thread"
                        ]
                    ]
                ]
            ]
        , h3 [] [ text "Threads" ]
        , ol [ class "thread-list" ]
            (List.map (threadListItem users) (threadsFor threads category))
        ]


threadsFor : Dict Int Thread.Model -> Category.Model -> List Thread.Model
threadsFor threads category =
    threads
        |> Dict.filter (\k v -> List.member k category.threadIds)
        |> Dict.toList
        |> List.map (\( k, v ) -> v)


threadListItem : Dict Int User.Model -> Thread.Model -> Html msg
threadListItem users thread =
    let
        user =
            users
                |> Dict.get thread.userId
                |> Maybe.withDefault (User.new)
    in
        li
            [ class "thread-list-item" ]
            [ div [ class "details" ]
                [ div [ class "summary" ]
                    [ a [ href "#", class "title" ] [ text thread.title ]
                    , a [ href "#", class "user-name" ] [ text user.username ]
                    ]
                ]
            ]
