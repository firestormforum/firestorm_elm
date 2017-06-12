module Page.Thread exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Page.Component
    exposing
        ( categoryLink
        , categoryPills
        , itemMetadata
        , timeAbbr
        )
import Store


type alias ViewModel =
    { category : Maybe Category
    , thread : Maybe Thread
    , posts : List Post
    , currentDate : Date
    }


query : Category.Slug -> Thread.Slug -> Model -> ViewModel
query categorySlug threadSlug model =
    let
        category =
            model.store
                |> Store.getCategoryBySlug categorySlug

        thread =
            model.store
                |> Store.getThreadBySlug threadSlug

        posts =
            thread
                |> Maybe.map (\t -> Store.posts t.id model.store)
                |> Maybe.withDefault []
    in
    { category = category
    , thread = thread
    , posts = posts
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { currentDate, posts, category, thread } =
    case category of
        Nothing ->
            text "No such category"

        Just category ->
            case thread of
                Nothing ->
                    text "No such thread"

                Just thread ->
                    viewThread currentDate category thread posts


viewThread : Date -> Category -> Thread -> List Post -> Html msg
viewThread currentDate category thread posts =
    div []
        [ div [ class "thread-header" ]
            [ h2 []
                [ text thread.title ]
            , itemMetadata
                [ a [ href "#", class "username" ]
                    [ text "@someuser" ]
                , timeAbbr currentDate thread.updatedAt
                ]
            , itemMetadata
                [ categoryPills [ category ] ]
            ]
        , ol
            [ class "post-list" ]
            (List.map (postView currentDate) posts)
        ]


postView : Date -> Post -> Html msg
postView currentDate post =
    li
        [ class "post-item" ]
        [ Post.bodyToHtml
            post.body
            [ class "body" ]
        ]
