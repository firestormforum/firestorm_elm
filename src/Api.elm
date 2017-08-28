module Api exposing (login)

import Http
import Json.Decode as JD exposing (Value)
import Json.Encode as JE


apiBaseUrl : String
apiBaseUrl =
    "http://localhost:4000/api/v1"


post : String -> Http.Body -> JD.Decoder a -> Http.Request a
post path =
    Http.post (apiBaseUrl ++ path)


login : String -> String -> Http.Request String
login username password =
    post "/auth/identity"
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
