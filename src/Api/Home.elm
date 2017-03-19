module Api.Home exposing (index)

import Api.Helpers
    exposing
        ( get
        )
import HttpBuilder exposing (withJsonBody, send, withExpect)
import Http
import Decoders exposing (storeUpdateDecoder)
import Types.Store as Store exposing (StoreUpdate)


index :
    String
    -> (StoreUpdate -> msg)
    -> (Http.Error -> msg)
    -> Cmd msg
index apiBaseUrl tagger errorTagger =
    "home"
        |> get apiBaseUrl
        |> withExpect (Http.expectJson storeUpdateDecoder)
        |> send (handleGetHomeComplete tagger errorTagger)


handleGetHomeComplete :
    (StoreUpdate -> msg)
    -> (Http.Error -> msg)
    -> Result Http.Error StoreUpdate
    -> msg
handleGetHomeComplete tagger errorTagger result =
    case Debug.log "handleGetHomeComplete" result of
        Ok storeUpdate ->
            tagger storeUpdate

        Err error ->
            errorTagger error
