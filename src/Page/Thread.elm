module Page.Thread exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, href, id, src)
import Html.Attributes.Extra exposing (innerHtml)
import Html.Keyed as Keyed
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
    , postsWithUsers : List ( Maybe User, Post )
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

        postsWithUsers =
            posts
                |> List.map
                    (\post ->
                        ( Store.getUser post.userId model.store
                        , post
                        )
                    )

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
    , postsWithUsers = postsWithUsers
    , user = user
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { currentDate, postsWithUsers, category, thread, user } =
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
                                postsWithUsers
                                user

                        Nothing ->
                            text "No user"


viewThread : Date -> Category -> Thread -> List ( Maybe User, Post ) -> User -> Html msg
viewThread currentDate category thread postsWithUsers user =
    div []
        [ div [ class "thread-header" ]
            [ div [ class "split" ]
                [ h2 []
                    [ text thread.title ]
                , categoryPills [ category ]
                ]
            ]
        , Keyed.ol
            [ class "post-list" ]
            (List.map
                (\( postUser, post ) ->
                    ( "post-" ++ toString post.id
                    , postView currentDate ( postUser, post )
                    )
                )
                postsWithUsers
            )
        ]


postView : Date -> ( Maybe User, Post ) -> Html msg
postView currentDate ( maybeUser, post ) =
    let
        ( avatarUrl, username ) =
            case maybeUser of
                Nothing ->
                    ( "https://api.adorable.io/avatars/256/nobody@adorable.png"
                    , "anon"
                    )

                Just user ->
                    ( user.avatarUrl
                    , User.usernameToString user.username
                    )
    in
    li
        [ class "post-item"
        , id ("post-" ++ toString post.id)
        ]
        ([ div
            [ class "item-metadata" ]
            [ div
                [ class "avatar" ]
                [ img
                    [ src avatarUrl
                    , class "user-avatar -borderless"
                    ]
                    []
                ]
            , a
                [ href "#"
                , class "username"
                ]
                [ text <| "@" ++ username
                ]
            , timeAbbr currentDate post.updatedAt
            ]
         , div
            [ class "body"
            , innerHtml post.bodyHtml
            ]
            []
         ]
            ++ renderOEmbeds post.oEmbeds
            ++ [ postItemActions post ]
        )


postItemActions : Post -> Html msg
postItemActions post =
    div
        [ class "post-item-actions" ]
        [ div [ class "spacer" ] []
        , ul [ class "actions" ]
            [ li
                [ class "link" ]
                [ a
                    [ href "#" ]
                    [ i [ class "fa fa-link" ] [] ]
                ]
            , li [ class "reply" ]
                [ a [ href "#" ]
                    [ i [ class "fa fa-reply" ] [] ]
                ]
            ]
        ]


renderOEmbeds : List ( String, String ) -> List (Html msg)
renderOEmbeds oEmbeds =
    List.map renderOEmbed oEmbeds


renderOEmbed : ( String, String ) -> Html msg
renderOEmbed ( url, html ) =
    div
        [ class "oembed-for"
        , attribute "data-oembed-url" url
        , innerHtml html
        ]
        []
