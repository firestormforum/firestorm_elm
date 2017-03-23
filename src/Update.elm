module Update exposing (update, handleRoute)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Api.Home
import Api.Fetch
import Types.Store as Store
    exposing
        ( StoreUpdate
        , storeUpdateDecoder
        )
import Update.Store
import Routes exposing (Sitemap(..))
import Phoenix
import Phoenix.Socket as Socket exposing (Socket)
import Phoenix.Channel as Channel exposing (Channel)
import Phoenix.Push as Push
import Dict exposing (Dict)
import Encoders exposing (encodeReplenishRequest)
import Json.Decode as Decode


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        RouteChanged route ->
            ( { model | route = route }, Cmd.none )

        StoreMsg storeMsg ->
            let
                ( nextStore, storeCmd ) =
                    Update.Store.update model.apiBaseUrl storeMsg model.store
            in
                ( { model | store = nextStore }
                , Cmd.map StoreMsg storeCmd
                )

        RequestHomeData ->
            case homeChannelResult model of
                Just homeChannel ->
                    model ! [ Cmd.map StoreMsg <| Phoenix.push model.wsBaseUrl fetchHomeData ]

                Nothing ->
                    model ! []

        RequestFetch replenishRequest ->
            case homeChannelResult model of
                Just homeChannel ->
                    model ! [ Cmd.map StoreMsg <| Store.fetchWants model.store ]

                Nothing ->
                    model ! []


decodeStore value =
    value
        |> Decode.decodeValue storeUpdateDecoder
        |> Result.withDefault Store.newStoreUpdate


fetchHomeData =
    Push.init "store:home" "fetch_home_data"
        |> Push.onOk (decodeStore >> Store.NewData)


homeChannelResult : Model -> Maybe (Channel Msg)
homeChannelResult model =
    model.channels
        |> Dict.get "store:home"


handleRoute : Sitemap -> Model -> ( Model, Cmd Msg )
handleRoute route model =
    case route of
        HomeR ->
            ( model
            , Cmd.none
            )

        CategoryR categoryId ->
            ( model
            , Cmd.map StoreMsg <|
                Api.Fetch.getCategory categoryId
                    model.apiBaseUrl
                    Store.NewData
                    (always Store.NoOp)
            )

        ThreadR categoryId threadId ->
            let
                id =
                    threadId
                        |> String.toInt
                        |> Result.withDefault -1

                store =
                    model.store

                replenishRequest =
                    { categories = []
                    , threads = [ id ]
                    , posts = []
                    , users = []
                    }

                nextStore =
                    store
                        |> Store.wants replenishRequest
            in
                case id of
                    (-1) ->
                        ( model
                        , Cmd.none
                        )

                    _ ->
                        ( { model
                            | store = nextStore
                          }
                        , Cmd.map StoreMsg <|
                            Store.fetchWants nextStore
                        )

        _ ->
            ( model, Cmd.none )
