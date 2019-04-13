-- Do not manually edit this file, it was auto-generated by dillonkearns/elm-graphql
-- https://github.com/dillonkearns/elm-graphql


module Firestorm.Object.PaginatedCategories exposing (entries, page, perPage, totalEntries, totalPages)

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


entries : SelectionSet decodesTo Firestorm.Object.Category -> SelectionSet (List decodesTo) Firestorm.Object.PaginatedCategories
entries object_ =
    Object.selectionForCompositeField "entries" [] object_ (identity >> Decode.list)


page : SelectionSet Int Firestorm.Object.PaginatedCategories
page =
    Object.selectionForField "page" [] Decode.int


perPage : SelectionSet Int Firestorm.Object.PaginatedCategories
perPage =
    Object.selectionForField "perPage" [] Decode.int


totalEntries : SelectionSet Int Firestorm.Object.PaginatedCategories
totalEntries =
    Object.selectionForField "totalEntries" [] Decode.int


totalPages : SelectionSet Int Firestorm.Object.PaginatedCategories
totalPages =
    Object.selectionForField "totalPages" [] Decode.int
