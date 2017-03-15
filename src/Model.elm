module Model exposing (Model, findCategory)

import Types.Category as Category
import Routes exposing (Sitemap)


type alias Model =
    { categories : List Category.Model
    , apiBaseUrl : String
    , route : Sitemap
    }


findCategory : Model -> Int -> Maybe Category.Model
findCategory model categoryId =
    model.categories
        |> List.filter (\c -> c.id == categoryId)
        |> List.head
