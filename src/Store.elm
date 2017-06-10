module Store exposing (Store, empty, getCategory, mock)

import Data.Category as Category exposing (Category, mockCategory)
import EveryDict exposing (EveryDict)


type Store
    = Store
        { categories : EveryDict Category.Id Category
        }


empty : Store
empty =
    Store
        { categories = EveryDict.empty
        }


mock : Store
mock =
    Store
        { categories = mockCategories }


mockCategories : EveryDict Category.Id Category
mockCategories =
    EveryDict.empty
        |> EveryDict.insert mockCategory.id mockCategory


getCategory : Category.Id -> Store -> Maybe Category
getCategory id (Store { categories }) =
    categories
        |> EveryDict.get id
