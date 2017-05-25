module Route exposing (Route(..), fromLocation)

import Navigation exposing (Location)
import UrlParser as Url exposing (parseHash, s, (</>), string, oneOf, Parser)


type Route
    = Home
    | Categories
    | Category String
    | Thread String String
    | NotFound


router : Parser (Route -> a) a
router =
    oneOf
        [ Url.map Categories (s "categories")
        , Url.map Category (s "categories" </> string)
        , Url.map Thread (s "categories" </> string </> s "threads" </> string)
        ]


fromLocation : Location -> Maybe Route
fromLocation location =
    if String.isEmpty location.hash then
        Just Home
    else
        parseHash router location
