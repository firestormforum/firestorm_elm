require('./css/app.scss')
let Elm = require('./Main.elm')

let root = document.getElementById('root')

let flags = {
  apiBaseUrl: "http://localhost:4000/api/v1/"
}

Elm.Main.embed(root, flags)
