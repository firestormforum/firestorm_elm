module Pages.NewPost exposing (layoutConfig)

import Brand
import Element exposing (Element, alignRight, centerY, column, el, fill, height, padding, rgb255, row, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input
import Firestorm.Scalar
import Html.Events
import Markdown
import Model exposing (Model)
import Msg exposing (Msg(..))
import Route exposing (Route(..))
import Types exposing (BodyLayout(..), NewPostTab(..))


layoutConfig model categoryId threadId =
    let
        submitButton =
            Element.Input.button
                [ Element.alignRight
                , Brand.defaultPadding
                , Background.color Brand.primaryColor
                , Font.color Brand.primaryTextColor
                ]
                { onPress = Just (CreatePost (Firestorm.Scalar.Id categoryId) (Firestorm.Scalar.Id threadId))
                , label = text "Submit"
                }

        appBarConfig =
            { title = Just "New Post"
            , actions = Nothing
            , backRoute = Just (Route.Thread categoryId threadId)
            }

        scaffoldConfig =
            { appBar = Just appBarConfig
            , body =
                ( Unpadded
                , newPostView model (Firestorm.Scalar.Id categoryId) (Firestorm.Scalar.Id threadId)
                )
            , floatingActionButton = Just submitButton
            }
    in
    { title = "New Post"
    , scaffoldConfig = scaffoldConfig
    }


newPostView : Model -> Firestorm.Scalar.Id -> Firestorm.Scalar.Id -> Element Msg
newPostView model categoryId threadId =
    let
        displayedView =
            case model.newPostTab of
                Editor ->
                    newPostFormView model.postBody

                Preview ->
                    preview model.postBody
    in
    Element.column
        [ width fill
        , height fill
        , Brand.tabbedBodyPadding
        ]
        [ newPostTabs model.newPostTab
        , displayedView
        ]


newPostTabs : NewPostTab -> Element Msg
newPostTabs newPostTab =
    row [ width fill ]
        [ tab "Editor" (newPostTab == Editor) (SetNewPostTab Editor)
        , tab "Preview" (newPostTab == Preview) (SetNewPostTab Preview)
        ]


tab : String -> Bool -> Msg -> Element Msg
tab label isActive msg =
    let
        backgroundColor =
            case isActive of
                True ->
                    Brand.primaryColorBolder

                False ->
                    Brand.primaryColor
    in
    Element.el
        [ width fill
        , Element.padding 20
        , Background.color backgroundColor
        , Font.color Brand.primaryTextColor
        , Events.onClick msg
        , Element.pointer
        ]
    <|
        text label


newPostFormView : String -> Element Msg
newPostFormView value =
    Element.Input.multiline
        [ height fill ]
        { onChange = SetPostBody
        , text = value
        , placeholder = Nothing
        , label = Element.Input.labelHidden "Post"
        , spellcheck = True
        }


preview : String -> Element Msg
preview body =
    Element.el
        [ Element.paddingXY Brand.defaultPaddingAmount 0
        , Background.color Brand.cardColor
        , width fill
        , height fill
        ]
    <|
        Element.html <|
            Markdown.toHtml [] body
