module Decoders
    exposing
        ( dataDecoder
        , etagDecoder
        , categoryDecoder
        , categoriesDecoder
        )

import Json.Decode as Decode
    exposing
        ( field
        , Decoder
        , string
        , int
        , list
        , map
        , andThen
        , succeed
        , oneOf
        , dict
        , float
        , fail
        , decodeString
        )
import Json.Decode.Pipeline
    exposing
        ( decode
        , required
        , requiredAt
        , hardcoded
        , optional
        , custom
        )
import Types.Category as Category
import Dict exposing (Dict)


dataDecoder : Decoder a -> Decoder a
dataDecoder decoder =
    field "data" decoder


etagDecoder : Decoder String
etagDecoder =
    field "ETag" string


categoryDecoder : Decoder Category.Model
categoryDecoder =
    decode Category.Model
        |> required "id" int
        |> required "title" string
        |> required "inserted_at" string
        |> required "updated_at" string
        |> hardcoded Dict.empty


categoriesDecoder : Decoder (List Category.Model)
categoriesDecoder =
    list categoryDecoder
