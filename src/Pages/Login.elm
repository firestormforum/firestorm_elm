module Pages.Login exposing (layoutConfig)

import Brand
import Element
    exposing
        ( Element
        , fill
        , spacing
        , text
        , width
        )
import Element.Background as Background
import Element.Border as Border
import Element.Events as Events
import Element.Font as Font
import Element.Input
import Html.Events
import Json.Decode as Decode
import Model exposing (Model)
import Msg exposing (Msg(..))
import Types exposing (BodyLayout(..))


layoutConfig model =
    let
        appBarConfig =
            { title = Just "Login"
            , actions = Nothing
            , backRoute = Nothing
            }

        scaffoldConfig =
            { appBar = Just appBarConfig
            , body = ( Padded, loginView model )
            , floatingActionButton = Nothing
            }
    in
    { title = "Login"
    , scaffoldConfig = scaffoldConfig
    }


onEnter : msg -> Element.Attribute msg
onEnter msg =
    Element.htmlAttribute
        (Html.Events.on "keyup"
            (Decode.field "key" Decode.string
                |> Decode.andThen
                    (\key ->
                        if key == "Enter" then
                            Decode.succeed msg

                        else
                            Decode.fail "Not the enter key"
                    )
            )
        )


loginView : Model -> Element Msg
loginView model =
    Element.column
        [ width fill
        , spacing <| 2 * Brand.defaultPaddingAmount
        , Brand.defaultBodyPadding
        ]
        [ Element.Input.text
            [ onEnter Authenticate
            ]
            { text = model.email
            , onChange = SetEmail
            , placeholder = Nothing
            , label = Element.Input.labelAbove [] <| Element.text "Email"
            }
        , Element.Input.currentPassword
            [ onEnter Authenticate
            ]
            { text = model.password
            , onChange = SetPassword
            , placeholder = Nothing
            , show = False
            , label = Element.Input.labelAbove [] <| Element.text "Password"
            }
        , Element.Input.button
            [ Element.alignRight
            , Brand.defaultPadding
            , Background.color Brand.primaryColor
            , Font.color Brand.primaryTextColor
            ]
            { onPress = Just Authenticate
            , label = text "Submit"
            }
        ]
