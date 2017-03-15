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
    | CategoryR Int
    | NotFoundR


homeR : Route Sitemap
homeR =
    HomeR := static ""


categoryR : Route Sitemap
categoryR =
    CategoryR := static "categories" </> int


notFoundR : Route Sitemap
notFoundR =
    NotFoundR := static "404"


sitemap : Router Sitemap
sitemap =
    router
        [ homeR
        , categoryR
        , notFoundR
        ]


match : String -> Sitemap
match path =
    case path of
        "" ->
            HomeR

        _ ->
            Route.match sitemap path
                |> Debug.log "match"
                |> Maybe.withDefault NotFoundR


toString : Sitemap -> String
toString r =
    case r of
        HomeR ->
            reverse homeR []

        CategoryR id ->
            reverse categoryR [ Basics.toString id ]

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
