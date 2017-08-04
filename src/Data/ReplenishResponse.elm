module Data.ReplenishResponse exposing (ReplenishResponse, decode, decoder, new)

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Json.Decode as JD exposing (Decoder, Value)
import Json.Decode.Pipeline as Pipeline exposing (custom, hardcoded, required)


type alias ReplenishResponse =
    { categories : List Category
    , threads : List Thread
    , users : List User
    , posts : List Post
    }


decoder : Decoder ReplenishResponse
decoder =
    Pipeline.decode ReplenishResponse
        |> required "categories" (JD.list Category.decoder)
        |> required "threads" (JD.list Thread.decoder)
        |> required "users" (JD.list User.decoder)
        |> required "posts" (JD.list Post.decoder)


decode : Value -> ReplenishResponse
decode =
    JD.decodeValue decoder
        >> Result.withDefault new


new : ReplenishResponse
new =
    { categories = []
    , threads = []
    , users = []
    , posts = []
    }
