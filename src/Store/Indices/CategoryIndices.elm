module Store.Indices.CategoryIndices
    exposing
        ( CategoryIndices
        , emptyCategoryIndices
        , index
        )

import Data.Category as Category exposing (Category)
import EveryDict exposing (EveryDict)


type alias CategoryIndices =
    { slug : EveryDict Category.Slug Category.Id
    }


emptyCategoryIndices : CategoryIndices
emptyCategoryIndices =
    { slug = EveryDict.empty
    }


index : Category -> CategoryIndices -> CategoryIndices
index category indices =
    { indices | slug = EveryDict.insert category.slug category.id indices.slug }
