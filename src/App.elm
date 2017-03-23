module App exposing (..)

import Navigation
import Model exposing (Model, Flags, init)
import Msg exposing (Msg(..))
import Types.Store as Store
import Routes exposing (parseHash, Sitemap)
import Update
import Dict exposing (Dict)
import Phoenix
import Phoenix.Socket as Socket exposing (Socket)
import Phoenix.Channel as Channel exposing (Channel)
import Json.Encode as Encode


init : Flags -> Navigation.Location -> ( Model, Cmd Msg )
init flags location =
    let
        initialModel =
            Model.init flags (parseHash location)

        modelWithHome =
            { initialModel
                | channels =
                    Dict.insert "store:home"
                        (storeHomeChannel
                            "knewter"
                        )
                        initialModel.channels
            }

        ( model, cmd ) =
            Update.handleRoute
                (parseHash location)
                modelWithHome
    in
        ( model, cmd )


subscriptions : Model -> Sub Msg
subscriptions model =
    let
        connect =
            Phoenix.connect model.socket

        channels =
            model.channels
                |> Dict.toList
                |> List.map (\( _, v ) -> v)

        storeEntityChannels =
            model.store
                |> Store.channels StoreMsg

        channelsSub =
            Phoenix.connect model.socket (channels ++ storeEntityChannels)
    in
        -- case model.state of
        -- JoiningLobby ->
        --     connect [ lobby "knewter" ]
        --
        -- JoinedLobby ->
        --     connect [ lobby "knewter" ]
        --
        -- we already open the socket connection so that we can faster join the lobby
        -- _ ->
        channelsSub


storeHomeChannel : String -> Channel Msg
storeHomeChannel userName =
    Channel.init "store:home"
        |> Channel.withPayload (Encode.object [ ( "user_name", Encode.string userName ) ])
        |> Channel.onJoin (\_ -> RequestHomeData)
        -- |> Channel.onJoinError (\_ -> UserNameTaken)
        -- |> Channel.onLeave (\_ -> UpdateState LeftLobby)
        -- |> Channel.on "new_msg" NewMsg
        -- |> Channel.on "user_joined" UserJoinedMsg
        |>
            Channel.withDebug
