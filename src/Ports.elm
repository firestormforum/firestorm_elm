port module Ports exposing (setBodyClass, setTitle)

import Json.Encode as Encode


setTitle : String -> Cmd msg
setTitle =
    Encode.string
        >> outboundWithPayload "SetTitle"


setBodyClass : String -> Cmd msg
setBodyClass =
    Encode.string
        >> outboundWithPayload "SetBodyClass"


outboundWithPayload : String -> Encode.Value -> Cmd msg
outboundWithPayload type_ payload =
    [ ( "type", Encode.string type_ )
    , ( "payload", payload )
    ]
        |> Encode.object
        |> outbound


port outbound : Encode.Value -> Cmd msg
