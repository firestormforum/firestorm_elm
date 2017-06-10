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
                model.store
                    |> Store.categories
                    |> Page.Categories.view currentDate

            Category categorySlug ->
                model.store
                    |> Store.getCategoryBySlug categorySlug
                    |> Maybe.map (Page.Category.view currentDate)
                    |> Maybe.withDefault (text "No such category")

            Thread categorySlug threadSlug ->
                model.store
                    |> Store.getCategoryBySlug categorySlug
                    |> Maybe.map (threadView currentDate threadSlug model.store)
                    |> Maybe.withDefault (text "No such category")

            NotFound ->
                text "Not found"


threadView : Date -> Thread.Slug -> Store -> Category -> Html Msg
threadView currentDate threadSlug store category =
    let
        doView : Store -> Thread -> Html Msg
        doView store thread =
            Page.Thread.view currentDate
                (Store.posts thread.id store)
                category
                thread
    in
    store
        |> Store.getThreadBySlug threadSlug
        |> Maybe.map (doView store)
        |> Maybe.withDefault (text "No such thread")
