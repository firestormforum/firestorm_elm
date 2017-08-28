module Page.Login exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class, id, name, type_)
import Page.Component
    exposing
        ( pageHeader
        )


view : Html msg
view =
    div
        []
        [ h2 [] [ text "Log In" ]
        , form
            [ class "pure-form" ]
            [ div []
                [ label []
                    [ text "Username: "
                    , input
                        [ type_ "text"
                        , id "user_username"
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
