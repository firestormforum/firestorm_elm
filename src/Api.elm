module Api exposing
    ( authenticate
    , createPost
    , createThread
    , getCategories
    , getCategory
    , getThread
    )

import Firestorm.Scalar
import Graphql.Http
import Msg exposing (Msg(..))
import Queries


getCategories : String -> Int -> Cmd Msg
getCategories endpoint page =
    Queries.getCategoriesQuery page
        |> Graphql.Http.queryRequest endpoint
        |> Graphql.Http.send GotCategories


getCategory : String -> Firestorm.Scalar.Id -> Cmd Msg
getCategory endpoint categoryId =
    Queries.getCategoryQuery categoryId
        |> Graphql.Http.queryRequest endpoint
        |> Graphql.Http.send GotCategory


getThread : String -> Firestorm.Scalar.Id -> Cmd Msg
getThread endpoint threadId =
    Queries.getThreadQuery threadId
        |> Graphql.Http.queryRequest endpoint
        |> Graphql.Http.send GotThread


authenticate : String -> String -> String -> Cmd Msg
authenticate endpoint email password =
    Queries.authenticateMutation email password
        |> Graphql.Http.mutationRequest endpoint
        |> Graphql.Http.send AuthenticateResponse


createThread : String -> String -> Firestorm.Scalar.Id -> String -> String -> Cmd Msg
createThread endpoint token categoryId title body =
    Queries.createThreadMutation categoryId title body
        |> Graphql.Http.mutationRequest endpoint
        |> withAuthorization token
        |> Graphql.Http.send (CreateThreadResponse categoryId)


createPost : String -> String -> Firestorm.Scalar.Id -> Firestorm.Scalar.Id -> String -> Cmd Msg
createPost endpoint token categoryId threadId body =
    Queries.createPostMutation threadId body
        |> Graphql.Http.mutationRequest endpoint
        |> withAuthorization token
        |> Graphql.Http.send (CreatePostResponse categoryId threadId)


withAuthorization token request =
    request
        |> Graphql.Http.withHeader "authorization" ("Bearer " ++ token)
