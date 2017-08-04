module Page.User exposing (query, view)

import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, href, id, src)
import Model exposing (Model)
import Store


type alias ViewModel =
    { user : Maybe User
    , currentDate : Date
    }


query : User.Username -> Model -> ViewModel
query username model =
    let
        user =
            model.store
                |> Store.getUserByUsername username
    in
    { user = user
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { currentDate, user } =
    case user of
        Nothing ->
            text "No such user"

        Just user ->
            viewUser currentDate
                user


viewUser : Date -> User -> Html msg
viewUser currentDate user =
    div []
        [ div [ class "user-details" ]
            [ img
                [ src user.avatarUrl
                , class "user-avatar"
                ]
                []
            , div
                [ class "contact" ]
                [ h1 [ class "username" ]
                    [ text <| User.usernameToString user.username ]
                , h3
                    [ class "name" ]
                    [ text user.name ]
                ]
            , hr [] []
            , div
                [ class "meta" ]
                [ ul []
                    [ li []
                        [ strong [] [ text "Joined" ]
                        , text " "
                        , text "something"
                        ]
                    , li []
                        [ strong [] [ text "Last post" ]
                        , text " "
                        , text "something"
                        ]
                    , li []
                        [ strong [] [ text "Last seen" ]
                        , text " "
                        , text "something"
                        ]
                    ]
                ]
            ]
        ]
