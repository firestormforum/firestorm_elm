module Decoders
    exposing
        ( categoryDecoder
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
import Types.Thread as Thread
import Types.Post as Post
import Types.User as User
import Dict exposing (Dict)


categoryDecoder : Decoder Category.Model
categoryDecoder =
    decode Category.Model
        |> required "id" int
        |> required "title" string
        |> required "inserted_at" string
        |> required "updated_at" string
        |> required "threads" (list threadDecoder)


categoriesDecoder : Decoder (List Category.Model)
categoriesDecoder =
    field "categories" <|
        list categoryDecoder


threadDecoder : Decoder Thread.Model
threadDecoder =
    decode Thread.Model
        |> required "id" int
        |> required "title" string
        |> required "user" userDecoder
        |> required "posts" (list postDecoder)


postDecoder : Decoder Post.Model
postDecoder =
    decode Post.Model
        |> required "id" int
        |> required "body" string


userDecoder : Decoder User.Model
userDecoder =
    decode User.Model
        |> required "id" int
        |> required "username" string
        |> required "email" string
        |> required "name" string
