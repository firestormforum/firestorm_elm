module App exposing (..)

import Html exposing (Html, text, div, img)
import Html.Attributes exposing (src)


type alias Model =
    ()


init : String -> ( Model, Cmd Msg )
init path =
    ( (), Cmd.none )


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ text "nothing here yet!" ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
