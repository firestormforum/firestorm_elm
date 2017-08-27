module Page.User exposing (query, view)

import Data.Post as Post exposing (Post)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, href, id, src)
import Html.Keyed as Keyed
import Model exposing (Model)
import Page.Component exposing (postView, timeAbbr)
import Store


type alias ViewModel =
    { user : Maybe User
    , currentDate : Date
    , posts : List Post
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
    in
    { user = user
    , currentDate = Date.fromTime model.currentTime
    , posts = posts
    }


view : ViewModel -> Html msg
view { currentDate, user, posts } =
    case user of
        Nothing ->
            text "No such user"

        Just user ->
            viewUser currentDate
                user
                posts


viewUser : Date -> User -> List Post -> Html msg
viewUser currentDate user posts =
    div []
        [ userDetails currentDate user
        , userPosts currentDate user posts
        ]


userDetails : Date -> User -> Html msg
userDetails currentDate user =
    div [ class "user-details" ]
        [ img
            [ src user.avatarUrl
            , class "user-avatar"
            ]
            []
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


userPosts : Date -> User -> List Post -> Html msg
userPosts currentDate user posts =
    Keyed.ol
        [ class "user-posts post-list" ]
    <|
        List.map
            (\( postUser, post ) ->
                ( "post-" ++ Post.idToString post.id
                , postView currentDate ( postUser, post )
                )
            )
            (List.map (\p -> ( Just user, p )) posts)
