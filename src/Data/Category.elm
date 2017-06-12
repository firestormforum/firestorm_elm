module Data.Category
    exposing
        ( Category
        , Id
        , Slug
        , decoder
        , idDecoder
        , slugParser
        , slugToString
        )

import Date exposing (Date)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline as Pipeline exposing (custom, decode, hardcoded, required)
import UrlParser


type Slug
    = Slug String


type Id
    = Id Int


type alias Category =
    { id : Id
    , title : String
    , slug : Slug
    , insertedAt : Date
    , updatedAt : Date
    }


slugParser : UrlParser.Parser (Slug -> a) a
slugParser =
    UrlParser.custom "SLUG" (Ok << Slug)


slugToString : Slug -> String
slugToString (Slug slug) =
    slug


idDecoder : Decoder Id
idDecoder =
    Decode.map Id Decode.int


decoder : Decoder Category
decoder =
    decode Category
        |> required "id" (Decode.map Id Decode.int)
        |> required "title" Decode.string
        |> required "slug" (Decode.map Slug Decode.string)
        |> required "inserted_at" Json.Decode.Extra.date
        |> required "updated_at" Json.Decode.Extra.date
