module Store.Indices exposing (Indices, emptyIndices, indexCategory, indexThread)

import Data.Category as Category exposing (Category, mockCategory)
import Data.Thread as Thread exposing (Thread, mockThread)
import EveryDict exposing (EveryDict)
import Store.Indices.CategoryIndices as CategoryIndices exposing (CategoryIndices, emptyCategoryIndices)
import Store.Indices.ThreadIndices as ThreadIndices exposing (ThreadIndices, emptyThreadIndices)


type alias ThreadIndices =
    { slug : EveryDict Thread.Slug Thread.Id
    }


emptyThreadIndices : ThreadIndices
emptyThreadIndices =
    { slug = EveryDict.empty
    }


type alias Indices =
    { categories : CategoryIndices
    , threads : ThreadIndices
    }


emptyIndices : Indices
emptyIndices =
    { categories = emptyCategoryIndices
    , threads = emptyThreadIndices
    }


indexCategory : Category -> Indices -> Indices
indexCategory category ({ categories } as indices) =
    { indices | categories = CategoryIndices.index category categories }


indexThread : Thread -> Indices -> Indices
indexThread thread ({ threads } as indices) =
    { indices | threads = ThreadIndices.index thread threads }
