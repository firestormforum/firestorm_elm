module Api.Categories exposing (get)

import Api.Helpers as AH
import HttpBuilder exposing (withJsonBody, send, withExpect)
import Http
import Decoders exposing (categoriesAndThreadsAndUsersDecoder)
import Types.Category as Category
import Types.Thread as Thread
import Types.User as User
import Dict exposing (Dict)


get :
    Int
    -> String
    -> (( Dict Int Category.Model, Dict Int Thread.Model, Dict Int User.Model )
        -> msg
       )
    -> (Http.Error -> msg)
    -> Cmd msg
get categoryId apiBaseUrl tagger errorTagger =
    ("categories/" ++ (toString categoryId))
        |> AH.get apiBaseUrl
        |> withExpect (Http.expectJson categoriesAndThreadsAndUsersDecoder)
        |> send (handleGetComplete tagger errorTagger)


handleGetComplete :
    (( Dict Int Category.Model, Dict Int Thread.Model, Dict Int User.Model ) -> msg)
    -> (Http.Error -> msg)
    -> Result Http.Error ( Dict Int Category.Model, Dict Int Thread.Model, Dict Int User.Model )
    -> msg
handleGetComplete tagger errorTagger result =
    case Debug.log "handleGetComplete" result of
        Ok categoriesAndThreadsAndUsers ->
            tagger categoriesAndThreadsAndUsers

        Err error ->
            errorTagger error
