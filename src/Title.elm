module Title exposing (forRoute)

import Data.Category as Category
import Data.Thread as Thread
import Data.User as User
import Route exposing (Route(..))
import Store exposing (Store)


forRoute : Store -> Route -> String
forRoute store route =
    case route of
        Home ->
            "Home"

        Categories ->
            "Categories"

        Category categorySlug ->
            store
                |> categoryTitle categorySlug

        Thread categorySlug threadSlug ->
            let
                cTitle =
                    store
                        |> categoryTitle categorySlug

                tTitle =
                    store
                        |> threadTitle threadSlug
            in
            tTitle ++ " | " ++ cTitle

        User username ->
            store
                |> userTitle username

        NotFound ->
            "Not Found"


categoryTitle : Category.Slug -> Store -> String
categoryTitle slug store =
    store
        |> Store.getCategoryBySlug slug
        |> Maybe.map .title
        |> Maybe.withDefault "Category"


threadTitle : Thread.Slug -> Store -> String
threadTitle slug store =
    store
        |> Store.getThreadBySlug slug
        |> Maybe.map .title
        |> Maybe.withDefault "Thread"


userTitle : User.Username -> Store -> String
userTitle username store =
    User.usernameToString username
