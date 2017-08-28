module App exposing (..)

import Api
import Data.ReplenishRequest as ReplenishRequest exposing (ReplenishRequest)
import Data.ReplenishResponse as ReplenishResponse
import Http
import Json.Decode as JD exposing (Value)
import Json.Encode as JE
import Model exposing (Model)
import Msg exposing (Msg(..))
import Navigation exposing (Location)
import Phoenix
import Phoenix.Channel as Channel exposing (Channel)
import Phoenix.Push as Push exposing (Push)
import Phoenix.Socket as Socket exposing (Socket)
import Ports
import Route exposing (Route(..))
import Store
import Time
import Title


socketLocation : String
socketLocation =
    "ws://localhost:4000/socket/websocket"


socket : Socket Msg
socket =
    Socket.init socketLocation


channel : Channel Msg
channel =
    Channel.init "store:fetch"
        |> Channel.onJoin IsOnline


loadIntoStore : Value -> Msg
loadIntoStore =
    ReplenishResponse.decode >> LoadIntoStore


getFirstCategory : ReplenishRequest
getFirstCategory =
    ReplenishRequest.empty
        |> ReplenishRequest.requestCategory 1


fetch : ReplenishRequest -> Cmd Msg
fetch request =
    Push.init "store:fetch" "fetch"
        |> Push.onOk loadIntoStore
        |> Push.withPayload (ReplenishRequest.encode request)
        |> push


fetchHomeData : Cmd Msg
fetchHomeData =
    Push.init "store:fetch" "fetch_home_data"
        |> Push.onOk loadIntoStore
        |> push


push : Push Msg -> Cmd Msg
push =
    Phoenix.push socketLocation


init : Value -> Location -> ( Model, Cmd Msg )
init value location =
    -- NOTE: value is not yet used but we can pass flags in with it...
    let
        initialRoute =
            case Route.fromLocation location of
                Just route ->
                    route

                Nothing ->
                    Home

        model =
            Model.init initialRoute
    in
    ( model
    , Cmd.batch
        [ Ports.setTitle <| Title.forRoute model.store initialRoute
        , Ports.setBodyClass <| Route.bodyClass model.currentRoute
        ]
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetRoute route ->
            let
                currentRoute =
                    Maybe.withDefault NotFound route
            in
            ( { model | currentRoute = currentRoute }
            , Cmd.batch
                [ Ports.setTitle <| Title.forRoute model.store currentRoute
                , Ports.setBodyClass <| Route.bodyClass currentRoute
                ]
            )

        Tick time ->
            ( { model | currentTime = time }
            , Cmd.none
            )

        NoOp ->
            ( model, Cmd.none )

        IsOnline _ ->
            ( model, fetchHomeData )

        SetUsername username ->
            ( { model | username = username }, Cmd.none )

        SetPassword password ->
            ( { model | password = password }, Cmd.none )

        Msg.Login ->
            let
                handleLogin : Result Http.Error String -> Msg
                handleLogin result =
                    case result of
                        Ok apiToken ->
                            LoginSuccess apiToken

                        Err _ ->
                            NoOp
            in
            ( model
            , Http.send handleLogin
                (Api.login model.username
                    model.password
                )
            )

        LoginSuccess apiToken ->
            ( { model | apiToken = Just apiToken }, Route.newUrl Categories )

        LoadIntoStore replenishResponse ->
            let
                nextStore =
                    model.store
                        |> Store.insertCategories replenishResponse.categories
                        |> Store.insertThreads replenishResponse.threads
                        |> Store.insertUsers replenishResponse.users
                        |> Store.insertPosts replenishResponse.posts
            in
            ( { model | store = nextStore }
            , Cmd.batch
                [ Ports.setTitle <| Title.forRoute nextStore model.currentRoute
                , Ports.setBodyClass <| Route.bodyClass model.currentRoute
                ]
            )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every Time.second Tick
        , Phoenix.connect socket [ channel ]
        ]
