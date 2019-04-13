module Pages.FourOhFour exposing (layoutConfig)

import Element exposing (text)
import Types exposing (BodyLayout(..))


layoutConfig model =
    { title = "404"
    , scaffoldConfig =
        { appBar = Nothing
        , floatingActionButton = Nothing
        , body = ( Padded, text "404" )
        }
    }
