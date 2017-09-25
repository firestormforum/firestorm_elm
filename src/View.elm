module View exposing (view)

import Data.Category as Category
import Data.Thread as Thread
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
    Page.Layout.view model <|
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
                viewThread categorySlug threadSlug model

            Post categorySlug threadSlug _ ->
                viewThread categorySlug threadSlug model

            NewPost categorySlug threadSlug ->
                model
                    |> Page.NewPost.query categorySlug threadSlug
                    |> Page.NewPost.view

            User username ->
                model
                    |> Page.User.query username
                    |> Page.User.view

            Login ->
                model
                    |> Page.Login.query
                    |> Page.Login.view

            NotFound ->
                text "Not found"


viewThread : Category.Slug -> Thread.Slug -> Model -> Html msg
viewThread categorySlug threadSlug model =
    model
        |> Page.Thread.query categorySlug threadSlug
        |> Page.Thread.view
