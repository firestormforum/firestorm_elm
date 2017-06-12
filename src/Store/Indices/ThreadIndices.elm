module Store.Indices.ThreadIndices
    exposing
        ( ThreadIndices
        , emptyThreadIndices
        , index
        )

import Data.Thread as Thread exposing (Thread)
import EveryDict exposing (EveryDict)


type alias ThreadIndices =
    { slug : EveryDict Thread.Slug Thread.Id
    }


emptyThreadIndices : ThreadIndices
emptyThreadIndices =
    { slug = EveryDict.empty
    }


index : Thread -> ThreadIndices -> ThreadIndices
index thread indices =
    { indices | slug = EveryDict.insert thread.slug thread.id indices.slug }
