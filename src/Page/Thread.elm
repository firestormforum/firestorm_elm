module Page.Thread exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, href)
import Html.Attributes.Extra exposing (innerHtml)
import Json.Encode
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
    , user : Maybe User
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

        user =
            case posts of
                firstPost :: _ ->
                    model.store
                        |> Store.getUser firstPost.userId

                _ ->
                    Nothing
    in
    { category = category
    , thread = thread
    , posts = posts
    , user = user
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { currentDate, posts, category, thread, user } =
    case category of
        Nothing ->
            text "No such category"

        Just category ->
            case thread of
                Nothing ->
                    text "No such thread"

                Just thread ->
                    case user of
                        Just user ->
                            viewThread currentDate
                                category
                                thread
                                posts
                                user

                        Nothing ->
                            text "No user"


viewThread : Date -> Category -> Thread -> List Post -> User -> Html msg
viewThread currentDate category thread posts user =
    div []
        [ div [ class "thread-header" ]
            [ h2 []
                [ text thread.title ]
            , itemMetadata
                [ a [ href "#", class "username" ]
                    [ text <| "@" ++ User.usernameToString user.username ]
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
        [ div
            [ class "body"
            , innerHtml post.bodyHtml
            ]
            []
        ]
