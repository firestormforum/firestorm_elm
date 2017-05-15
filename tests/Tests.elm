module Tests exposing (..)

import Test exposing (..)
import Expect
import String
import App


all : Test
all =
    describe "A Test Suite"
        [ test "Model is initialized properly" <|
            \() ->
                Expect.equal (Tuple.first <| App.init "") ()
        ]
