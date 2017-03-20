require('./css/app.scss')
let config = require('config')
let Elm = require('./Main.elm')

let root = document.getElementById('root')

let flags = {
  apiBaseUrl: config.apiBaseUrl
}

Elm.Main.embed(root, flags)
