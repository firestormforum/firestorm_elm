module Route exposing
    ( Route(..)
    , fromUrl
    , parser
    , pushUrl
    , replaceUrl
    )

import Browser.Navigation as Nav
import Html exposing (Attribute)
import Html.Attributes as Attr
import Url exposing (Url)
import Url.Parser as Parser exposing ((</>), Parser, map, oneOf, s, string, top)



-- ROUTING
-- We start with three routes - categories, a single category, and 404


type Route
    = Categories
    | Category String
    | Thread String String
    | Login
    | FourOhFour
    | NewThread String
    | NewPost String String



-- We use url parser to parse a route from the URL


parser : Parser (Route -> a) a
parser =
    oneOf
        [ map Categories top
        , map Category (s "categories" </> string)
        , map NewThread (s "categories" </> string </> s "threads" </> s "new")
        , map Thread (s "categories" </> string </> s "threads" </> string)
        , map NewPost (s "categories" </> string </> s "threads" </> string </> s "posts" </> s "new")
        , map Login (s "login")
        ]



-- PUBLIC HELPERS
-- This is a little hack that lets us use the url fragment with the parser. I found this in Richard Feldman's elm-spa-example


fromUrl : Url -> Maybe Route
fromUrl url =
    -- Treat the fragment as the url itself. Doing this primarily to aid in reactor-based development for the moment.
    { url | path = Maybe.withDefault "" url.fragment, fragment = Nothing }
        |> Parser.parse parser



-- This makes it easy for us to create an href for a given route


href : Route -> Attribute msg
href targetRoute =
    Attr.href (toString targetRoute)



-- We can replace the url with the url for a given route
-- We need the navigation key in order to use `Nav` functions, which we'll store in our model


replaceUrl : Nav.Key -> Route -> Cmd msg
replaceUrl key route =
    Nav.replaceUrl key (toString route)



-- We can also push a URL with pushstate


pushUrl : Nav.Key -> Route -> Cmd msg
pushUrl key route =
    Nav.pushUrl key (toString route)



-- We need the ability to generate a string that will parse back to the route


toString : Route -> String
toString page =
    let
        pieces =
            case page of
                Categories ->
                    []

                Category categoryId ->
                    [ "categories", categoryId ]

                Thread categoryId threadId ->
                    [ "categories", categoryId, "threads", threadId ]

                Login ->
                    [ "login" ]

                NewThread categoryId ->
                    [ "categories", categoryId, "threads", "new" ]

                NewPost categoryId threadId ->
                    [ "categories", categoryId, "threads", threadId, "posts", "new" ]

                FourOhFour ->
                    [ "404" ]
    in
    "#/" ++ String.join "/" pieces
