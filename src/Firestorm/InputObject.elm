-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module Firestorm.InputObject exposing (Pagination, PaginationRequiredFields, buildPagination, encodePagination)

import Firestorm.Interface
import Firestorm.Object
import Firestorm.Scalar
import Firestorm.Union
import Graphql.Internal.Builder.Argument as Argument exposing (Argument)
import Graphql.Internal.Builder.Object as Object
import Graphql.Internal.Encode as Encode exposing (Value)
import Graphql.OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet exposing (SelectionSet)
import Json.Decode as Decode


buildPagination : PaginationRequiredFields -> Pagination
buildPagination required =
    { page = required.page, perPage = required.perPage }


type alias PaginationRequiredFields =
    { page : Int
    , perPage : Int
    }


{-| Type for the Pagination input object.
-}
type alias Pagination =
    { page : Int
    , perPage : Int
    }


{-| Encode a Pagination into a value that can be used as an argument.
-}
encodePagination : Pagination -> Value
encodePagination input =
    Encode.maybeObject
        [ ( "page", Encode.int input.page |> Just ), ( "perPage", Encode.int input.perPage |> Just ) ]
