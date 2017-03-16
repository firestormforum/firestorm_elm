module Model exposing (Model, findCategory)

import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Types.Post as Post
import Routes exposing (Sitemap)
import Dict exposing (Dict)


type alias Model =
    { categories : Dict Int Category.Model
    , threads : Dict Int Thread.Model
    , users : Dict Int User.Model
    , posts : Dict Int Post.Model
    , apiBaseUrl : String
    , route : Sitemap
    }


findCategory : Model -> Int -> Maybe Category.Model
findCategory model categoryId =
    model.categories
        |> Dict.get categoryId
