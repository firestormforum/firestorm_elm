module Pages.NewThread exposing (layoutConfig)

import Brand
import Element
    exposing
        ( Element
        , fill
        , height
        , row
        , spacing
        , text
        , width
        )
import Element.Background as Background
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input
import Firestorm.Scalar
import Helpers exposing (stringToId)
import Markdown
import Model exposing (Model)
import Msg exposing (..)
import Route
import Types exposing (BodyLayout(..), NewPostTab(..))


layoutConfig model categoryId =
    let
        submitButton =
            Input.button
                [ Element.alignRight
                , Brand.defaultPadding
                , Background.color Brand.primaryColor
                , Font.color Brand.primaryTextColor
                ]
                { onPress = Just (CreateThread (stringToId categoryId))
                , label = text "Submit"
                }

        appBarConfig =
            { title = Just "New Thread"
            , actions = Nothing
            , backRoute = Just (Route.Category categoryId)
            }

        scaffoldConfig =
            { appBar = Just appBarConfig
            , body =
                ( Unpadded
                , newThreadView model (stringToId categoryId)
                )
            , floatingActionButton = Just submitButton
            }
    in
    { title = "New Thread"
    , scaffoldConfig = scaffoldConfig
    }


newThreadView : Model -> Firestorm.Scalar.Id -> Element Msg
newThreadView model categoryId =
    let
        displayedView =
            case model.newThreadTab of
                Editor ->
                    newThreadFormView model.threadTitle model.threadBody

                Preview ->
                    preview model.threadTitle model.threadBody
    in
    Element.column
        [ width fill
        , height fill
        , Brand.tabbedBodyPadding
        ]
        [ newThreadTabs model.newThreadTab
        , displayedView
        ]


newThreadTabs : NewPostTab -> Element Msg
newThreadTabs newThreadTab =
    row [ width fill ]
        [ tab "Editor" (newThreadTab == Editor) (SetNewThreadTab Editor)
        , tab "Preview" (newThreadTab == Preview) (SetNewThreadTab Preview)
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


newThreadFormView : String -> String -> Element Msg
newThreadFormView title body =
    Element.column
        [ width fill
        , spacing 40
        , Brand.defaultPadding
        ]
        [ Input.text []
            { onChange = SetThreadTitle
            , text = title
            , placeholder = Nothing
            , label = Input.labelAbove [] <| Element.text "Title"
            }
        , Input.multiline
            [ height (Element.px 300) ]
            { onChange = SetThreadBody
            , text = body
            , placeholder = Nothing
            , label = Input.labelAbove [] <| Element.text "First Post"
            , spellcheck = True
            }
        ]


preview : String -> String -> Element Msg
preview title body =
    Element.el
        [ Element.paddingXY Brand.defaultPaddingAmount 0
        , Background.color Brand.cardColor
        , width fill
        , height fill
        ]
    <|
        Element.html <|
            Markdown.toHtml [] <|
                "## "
                    ++ title
                    ++ "\n"
                    ++ body
