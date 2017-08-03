module Page.Category exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Page.Component exposing (badgeBlock, categoryLink, threadLink, timeAbbr, userLink)
import Store exposing (Store)
import String.Extra


type alias ViewModel =
    { category : Maybe Category
    , threads : List ( Thread, Maybe User, Maybe Post )
    , currentDate : Date
    }


getThreadAndUserAndPost : Thread -> Model -> ( Thread, Maybe User, Maybe Post )
getThreadAndUserAndPost thread model =
    let
        posts =
            Store.posts thread.id model.store

        firstPost =
            List.head posts
    in
    ( thread
    , Store.getUserForThread thread.id model.store
    , firstPost
    )


query : Category.Slug -> Model -> ViewModel
query categorySlug model =
    let
        category =
            model.store
                |> Store.getCategoryBySlug categorySlug

        threads =
            category
                |> Maybe.map (\c -> Store.threads c.id model.store)
                |> Maybe.withDefault []
                |> List.map (\t -> getThreadAndUserAndPost t model)
    in
    { category = category
    , threads = threads
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { category, threads, currentDate } =
    case category of
        Nothing ->
            text "No such category"

        Just category ->
            div [ class "page-category" ]
                [ div
                    [ class "category-header" ]
                    [ h2 [] [ categoryLink category ]
                    , div [ class "spacer" ] []
                    , ul [ class "actions" ]
                        [ li []
                            [ a
                                [ class "pure-button button-primary"
                                , href "#"
                                ]
                                [ i [ class "fa fa-plus" ] []
                                , text "New Thread"
                                ]
                            ]
                        ]
                    ]
                , ol [ class "thread-list" ]
                    (List.map (threadView currentDate category) threads)
                ]


threadView : Date -> Category -> ( Thread, Maybe User, Maybe Post ) -> Html msg
threadView currentDate category thread =
    li
        [ class "thread-list-item" ]
        [ details currentDate category thread
        , supplemental thread
        , preview thread
        ]


preview : ( Thread, Maybe User, Maybe Post ) -> Html msg
preview ( _, _, maybePost ) =
    let
        body =
            maybePost
                |> Maybe.map (.body >> Post.bodyToString)
                |> Maybe.withDefault ""
    in
    div
        [ class "preview" ]
        [ text (body |> String.Extra.softEllipsis 139) ]


details : Date -> Category -> ( Thread, Maybe User, Maybe Post ) -> Html msg
details currentDate category ( thread, maybeUser, _ ) =
    div [ class "details" ]
        [ div [ class "summary" ]
            [ ul
                [ class "category-pill" ]
                [ li
                    [ class "category" ]
                    [ categoryLink category ]
                ]
            , threadLink category thread
            , userLink maybeUser
            ]
        , div [ class "metadata" ]
            [ timeAbbr currentDate thread.updatedAt ]
        ]


supplemental : ( Thread, Maybe User, Maybe Post ) -> Html msg
supplemental ( thread, _, _ ) =
    div [ class "supplemental" ]
        [ badgeBlock True 3 ]
