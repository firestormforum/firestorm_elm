module Encoders
    exposing
        ( encodeReplenishRequest
        )

import Types.Store as Store exposing (ReplenishRequest)
import Json.Encode as Encode exposing (..)


encodeReplenishRequest : ReplenishRequest -> Encode.Value
encodeReplenishRequest replenishRequest =
    object
        [ ( "categories", intList replenishRequest.categories )
        , ( "threads", intList replenishRequest.threads )
        , ( "posts", intList replenishRequest.posts )
        , ( "users", intList replenishRequest.users )
        ]


intList : List Int -> Encode.Value
intList listInts =
    list <|
        List.map
            int
            listInts
