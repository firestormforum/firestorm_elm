module Page.Category exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)
import Data.Category as Category exposing (Category)


view : Category -> Html msg
view category =
    h2 [] [ text category.title ]
