module Data.ReplenishResponse exposing (ReplenishResponse, decoder, new)

import Data.Category as Category exposing (Category)
import Dict exposing (Dict)
import Json.Decode as Decode exposing (Decoder)
import Json.Decode.Extra
import Json.Decode.Pipeline as Pipeline exposing (custom, decode, hardcoded, required)


type alias ReplenishResponse =
    { categories : List Category
    }


decoder : Decoder ReplenishResponse
decoder =
    decode ReplenishResponse
        |> required "categories" (Decode.list Category.decoder)


new : ReplenishResponse
new =
    { categories = [] }
