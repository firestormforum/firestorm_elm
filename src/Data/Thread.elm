module Data.Thread
    exposing
        ( Thread
        , Slug
        , Id
        , slugParser
        , slugToString
        , mockThread
        )

import Time exposing (Time)
import UrlParser
import Data.Category as Category


type Slug
    = Slug String


type Id
    = Id Int


type alias Thread =
    { id : Id
    , title : String
    , slug : Slug
    , categoryId : Category.Id
    , insertedAt : Time
    , updatedAt : Time
    }


slugParser : UrlParser.Parser (Slug -> a) a
slugParser =
    UrlParser.custom "SLUG" (Ok << Slug)


slugToString : Slug -> String
slugToString (Slug slug) =
    slug


mockThread : Thread
mockThread =
    let
        category =
            Category.mockCategory
    in
        { id = Id 1
        , title = "OTP is cool"
        , slug = Slug "otp-is-cool"
        , categoryId = category.id
        , insertedAt = 0
        , updatedAt = 0
        }
