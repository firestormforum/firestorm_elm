module Update exposing (update)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Api.Home


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )
