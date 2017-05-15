module View.Threads.Show exposing (view)

import Html exposing (..)
import Types.User as User
import Types.Post as Post
import Types.Thread as Thread
import Types.Store as Store
import Dict exposing (Dict)
import Components exposing (threadHeader, postList, layoutContent)


view : Store.Model -> User.Model -> Thread.Model -> Html msg
view store user thread =
    layoutContent
        [ threadHeader thread user
        , store
            |> Store.postsForThread thread
            |> postList store
        ]
