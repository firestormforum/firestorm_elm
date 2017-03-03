module App exposing (..)

import Navigation
import Model exposing (Model)
import Msg exposing (Msg)
import Dict


type alias Flags =
    { apiBaseUrl : String }


init : Flags -> Navigation.Location -> ( Model, Cmd Msg )
init flags path =
    ( { categories = Dict.empty }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
