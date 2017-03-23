module Model exposing (Model, Flags, init, phxSocket)

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
    , route : Sitemap
    , connectionStatus : ConnectionStatus
    , socket : Socket Msg
    , channels : Dict String (Channel Msg)
    }


type alias Flags =
    { apiBaseUrl : String }


type ConnectionStatus
    = Connected
    | Disconnected


init : Flags -> Sitemap -> Model
init flags route =
    { store = Store.new
    , apiBaseUrl = flags.apiBaseUrl
    , route = route
    , connectionStatus = Disconnected
    , socket = initialSocket
    , channels = Dict.empty
    }



-- How do I find out I connected successfully on the socket in the first
-- place?


{-| Initialize a socket with the default heartbeat intervall of 30 seconds
-}
initialSocket : Socket Msg
initialSocket =
    Socket.init phxSocket


phxSocket : String
phxSocket =
    "ws://localhost:4000/socket/websocket"
