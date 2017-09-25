module Page.Component
    exposing
        ( badgeBlock
        , categoryHeader
        , categoryLink
        , categoryPills
        , userPostView
        , userPostList
        , itemMetadata
        , pageHeader
        , postItemActions
        , postList
        , postView
        , renderOEmbeds
        , threadHeader
        , threadLink
        , timeAbbr
        , userAvatar
        , userLink
        )

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Date.Distance as Distance
import Date.Distance.I18n.En
import Date.Distance.Types
import Html exposing (..)
import Html.Attributes
    exposing
        ( attribute
        , class
        , classList
        , href
        , id
        , src
        , title
        )
import Html.Attributes.Extra exposing (innerHtml)
import Html.Keyed as Keyed
import Route


locale : Date.Distance.Types.Locale
locale =
    Date.Distance.I18n.En.locale { addSuffix = True }


dateDiffInWords : Date.Date -> Date.Date -> String
dateDiffInWords =
    let
        defaultConfig =
            Distance.defaultConfig
    in
        Distance.inWordsWithConfig
            { defaultConfig | locale = locale }


timeAbbr : Date.Date -> Date.Date -> Html msg
timeAbbr currentDate date =
    abbr
        [ class "time"
        , title <| toString date
        ]
        [ text <| dateDiffInWords currentDate date ]


categoryLink : Category.Category -> Html msg
categoryLink category =
    a
        [ Route.href <| Route.Category category.slug ]
        [ text category.title ]


threadLink : Category.Category -> Thread.Thread -> Html msg
threadLink category thread =
    a
        [ Route.href <| Route.Thread category.slug thread.slug
        , class "title"
        ]
        [ text thread.title ]


userLink : Maybe User -> Html msg
userLink maybeUser =
    case maybeUser of
        Just user ->
            a
                [ Route.href <| Route.User user.username
                , class "user-name"
                ]
                [ text <| User.usernameToString user.username ]

        Nothing ->
            div [] []


userAvatar : User -> Html msg
userAvatar user =
    img
        [ src user.avatarUrl
        , class "user-avatar"
        ]
        []


itemMetadata : List (Html msg) -> Html msg
itemMetadata =
    div
        [ class "item-metadata" ]


pageHeader : List (Html msg) -> Html msg
pageHeader =
    div
        [ class "page-header" ]


categoryHeader : List (Html msg) -> Html msg
categoryHeader =
    div
        [ class "category-header" ]


threadHeader : List (Html msg) -> Html msg
threadHeader =
    div
        [ class "thread-header" ]


badgeBlock : Bool -> Int -> Html msg
badgeBlock highlighted count =
    div
        [ classList [ ( "badge-block", True ), ( "-highlight", highlighted ) ] ]
        [ text <| toString count ]


categoryPills : List Category.Category -> Html msg
categoryPills categories =
    let
        categoryItem : Category.Category -> Html msg
        categoryItem category =
            li
                [ class "category -color-20" ]
                [ categoryLink category ]
    in
        ul
            [ class "category-pill" ]
            (List.map categoryItem categories)


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


postItemActions : Category -> Thread -> Post -> Html msg
postItemActions category thread post =
    div
        [ class "post-item-actions" ]
        [ div [ class "spacer" ] []
        , ul [ class "actions" ]
            [ li
                [ class "link" ]
                [ a
                    [ Route.href <| Route.Post category.slug thread.slug post.id
                    ]
                    [ i [ class "fa fa-link" ] [] ]
                ]
            , li [ class "reply" ]
                [ a
                    [ Route.href <| Route.NewPost category.slug thread.slug ]
                    [ i [ class "fa fa-reply" ] [] ]
                ]
            ]
        ]


postView : Date -> Category -> Thread -> ( Maybe User, Post ) -> Html msg
postView currentDate category thread ( maybeUser, post ) =
    let
        avatarUrl =
            case maybeUser of
                Nothing ->
                    "https://api.adorable.io/avatars/256/nobody@adorable.png"

                Just user ->
                    user.avatarUrl

        title =
            div
                [ class "item-metadata" ]
                [ div
                    [ class "avatar" ]
                    [ img
                        [ src avatarUrl
                        , class "user-avatar -borderless"
                        ]
                        []
                    ]
                , userLink maybeUser
                , timeAbbr currentDate post.updatedAt
                ]
    in
        abstractPostView title currentDate category thread ( maybeUser, post )


userPostView : Date -> Category -> Thread -> ( Maybe User, Post ) -> Html msg
userPostView currentDate category thread ( maybeUser, post ) =
    let
        avatarUrl =
            case maybeUser of
                Nothing ->
                    "https://api.adorable.io/avatars/256/nobody@adorable.png"

                Just user ->
                    user.avatarUrl

        title =
            div
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
                    [ class "headline"
                    , Route.href <|
                        Route.Thread category.slug
                            thread.slug
                    ]
                    [ text thread.title ]
                , timeAbbr currentDate post.updatedAt
                ]
    in
        abstractPostView title currentDate category thread ( maybeUser, post )


abstractPostView : Html msg -> Date -> Category -> Thread -> ( Maybe User, Post ) -> Html msg
abstractPostView title currentDate category thread ( maybeUser, post ) =
    let
        avatarUrl =
            case maybeUser of
                Nothing ->
                    "https://api.adorable.io/avatars/256/nobody@adorable.png"

                Just user ->
                    user.avatarUrl
    in
        li
            [ class "post-item"
            , id ("post-" ++ Post.idToString post.id)
            ]
            ([ title
             , div
                [ class "body"
                , innerHtml post.bodyHtml
                ]
                []
             ]
                ++ renderOEmbeds post.oEmbeds
                ++ [ postItemActions category thread post ]
            )


postList : Date -> List ( Maybe User, ( Category, Thread, Post ) ) -> Html msg
postList currentDate postsWithUsers =
    abstractPostList postView currentDate postsWithUsers


userPostList : Date -> List ( Maybe User, ( Category, Thread, Post ) ) -> Html msg
userPostList currentDate postsWithUsers =
    abstractPostList userPostView
        currentDate
        postsWithUsers


abstractPostList :
    (Date
     -> Category
     -> Thread
     -> ( Maybe User, Post )
     -> Html msg
    )
    -> Date
    -> List ( Maybe User, ( Category, Thread, Post ) )
    -> Html msg
abstractPostList viewFun currentDate postsWithUsers =
    Keyed.ol
        [ class "post-list" ]
        (List.map
            (\( postUser, ( category, thread, post ) ) ->
                ( "post-" ++ Post.idToString post.id
                , viewFun currentDate category thread ( postUser, post )
                )
            )
            postsWithUsers
        )
