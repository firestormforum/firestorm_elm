module Helpers exposing (basicDateFormat, idToString, stringToId)

import Firestorm.Scalar
import Time


idToString : Firestorm.Scalar.Id -> String
idToString id =
    case id of
        Firestorm.Scalar.Id idString ->
            idString


stringToId : String -> Firestorm.Scalar.Id
stringToId idString =
    Firestorm.Scalar.Id idString


basicDateFormat : Time.Zone -> Time.Posix -> String
basicDateFormat zone time =
    let
        year =
            Time.toYear zone time

        month =
            Time.toMonth zone time

        day =
            Time.toDay zone time

        hour =
            Time.toHour zone time

        minute =
            Time.toMinute zone time

        second =
            Time.toSecond zone time
    in
    [ String.fromInt year
    , "-"
    , String.fromInt (monthToInt month) |> String.padLeft 2 '0'
    , "-"
    , String.fromInt day |> String.padLeft 2 '0'
    , " "
    , String.fromInt hour |> String.padLeft 2 '0'
    , ":"
    , String.fromInt minute |> String.padLeft 2 '0'
    , ":"
    , String.fromInt second |> String.padLeft 2 '0'
    ]
        |> String.concat


monthToInt : Time.Month -> Int
monthToInt month =
    case month of
        Time.Jan ->
            1

        Time.Feb ->
            2

        Time.Mar ->
            3

        Time.Apr ->
            4

        Time.May ->
            5

        Time.Jun ->
            6

        Time.Jul ->
            7

        Time.Aug ->
            8

        Time.Sep ->
            9

        Time.Oct ->
            10

        Time.Nov ->
            11

        Time.Dec ->
            12
