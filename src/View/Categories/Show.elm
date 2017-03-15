module View.Categories.Show exposing (view)

import Html exposing (..)
import Types.Category as Category


view : Category.Model -> Html msg
view category =
    text category.title
