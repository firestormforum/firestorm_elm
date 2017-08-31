module Data.Post
    exposing
        ( Id
        , Post
        , bodyToHtml
        , bodyToString
        , decoder
        , idParser
        , idToString
        )

import Data.Thread as Thread
import Data.User as User
import Date exposing (Date)
import Html exposing (Html)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline as Pipeline
    exposing
        ( custom
        , decode
        , hardcoded
        , optional
        , required
        )
import UrlParser


type Id
    = Id Int


type alias Markdown =
    String


type Body
    = Body Markdown


type alias OEmbed =
    ( String, String )


type alias Post =
    { id : Id
    , body : Body
    , bodyHtml : String
    , threadId : Thread.Id
    , userId : User.Id
    , oEmbeds : List OEmbed
    , insertedAt : Date
    , updatedAt : Date
    }


bodyToHtml : Body -> List (Html.Attribute msg) -> Html msg
bodyToHtml (Body body) attrs =
    -- We're going to use the markdown package soon!
    Html.div attrs
        [ Html.text body ]


bodyToString : Body -> String
bodyToString (Body body) =
    body


idToString : Id -> String
idToString (Id id) =
    toString id



-- https://stackoverflow.com/questions/42703764/decode-a-json-tuple-to-elm-tuple


arrayAsTuple2 : Decoder a -> Decoder b -> Decoder ( a, b )
arrayAsTuple2 a b =
    Decode.index 0 a
        |> Decode.andThen
            (\aVal ->
                Decode.index 1 b
                    |> Decode.andThen (\bVal -> Decode.succeed ( aVal, bVal ))
            )


oEmbedDecoder : Decoder OEmbed
oEmbedDecoder =
    arrayAsTuple2 Decode.string Decode.string


decoder : Decoder Post
decoder =
    decode Post
        |> required "id" (Decode.map Id Decode.int)
        |> required "body" (Decode.map Body Decode.string)
        |> required "body_html" Decode.string
        |> required "thread_id" Thread.idDecoder
        |> required "user_id" User.idDecoder
        |> optional "oembeds" (Decode.list oEmbedDecoder) []
        |> required "inserted_at" Json.Decode.Extra.date
        |> required "updated_at" Json.Decode.Extra.date


idParser : UrlParser.Parser (Id -> a) a
idParser =
    UrlParser.map Id UrlParser.int
