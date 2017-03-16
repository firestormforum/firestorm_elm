module App exposing (..)

import Navigation
import Model exposing (Model)
import Msg exposing (Msg)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
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
    { categories = Dict.empty
    , threads = Dict.empty
    , users = Dict.empty
    , posts = Dict.empty
    , apiBaseUrl = flags.apiBaseUrl
    , route = route
    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
