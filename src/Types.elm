module Types exposing
    ( Authentication(..)
    , BodyLayout(..)
    , Category
    , NewPostTab(..)
    , PaginatedResult
    , Post
    , Thread
    , User
    )

import Firestorm.Scalar
import Time


type NewPostTab
    = Editor
    | Preview


type BodyLayout
    = Padded
    | Unpadded


type Authentication
    = Unauthenticated
    | Authenticated String


type alias User =
    { id : Firestorm.Scalar.Id
    , name : String
    , avatarUrl : String
    }


type alias Category =
    { id : Firestorm.Scalar.Id
    , title : String
    , threads : List Thread
    }


type alias Thread =
    { id : Firestorm.Scalar.Id
    , title : String
    , posts : List Post
    }


type alias Post =
    { id : Firestorm.Scalar.Id
    , body : String
    , user : User
    , insertedAt : Time.Posix
    }


type alias PaginatedResult wrapped =
    { perPage : Int
    , page : Int
    , totalPages : Int
    , totalEntries : Int
    , entries : List wrapped
    }
