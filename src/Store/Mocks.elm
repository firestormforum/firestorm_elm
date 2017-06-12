module Store.Mocks exposing (store)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Json.Decode as Decode exposing (decodeValue)
import Json.Encode as Encode exposing (..)
import Store exposing (Store)


store : Store
store =
    Store.empty
        |> insertCategory elixir
        |> insertCategory elm
        |> insertThread otpIsFun
        |> insertPost otpIsFunFirstPost


insertCategory : Result String Category -> Store -> Store
insertCategory result store =
    case result of
        Err err ->
            store

        Ok category ->
            Store.insertCategory category store


insertThread : Result String Thread -> Store -> Store
insertThread result store =
    case result of
        Err err ->
            store

        Ok thread ->
            Store.insertThread thread store


insertPost : Result String Post -> Store -> Store
insertPost result store =
    case result of
        Err err ->
            store

        Ok post ->
            Store.insertPost post store


elm : Result String Category
elm =
    category
        2
        "Elm"
        "elm"
        "2017-06-01T18:25:43.511Z"
        "2017-06-01T18:25:43.511Z"


elixir : Result String Category
elixir =
    category
        1
        "Elixir"
        "elixir"
        "2017-06-01T18:25:43.511Z"
        "2017-06-01T18:25:43.511Z"


otpIsFun : Result String Thread
otpIsFun =
    thread
        1
        1
        "OTP is Fun!"
        "otp-is-fun"
        "2017-06-01T18:25:43.511Z"
        "2017-06-01T18:25:43.511Z"


otpIsFunFirstPost : Result String Post
otpIsFunFirstPost =
    post
        1
        1
        "I know, right?"
        "2017-06-01T18:25:43.511Z"
        "2017-06-01T18:25:43.511Z"


category : Int -> String -> String -> String -> String -> Result String Category
category id title slug insertedAt updatedAt =
    decodeValue Category.decoder
        (object
            [ ( "id", int id )
            , ( "title", string title )
            , ( "slug", string slug )
            , ( "inserted_at", string insertedAt )
            , ( "updated_at", string updatedAt )
            ]
        )


thread : Int -> Int -> String -> String -> String -> String -> Result String Thread
thread id categoryId title slug insertedAt updatedAt =
    decodeValue Thread.decoder
        (object
            [ ( "id", int id )
            , ( "category_id", int categoryId )
            , ( "title", string title )
            , ( "slug", string slug )
            , ( "inserted_at", string insertedAt )
            , ( "updated_at", string updatedAt )
            ]
        )


post : Int -> Int -> String -> String -> String -> Result String Post
post id threadId body insertedAt updatedAt =
    decodeValue Post.decoder
        (object
            [ ( "id", int id )
            , ( "thread_id", int threadId )
            , ( "body", string body )
            , ( "inserted_at", string insertedAt )
            , ( "updated_at", string updatedAt )
            ]
        )
