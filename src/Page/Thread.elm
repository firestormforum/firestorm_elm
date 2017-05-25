module Page.Thread exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Data.Category as Category
import Data.Thread as Thread
import Route


view : Category.Category -> Thread.Thread -> Html msg
view category thread =
    div []
        [ h2 [] [ text thread.title ]
        , h3 []
            [ text "from category: "
            , a
                [ Route.href <| Route.Category category.slug ]
                [ text category.title ]
            ]
        ]
