module Page.NewPost exposing (query, view)

import Data.Category as Category exposing (Category)
import Data.Thread as Thread exposing (Thread)
import Data.User as User exposing (User)
import Date exposing (Date)
import Html exposing (..)
import Html.Attributes
    exposing
        ( attribute
        , class
        , href
        , id
        , name
        , placeholder
        , rows
        , src
        , type_
        )
import Model exposing (Model)
import Route
import Store


type alias ViewModel =
    { category : Maybe Category
    , thread : Maybe Thread
    , user : Maybe User
    , currentDate : Date
    }


query : Category.Slug -> Thread.Slug -> Model -> ViewModel
query categorySlug threadSlug model =
    let
        category =
            model.store
                |> Store.getCategoryBySlug categorySlug

        thread =
            model.store
                |> Store.getThreadBySlug threadSlug

        posts =
            thread
                |> Maybe.map (\t -> Store.posts t.id model.store)
                |> Maybe.withDefault []

        user =
            case posts of
                firstPost :: _ ->
                    model.store
                        |> Store.getUser firstPost.userId

                _ ->
                    Nothing
    in
    { category = category
    , thread = thread
    , user = user
    , currentDate = Date.fromTime model.currentTime
    }


view : ViewModel -> Html msg
view { currentDate, category, thread, user } =
    case category of
        Nothing ->
            text "No such category"

        Just category ->
            case thread of
                Nothing ->
                    text "No such thread"

                Just thread ->
                    case user of
                        Just user ->
                            viewNewPost currentDate
                                category
                                thread
                                user

                        Nothing ->
                            text "No user"


viewNewPost : Date -> Category -> Thread -> User -> Html msg
viewNewPost currentDate category thread user =
    div []
        [ h2 [] [ text "New Post" ]
        , form [ class "post-editor" ]
            [ textarea
                [ id "post-body"
                , name "post[body]"
                , placeholder "Type post content here. Use markdown syntax."
                , rows 4
                , class "autoexpand"
                , attribute "data-min-rows" "4"
                ]
                []
            , div
                [ class "action-bar" ]
                [ div
                    [ class "begin" ]
                    [ div
                        [ class "add-attachment" ]
                        [ label
                            [ class "pure-button button-primary -inverted attachment" ]
                            [ input [ type_ "file" ] []
                            , i [ class "fa fa-paperclip" ] []
                            ]
                        ]
                    ]
                , div
                    [ class "end" ]
                    [ a
                        [ Route.href <| Route.Thread category.slug thread.slug
                        , class "pure-button button-primary -muted cancel"
                        ]
                        [ text "Cancel" ]
                    , button
                        [ class "pure-button button-primary reply" ]
                        [ i
                            [ class "fa fa-mail-reply" ]
                            []
                        , text " Reply"
                        ]
                    ]
                ]
            ]
        ]



--     <div class="end">
--       <%= link "Cancel", to: category_thread_path(@conn, :show, @category, @thread), class: "pure-button button-primary -muted cancel" %>
--       <%= submit class: "pure-button button-primary reply" do %>
--         <i class="fa fa-mail-reply"></i>
--         Reply
--       <% end %>
--     </div>
--   </div>
-- <% end %>
--
-- <div class="post-preview">
--   <h3>Preview</h3>
--   <div class="content"></div>
-- </div>
