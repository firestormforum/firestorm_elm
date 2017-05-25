module Page.Category exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Data.Category as Category
import Data.Thread as Thread
import Route exposing (Route(..))


view : Category.Category -> Html msg
view category =
    div [ class "page-category" ]
        [ h2 [] [ text category.title ]
        , ol [ class "threads-list" ]
            (List.map threadView threads)
        ]


threadView : Thread.Thread -> Html msg
threadView thread =
    let
        category =
            Category.mockCategory
    in
        li
            [ class "thread-item" ]
            [ a
                [ Route.href <| Thread (category.slug) thread.slug ]
                [ text thread.title ]
            ]


threads : List Thread.Thread
threads =
    List.repeat 4 Thread.mockThread
