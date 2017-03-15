module View.Categories exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category
import Types.Thread as Thread
import Dict exposing (Dict)
import Routes exposing (Sitemap(..))


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
            [ a
                [ Routes.href <| CategoryR category.id ]
                [ text category.title ]
            ]
        , ol
            [ class "thread-list" ]
            (List.map viewThread category.threads)
        ]


viewThread : Thread.Model -> Html msg
viewThread thread =
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
