module Msg exposing (Msg(..))

import Firestorm.Scalar
import Graphql.Http
import Json.Decode
import Route exposing (Route)
import Types exposing (..)
import Url


type Msg
    = NoOp
    | RoutePushed Route
    | UrlChanged Url.Url
    | GotCategories (Result (Graphql.Http.Error (PaginatedResult Category)) (PaginatedResult Category))
    | GotCategory (Result (Graphql.Http.Error Category) Category)
    | GotThread (Result (Graphql.Http.Error Thread) Thread)
    | SetEmail String
    | SetPassword String
    | Authenticate
    | AuthenticateResponse (Result (Graphql.Http.Error String) String)
    | SetThreadTitle String
    | SetThreadBody String
    | CreateThread Firestorm.Scalar.Id
    | CreateThreadResponse Firestorm.Scalar.Id (Result (Graphql.Http.Error Thread) Thread)
    | SetPostBody String
    | SetNewPostTab NewPostTab
    | CreatePost Firestorm.Scalar.Id Firestorm.Scalar.Id
    | CreatePostResponse Firestorm.Scalar.Id Firestorm.Scalar.Id (Result (Graphql.Http.Error Post) Post)
    | GotSubscriptionData Json.Decode.Value
    | SetNewThreadTab NewPostTab
