module Queries exposing
    ( authenticateMutation
    , categorySelection
    , categoryWithoutThreadsSelection
    , createPostMutation
    , createThreadMutation
    , getCategoriesQuery
    , getCategoryQuery
    , getThreadQuery
    , postSelection
    , threadWithoutPostsSelection
    )

import Firestorm.Mutation as Mutation
import Firestorm.Object
import Firestorm.Object.Category
import Firestorm.Object.PaginatedCategories
import Firestorm.Object.Post
import Firestorm.Object.Thread
import Firestorm.Object.User
import Firestorm.Query as Query
import Firestorm.Scalar
import Graphql.Operation exposing (RootMutation, RootQuery)
import Graphql.OptionalArgument as OptionalArgument exposing (OptionalArgument(..))
import Graphql.SelectionSet as SelectionSet exposing (SelectionSet, hardcoded, with)
import Iso8601
import Time
import Types exposing (..)



-- The getCategoriesQuery takes a page, and produces a SelectionSet for the RootQuery that produces a PaginatedResult Category


getCategoriesQuery : Int -> SelectionSet (PaginatedResult Category) RootQuery
getCategoriesQuery page =
    -- We use the generated Query.categories function
    Query.categories
        -- It takes a function that can update optional parameters - this is how elm-graphql handles optional arguments, which seems like a neat solution.
        (\optionals ->
            { optionals
                | pagination =
                    Present
                        { page = page
                        , perPage = 20
                        }
            }
        )
        paginatedCategoriesSelection


getCategoryQuery : Firestorm.Scalar.Id -> SelectionSet Category RootQuery
getCategoryQuery categoryId =
    Query.category
        { id = categoryId }
        categorySelection


categorySelection =
    baseCategorySelection <|
        Firestorm.Object.Category.threads
            threadWithoutPostsSelection


threadWithoutPostsSelection =
    baseThreadSelection <|
        SelectionSet.succeed []


baseThreadSelection posts =
    SelectionSet.map3 Thread
        Firestorm.Object.Thread.id
        Firestorm.Object.Thread.title
        posts



-- We map the result of the query to a SelectionSet using one of its mapping functions. There's also a pipeline syntax you can use, but it doesn't give as nice error messages.
-- We select the five fields we're interested in, and we have to map the entries field to another selectionset to specify the fields we want from that field.


paginatedCategoriesSelection =
    SelectionSet.map5 PaginatedResult
        Firestorm.Object.PaginatedCategories.perPage
        Firestorm.Object.PaginatedCategories.page
        Firestorm.Object.PaginatedCategories.totalPages
        Firestorm.Object.PaginatedCategories.totalEntries
        (Firestorm.Object.PaginatedCategories.entries categoryWithoutThreadsSelection)



-- for each category, we get the id and title and produce an empty list of threads


baseCategorySelection threadsSelectionSet =
    SelectionSet.map3 Category
        Firestorm.Object.Category.id
        Firestorm.Object.Category.title
        threadsSelectionSet


categoryWithoutThreadsSelection =
    baseCategorySelection
        (SelectionSet.succeed [])


getThreadQuery : Firestorm.Scalar.Id -> SelectionSet Thread RootQuery
getThreadQuery threadId =
    Query.thread
        { id = threadId }
        threadSelection


threadSelection =
    baseThreadSelection <|
        Firestorm.Object.Thread.posts postSelection


postSelection =
    SelectionSet.map4 Post
        Firestorm.Object.Post.id
        Firestorm.Object.Post.body
        (Firestorm.Object.Post.user userSelection)
        (Firestorm.Object.Post.insertedAt |> SelectionSet.map dateTimeToPosixTime)


dateTimeToPosixTime : Firestorm.Scalar.DateTime -> Time.Posix
dateTimeToPosixTime (Firestorm.Scalar.DateTime dateTimeString) =
    dateTimeString
        |> Iso8601.toTime
        |> Result.withDefault (Time.millisToPosix 0)


userSelection =
    SelectionSet.map3 User
        Firestorm.Object.User.id
        Firestorm.Object.User.username
        Firestorm.Object.User.avatarUrl


authenticateMutation : String -> String -> SelectionSet String RootMutation
authenticateMutation email password =
    Mutation.authenticate { email = email, password = password }


createThreadMutation : Firestorm.Scalar.Id -> String -> String -> SelectionSet Thread RootMutation
createThreadMutation categoryId title body =
    Mutation.createThread
        { categoryId = categoryId, title = title, body = body }
        threadSelection


createPostMutation : Firestorm.Scalar.Id -> String -> SelectionSet Post RootMutation
createPostMutation threadId body =
    Mutation.createPost
        { threadId = threadId, body = body }
        postSelection
