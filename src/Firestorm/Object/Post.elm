-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module Firestorm.Object.Post exposing (body, id, insertedAt, updatedAt, user)

import Firestorm.InputObject
import Firestorm.Interface
import Firestorm.Object
import Firestorm.Scalar
import Firestorm.Union
import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.Operation exposing (RootMutation, RootQuery, RootSubscription)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (SelectionSet)
import Json.Decode as Decode


body : SelectionSet String Firestorm.Object.Post
body =
    Object.selectionForField "body" [] Decode.string


id : SelectionSet Firestorm.Scalar.Id Firestorm.Object.Post
id =
    Object.selectionForField "id" [] (Object.scalarDecoder |> Decode.map Firestorm.Scalar.Id)


insertedAt : SelectionSet Firestorm.Scalar.DateTime Firestorm.Object.Post
insertedAt =
    Object.selectionForField "insertedAt" [] (Object.scalarDecoder |> Decode.map Firestorm.Scalar.DateTime)


updatedAt : SelectionSet Firestorm.Scalar.DateTime Firestorm.Object.Post
updatedAt =
    Object.selectionForField "updatedAt" [] (Object.scalarDecoder |> Decode.map Firestorm.Scalar.DateTime)


user : SelectionSet decodesTo Firestorm.Object.User -> SelectionSet decodesTo Firestorm.Object.Post
user object_ =
    Object.selectionForCompositeField "user" [] object_ identity
