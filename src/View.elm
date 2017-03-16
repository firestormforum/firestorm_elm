module View exposing (view)

import Model exposing (Model)
import Msg exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import View.Layouts.App exposing (view)
import View.Categories
import View.Categories.Show
import Routes exposing (Sitemap(..))


view : Model -> Html Msg
view model =
    View.Layouts.App.view <|
        [ page model ]


page : Model -> Html Msg
page model =
    case model.route of
        HomeR ->
            View.Categories.view model.users model.categories model.threads

        CategoryR categoryId ->
            -- find the category
            -- show the category
            case Model.findCategory model categoryId of
                Just category ->
                    View.Categories.Show.view category

                Nothing ->
                    text "404"

        NotFoundR ->
            text "404"
