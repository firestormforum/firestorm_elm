module Msg exposing (Msg(..))

import Route exposing (Route)
import Time exposing (Time)


type Msg
    = SetRoute (Maybe Route)
    | Tick Time
