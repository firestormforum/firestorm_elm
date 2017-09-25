module Page.User exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, href, id, src)
import Maybe.Extra as Maybe
import Model exposing (Model)
import Page.Component
    exposing
        ( postList
        , userPostView
        , timeAbbr
        , userAvatar
        , userPostList
        )
import Store exposing (Store)


type alias ViewModel =
    { user : Maybe User
    , currentDate : Date
    , posts : List ( Category, Thread, Post )
    }


query : User.Username -> Model -> ViewModel
query username model =
    let
        user =
            model.store
                |> Store.getUserByUsername username

        posts =
            case user of
                Nothing ->
                    []

                Just user ->
                    Store.postsForUser user.id model.store

        postsWithCategoriesAndThreads =
            posts
                |> List.map (getPostWithCategoryAndThread model.store)
                |> Maybe.values
    in
        { user = user
        , currentDate = Date.fromTime model.currentTime
        , posts = postsWithCategoriesAndThreads
        }


getPostWithCategoryAndThread : Store -> Post -> Maybe ( Category, Thread, Post )
getPostWithCategoryAndThread store post =
    let
        maybeThread =
            Store.getThread post.threadId store

        maybeCategory =
            case maybeThread of
                Just thread ->
                    Store.getCategory thread.categoryId store

                Nothing ->
                    Nothing
    in
        case ( maybeThread, maybeCategory ) of
            ( Just thread, Just category ) ->
                Just ( category, thread, post )

            _ ->
                Nothing


view : ViewModel -> Html msg
view { currentDate, user, posts } =
    case user of
        Nothing ->
            text "No such user"

        Just user ->
            viewUser currentDate
                user
                posts


viewUser : Date -> User -> List ( Category, Thread, Post ) -> Html msg
viewUser currentDate user posts =
    div []
        [ userDetails currentDate user
        , userPostList currentDate (List.map (\p -> ( Just user, p )) posts)
        ]


userDetails : Date -> User -> Html msg
userDetails currentDate user =
    div [ class "user-details" ]
        [ userAvatar user
        , div
            [ class "contact" ]
            [ h1 [ class "username" ]
                [ text <| User.usernameToString user.username ]
            , h3
                [ class "name" ]
                [ text user.name ]
            ]
        , hr [] []
        , div
            [ class "meta" ]
            [ ul []
                [ li []
                    [ strong [] [ text "Joined" ]
                    , text " "
                    , text "something"
                    ]
                , li []
                    [ strong [] [ text "Last post" ]
                    , text " "
                    , text "something"
                    ]
                , li []
                    [ strong [] [ text "Last seen" ]
                    , text " "
                    , text "something"
                    ]
                ]
            ]
        ]
