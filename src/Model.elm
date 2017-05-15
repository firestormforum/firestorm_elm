module Model exposing (Model, Flags, init)

import Types.Store as Store
import Routes exposing (Sitemap)
import Phoenix
import Phoenix.Socket as Socket exposing (Socket)
import Phoenix.Channel as Channel exposing (Channel)
import Json.Encode as Encode
import Msg exposing (Msg)
import Dict exposing (Dict)


type alias Model =
    { store : Store.Model
    , apiBaseUrl : String
    , wsBaseUrl : String
    , route : Sitemap
    , connectionStatus : ConnectionStatus
    , socket : Socket Msg
    , channels : Dict String (Channel Msg)
    }


type alias Flags =
    { apiBaseUrl : String
    , wsBaseUrl : String
    }


type ConnectionStatus
    = Connected
    | Disconnected


init : Flags -> Sitemap -> Model
init flags route =
    { store = Store.new
    , apiBaseUrl = flags.apiBaseUrl
    , wsBaseUrl = flags.wsBaseUrl
    , route = route
    , connectionStatus = Disconnected
    , socket = Socket.init flags.wsBaseUrl
    , channels = Dict.empty
    }
