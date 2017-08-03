module Data.ReplenishRequest
    exposing
        ( ReplenishRequest
        , empty
        , encode
        , requestCategory
        )

import Json.Encode as JE exposing (Value)


type alias ReplenishRequest =
    { categories : List Int
    , threads : List Int
    , users : List Int
    , posts : List Int
    }


empty : ReplenishRequest
empty =
    { categories = []
    , threads = []
    , users = []
    , posts = []
    }


requestCategory : Int -> ReplenishRequest -> ReplenishRequest
requestCategory categoryId request =
    { request | categories = categoryId :: request.categories }


encode : ReplenishRequest -> Value
encode request =
    JE.object
        [ ( "categories"
          , JE.list (List.map JE.int request.categories)
          )
        , ( "threads"
          , JE.list (List.map JE.int request.threads)
          )
        , ( "users"
          , JE.list (List.map JE.int request.users)
          )
        , ( "posts"
          , JE.list (List.map JE.int request.posts)
          )
        ]
