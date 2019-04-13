module Brand exposing
    ( appBarHeight
    , canvasColor
    , cardColor
    , defaultBodyPadding
    , defaultPadding
    , defaultPaddingAmount
    , primaryColor
    , primaryColorBolder
    , primaryTextColor
    , shadowColor
    , subtleTextColor
    , tabbedBodyPadding
    , toElmColor
    , unpaddedBodyPadding
    )

import Color
import Element exposing (padding, rgb255, rgba255)
import Material.Color exposing (..)


primaryColor =
    red500


primaryColorBolder =
    red700


primaryTextColor =
    rgb255 255 255 255


canvasColor =
    rgb255 250 250 250


toElmColor =
    Element.toRgb >> Color.fromRgba


cardColor =
    rgb255 255 255 255


shadowColor =
    rgba255 0 0 0 0.05


subtleTextColor =
    rgb255 200 200 200


defaultPadding =
    padding defaultPaddingAmount


defaultPaddingAmount =
    20


defaultBodyPadding =
    Element.paddingEach
        { top = appBarHeight + defaultPaddingAmount
        , left = defaultPaddingAmount
        , right = defaultPaddingAmount
        , bottom = defaultPaddingAmount
        }


appBarHeight =
    75


tabbedBodyPadding =
    Element.paddingEach
        { top = appBarHeight
        , left = 0
        , right = 0
        , bottom = 0
        }


unpaddedBodyPadding =
    Element.padding 0
