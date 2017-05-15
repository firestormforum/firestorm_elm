module View exposing (view)

import Model exposing (Model)
import Msg exposing (Msg)
import Html exposing (..)
import Html.Attributes exposing (..)
import View.Layouts.App exposing (view)
import View.Categories
import View.Categories.Show
import View.Threads.Show
import Types.Store as Store
import Types.User as User
import Routes exposing (Sitemap(..))
import Dict


view : Model -> Html Msg
view model =
    View.Layouts.App.view <|
        [ page model ]


page : Model -> Html Msg
page model =
    let
        findCategory =
            Store.findCategory model.store

        findThread =
            Store.findThread model.store
    in
        case model.route of
            HomeR ->
                View.Categories.view model.store

            CategoryR categoryIdOrSlug ->
                let
                    categoryId =
                        getCategoryId categoryIdOrSlug model
                in
                    case findCategory categoryId of
                        Just category ->
                            View.Categories.Show.view model.store category

                        Nothing ->
                            text "404"

            ThreadR categoryIdOrSlug threadIdOrSlug ->
                let
                    categoryId =
                        getCategoryId categoryIdOrSlug model

                    threadId =
                        getThreadId threadIdOrSlug model

                    maybeCategory =
                        findCategory categoryId

                    maybeThread =
                        findThread threadId
                in
                    case ( maybeCategory, maybeThread ) of
                        ( Just category, Just thread ) ->
                            let
                                user =
                                    model.store.users
                                        |> Dict.get thread.userId
                                        |> Maybe.withDefault User.new
                            in
                                View.Threads.Show.view model.store user thread

                        _ ->
                            text "404"

            NotFoundR ->
                text "404"


getCategoryId : String -> Model -> Int
getCategoryId categoryIdOrSlug model =
    case String.toInt categoryIdOrSlug of
        Ok categoryId ->
            categoryId

        Err _ ->
            model.store.categories
                |> Dict.filter (\k v -> v.slug == categoryIdOrSlug)
                |> Dict.toList
                |> List.map (\( k, v ) -> k)
                |> List.head
                |> Maybe.withDefault -1


getThreadId : String -> Model -> Int
getThreadId threadIdOrSlug model =
    case String.toInt threadIdOrSlug of
        Ok threadId ->
            threadId

        Err _ ->
            model.store.threads
                |> Dict.filter (\k v -> v.slug == threadIdOrSlug)
                |> Dict.toList
                |> List.map (\( k, v ) -> k)
                |> List.head
                |> Maybe.withDefault -1
