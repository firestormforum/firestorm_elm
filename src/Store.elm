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
        , mock
        , posts
        , threads
        )

import Data.Category as Category exposing (Category, mockCategory)
import Data.Post as Post exposing (Post, mockPost)
import Data.Thread as Thread exposing (Thread, mockThread)
import EveryDict exposing (EveryDict)


type Store
    = Store
        { categories : EveryDict Category.Id Category
        , threads : EveryDict Thread.Id Thread
        , posts : EveryDict Post.Id Post
        }


empty : Store
empty =
    Store
        { categories = EveryDict.empty
        , threads = EveryDict.empty
        , posts = EveryDict.empty
        }


mock : Store
mock =
    Store
        { categories = mockCategories
        , threads = mockThreads
        , posts = mockPosts
        }


mockCategories : EveryDict Category.Id Category
mockCategories =
    EveryDict.empty
        |> EveryDict.insert mockCategory.id mockCategory


mockThreads : EveryDict Thread.Id Thread
mockThreads =
    EveryDict.empty
        |> EveryDict.insert mockThread.id mockThread


mockPosts : EveryDict Post.Id Post
mockPosts =
    EveryDict.empty
        |> EveryDict.insert mockPost.id mockPost


getCategory : Category.Id -> Store -> Maybe Category
getCategory id (Store { categories }) =
    categories
        |> EveryDict.get id


getCategoryBySlug : Category.Slug -> Store -> Maybe Category
getCategoryBySlug slug (Store { categories }) =
    Just Category.mockCategory


getThread : Thread.Id -> Store -> Maybe Thread
getThread id (Store { threads }) =
    threads
        |> EveryDict.get id


getThreadBySlug : Thread.Slug -> Store -> Maybe Thread
getThreadBySlug slug (Store { threads }) =
    Just Thread.mockThread


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
