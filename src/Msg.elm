module Msg exposing (Msg(..))

import Data.ReplenishResponse exposing (ReplenishResponse)
import Json.Encode exposing (Value)
import Route exposing (Route)
import Time exposing (Time)


type Msg
    = SetRoute (Maybe Route)
    | Tick Time
    | NoOp
    | IsOnline Value
    | LoadIntoStore ReplenishResponse
    | SetUsername String
    | SetPassword String
    | Login
    | LoginSuccess String
