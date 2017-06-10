module Title exposing (forRoute)

import Route exposing (Route(..))


forRoute : Route -> String
forRoute route =
    case route of
        Home ->
            "Home"

        Categories ->
            "Categories"

        Category _ ->
            "Category"

        Thread _ _ ->
            "Thread"

        NotFound ->
            "Not Found"
