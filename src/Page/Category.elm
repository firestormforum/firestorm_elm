module Page.Category exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Thread as Thread exposing (Thread)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Page.Component exposing (badgeBlock, threadLink, timeAbbr, userLink)
import Route exposing (Route(..))
import Store exposing (Store)


type alias ViewModel =
    { category : Maybe Category
    , threads : List Thread
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


threadView : Date -> Category -> Thread -> Html msg
threadView currentDate category thread =
    li
        []
        [ details currentDate category thread
        , supplemental thread
        ]


details : Date -> Category -> Thread -> Html msg
details currentDate category thread =
    div [ class "details" ]
        [ div [ class "summary" ]
            [ threadLink category thread
            , userLink "@username"
            ]
        , div [ class "metadata" ]
            [ timeAbbr currentDate thread.updatedAt ]
        ]


supplemental : Thread -> Html msg
supplemental thread =
    div [ class "supplemental" ]
        [ badgeBlock True 3 ]
