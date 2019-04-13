module Pages.Category exposing (fetchDataFor, layoutConfig)

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
import Element.Events as Events
import Element.Font as Font
import Element.Input as Input
import Firestorm.Scalar
import Helpers exposing (idToString)
import Msg exposing (Msg(..))
import Route exposing (Route)
import Types exposing (BodyLayout(..), Category, Thread)


fetchDataFor : String -> Firestorm.Scalar.Id -> Cmd Msg
fetchDataFor endpoint categoryId =
    Api.getCategory endpoint categoryId


layoutConfig model categoryId =
    { title = "Forums"
    , scaffoldConfig =
        { appBar =
            Just
                { title = Just "Category"
                , backRoute = Just Route.Categories
                , actions = Nothing
                }
        , floatingActionButton =
            Just
                (Input.button
                    [ Brand.defaultPadding
                    , Background.color Brand.primaryColor
                    , Font.color Brand.primaryTextColor
                    ]
                    { onPress =
                        Just <| RoutePushed (Route.NewThread categoryId)
                    , label = text "New Thread"
                    }
                )
        , body =
            ( Padded
            , model.category
                |> Maybe.map categoryShow
                |> Maybe.withDefault (text "Loading...")
            )
        }
    }


categoryShow category =
    column
        [ height fill
        , width fill
        , Element.scrollbarY
        ]
    <|
        List.map (threadListItem category.id) category.threads


threadListItem : Firestorm.Scalar.Id -> Thread -> Element Msg
threadListItem categoryId thread =
    row
        [ width fill
        , Brand.defaultPadding
        ]
        [ el
            [ Element.pointer
            , Events.onClick <| RoutePushed (Route.Thread (idToString categoryId) (idToString thread.id))
            ]
            (text thread.title)
        ]
