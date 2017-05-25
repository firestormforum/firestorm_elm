module Route exposing (Route(..), fromLocation, href)

import Navigation exposing (Location)
import UrlParser as Url
    exposing
        ( parseHash
        , s
        , (</>)
        , string
        , oneOf
        , Parser
        , top
        )
import Html.Attributes as Attr
import Html exposing (Attribute)
import Data.Category as Category
import Data.Thread as Thread


type Route
    = Home
    | Categories
    | Category Category.Slug
    | Thread Category.Slug Thread.Slug
    | NotFound


router : Parser (Route -> a) a
router =
    oneOf
        [ Url.map Home top
        , Url.map Categories (s "categories")
        , Url.map Category (s "categories" </> Category.slugParser)
        , Url.map Thread
            (s "categories"
                </> Category.slugParser
                </> s "threads"
                </> Thread.slugParser
            )
        ]


fromLocation : Location -> Maybe Route
fromLocation location =
    if String.isEmpty location.hash then
        Just Home
    else
        parseHash router location


routeToString : Route -> String
routeToString route =
    let
        pieces =
            case route of
                Home ->
                    []

                Categories ->
                    [ "categories" ]

                Category categorySlug ->
                    [ "categories", Category.slugToString categorySlug ]

                Thread categorySlug threadSlug ->
                    [ "categories"
                    , Category.slugToString categorySlug
                    , "threads"
                    , Thread.slugToString threadSlug
                    ]

                NotFound ->
                    [ "404" ]
    in
        "#/" ++ (String.join "/" pieces)


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)
