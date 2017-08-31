module Msg exposing (Msg(..))

import Data.Category as Category
import Data.Post as Post
import Data.ReplenishResponse exposing (ReplenishResponse)
import Data.Thread as Thread
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
    | SetNewPostBody String
    | SubmitNewPost Thread.Id
    | SubmitNewPostSuccess Thread.Id Post.Id
