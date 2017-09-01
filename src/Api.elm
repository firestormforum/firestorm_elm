module Api exposing (createPost, login)

import Data.LoginForm exposing (LoginForm)
import Data.NewPostForm exposing (NewPostForm)
import Data.Post as Post exposing (Post)
import Data.Thread as Thread exposing (Thread)
import Http
import Json.Decode as JD exposing (Value)
import Json.Encode as JE


post : String -> String -> Http.Body -> JD.Decoder a -> Http.Request a
post apiBaseUrl path =
    Http.post (apiBaseUrl ++ path)


authenticatedPost : String -> String -> String -> Http.Body -> JD.Decoder a -> Http.Request a
authenticatedPost apiToken apiBaseUrl path body decoder =
    let
        url =
            apiBaseUrl ++ path
    in
    Http.request
        { method = "POST"
        , headers = [ Http.header "authorization" ("Bearer " ++ apiToken) ]
        , url = url
        , body = body
        , expect = Http.expectJson decoder
        , timeout = Nothing
        , withCredentials = False
        }


login : String -> LoginForm -> Http.Request String
login apiBaseUrl { username, password } =
    post apiBaseUrl
        "/auth/identity"
        (Http.jsonBody
            (JE.object
                [ ( "user"
                  , JE.object
                        [ ( "username", JE.string username )
                        , ( "password", JE.string password )
                        ]
                  )
                ]
            )
        )
        (JD.at [ "data", "api_token" ] JD.string)


createPost : String -> String -> NewPostForm -> Thread.Id -> Http.Request Post
createPost apiToken apiBaseUrl { body } threadId =
    authenticatedPost
        apiToken
        apiBaseUrl
        "/posts"
        (Http.jsonBody
            (JE.object
                [ ( "post"
                  , JE.object
                        [ ( "body", JE.string body ) ]
                  )
                , ( "thread_id", Thread.idEncoder threadId )
                ]
            )
        )
        Post.decoder
