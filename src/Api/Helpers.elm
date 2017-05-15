module Api.Helpers
    exposing
        ( apiUrl
        , get
        , post
        , authenticatedGet
        , authenticatedPost
        , authenticatedPut
        , authenticatedDelete
        )

import HttpBuilder as HB exposing (RequestBuilder, withHeader, withTimeout)
import Time


apiUrl : String -> String -> String
apiUrl baseUrl url =
    baseUrl ++ url


post : String -> String -> RequestBuilder ()
post baseUrl path =
    apiUrl baseUrl path
        |> HB.post
        |> withDefaultTimeout


authenticatedPost : String -> String -> String -> RequestBuilder ()
authenticatedPost baseUrl apiKey path =
    path
        |> post baseUrl
        |> withAuthorization apiKey


get : String -> String -> RequestBuilder ()
get baseUrl path =
    apiUrl baseUrl path
        |> HB.get
        |> withDefaultTimeout


authenticatedGet : String -> String -> String -> RequestBuilder ()
authenticatedGet baseUrl apiKey path =
    path
        |> get baseUrl
        |> withAuthorization apiKey


authenticatedDelete : String -> String -> String -> RequestBuilder ()
authenticatedDelete baseUrl apiKey path =
    apiUrl baseUrl path
        |> HB.delete
        |> withAuthorization apiKey
        |> withDefaultTimeout


authenticatedPut : String -> String -> String -> RequestBuilder ()
authenticatedPut baseUrl apiKey path =
    apiUrl baseUrl path
        |> HB.put
        |> withAuthorization apiKey
        |> withDefaultTimeout


withDefaultTimeout : RequestBuilder a -> RequestBuilder a
withDefaultTimeout =
    withTimeout (10 * Time.second)


withAuthorization : String -> RequestBuilder a -> RequestBuilder a
withAuthorization apiKey =
    withHeader "Authorization" ("Bearer " ++ apiKey)
