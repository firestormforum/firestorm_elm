module Routes
    exposing
        ( Sitemap(..)
        , parseHash
        , navigateTo
        , toString
        , href
        , parsePath
        )

import Navigation exposing (Location)
import Route exposing (..)
import Html exposing (Attribute)
import Html.Attributes


type Sitemap
    = HomeR
    | NotFoundR


homeR : Route Sitemap
homeR =
    HomeR := static ""


notFoundR : Route Sitemap
notFoundR =
    NotFoundR := static "404"


sitemap : Router Sitemap
sitemap =
    router
        [ homeR
        , notFoundR
        ]


match : String -> Sitemap
match path =
    Route.match sitemap path
        |> Maybe.withDefault NotFoundR


toString : Sitemap -> String
toString r =
    case r of
        HomeR ->
            reverse homeR []

        NotFoundR ->
            reverse notFoundR []


parsePath : Location -> Sitemap
parsePath =
    -- Not used, but useful if we want to not use hashes later
    .pathname >> match


parseHash : Location -> Sitemap
parseHash location =
    location.hash |> String.dropLeft 1 |> match


href : Sitemap -> Attribute msg
href route =
    ("#" ++ (toString route))
        |> Html.Attributes.href


navigateTo : Sitemap -> Cmd msg
navigateTo route =
    ("#" ++ (toString route)) |> Navigation.newUrl
