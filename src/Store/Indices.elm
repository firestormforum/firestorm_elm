module Store.Indices
    exposing
        ( Indices
        , emptyIndices
        , indexCategory
        , indexThread
        , indexUser
        )

import Data.Category as Category exposing (Category)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Store.Indices.CategoryIndices as CategoryIndices exposing (CategoryIndices, emptyCategoryIndices)
import Store.Indices.ThreadIndices as ThreadIndices exposing (ThreadIndices, emptyThreadIndices)
import Store.Indices.UserIndices as UserIndices
    exposing
        ( UserIndices
        , emptyUserIndices
        )


type alias Indices =
    { categories : CategoryIndices
    , threads : ThreadIndices
    , users : UserIndices
    }


emptyIndices : Indices
emptyIndices =
    { categories = emptyCategoryIndices
    , threads = emptyThreadIndices
    , users = emptyUserIndices
    }


indexCategory : Category -> Indices -> Indices
indexCategory category ({ categories } as indices) =
    { indices | categories = CategoryIndices.index category categories }


indexThread : Thread -> Indices -> Indices
indexThread thread ({ threads } as indices) =
    { indices | threads = ThreadIndices.index thread threads }


indexUser : User -> Indices -> Indices
indexUser user ({ users } as indices) =
    { indices | users = UserIndices.index user users }
