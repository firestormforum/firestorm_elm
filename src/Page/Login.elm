module Page.Login exposing (query, view)

import Html exposing (..)
import Html.Attributes exposing (class, id, name, type_, value)
import Html.Events exposing (onInput, onSubmit)
import Model exposing (Model)
import Msg exposing (Msg(Login, SetPassword, SetUsername))
import Page.Component
    exposing
        ( pageHeader
        )


type alias ViewModel =
    { username : String
    , password : String
    }


query : Model -> ViewModel
query { username, password } =
    { username = username
    , password = password
    }


view : ViewModel -> Html Msg
view { username, password } =
    div
        []
        [ h2 [] [ text "Log In" ]
        , form
            [ class "pure-form"
            , onSubmit Msg.Login
            ]
            [ div []
                [ label []
                    [ text "Username: "
                    , input
                        [ type_ "text"
                        , id "user_username"
                        , onInput SetUsername
                        , value username
                        , name "user[username]"
                        ]
                        []
                    ]
                ]
            , div []
                [ label []
                    [ text "Password: "
                    , input
                        [ type_ "password"
                        , id "user_password"
                        , onInput SetPassword
                        , name "user[password]"
                        ]
                        []
                    ]
                ]
            , button
                [ class "pure-button button-primary" ]
                [ text "Log in or register" ]
            ]
        ]
