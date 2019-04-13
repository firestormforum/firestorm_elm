-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module Firestorm.Mutation exposing (AuthenticateRequiredArguments, CreateCategoryRequiredArguments, CreatePostRequiredArguments, CreateThreadRequiredArguments, CreateUserRequiredArguments, authenticate, createCategory, createPost, createThread, createUser)

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
import Json.Decode as Decode exposing (Decoder)


type alias AuthenticateRequiredArguments =
    { email : String
    , password : String
    }


{-| Authenticate and receive an authorization token
-}
authenticate : AuthenticateRequiredArguments -> SelectionSet String RootMutation
authenticate requiredArgs =
    Object.selectionForField "authenticate" [ Argument.required "email" requiredArgs.email Encode.string, Argument.required "password" requiredArgs.password Encode.string ] Decode.string


type alias CreateCategoryRequiredArguments =
    { title : String }


{-| Create a category
-}
createCategory : CreateCategoryRequiredArguments -> SelectionSet decodesTo Firestorm.Object.Category -> SelectionSet decodesTo RootMutation
createCategory requiredArgs object_ =
    Object.selectionForCompositeField "createCategory" [ Argument.required "title" requiredArgs.title Encode.string ] object_ identity


type alias CreatePostRequiredArguments =
    { body : String
    , threadId : Firestorm.Scalar.Id
    }


{-| Create a post
-}
createPost : CreatePostRequiredArguments -> SelectionSet decodesTo Firestorm.Object.Post -> SelectionSet decodesTo RootMutation
createPost requiredArgs object_ =
    Object.selectionForCompositeField "createPost" [ Argument.required "body" requiredArgs.body Encode.string, Argument.required "threadId" requiredArgs.threadId (\(Firestorm.Scalar.Id raw) -> Encode.string raw) ] object_ identity


type alias CreateThreadRequiredArguments =
    { body : String
    , categoryId : Firestorm.Scalar.Id
    , title : String
    }


{-| Create a thread
-}
createThread : CreateThreadRequiredArguments -> SelectionSet decodesTo Firestorm.Object.Thread -> SelectionSet decodesTo RootMutation
createThread requiredArgs object_ =
    Object.selectionForCompositeField "createThread" [ Argument.required "body" requiredArgs.body Encode.string, Argument.required "categoryId" requiredArgs.categoryId (\(Firestorm.Scalar.Id raw) -> Encode.string raw), Argument.required "title" requiredArgs.title Encode.string ] object_ identity


type alias CreateUserRequiredArguments =
    { email : String
    , name : String
    , password : String
    , username : String
    }


{-| Create a user
-}
createUser : CreateUserRequiredArguments -> SelectionSet decodesTo Firestorm.Object.User -> SelectionSet decodesTo RootMutation
createUser requiredArgs object_ =
    Object.selectionForCompositeField "createUser" [ Argument.required "email" requiredArgs.email Encode.string, Argument.required "name" requiredArgs.name Encode.string, Argument.required "password" requiredArgs.password Encode.string, Argument.required "username" requiredArgs.username Encode.string ] object_ identity
