module Data.NewPostForm exposing (NewPostForm, new, setBody)


type alias NewPostForm =
    { body : String
    }


new : NewPostForm
new =
    { body = "" }


setBody : String -> NewPostForm -> NewPostForm
setBody body newPostForm =
    { newPostForm
        | body = body
    }
