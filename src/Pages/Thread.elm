module Pages.Thread exposing (fetchDataFor, layoutConfig)

import Api
import Brand
import Element
    exposing
        ( Element
        , column
        , el
        , fill
        , height
        , row
        , text
        , width
        )
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Input as Input
import Firestorm.Scalar
import Helpers exposing (basicDateFormat, idToString)
import Markdown
import Msg exposing (Msg(..))
import Route
import Time
import Types exposing (BodyLayout(..), Post, Thread)


fetchDataFor : String -> Firestorm.Scalar.Id -> Cmd Msg
fetchDataFor endpoint threadId =
    Api.getThread endpoint threadId


layoutConfig model categoryId =
    { title = "Forums"
    , scaffoldConfig =
        { appBar =
            Just
                { title = Just "Thread"
                , backRoute = Just (Route.Category categoryId)
                , actions = Nothing
                }
        , floatingActionButton =
        model.thread
            |> Maybe.map (newPostButton categoryId)
        , body =
            ( Padded
            , model.thread
                |> Maybe.map threadShow
                |> Maybe.withDefault (text "Loading...")
            )
        }
    }

newPostButton categoryId thread =
    Input.button
        [ Brand.defaultPadding
        , Background.color Brand.primaryColor
        , Font.color Brand.primaryTextColor
        ]
        { onPress = Just (RoutePushed (Route.NewPost categoryId (idToString thread.id)))
        , label = text "New Post"
        }


threadShow thread =
    column
        [ width fill
        ]
    <|
        List.map postListItem (List.reverse thread.posts)


postListItem : Post -> Element Msg
postListItem post =
    row
        [ Element.spacing 10
        , Element.paddingXY 0 10
        , width fill
        ]
        [ Element.image
            [ width (Element.px 40)
            , Border.rounded 20
            , Element.clip
            , Element.alignTop
            , Element.moveDown 10
            ]
            { src = post.user.avatarUrl
            , description = "Avatar"
            }
        , Element.column
            [ width fill
            , Brand.defaultPadding
            , Background.color Brand.cardColor
            , Border.rounded 10
            , Border.shadow
                { offset = ( 1, 1 )
                , size = 4
                , blur = 10
                , color = Brand.shadowColor
                }
            ]
            [ Element.row [ width fill ]
                [ el
                    [ Element.alignTop
                    , Font.bold
                    ]
                  <|
                    text post.user.name
                , el
                    [ Element.alignRight
                    , Font.color Brand.subtleTextColor
                    ]
                  <|
                    text (basicDateFormat Time.utc post.insertedAt)
                ]
            , Element.paragraph
                []
              <|
                [ Element.html <|
                    Markdown.toHtml [] post.body
                ]
            ]
        ]
