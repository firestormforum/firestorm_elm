module View.Categories exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Dict exposing (Dict)
import Routes exposing (Sitemap(..))


view : Dict Int User.Model -> Dict Int Category.Model -> Dict Int Thread.Model -> Html msg
view users categories threads =
    div
        [ class "page-content" ]
        [ ol [ class "category-list" ]
            (List.map (viewCategory users threads categories)
                (Dict.toList
                    (Category.roots categories)
                )
            )
        ]


viewCategory : Dict Int User.Model -> Dict Int Thread.Model -> Dict Int Category.Model -> ( Int, Category.Model ) -> Html msg
viewCategory users threads categories ( categoryId, category ) =
    let
        getThread : Int -> Thread.Model
        getThread threadId =
            threads
                |> Dict.get threadId
                |> Maybe.withDefault Thread.new

        catThreads : List Thread.Model
        catThreads =
            category.threadIds
                |> List.map getThread

        getCategory : Int -> Category.Model
        getCategory categoryId =
            categories
                |> Dict.get categoryId
                |> Maybe.withDefault Category.new

        catChildren : Dict Int Category.Model
        catChildren =
            category.childrenIds
                |> List.map getCategory
                |> List.map (\c -> ( c.id, c ))
                |> Dict.fromList
    in
        li
            []
            [ h2
                [ class "title" ]
                [ a
                    [ Routes.href <| CategoryR (Category.finder category) ]
                    [ text category.title ]
                ]
            , ol
                [ class "category-list" ]
                (List.map (viewCategory users threads categories)
                    (Dict.toList
                        catChildren
                    )
                )
            , ol
                [ class "thread-list" ]
                (List.map (viewThread users) catThreads)
            ]


viewThread : Dict Int User.Model -> Thread.Model -> Html msg
viewThread users thread =
    let
        user =
            users
                |> Dict.get thread.userId
                |> Maybe.withDefault User.new
    in
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
                        [ text <| "@" ++ user.username ]
                    ]
                ]
            ]
