module Page.Category exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Page.Component exposing (badgeBlock, threadLink, timeAbbr, userLink)
import Store exposing (Store)


type alias ViewModel =
    { category : Maybe Category
    , threads : List ( Thread, Maybe User )
    , currentDate : Date
    }


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
                |> List.map (\t -> ( t, Store.getUserForThread t.id model.store ))
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
                [ h2 [] [ text category.title ]
                , ol [ class "thread-list" ]
                    (List.map (threadView currentDate category) threads)
                ]


threadView : Date -> Category -> ( Thread, Maybe User ) -> Html msg
threadView currentDate category thread =
    li
        []
        [ details currentDate category thread
        , supplemental thread
        ]


details : Date -> Category -> ( Thread, Maybe User ) -> Html msg
details currentDate category ( thread, maybeUser ) =
    div [ class "details" ]
        [ div [ class "summary" ]
            [ threadLink category thread
            , userLink maybeUser
            ]
        , div [ class "metadata" ]
            [ timeAbbr currentDate thread.updatedAt ]
        ]


supplemental : ( Thread, Maybe User ) -> Html msg
supplemental ( thread, _ ) =
    div [ class "supplemental" ]
        [ badgeBlock True 3 ]
