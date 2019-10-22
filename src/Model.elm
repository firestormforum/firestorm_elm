module Model exposing
    ( Model
    , categoryAdded
    , clearPostForm
    , clearThreadForm
    , gotCategories
    , gotCategory
    , gotThread
    , gotToken
    , handleNewRoute
    , init
    , postAdded
    , setEmail
    , setNewPostTab
    , setNewThreadTab
    , setPassword
    , setPostBody
    , setThreadBody
    , setThreadTitle
    , threadAdded
    )

import Browser.Navigation as Nav
import Route exposing (Route)
import Types exposing (..)
import Url


type alias Model =
    { key : Nav.Key
    , route : Route
    , categories : List Category
    , category : Maybe Category
    , thread : Maybe Thread
    , endpoint : String
    , authentication : Authentication
    , email : String
    , password : String
    , threadBody : String
    , threadTitle : String
    , newPostTab : NewPostTab
    , postBody : String
    , newThreadTab : NewPostTab
    }


init : Nav.Key -> Url.Url -> String -> Model 
init key url endpoint =
    let
        route =
            Route.fromUrl url
                |> Maybe.withDefault Route.FourOhFour
    in
    { key = key
    , route = route
    , endpoint = endpoint
    , categories = []
    , category = Nothing
    , thread = Nothing
    , authentication = Unauthenticated
    , email = ""
    , password = ""
    , threadBody = ""
    , threadTitle = ""
    , newPostTab = Editor
    , postBody = ""
    , newThreadTab = Editor
    }


handleNewRoute : Route -> Model -> Model
handleNewRoute route model =
    { model | route = route }


gotCategories : PaginatedResult Category -> Model -> Model
gotCategories paginatedResult model =
    { model | categories = paginatedResult.entries }


gotCategory : Category -> Model -> Model
gotCategory category model =
    { model | category = Just category }


gotThread : Thread -> Model -> Model
gotThread thread model =
    { model | thread = Just thread }


setEmail : String -> Model -> Model
setEmail email model =
    { model | email = email }


setPassword : String -> Model -> Model
setPassword password model =
    { model | password = password }


gotToken : String -> Model -> Model
gotToken token model =
    { model | authentication = Authenticated token }


setThreadTitle : String -> Model -> Model
setThreadTitle threadTitle model =
    { model | threadTitle = threadTitle }


setThreadBody : String -> Model -> Model
setThreadBody threadBody model =
    { model | threadBody = threadBody }


clearThreadForm : Model -> Model
clearThreadForm model =
    model
        |> setThreadBody ""
        |> setThreadTitle ""


setPostBody : String -> Model -> Model
setPostBody postBody model =
    { model | postBody = postBody }


setNewPostTab : NewPostTab -> Model -> Model
setNewPostTab newPostTab model =
    { model | newPostTab = newPostTab }


clearPostForm : Model -> Model
clearPostForm model =
    model
        |> setNewPostTab Editor
        |> setPostBody ""


categoryAdded : Category -> Model -> Model
categoryAdded category model =
    { model | categories = [ category ] ++ model.categories }


threadAdded : Thread -> Model -> Model
threadAdded thread model =
    { model | category = model.category |> Maybe.map (\c -> { c | threads = [ thread ] ++ c.threads }) }


postAdded : Post -> Model -> Model
postAdded post model =
    { model | thread = model.thread |> Maybe.map (\t -> { t | posts = t.posts ++ [ post ] }) }


setNewThreadTab : NewPostTab -> Model -> Model
setNewThreadTab newThreadTab model =
    { model | newThreadTab = newThreadTab }
