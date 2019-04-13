module Subscriptions exposing (categoryAdded, postAdded, threadAdded)

import Firestorm.Scalar
import Firestorm.Subscription as Subscription
import Graphql.Operation exposing (RootSubscription)
import Graphql.SelectionSet exposing (SelectionSet, hardcoded, with)
import Queries exposing (categoryWithoutThreadsSelection, postSelection, threadWithoutPostsSelection)
import Types exposing (..)


categoryAdded : SelectionSet Category RootSubscription
categoryAdded =
    Subscription.categoryAdded categoryWithoutThreadsSelection


threadAdded : Firestorm.Scalar.Id -> SelectionSet Thread RootSubscription
threadAdded categoryId =
    Subscription.threadAdded { categoryId = categoryId } threadWithoutPostsSelection


postAdded : Firestorm.Scalar.Id -> SelectionSet Post RootSubscription
postAdded threadId =
    Subscription.postAdded { threadId = threadId } postSelection
