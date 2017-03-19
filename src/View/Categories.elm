module View.Categories exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Types.Store as Store
import Dict exposing (Dict)
import Routes exposing (Sitemap(..))


view : Store.Model -> Html msg
view store =
    div
        [ class "layout-content" ]
        [ div
            [ class "page-content" ]
            [ ol [ class "category-list" ]
                (List.map (viewCategory store)
                    (Dict.toList
                        (Category.roots store.categories)
                    )
                )
            ]
        ]


viewCategory : Store.Model -> ( Int, Category.Model ) -> Html msg
viewCategory store ( categoryId, category ) =
    let
        getThread : Int -> Thread.Model
        getThread threadId =
            store.threads
                |> Dict.get threadId
                |> Maybe.withDefault Thread.new

        catThreads : List Thread.Model
        catThreads =
            category.threadIds
                |> List.map getThread

        getCategory : Int -> Category.Model
        getCategory categoryId =
            store.categories
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
                (List.map (viewCategory store)
                    (Dict.toList
                        catChildren
                    )
                )
            , ol
                [ class "thread-list" ]
                (List.map (viewThread store category) catThreads)
            ]


viewThread : Store.Model -> Category.Model -> Thread.Model -> Html msg
viewThread store category thread =
    let
        user =
            store.users
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
                        [ Routes.href <| ThreadR (Category.finder category) (Thread.finder thread)
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
