module Data.Post
    exposing
        ( Post
        , Id
        , mockPost
        , bodyToHtml
        )

import Time exposing (Time)
import Data.Thread as Thread
import Html exposing (Html)


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


bodyToHtml : Body -> List (Html.Attribute msg) -> Html msg
bodyToHtml (Body body) attrs =
    -- We're going to use the markdown package soon!
    Html.div attrs
        [ Html.text body ]
