module Data.Post
    exposing
        ( Post
        , Id
        , mockPost
        )

import Time exposing (Time)
import Data.Thread as Thread


type Id
    = Id Int


type alias Markdown =
    String


type Body
    = Body Markdown


type alias Post =
    { id : Id
    , body : Body
    , threadId : Thread.Id
    , insertedAt : Time
    , updatedAt : Time
    }


mockPost : Post
mockPost =
    let
        thread =
            Thread.mockThread
    in
        { id = Id 1
        , body = Body "OTP is cool"
        , threadId = thread.id
        , insertedAt = 0
        , updatedAt = 0
        }
