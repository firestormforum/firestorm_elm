module Pages.Categories exposing (fetchDataFor, layoutConfig)

import Api
import Brand
import Color
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
import Element.Events as Events
import Element.Font as Font
import Helpers exposing (idToString)
import Material.Icons.Social
import Msg exposing (Msg(..))
import Route exposing (Route)
import Types exposing (BodyLayout(..), Category)


layoutConfig model =
    { title = "Forums"
    , scaffoldConfig =
        { appBar =
            Just
                { title = Just "Categories"
                , backRoute = Nothing
                , actions = Just [ loginLink ]
                }
        , floatingActionButton = Nothing
        , body = ( Padded, categoriesList model.categories )
        }
    }


loginLink =
    el
        [ Element.padding 5
        , Element.pointer
        , Element.mouseOver
            [ Background.color (Element.rgba 0 0 0 0.2)
            , Font.color Brand.primaryColor
            ]
        , Events.onClick <| RoutePushed Route.Login
        ]
    <|
        Element.html <|
            Material.Icons.Social.person (Color.rgb255 255 255 255) 25


fetchDataFor : String -> Cmd Msg
fetchDataFor endpoint =
    Api.getCategories endpoint 1


categoriesList : List Category -> Element Msg
categoriesList categories =
    column
        [ height fill
        , width fill
        , Element.scrollbarY
        ]
    <|
        List.map categoryListItem categories


categoryListItem : Category -> Element Msg
categoryListItem category =
    row
        [ width fill
        , Brand.defaultPadding
        ]
        [ el
            [ Element.pointer
            , Events.onClick <| RoutePushed (Route.Category (idToString category.id))
            ]
            (text category.title)
        ]
