module App exposing (..)

import Data.ReplenishResponse as ReplenishResponse
import Json.Decode as JD exposing (Value)
import Json.Encode as JE
import Model exposing (Model)
import Msg exposing (Msg(..))
import Navigation exposing (Location)
import Phoenix
import Phoenix.Channel as Channel exposing (Channel)
import Phoenix.Push as Push
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
        |> Channel.on "new_msg" (always NoOp)


loadIntoStore : Value -> Msg
loadIntoStore value =
    let
        replenishResponse =
            value
                |> JD.decodeValue ReplenishResponse.decoder
                |> Result.withDefault ReplenishResponse.new
    in
    LoadIntoStore replenishResponse


giveMeFirstCategory : Cmd Msg
giveMeFirstCategory =
    Push.init "store:fetch" "fetch"
        |> Push.onOk
            loadIntoStore
        |> Push.withPayload
            (JE.object
                [ ( "categories"
                  , JE.list
                        [ JE.int 1
                        ]
                  )
                , ( "threads", JE.list [] )
                , ( "users", JE.list [] )
                , ( "posts", JE.list [] )
                ]
            )
        |> Phoenix.push socketLocation


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
    in
    ( Model.init initialRoute
    , Ports.setTitle (Title.forRoute initialRoute)
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
            , Ports.setTitle <| Title.forRoute currentRoute
            )

        Tick time ->
            ( { model | currentTime = time }
            , Cmd.none
            )

        NoOp ->
            ( model, Cmd.none )

        IsOnline _ ->
            ( model, giveMeFirstCategory )

        LoadIntoStore replenishResponse ->
            let
                nextStore =
                    Store.insertCategories replenishResponse.categories model.store
            in
            ( { model | store = nextStore }, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Time.every Time.second Tick
        , Phoenix.connect socket [ channel ]
        ]
