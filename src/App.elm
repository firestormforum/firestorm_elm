module App exposing (..)

import Navigation
import Model exposing (Model)
import Msg exposing (Msg)
import Types.Store as Store
import Routes exposing (parseHash, Sitemap)
import Update
import Dict


type alias Flags =
    { apiBaseUrl : String }


init : Flags -> Navigation.Location -> ( Model, Cmd Msg )
init flags location =
    let
        ( model, cmd ) =
            Update.handleRoute
                (parseHash location)
                (initialModel flags (parseHash location))
    in
        ( model, cmd )


initialModel : Flags -> Sitemap -> Model
initialModel flags route =
    { store = Store.new
    , apiBaseUrl = flags.apiBaseUrl
    , route = route
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
