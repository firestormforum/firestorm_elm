module Store
    exposing
        ( Store
        , categories
        , empty
        , getCategory
        , getCategoryBySlug
        , getPost
        , getThread
        , getThreadBySlug
        , insertCategory
        , insertPost
        , insertThread
        , mock
        , posts
        , threads
        )

import Data.Category as Category exposing (Category, mockCategory)
import Data.Post as Post exposing (Post, mockPost)
import Data.Thread as Thread exposing (Thread, mockThread)
import EveryDict exposing (EveryDict)
import Store.Indices as Indices
    exposing
        ( Indices
        , emptyIndices
        , indexCategory
        , indexThread
        )


type Store
    = Store
        { categories : EveryDict Category.Id Category
        , threads : EveryDict Thread.Id Thread
        , posts : EveryDict Post.Id Post
        , indices : Indices
        }


empty : Store
empty =
    Store
        { categories = EveryDict.empty
        , threads = EveryDict.empty
        , posts = EveryDict.empty
        , indices = emptyIndices
        }


mock : Store
mock =
    empty
        |> insertCategory mockCategory
        |> insertThread mockThread
        |> insertPost mockPost


insertCategory : Category -> Store -> Store
insertCategory category (Store ({ categories, indices } as store)) =
    let
        nextCategories =
            categories
                |> EveryDict.insert category.id category

        nextIndices =
            indices
                |> indexCategory category
    in
    Store { store | categories = nextCategories, indices = nextIndices }


insertThread : Thread -> Store -> Store
insertThread thread (Store ({ threads, indices } as store)) =
    let
        nextThreads =
            threads
                |> EveryDict.insert thread.id thread

        nextIndices =
            indices
                |> indexThread thread
    in
    Store { store | threads = nextThreads, indices = nextIndices }


insertPost : Post -> Store -> Store
insertPost post (Store ({ posts, indices } as store)) =
    let
        nextPosts =
            posts
                |> EveryDict.insert post.id post
    in
    Store { store | posts = nextPosts }


getCategory : Category.Id -> Store -> Maybe Category
getCategory id (Store { categories }) =
    categories
        |> EveryDict.get id


getCategoryBySlug : Category.Slug -> Store -> Maybe Category
getCategoryBySlug slug ((Store { categories, indices }) as store) =
    indices
        |> getCategoryIdBySlug slug
        |> Maybe.andThen (flip getCategory <| store)


getCategoryIdBySlug : Category.Slug -> Indices -> Maybe Category.Id
getCategoryIdBySlug slug { categories } =
    categories.slug
        |> EveryDict.get slug


getThread : Thread.Id -> Store -> Maybe Thread
getThread id (Store { threads }) =
    threads
        |> EveryDict.get id


getThreadBySlug : Thread.Slug -> Store -> Maybe Thread
getThreadBySlug slug ((Store { threads, indices }) as store) =
    indices
        |> getThreadIdBySlug slug
        |> Maybe.andThen (flip getThread <| store)


getThreadIdBySlug : Thread.Slug -> Indices -> Maybe Thread.Id
getThreadIdBySlug slug { threads } =
    threads.slug
        |> EveryDict.get slug


getPost : Post.Id -> Store -> Maybe Post
getPost id (Store { posts }) =
    posts
        |> EveryDict.get id


categories : Store -> List Category
categories (Store { categories }) =
    EveryDict.values categories


threads : Category.Id -> Store -> List Thread
threads categoryId (Store { threads }) =
    threads
        |> EveryDict.filter (\_ t -> t.categoryId == categoryId)
        |> EveryDict.values


posts : Thread.Id -> Store -> List Post
posts threadId (Store { posts }) =
    posts
        |> EveryDict.filter (\_ t -> t.threadId == threadId)
        |> EveryDict.values
