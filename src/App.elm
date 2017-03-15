module App exposing (..)

import Navigation
import Model exposing (Model)
import Msg exposing (Msg)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User


type alias Flags =
    { apiBaseUrl : String }


init : Flags -> Navigation.Location -> ( Model, Cmd Msg )
init flags path =
    ( { categories = []
      , apiBaseUrl = flags.apiBaseUrl
      }
    , Cmd.none
    )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
