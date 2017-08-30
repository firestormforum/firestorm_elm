module Data.Thread
    exposing
        ( Id
        , Slug
        , Thread
        , decoder
        , idDecoder
        , idEncoder
        , slugParser
        , slugToString
        )

import Data.Category as Category
import Date exposing (Date)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline as Pipeline exposing (custom, decode, hardcoded, required)
import Json.Encode as Encode
import UrlParser


type Slug
    = Slug String


type Id
    = Id Int


type alias Thread =
    { id : Id
    , title : String
    , slug : Slug
    , categoryId : Category.Id
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


idEncoder : Id -> Encode.Value
idEncoder (Id id) =
    Encode.int id


decoder : Decoder Thread
decoder =
    decode Thread
        |> required "id" (Decode.map Id Decode.int)
        |> required "title" Decode.string
        |> required "slug" (Decode.map Slug Decode.string)
        |> required "category_id" Category.idDecoder
        |> required "inserted_at" Json.Decode.Extra.date
        |> required "updated_at" Json.Decode.Extra.date
