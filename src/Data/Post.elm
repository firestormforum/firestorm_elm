module Data.Post
    exposing
        ( Id
        , Post
        , bodyToHtml
        , decoder
        )

import Data.Thread as Thread
import Data.User as User
import Date exposing (Date)
import Html exposing (Html)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline as Pipeline exposing (custom, decode, hardcoded, required)


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
    , userId : User.Id
    , insertedAt : Date
    , updatedAt : Date
    }


bodyToHtml : Body -> List (Html.Attribute msg) -> Html msg
bodyToHtml (Body body) attrs =
    -- We're going to use the markdown package soon!
    Html.div attrs
        [ Html.text body ]


decoder : Decoder Post
decoder =
    decode Post
        |> required "id" (Decode.map Id Decode.int)
        |> required "body" (Decode.map Body Decode.string)
        |> required "thread_id" Thread.idDecoder
        |> required "user_id" User.idDecoder
        |> required "inserted_at" Json.Decode.Extra.date
        |> required "updated_at" Json.Decode.Extra.date
