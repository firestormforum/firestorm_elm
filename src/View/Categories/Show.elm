module View.Categories.Show exposing (view)

import Html exposing (..)
import Html.Attributes exposing (..)
import Types.Category as Category


view : Category.Model -> Html msg
view category =
    div
        [ class "category-header" ]
        [ h2 [] [ text category.title ]
        , div [ class "spacer" ] []
        , ul [ class "actions" ]
            [ li []
                [ a [ class "pure-button", href "#" ]
                    [ i [ class "fa fa-plus" ] []
                    , text "New Category"
                    ]
                ]
            , li []
                [ a [ class "pure-button pure-button-primary", href "#" ]
                    [ i [ class "fa fa-plus" ] []
                    , text "New Thread"
                    ]
                ]
            ]
        ]
