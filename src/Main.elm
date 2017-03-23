module Main exposing (main)

import App
import Model exposing (Model, Flags)
import Msg exposing (Msg(RouteChanged))
import Navigation exposing (Location)
import View
import Update
import Routes


parseRoute : Location -> Msg
parseRoute =
    Routes.parseHash >> RouteChanged


main : Program Flags Model Msg
main =
    Navigation.programWithFlags parseRoute
        { view = View.view
        , init = App.init
        , update = Update.update
        , subscriptions = App.subscriptions
        }
