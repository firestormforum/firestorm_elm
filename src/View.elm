module View exposing (view)

import Date exposing (Date)
import Html exposing (Html, div, img, text)
import Model exposing (Model)
import Msg exposing (Msg)
import Page.Categories
import Page.Category
import Page.Home
import Page.Layout
import Page.Login
import Page.NewPost
import Page.Thread
import Page.User
import Route exposing (Route(..))


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

            NewPost categorySlug threadSlug ->
                model
                    |> Page.NewPost.query categorySlug threadSlug
                    |> Page.NewPost.view

            User username ->
                model
                    |> Page.User.query username
                    |> Page.User.view

            Login ->
                Page.Login.view

            NotFound ->
                text "Not found"
