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


type Route
    = Home
    | Categories
    | Category String
    | Thread String String
    | NotFound


router : Parser (Route -> a) a
router =
    oneOf
        [ Url.map Home top
        , Url.map Categories (s "categories")
        , Url.map Category (s "categories" </> string)
        , Url.map Thread (s "categories" </> string </> s "threads" </> string)
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
                    [ "categories", categorySlug ]

                Thread categorySlug threadSlug ->
                    [ "categories", categorySlug, "threads", threadSlug ]

                NotFound ->
                    [ "404" ]
    in
        "#/" ++ (String.join "/" pieces)


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)
