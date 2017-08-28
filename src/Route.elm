module Route exposing (Route(..), bodyClass, fromLocation, href)

import Data.Category as Category
import Data.Thread as Thread
import Data.User as User
import Html exposing (Attribute)
import Html.Attributes as Attr
import Navigation exposing (Location)
import UrlParser as Url
    exposing
        ( (</>)
        , Parser
        , oneOf
        , parseHash
        , s
        , string
        , top
        )


type Route
    = Home
    | Categories
    | Category Category.Slug
    | Thread Category.Slug Thread.Slug
    | NewPost Category.Slug Thread.Slug
    | User User.Username
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
        , Url.map NewPost
            (s "categories"
                </> Category.slugParser
                </> s "threads"
                </> Thread.slugParser
                </> s "posts"
                </> s "new"
            )
        , Url.map User (s "users" </> User.usernameParser)
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

                NewPost categorySlug threadSlug ->
                    [ "categories"
                    , Category.slugToString categorySlug
                    , "threads"
                    , Thread.slugToString threadSlug
                    , "posts"
                    , "new"
                    ]

                User username ->
                    [ "users"
                    , User.usernameToString username
                    ]

                NotFound ->
                    [ "404" ]
    in
    "#/" ++ String.join "/" pieces


bodyClass : Route -> String
bodyClass route =
    case route of
        Home ->
            "page-home"

        Categories ->
            "page-category-index"

        Category _ ->
            "page-category-show"

        Thread _ _ ->
            "page-thread-show"

        NewPost _ _ ->
            "page-post-new"

        User _ ->
            "page-user-show"

        NotFound ->
            "page-404"


href : Route -> Attribute msg
href route =
    Attr.href (routeToString route)
