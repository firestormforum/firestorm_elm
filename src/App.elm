module App exposing (..)

import Navigation
import Model exposing (Model)
import Msg exposing (Msg)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Routes exposing (parseHash)
import Update


type alias Flags =
    { apiBaseUrl : String }


init : Flags -> Navigation.Location -> ( Model, Cmd Msg )
init flags location =
    let
        ( model, cmd ) =
            Update.handleRoute
                (parseHash location)
                (initialModel flags)
    in
        ( model, cmd )


initialModel : Flags -> Model
initialModel flags =
    { categories = []
    , apiBaseUrl = flags.apiBaseUrl
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
