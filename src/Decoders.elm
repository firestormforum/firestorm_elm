module Decoders
    exposing
        ( categoryDecoder
        , categoriesDecoder
        , storeUpdateDecoder
        )

import Json.Decode as Decode
    exposing
        ( Decoder
        , andThen
        , decodeString
        , dict
        , fail
        , field
        , float
        , int
        , list
        , map
        , maybe
        , oneOf
        , string
        , succeed
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
import Types.Store as Store exposing (StoreUpdate)
import Dict exposing (Dict)


categoryDecoder : Decoder Category.Model
categoryDecoder =
    decode Category.Model
        |> required "id" int
        |> required "title" string
        |> required "slug" string
        |> required "inserted_at" string
        |> required "updated_at" string
        |> required "parent_id" (maybe int)
        |> required "children_ids" (list int)
        |> required "thread_ids" (list int)


storeUpdateDecoder : Decoder StoreUpdate
storeUpdateDecoder =
    Decode.map4 StoreUpdate
        categoriesDecoder
        threadsDecoder
        usersDecoder
        postsDecoder


toIdDict : List { a | id : Int } -> Dict Int { a | id : Int }
toIdDict things =
    (List.map (\u -> ( u.id, u ))
        things
    )
        |> Dict.fromList


postsDecoder : Decoder (Dict Int Post.Model)
postsDecoder =
    field "posts"
        (list postDecoder)
        |> map toIdDict


usersDecoder : Decoder (Dict Int User.Model)
usersDecoder =
    field "users"
        (list userDecoder)
        |> map toIdDict


threadsDecoder : Decoder (Dict Int Thread.Model)
threadsDecoder =
    field "threads"
        (list threadDecoder)
        |> map toIdDict


categoriesDecoder : Decoder (Dict Int Category.Model)
categoriesDecoder =
    field "categories"
        (list categoryDecoder)
        |> map toIdDict


idDecoder : Decoder Int
idDecoder =
    field "id" int


threadDecoder : Decoder Thread.Model
threadDecoder =
    decode Thread.Model
        |> required "id" int
        |> required "title" string
        |> optional "slug" string ""
        |> required "user_id" int
        |> required "post_ids" (list int)
        |> required "category_id" int


postDecoder : Decoder Post.Model
postDecoder =
    decode Post.Model
        |> required "id" int
        |> required "body" string
        |> required "thread_id" int
        |> required "user_id" int
        |> required "inserted_at" string


userDecoder : Decoder User.Model
userDecoder =
    decode User.Model
        |> required "id" int
        |> required "username" string
        |> required "email" string
        |> required "name" string
