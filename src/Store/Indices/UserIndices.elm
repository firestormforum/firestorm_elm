module Store.Indices.UserIndices
    exposing
        ( UserIndices
        , emptyUserIndices
        , index
        )

import Data.User as User exposing (User)
import EveryDict exposing (EveryDict)


type alias UserIndices =
    { username : EveryDict User.Username User.Id
    }


emptyUserIndices : UserIndices
emptyUserIndices =
    { username = EveryDict.empty
    }


index : User -> UserIndices -> UserIndices
index user indices =
    { indices
        | username =
            EveryDict.insert user.username
                user.id
                indices.username
    }
