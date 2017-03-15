module View exposing (view)

import Model exposing (Model)
import Msg exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import View.Layouts.App exposing (view)
import View.Categories


view : Model -> Html Msg
view model =
    View.Layouts.App.view <|
        [ View.Categories.view model.categories ]
