module View exposing (view)

import Data.Category as Category exposing (Category)
import Data.Thread as Thread exposing (Thread)
import Date exposing (Date)
import Html exposing (Html, div, img, text)
import Model exposing (Model)
import Msg exposing (Msg)
import Page.Categories
import Page.Category
import Page.Home
import Page.Layout
import Page.Thread
import Route exposing (Route(..))
import Store exposing (Store)


view : Model -> Html Msg
view model =
    let
        currentDate =
            Date.fromTime model.currentTime
    in
    Page.Layout.view <|
        case model.currentRoute of
            Home ->
                Page.Home.view

            Categories ->
                model
                    |> Page.Categories.query
                    |> Page.Categories.view

            Category categorySlug ->
                model
                    |> Page.Category.query categorySlug
                    |> Page.Category.view

            Thread categorySlug threadSlug ->
                model
                    |> Page.Thread.query categorySlug threadSlug
                    |> Page.Thread.view

            NotFound ->
                text "Not found"
