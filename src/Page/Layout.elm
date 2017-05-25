module Page.Layout exposing (view)

import Html exposing (..)
import Html.Attributes exposing (class)


view : Html msg -> Html msg
view body =
    div [ class "page-layout" ]
        [ navigation
        , body
        , footer
        ]


navigation : Html msg
navigation =
    text "navigation"


footer : Html msg
footer =
    text "footer"
