module Decoders
    exposing
        ( categoryDecoder
        , categoriesDecoder
        , categoriesAndThreadsAndUsersDecoder
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
import Dict exposing (Dict)


categoryDecoder : Decoder Category.Model
categoryDecoder =
    decode Category.Model
        |> required "id" int
        |> required "title" string
        |> required "inserted_at" string
        |> required "updated_at" string
        |> required "parent_id" (maybe int)
        |> required "children_ids" (list int)
        |> required "thread_ids" (list int)


categoriesAndThreadsAndUsersDecoder : Decoder ( Dict Int Category.Model, Dict Int Thread.Model, Dict Int User.Model )
categoriesAndThreadsAndUsersDecoder =
    Decode.map3 (,,)
        categoriesDecoder
        threadsDecoder
        usersDecoder


usersDecoder : Decoder (Dict Int User.Model)
usersDecoder =
    field "users"
        (list userDecoder)
        |> map
            (\users ->
                (List.map (\u -> ( u.id, u ))
                    users
                )
                    |> Dict.fromList
            )


threadsDecoder : Decoder (Dict Int Thread.Model)
threadsDecoder =
    field "threads"
        (list threadDecoder)
        |> map
            (\categories ->
                (List.map (\c -> ( c.id, c ))
                    categories
                )
                    |> Dict.fromList
            )


categoriesDecoder : Decoder (Dict Int Category.Model)
categoriesDecoder =
    field "categories"
        (list categoryDecoder)
        |> map
            (\categories ->
                (List.map (\c -> ( c.id, c ))
                    categories
                )
                    |> Dict.fromList
            )


idDecoder : Decoder Int
idDecoder =
    field "id" int


threadDecoder : Decoder Thread.Model
threadDecoder =
    decode Thread.Model
        |> required "id" int
        |> required "title" string
        |> required "user_id" int
        |> required "post_ids" (list int)


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
