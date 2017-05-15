module Tests exposing (..)

import Test exposing (..)
import Expect
import String
import App
import Route exposing (Route(..), fromLocation)
import Navigation exposing (Location)


all : Test
all =
    describe "A Test Suite"
        [ test "Model is initialized properly" <|
            \() ->
                Expect.equal (Tuple.first <| App.init "") ()
        , test "no hash -> `Home`" <|
            \() ->
                Expect.equal (parseRoute "") (Just Home)
        , test "`/categories` -> `Categories`" <|
            \() ->
                Expect.equal (parseRoute "/categories") (Just Categories)
        , test "`/categories/foo` -> `Category \"foo\"`" <|
            \() ->
                Expect.equal (parseRoute "/categories/foo")
                    (Just <| Category "foo")
        , test "`/categories/foo/threads/bar` -> `Thread \"foo\" \"bar\"`" <|
            \() ->
                Expect.equal (parseRoute "/categories/foo/threads/bar")
                    (Just <| Thread "foo" "bar")
        ]


parseRoute : String -> Maybe Route
parseRoute =
    hash >> fromLocation


hash : String -> Location
hash h =
    { href = ""
    , host = ""
    , hostname = ""
    , protocol = ""
    , origin = ""
    , port_ = ""
    , pathname = ""
    , search = ""
    , hash = h
    , username = ""
    , password = ""
    }
