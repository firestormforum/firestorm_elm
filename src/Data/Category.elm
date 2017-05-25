module Data.Category
    exposing
        ( Category
        , Slug
        , Id
        , slugParser
        , slugToString
        , mockCategory
        )

import Time exposing (Time)
import UrlParser


-- We'll add types for Slug and Id so we can never have a function that takes a
-- Category.Slug and accidentally pass it a Thread.Slug, etc.


type Slug
    = Slug String


type Id
    = Id Int


type alias Category =
    { id : Id
    , title : String
    , slug : Slug
    , insertedAt : Time
    , updatedAt : Time
    }



-- We could expose the type constructor to the outside world, but better if we
-- just handle conversion inside this module


slugParser : UrlParser.Parser (Slug -> a) a
slugParser =
    UrlParser.custom "SLUG" (Ok << Slug)


slugToString : Slug -> String
slugToString (Slug slug) =
    slug



-- We'll add a mockCategory that we can show in our views, since we can't really
-- construct one on our own because we can't create an Id and don't really wish
-- to


mockCategory : Category
mockCategory =
    { id = Id 1
    , title = "Elixir"
    , slug = Slug "elixir"
    , insertedAt = 0
    , updatedAt = 0
    }
