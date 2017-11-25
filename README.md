# Firestorm Elm
> An Elm client for the [Firestorm Forum](http://www.firestormforum.org),
> written in Elm by [DailyDrip](https://www.dailydrip.com).

This will eventually be a full-featured Elm client for a
[Phoenix](http://www.phoenixframework.org)-powered Forum engine.

For now, it's the repo where [we're](https://www.dailydrip.com) building out the
client in screencasts as a means for people to learn more about the Elm
programming language.

---

This project is bootstrapped with [Create Elm App](https://github.com/halfzebra/create-elm-app).

## Using

### Dependencies

- Elm version at least 0.18.0.

You can use [asdf](https://github.com/asdf-vm/asdf) to help you manage you elm version.

- [elm-github-install](https://github.com/gdotdesign/elm-github-install)

```sh
 npm nstall elm-github-install -g
```

- [create-elm-app](https://github.com/halfzebra/create-elm-app)

```sh
npm install create-elm-app -g
```

### Running

```sh
yarn start
```

### Build

Once you have installed the dependencies, you will be able to build the app. To build the app, use [build.sh].


## Installing Elm packages

```sh
elm-app package install <package-name>
```

## Installing JavaScript packages

To use JavaScript packages from npm, you'll need to add a `package.json`, install the dependencies, and you're ready to go.

```sh
npm init -y # Add package.json
npm install --save-dev pouchdb-browser # Install library from npm
```

```js
// Use in your JS code
var PouchDB = require('pouchdb-browser');
var db = new PouchDB('mydb');
```

## Available scripts
In the project directory you can run:
### `elm-app build`
Builds the app for production to the `dist` folder.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

### `elm-app start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `elm-app test`
Run tests with [node-test-runner](https://github.com/rtfeldman/node-test-runner/tree/master)

You can make test runner watch project files by running:
```sh
elm-app test --watch
```

#### `package`
Alias for [elm-package](http://guide.elm-lang.org/get_started.html#elm-package)

Use it for installing Elm packages from [package.elm-lang.org](http://package.elm-lang.org/)

#### `repl`
Alias for [elm-repl](http://guide.elm-lang.org/get_started.html#elm-repl)

#### `make`
Alias for  [elm-make](http://guide.elm-lang.org/get_started.html#elm-make)

#### `reactor`
Alias for  [elm-reactor](http://guide.elm-lang.org/get_started.html#elm-reactor)

## Adding Images and Fonts

With Webpack, using static assets like images and fonts works similarly to CSS.

By requiring an image in JavaScript code, you tell Webpack to add a file to the build of your application. The variable will contain a unique path to the said file.

Here is an example:

```js
require('./main.css');
var logoPath = require('./logo.svg'); // Tell Webpack this JS file uses this image
var Elm = require('./Main.elm');

var root = document.getElementById('root');

Elm.Main.embed(root, logoPath); // Pass image path as a flag.
```
Later on, you can use the image path in your view for displaying it in the DOM.

```elm
view : Model -> Html Msg
view model =
    div []
        [ img [ src model.logo ] []
        , div [] [ text model.message ]
        ]
```


## IDE setup for Hot Module Replacement
Remember to disable [safe write](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you are using VIM or IntelliJ IDE, such as WebStrom.
