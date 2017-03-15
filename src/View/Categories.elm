module View.Categories exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category
import Types.Thread as Thread
import Dict exposing (Dict)


view : List Category.Model -> Html msg
view categories =
    div
        [ class "page-content" ]
        [ ol [ class "category-list" ]
            (List.map viewCategory categories)
        ]


viewCategory : Category.Model -> Html msg
viewCategory category =
    li
        []
        [ h2
            [ class "title" ]
            [ a [ href "#" ] [ text category.title ] ]
        , ol
            [ class "thread-list" ]
            (List.map viewThread (Dict.toList category.threads))
        ]


viewThread : ( Int, Thread.Model ) -> Html msg
viewThread ( index, thread ) =
    li
        [ class "thread-list-item" ]
        [ div
            [ class "details" ]
            [ div
                [ class "summary" ]
                [ a
                    [ href "#"
                    , class "title"
                    ]
                    [ text thread.title ]
                , a
                    [ href "#"
                    , class "user-name"
                    ]
                    [ text <| "@" ++ thread.user.username ]
                ]
            ]
        ]
