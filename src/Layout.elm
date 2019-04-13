module Layout exposing (view)

import Brand
import Browser
import Color
import Element
    exposing
        ( Element
        , column
        , el
        , fill
        , height
        , inFront
        , rgb
        , row
        , text
        , width
        )
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Html exposing (Html)
import Markdown
import Material.Icons.Navigation
import Model exposing (Model)
import Msg exposing (Msg(..))
import Pages.Categories
import Pages.Category
import Pages.FourOhFour
import Pages.Login
import Pages.NewPost
import Pages.NewThread
import Pages.Thread
import Route
import Types exposing (..)


type alias LayoutConfig =
    { title : String
    , scaffoldConfig : ScaffoldConfig
    }


type alias ScaffoldConfig =
    { appBar : Maybe (AppBarConfig Msg)
    , body : ( BodyLayout, Element Msg )
    , floatingActionButton : Maybe (Element Msg)
    }


type alias AppBarConfig msg =
    { title : Maybe String
    , actions : Maybe (List (Element msg))
    , backRoute : Maybe Route.Route
    }


scaffold : ScaffoldConfig -> Html Msg
scaffold config =
    let
        body =
            appBody config.body

        floatingActionButtonOptions =
            case config.floatingActionButton of
                Nothing ->
                    []

                Just floatingActionButton ->
                    [ Element.inFront
                        (el
                            [ Element.alignRight
                            , Element.alignBottom
                            , Element.moveUp 40
                            , Element.moveLeft 40
                            ]
                            floatingActionButton
                        )
                    ]

        appBarOptions =
            case config.appBar of
                Nothing ->
                    []

                Just appBarConfig ->
                    [ Element.inFront (appBar appBarConfig) ]

        layoutOptions =
            floatingActionButtonOptions ++ appBarOptions
    in
    Element.layout
        layoutOptions
    <|
        column
            [ width fill
            , height fill
            ]
        <|
            [ body ]


view : Model -> Browser.Document Msg
view model =
    model
        |> layoutConfig
        |> viewLayout


viewLayout : LayoutConfig -> Browser.Document Msg
viewLayout { title, scaffoldConfig } =
    { title = title
    , body =
        [ scaffold scaffoldConfig ]
    }


layoutConfig : Model -> LayoutConfig
layoutConfig model =
    case model.route of
        Route.Categories ->
            Pages.Categories.layoutConfig model

        Route.Category categoryId ->
            Pages.Category.layoutConfig model categoryId

        Route.Thread categoryId threadId ->
            Pages.Thread.layoutConfig model categoryId

        Route.Login ->
            Pages.Login.layoutConfig model

        Route.NewThread categoryId ->
            Pages.NewThread.layoutConfig model categoryId

        Route.NewPost categoryId threadId ->
            Pages.NewPost.layoutConfig model categoryId threadId

        Route.FourOhFour ->
            Pages.FourOhFour.layoutConfig model


appBody ( bodyLayout, body ) =
    let
        padding =
            case bodyLayout of
                Padded ->
                    Brand.defaultBodyPadding

                Unpadded ->
                    Brand.unpaddedBodyPadding
    in
    row
        [ Background.color Brand.canvasColor
        , height fill
        , width fill
        , padding
        ]
    <|
        [ column
            [ height fill
            , width fill
            ]
            [ body
            ]
        ]


appBar : AppBarConfig Msg -> Element Msg
appBar config =
    let
        title =
            case config.title of
                Nothing ->
                    Element.none

                Just t ->
                    text t

        backEl =
            config.backRoute
                |> Maybe.map backLink
                |> Maybe.withDefault Element.none

        actionsEl =
            config.actions
                |> Maybe.withDefault []
                |> column [ Element.alignRight ]
    in
    row
        [ width fill
        , height (Element.px Brand.appBarHeight)
        , Brand.defaultPadding
        , Background.color Brand.primaryColor
        , Font.color Brand.primaryTextColor
        , Border.shadow
            { offset = ( 1, 1 )
            , size = 2
            , blur = 4
            , color = Element.rgba255 0 0 0 0.2
            }
        ]
        [ backEl, title, actionsEl ]


backLink route =
    el
        [ Events.onClick <| RoutePushed route
        , Element.pointer
        ]
        (Element.html <|
            Material.Icons.Navigation.arrow_back (Color.rgb255 255 255 255) 25
        )
