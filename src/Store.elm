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
        , getUser
        , getUserByUsername
        , getUserForThread
        , insertCategory
        , insertPost
        , insertThread
        , insertUser
        , posts
        , threads
        )

import Data.Category as Category exposing (Category)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import EveryDict exposing (EveryDict)
import Store.Indices as Indices
    exposing
        ( Indices
        , emptyIndices
        , indexCategory
        , indexThread
        , indexUser
        )


type Store
    = Store
        { categories : EveryDict Category.Id Category
        , threads : EveryDict Thread.Id Thread
        , posts : EveryDict Post.Id Post
        , users : EveryDict User.Id User
        , indices : Indices
        }


empty : Store
empty =
    Store
        { categories = EveryDict.empty
        , threads = EveryDict.empty
        , posts = EveryDict.empty
        , users = EveryDict.empty
        , indices = emptyIndices
        }


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


insertUser : User -> Store -> Store
insertUser user (Store ({ users, indices } as store)) =
    let
        nextUsers =
            users
                |> EveryDict.insert user.id user

        nextIndices =
            indices
                |> indexUser user
    in
    Store { store | users = nextUsers, indices = nextIndices }


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


getUser : User.Id -> Store -> Maybe User
getUser id (Store { users }) =
    users
        |> EveryDict.get id


getUserByUsername : User.Username -> Store -> Maybe User
getUserByUsername username ((Store { users, indices }) as store) =
    indices
        |> getUserIdByUsername username
        |> Maybe.andThen (flip getUser <| store)


getUserIdByUsername : User.Username -> Indices -> Maybe User.Id
getUserIdByUsername username { users } =
    users.username
        |> EveryDict.get username


getUserForThread : Thread.Id -> Store -> Maybe User
getUserForThread id store =
    store
        |> posts id
        |> List.head
        |> Maybe.andThen (\p -> getUser p.userId store)


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
