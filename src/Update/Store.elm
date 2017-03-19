module Update.Store exposing (update)

import Types.Store as Store
    exposing
        ( Model
        , Msg(..)
        , unknownCategoryIds
        , unknownThreadIds
        , unknownPostIds
        , unknownUserIds
        )
import Dict
import Api.Fetch


update : String -> Msg -> Model -> ( Model, Cmd Msg )
update apiBaseUrl msg model =
    case msg of
        NewData storeUpdate ->
            let
                nextModel =
                    { model
                        | categories =
                            Dict.union
                                storeUpdate.categories
                                model.categories
                        , threads =
                            Dict.union
                                storeUpdate.threads
                                model.threads
                        , users =
                            Dict.union
                                storeUpdate.users
                                model.users
                        , posts =
                            Dict.union
                                storeUpdate.posts
                                model.posts
                    }
            in
                ( nextModel
                , cmdFor apiBaseUrl nextModel
                )

        NoOp ->
            model ! []


cmdFor : String -> Model -> Cmd Msg
cmdFor apiBaseUrl model =
    let
        -- find any entities that are referenced that we don't know about
        replenishRequest =
            { categories = unknownCategoryIds model
            , threads = unknownThreadIds model
            , posts = unknownPostIds model
            , users = unknownUserIds model
            }

        missingCounts =
            ( List.length replenishRequest.categories
            , List.length replenishRequest.threads
            , List.length replenishRequest.posts
            , List.length replenishRequest.users
            )
    in
        case missingCounts of
            ( 0, 0, 0, 0 ) ->
                Cmd.none

            _ ->
                Api.Fetch.post replenishRequest
                    apiBaseUrl
                    NewData
                    (always NoOp)
