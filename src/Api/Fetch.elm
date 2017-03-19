module Api.Fetch exposing (getCategory, post)

import Api.Helpers as AH
import HttpBuilder exposing (withJsonBody, send, withExpect)
import Http
import Decoders exposing (storeUpdateDecoder)
import Encoders exposing (encodeReplenishRequest)
import Types.Store as Store exposing (StoreUpdate, ReplenishRequest)
import Json.Encode as Encode


post :
    ReplenishRequest
    -> String
    -> (StoreUpdate -> msg)
    -> (Http.Error -> msg)
    -> Cmd msg
post replenishRequest apiBaseUrl tagger errorTagger =
    "fetch"
        |> AH.post apiBaseUrl
        |> withJsonBody (encodeReplenishRequest replenishRequest)
        |> withExpect (Http.expectJson storeUpdateDecoder)
        |> send (handleGetComplete tagger errorTagger)


getCategory :
    String
    -> String
    -> (StoreUpdate -> msg)
    -> (Http.Error -> msg)
    -> Cmd msg
getCategory categoryFinder apiBaseUrl tagger errorTagger =
    "fetch"
        |> AH.post apiBaseUrl
        |> withJsonBody
            (Encode.object
                [ ( "categories"
                  , Encode.list
                        [ Encode.string categoryFinder ]
                  )
                ]
            )
        |> withExpect (Http.expectJson storeUpdateDecoder)
        |> send (handleGetComplete tagger errorTagger)


handleGetComplete :
    (StoreUpdate -> msg)
    -> (Http.Error -> msg)
    -> Result Http.Error StoreUpdate
    -> msg
handleGetComplete tagger errorTagger result =
    case Debug.log "handleGetComplete" result of
        Ok storeUpdate ->
            tagger storeUpdate

        Err error ->
            errorTagger error
