/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/firestorm_elm/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2)
	let config = __webpack_require__(17)
	let Elm = __webpack_require__(18)

	let root = document.getElementById('root')

	let flags = {
	  apiBaseUrl: config.apiBaseUrl
	}

	Elm.Main.embed(root, flags)


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/import-glob-loader/index.js!./app.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/import-glob-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/* fira-sans-300 - latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 300;\n  src: local(\"Fira Sans Light\"), local(\"FiraSans-Light\"), url(" + __webpack_require__(5) + ") format(\"woff2\"), url(" + __webpack_require__(6) + ") format(\"woff\");\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }\n\n/* fira-sans-regular - latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(\"Fira Sans Regular\"), local(\"FiraSans-Regular\"), url(" + __webpack_require__(7) + ") format(\"woff2\"), url(" + __webpack_require__(8) + ") format(\"woff\");\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }\n\n/* fira-sans-500 - latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 500;\n  src: local(\"Fira Sans Medium\"), local(\"FiraSans-Medium\"), url(" + __webpack_require__(9) + ") format(\"woff2\"), url(" + __webpack_require__(10) + ") format(\"woff\");\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }\n\n/* fira-sans-600 - latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 600;\n  src: local(\"Fira Sans SemiBold\"), local(\"FiraSans-SemiBold\"), url(" + __webpack_require__(11) + ") format(\"woff2\"), url(" + __webpack_require__(12) + ") format(\"woff\");\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }\n\n/* fira-sans-700 - latin */\n@font-face {\n  font-family: 'Fira Sans';\n  font-style: normal;\n  font-weight: 700;\n  src: local(\"Fira Sans Bold\"), local(\"FiraSans-Bold\"), url(" + __webpack_require__(13) + ") format(\"woff2\"), url(" + __webpack_require__(14) + ") format(\"woff\");\n  /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */ }\n\n/*!\nPure v0.6.2\nCopyright 2013 Yahoo!\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n.pure-button:focus, a:active, a:hover {\n  outline: 0; }\n\n.pure-table, table {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, optgroup, strong {\n  font-weight: 700; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: .67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -.5em; }\n\nsub {\n  bottom: -.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre, textarea {\n  overflow: auto; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,monospace;\n  font-size: 1em; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\n.pure-button, input {\n  line-height: normal; }\n\nbutton {\n  overflow: visible; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=button], input[type=reset], input[type=submit] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput[type=checkbox], input[type=radio] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\n.pure-button, .pure-form input:not([type]), .pure-menu {\n  box-sizing: border-box; }\n\ninput[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid silver;\n  margin: 0 2px;\n  padding: .35em .625em .75em; }\n\nlegend, td, th {\n  padding: 0; }\n\nlegend {\n  border: 0; }\n\n.hidden, [hidden] {\n  display: none !important; }\n\n.pure-img {\n  max-width: 100%;\n  height: auto;\n  display: block; }\n\n.pure-g {\n  letter-spacing: -.31em;\n  text-rendering: optimizespeed;\n  font-family: FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-flow: row wrap;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start; }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  table .pure-g {\n    display: block; } }\n\n.opera-only :-o-prefocus, .pure-g {\n  word-spacing: -.43em; }\n\n.pure-u, .pure-u-1, .pure-u-1-1, .pure-u-1-12, .pure-u-1-2, .pure-u-1-24, .pure-u-1-3, .pure-u-1-4, .pure-u-1-5, .pure-u-1-6, .pure-u-1-8, .pure-u-10-24, .pure-u-11-12, .pure-u-11-24, .pure-u-12-24, .pure-u-13-24, .pure-u-14-24, .pure-u-15-24, .pure-u-16-24, .pure-u-17-24, .pure-u-18-24, .pure-u-19-24, .pure-u-2-24, .pure-u-2-3, .pure-u-2-5, .pure-u-20-24, .pure-u-21-24, .pure-u-22-24, .pure-u-23-24, .pure-u-24-24, .pure-u-3-24, .pure-u-3-4, .pure-u-3-5, .pure-u-3-8, .pure-u-4-24, .pure-u-4-5, .pure-u-5-12, .pure-u-5-24, .pure-u-5-5, .pure-u-5-6, .pure-u-5-8, .pure-u-6-24, .pure-u-7-12, .pure-u-7-24, .pure-u-7-8, .pure-u-8-24, .pure-u-9-24 {\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n  display: inline-block;\n  zoom: 1; }\n\n.pure-g [class*=pure-u] {\n  font-family: sans-serif; }\n\n.pure-u-1-24 {\n  width: 4.1667%; }\n\n.pure-u-1-12, .pure-u-2-24 {\n  width: 8.3333%; }\n\n.pure-u-1-8, .pure-u-3-24 {\n  width: 12.5%; }\n\n.pure-u-1-6, .pure-u-4-24 {\n  width: 16.6667%; }\n\n.pure-u-1-5 {\n  width: 20%; }\n\n.pure-u-5-24 {\n  width: 20.8333%; }\n\n.pure-u-1-4, .pure-u-6-24 {\n  width: 25%; }\n\n.pure-u-7-24 {\n  width: 29.1667%; }\n\n.pure-u-1-3, .pure-u-8-24 {\n  width: 33.3333%; }\n\n.pure-u-3-8, .pure-u-9-24 {\n  width: 37.5%; }\n\n.pure-u-2-5 {\n  width: 40%; }\n\n.pure-u-10-24, .pure-u-5-12 {\n  width: 41.6667%; }\n\n.pure-u-11-24 {\n  width: 45.8333%; }\n\n.pure-u-1-2, .pure-u-12-24 {\n  width: 50%; }\n\n.pure-u-13-24 {\n  width: 54.1667%; }\n\n.pure-u-14-24, .pure-u-7-12 {\n  width: 58.3333%; }\n\n.pure-u-3-5 {\n  width: 60%; }\n\n.pure-u-15-24, .pure-u-5-8 {\n  width: 62.5%; }\n\n.pure-u-16-24, .pure-u-2-3 {\n  width: 66.6667%; }\n\n.pure-u-17-24 {\n  width: 70.8333%; }\n\n.pure-u-18-24, .pure-u-3-4 {\n  width: 75%; }\n\n.pure-u-19-24 {\n  width: 79.1667%; }\n\n.pure-u-4-5 {\n  width: 80%; }\n\n.pure-u-20-24, .pure-u-5-6 {\n  width: 83.3333%; }\n\n.pure-u-21-24, .pure-u-7-8 {\n  width: 87.5%; }\n\n.pure-u-11-12, .pure-u-22-24 {\n  width: 91.6667%; }\n\n.pure-u-23-24 {\n  width: 95.8333%; }\n\n.pure-u-1, .pure-u-1-1, .pure-u-24-24, .pure-u-5-5 {\n  width: 100%; }\n\n.pure-button {\n  display: inline-block;\n  zoom: 1;\n  white-space: nowrap;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.pure-button::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\n.pure-button-group {\n  letter-spacing: -.31em;\n  text-rendering: optimizespeed; }\n\n.opera-only :-o-prefocus, .pure-button-group {\n  word-spacing: -.43em; }\n\n.pure-button {\n  font-family: inherit;\n  font-size: 100%;\n  padding: .5em 1em;\n  color: #444;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid #999;\n  border: transparent;\n  background-color: #E6E6E6;\n  text-decoration: none;\n  border-radius: 2px; }\n\n.pure-button-hover, .pure-button:focus, .pure-button:hover {\n  filter: alpha(opacity=90);\n  background-image: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1));\n  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1)); }\n\n.pure-button-active, .pure-button:active {\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0 6px rgba(0, 0, 0, 0.2) inset;\n  border-color: #000\\9; }\n\n.pure-button-disabled, .pure-button-disabled:active, .pure-button-disabled:focus, .pure-button-disabled:hover, .pure-button[disabled] {\n  border: none;\n  background-image: none;\n  filter: alpha(opacity=40);\n  opacity: .4;\n  cursor: not-allowed;\n  box-shadow: none;\n  pointer-events: none; }\n\n.pure-button-hidden {\n  display: none; }\n\n.pure-button-primary, .pure-button-selected, a.pure-button-primary, a.pure-button-selected {\n  background-color: #0078e7;\n  color: #fff; }\n\n.pure-button-group .pure-button {\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n  margin: 0;\n  border-radius: 0;\n  border-right: 1px solid #111;\n  border-right: 1px solid rgba(0, 0, 0, 0.2); }\n\n.pure-button-group .pure-button:first-child {\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px; }\n\n.pure-button-group .pure-button:last-child {\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  border-right: none; }\n\n.pure-form input[type=password], .pure-form input[type=email], .pure-form input[type=url], .pure-form input[type=date], .pure-form input[type=month], .pure-form input[type=time], .pure-form input[type=datetime], .pure-form input[type=datetime-local], .pure-form input[type=week], .pure-form input[type=tel], .pure-form input[type=color], .pure-form input[type=number], .pure-form input[type=search], .pure-form input[type=text], .pure-form select, .pure-form textarea {\n  padding: .5em .6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 3px #ddd;\n  border-radius: 4px;\n  vertical-align: middle;\n  box-sizing: border-box; }\n\n.pure-form input:not([type]) {\n  padding: .5em .6em;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-shadow: inset 0 1px 3px #ddd;\n  border-radius: 4px; }\n\n.pure-form input[type=color] {\n  padding: .2em .5em; }\n\n.pure-form input:not([type]):focus, .pure-form input[type=password]:focus, .pure-form input[type=email]:focus, .pure-form input[type=url]:focus, .pure-form input[type=date]:focus, .pure-form input[type=month]:focus, .pure-form input[type=time]:focus, .pure-form input[type=datetime]:focus, .pure-form input[type=datetime-local]:focus, .pure-form input[type=week]:focus, .pure-form input[type=tel]:focus, .pure-form input[type=color]:focus, .pure-form input[type=number]:focus, .pure-form input[type=search]:focus, .pure-form input[type=text]:focus, .pure-form select:focus, .pure-form textarea:focus {\n  outline: 0;\n  border-color: #129FEA; }\n\n.pure-form input[type=file]:focus, .pure-form input[type=checkbox]:focus, .pure-form input[type=radio]:focus {\n  outline: #129FEA auto 1px; }\n\n.pure-form .pure-checkbox, .pure-form .pure-radio {\n  margin: .5em 0;\n  display: block; }\n\n.pure-form input:not([type])[disabled], .pure-form input[type=password][disabled], .pure-form input[type=email][disabled], .pure-form input[type=url][disabled], .pure-form input[type=date][disabled], .pure-form input[type=month][disabled], .pure-form input[type=time][disabled], .pure-form input[type=datetime][disabled], .pure-form input[type=datetime-local][disabled], .pure-form input[type=week][disabled], .pure-form input[type=tel][disabled], .pure-form input[type=color][disabled], .pure-form input[type=number][disabled], .pure-form input[type=search][disabled], .pure-form input[type=text][disabled], .pure-form select[disabled], .pure-form textarea[disabled] {\n  cursor: not-allowed;\n  background-color: #eaeded;\n  color: #cad2d3; }\n\n.pure-form input[readonly], .pure-form select[readonly], .pure-form textarea[readonly] {\n  background-color: #eee;\n  color: #777;\n  border-color: #ccc; }\n\n.pure-form input:focus:invalid, .pure-form select:focus:invalid, .pure-form textarea:focus:invalid {\n  color: #b94a48;\n  border-color: #e9322d; }\n\n.pure-form input[type=file]:focus:invalid:focus, .pure-form input[type=checkbox]:focus:invalid:focus, .pure-form input[type=radio]:focus:invalid:focus {\n  outline-color: #e9322d; }\n\n.pure-form select {\n  height: 2.25em;\n  border: 1px solid #ccc;\n  background-color: #fff; }\n\n.pure-form select[multiple] {\n  height: auto; }\n\n.pure-form label {\n  margin: .5em 0 .2em; }\n\n.pure-form fieldset {\n  margin: 0;\n  padding: .35em 0 .75em;\n  border: 0; }\n\n.pure-form legend {\n  display: block;\n  width: 100%;\n  padding: .3em 0;\n  margin-bottom: .3em;\n  color: #333;\n  border-bottom: 1px solid #e5e5e5; }\n\n.pure-form-stacked input:not([type]), .pure-form-stacked input[type=password], .pure-form-stacked input[type=email], .pure-form-stacked input[type=url], .pure-form-stacked input[type=date], .pure-form-stacked input[type=month], .pure-form-stacked input[type=time], .pure-form-stacked input[type=datetime], .pure-form-stacked input[type=datetime-local], .pure-form-stacked input[type=week], .pure-form-stacked input[type=tel], .pure-form-stacked input[type=color], .pure-form-stacked input[type=file], .pure-form-stacked input[type=number], .pure-form-stacked input[type=search], .pure-form-stacked input[type=text], .pure-form-stacked label, .pure-form-stacked select, .pure-form-stacked textarea {\n  display: block;\n  margin: .25em 0; }\n\n.pure-form-aligned .pure-help-inline, .pure-form-aligned input, .pure-form-aligned select, .pure-form-aligned textarea, .pure-form-message-inline {\n  display: inline-block;\n  vertical-align: middle; }\n\n.pure-form-aligned textarea {\n  vertical-align: top; }\n\n.pure-form-aligned .pure-control-group {\n  margin-bottom: .5em; }\n\n.pure-form-aligned .pure-control-group label {\n  text-align: right;\n  display: inline-block;\n  vertical-align: middle;\n  width: 10em;\n  margin: 0 1em 0 0; }\n\n.pure-form-aligned .pure-controls {\n  margin: 1.5em 0 0 11em; }\n\n.pure-form .pure-input-rounded, .pure-form input.pure-input-rounded {\n  border-radius: 2em;\n  padding: .5em 1em; }\n\n.pure-form .pure-group fieldset {\n  margin-bottom: 10px; }\n\n.pure-form .pure-group input, .pure-form .pure-group textarea {\n  display: block;\n  padding: 10px;\n  margin: 0 0 -1px;\n  border-radius: 0;\n  position: relative;\n  top: -1px; }\n\n.pure-form .pure-group input:focus, .pure-form .pure-group textarea:focus {\n  z-index: 3; }\n\n.pure-form .pure-group input:first-child, .pure-form .pure-group textarea:first-child {\n  top: 1px;\n  border-radius: 4px 4px 0 0;\n  margin: 0; }\n\n.pure-form .pure-group input:first-child:last-child, .pure-form .pure-group textarea:first-child:last-child {\n  top: 1px;\n  border-radius: 4px;\n  margin: 0; }\n\n.pure-form .pure-group input:last-child, .pure-form .pure-group textarea:last-child {\n  top: -2px;\n  border-radius: 0 0 4px 4px;\n  margin: 0; }\n\n.pure-form .pure-group button {\n  margin: .35em 0; }\n\n.pure-form .pure-input-1 {\n  width: 100%; }\n\n.pure-form .pure-input-3-4 {\n  width: 75%; }\n\n.pure-form .pure-input-2-3 {\n  width: 66%; }\n\n.pure-form .pure-input-1-2 {\n  width: 50%; }\n\n.pure-form .pure-input-1-3 {\n  width: 33%; }\n\n.pure-form .pure-input-1-4 {\n  width: 25%; }\n\n.pure-form .pure-help-inline, .pure-form-message-inline {\n  display: inline-block;\n  padding-left: .3em;\n  color: #666;\n  vertical-align: middle;\n  font-size: .875em; }\n\n.pure-form-message {\n  display: block;\n  color: #666;\n  font-size: .875em; }\n\n@media only screen and (max-width: 480px) {\n  .pure-form button[type=submit] {\n    margin: .7em 0 0; }\n  .pure-form input:not([type]), .pure-form input[type=password], .pure-form input[type=email], .pure-form input[type=url], .pure-form input[type=date], .pure-form input[type=month], .pure-form input[type=time], .pure-form input[type=datetime], .pure-form input[type=datetime-local], .pure-form input[type=week], .pure-form input[type=tel], .pure-form input[type=color], .pure-form input[type=number], .pure-form input[type=search], .pure-form input[type=text], .pure-form label {\n    margin-bottom: .3em;\n    display: block; }\n  .pure-group input:not([type]), .pure-group input[type=password], .pure-group input[type=email], .pure-group input[type=url], .pure-group input[type=date], .pure-group input[type=month], .pure-group input[type=time], .pure-group input[type=datetime], .pure-group input[type=datetime-local], .pure-group input[type=week], .pure-group input[type=tel], .pure-group input[type=color], .pure-group input[type=number], .pure-group input[type=search], .pure-group input[type=text] {\n    margin-bottom: 0; }\n  .pure-form-aligned .pure-control-group label {\n    margin-bottom: .3em;\n    text-align: left;\n    display: block;\n    width: 100%; }\n  .pure-form-aligned .pure-controls {\n    margin: 1.5em 0 0; }\n  .pure-form .pure-help-inline, .pure-form-message, .pure-form-message-inline {\n    display: block;\n    font-size: .75em;\n    padding: .2em 0 .8em; } }\n\n.pure-menu-fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 3; }\n\n.pure-menu-item, .pure-menu-list {\n  position: relative; }\n\n.pure-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.pure-menu-item {\n  padding: 0;\n  margin: 0;\n  height: 100%; }\n\n.pure-menu-heading, .pure-menu-link {\n  display: block;\n  text-decoration: none;\n  white-space: nowrap; }\n\n.pure-menu-horizontal {\n  width: 100%;\n  white-space: nowrap; }\n\n.pure-menu-horizontal .pure-menu-list {\n  display: inline-block; }\n\n.pure-menu-horizontal .pure-menu-heading, .pure-menu-horizontal .pure-menu-item, .pure-menu-horizontal .pure-menu-separator {\n  display: inline-block;\n  zoom: 1;\n  vertical-align: middle; }\n\n.pure-menu-item .pure-menu-item {\n  display: block; }\n\n.pure-menu-children {\n  display: none;\n  position: absolute;\n  left: 100%;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  z-index: 3; }\n\n.pure-menu-horizontal .pure-menu-children {\n  left: 0;\n  top: auto;\n  width: inherit; }\n\n.pure-menu-active > .pure-menu-children, .pure-menu-allow-hover:hover > .pure-menu-children {\n  display: block;\n  position: absolute; }\n\n.pure-menu-has-children > .pure-menu-link:after {\n  padding-left: .5em;\n  content: \"\\25B8\";\n  font-size: small; }\n\n.pure-menu-horizontal .pure-menu-has-children > .pure-menu-link:after {\n  content: \"\\25BE\"; }\n\n.pure-menu-scrollable {\n  overflow-y: scroll;\n  overflow-x: hidden; }\n\n.pure-menu-scrollable .pure-menu-list {\n  display: block; }\n\n.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list {\n  display: inline-block; }\n\n.pure-menu-horizontal.pure-menu-scrollable {\n  white-space: nowrap;\n  overflow-y: hidden;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n  padding: .5em 0; }\n\n.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar {\n  display: none; }\n\n.pure-menu-horizontal .pure-menu-children .pure-menu-separator, .pure-menu-separator {\n  background-color: #ccc;\n  height: 1px;\n  margin: .3em 0; }\n\n.pure-menu-horizontal .pure-menu-separator {\n  width: 1px;\n  height: 1.3em;\n  margin: 0 .3em; }\n\n.pure-menu-horizontal .pure-menu-children .pure-menu-separator {\n  display: block;\n  width: auto; }\n\n.pure-menu-heading {\n  text-transform: uppercase;\n  color: #565d64; }\n\n.pure-menu-link {\n  color: #777; }\n\n.pure-menu-children {\n  background-color: #fff; }\n\n.pure-menu-disabled, .pure-menu-heading, .pure-menu-link {\n  padding: .5em 1em; }\n\n.pure-menu-disabled {\n  opacity: .5; }\n\n.pure-menu-disabled .pure-menu-link:hover {\n  background-color: transparent; }\n\n.pure-menu-active > .pure-menu-link, .pure-menu-link:focus, .pure-menu-link:hover {\n  background-color: #eee; }\n\n.pure-menu-selected .pure-menu-link, .pure-menu-selected .pure-menu-link:visited {\n  color: #000; }\n\n.pure-table {\n  empty-cells: show;\n  border: 1px solid #cbcbcb; }\n\n.pure-table caption {\n  color: #000;\n  font: italic 85%/1 arial,sans-serif;\n  padding: 1em 0;\n  text-align: center; }\n\n.pure-table td, .pure-table th {\n  border-left: 1px solid #cbcbcb;\n  border-width: 0 0 0 1px;\n  font-size: inherit;\n  margin: 0;\n  overflow: visible;\n  padding: .5em 1em; }\n\n.pure-table td:first-child, .pure-table th:first-child {\n  border-left-width: 0; }\n\n.pure-table thead {\n  background-color: #e0e0e0;\n  color: #000;\n  text-align: left;\n  vertical-align: bottom; }\n\n.pure-table td {\n  background-color: transparent; }\n\n.pure-table-odd td, .pure-table-striped tr:nth-child(2n-1) td {\n  background-color: #f2f2f2; }\n\n.pure-table-bordered td {\n  border-bottom: 1px solid #cbcbcb; }\n\n.pure-table-bordered tbody > tr:last-child > td {\n  border-bottom-width: 0; }\n\n.pure-table-horizontal td, .pure-table-horizontal th {\n  border-width: 0 0 1px;\n  border-bottom: 1px solid #cbcbcb; }\n\n.pure-table-horizontal tbody > tr:last-child > td {\n  border-bottom-width: 0; }\n\n/**************\n## Animation ##\n**************/\n/************\n## Toggler ##\n************/\n/***********\n## Drawer ##\n***********/\n/***********\n## Pusher ##\n***********/\n/*******************\n## Pusher Overlay ##\n*******************/\n/**************\n## Variables ##\n **************/\n/*************\n## Required ##\n *************/\nhtml, body {\n  height: 100%; }\n\nbody {\n  margin: 0; }\n\n/**************\n## Container ##\n **************/\n.pure-container {\n  position: relative;\n  height: 100%;\n  -webkit-overflow-scrolling: touch; }\n\n/************\n## Toggler ##\n ************/\n.pure-toggle {\n  left: -9999px;\n  position: absolute;\n  top: -9999px; }\n  .pure-toggle:focus ~ .pure-toggle-label {\n    color: #DB3440; }\n\n.pure-toggle-label {\n  display: none;\n  cursor: pointer;\n  display: block;\n  position: fixed;\n  top: 15px;\n  z-index: 99;\n  color: #444444;\n  width: 50px;\n  height: 50px;\n  transition: all 400ms ease-in-out;\n  border-radius: 50%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent; }\n  .pure-toggle-label:hover {\n    color: #DB3440; }\n    .pure-toggle-label:hover .pure-toggle-icon,\n    .pure-toggle-label:hover .pure-toggle-icon:before,\n    .pure-toggle-label:hover .pure-toggle-icon:after {\n      background-color: #DB3440; }\n  .pure-toggle-label:active {\n    -webkit-tap-highlight-color: transparent; }\n  .pure-toggle-label .pure-toggle-icon,\n  .pure-toggle-label .pure-toggle-icon:before,\n  .pure-toggle-label .pure-toggle-icon:after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    height: 3px;\n    width: 30px;\n    cursor: pointer;\n    background: #444444;\n    display: block;\n    content: '';\n    transition: all 500ms ease-in-out; }\n  .pure-toggle-label .pure-toggle-icon {\n    transform: translate3d(-50%, -4px, 0);\n    -webkit-transform: translate3d(-50%, -4px, 0); }\n  .pure-toggle-label .pure-toggle-icon:before {\n    transform: translate3d(-50%, -12px, 0);\n    -webkit-transform: translate3d(-50%, -12px, 0); }\n  .pure-toggle-label .pure-toggle-icon:after {\n    transform: translate3d(-50%, 8px, 0);\n    -webkit-transform: translate3d(-50%, 8px, 0); }\n\n.pure-toggle-label[data-toggle-label='left'] {\n  left: 15px;\n  right: auto; }\n\n.pure-toggle-label[data-toggle-label='right'] {\n  right: 15px;\n  left: auto; }\n\n.pure-toggle-label[data-toggle-label='top'] {\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0); }\n\n.pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label:not([data-toggle-label='left']),\n.pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label:not([data-toggle-label='right']),\n.pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label:not([data-toggle-label='top']) {\n  opacity: 0;\n  z-index: -1; }\n\n.pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'],\n.pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'],\n.pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] {\n  color: #DB3440; }\n  .pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'] .pure-toggle-icon,\n  .pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'] .pure-toggle-icon,\n  .pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] .pure-toggle-icon {\n    background-color: transparent; }\n  .pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'] .pure-toggle-icon:before, .pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'] .pure-toggle-icon:after,\n  .pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'] .pure-toggle-icon:before,\n  .pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'] .pure-toggle-icon:after,\n  .pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] .pure-toggle-icon:before,\n  .pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] .pure-toggle-icon:after {\n    top: 0; }\n  .pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'] .pure-toggle-icon:before,\n  .pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'] .pure-toggle-icon:before,\n  .pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] .pure-toggle-icon:before {\n    transform: translateX(-50%) rotate(45deg);\n    -webkit-transform: translateX(-50%) rotate(45deg); }\n  .pure-toggle[data-toggle='left']:checked ~ .pure-toggle-label[data-toggle-label='left'] .pure-toggle-icon:after,\n  .pure-toggle[data-toggle='right']:checked ~ .pure-toggle-label[data-toggle-label='right'] .pure-toggle-icon:after,\n  .pure-toggle[data-toggle='top']:checked ~ .pure-toggle-label[data-toggle-label='top'] .pure-toggle-icon:after {\n    transform: translateX(-50%) translateY(-10px) rotate(-45deg);\n    -webkit-transform: translateX(-50%) translateY(-10px) rotate(-45deg);\n    top: 10px; }\n\n/***********\n## Drawer ##\n ***********/\n.pure-drawer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  height: 100%;\n  visibility: hidden;\n  background-color: #ffffff;\n  transition-property: all;\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n  width: 80%; }\n  @media only screen and (min-width: 40.063em) {\n    .pure-drawer {\n      width: 300px; } }\n  @media only screen and (min-width: 64.063em) {\n    .pure-drawer {\n      width: 300px; } }\n\n.pure-drawer[data-position='right'] {\n  left: auto;\n  right: 0; }\n\n.pure-drawer[data-position='top'] {\n  height: 100%;\n  width: 100%; }\n  @media only screen and (min-width: 40.063em) {\n    .pure-drawer[data-position='top'] {\n      height: 100%; } }\n  @media only screen and (min-width: 64.063em) {\n    .pure-drawer[data-position='top'] {\n      height: 100px; } }\n\n/*********************\n## Pusher Container ##\n *********************/\n.pure-pusher-container {\n  position: relative;\n  height: 100%;\n  overflow: hidden; }\n\n/***********\n## Pusher ##\n ***********/\n.pure-pusher {\n  position: relative;\n  height: 100%;\n  overflow-y: auto;\n  left: 0;\n  z-index: 2;\n  background-color: #fff;\n  transition-property: transform;\n  transition-duration: 500ms;\n  transition-timing-function: ease-out; }\n\n/*******************\n## Pusher Overlay ##\n *******************/\n.pure-overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  transition-property: opacity;\n  transition-duration: 500ms;\n  transition-delay: 500ms;\n  transition-timing-function: ease-in-out; }\n\n.pure-toggle[data-toggle='left']:checked ~ .pure-overlay[data-overlay='left'] {\n  left: 80%; }\n  @media only screen and (min-width: 40.063em) {\n    .pure-toggle[data-toggle='left']:checked ~ .pure-overlay[data-overlay='left'] {\n      left: 300px; } }\n  @media only screen and (min-width: 64.063em) {\n    .pure-toggle[data-toggle='left']:checked ~ .pure-overlay[data-overlay='left'] {\n      left: 300px; } }\n\n.pure-toggle[data-toggle='right']:checked ~ .pure-overlay[data-overlay='right'] {\n  right: 80%; }\n  @media only screen and (min-width: 40.063em) {\n    .pure-toggle[data-toggle='right']:checked ~ .pure-overlay[data-overlay='right'] {\n      right: 300px; } }\n  @media only screen and (min-width: 64.063em) {\n    .pure-toggle[data-toggle='right']:checked ~ .pure-overlay[data-overlay='right'] {\n      right: 300px; } }\n\n.pure-toggle[data-toggle='top']:checked ~ .pure-overlay[data-overlay='top'] {\n  top: 100%; }\n  @media only screen and (min-width: 40.063em) {\n    .pure-toggle[data-toggle='top']:checked ~ .pure-overlay[data-overlay='top'] {\n      top: 100%; } }\n  @media only screen and (min-width: 64.063em) {\n    .pure-toggle[data-toggle='top']:checked ~ .pure-overlay[data-overlay='top'] {\n      top: 100px; } }\n\n.pure-toggle[data-toggle='left']:checked ~ .pure-overlay[data-overlay='left'],\n.pure-toggle[data-toggle='right']:checked ~ .pure-overlay[data-overlay='right'],\n.pure-toggle[data-toggle='top']:checked ~ .pure-overlay[data-overlay='top'] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: 2; }\n\n/********************************\n## Fallback for older browsers ##\n ********************************/\n.no-csstransforms3d .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  left: 80%; }\n  @media only screen and (min-width: 40.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      left: 300px; } }\n  @media only screen and (min-width: 64.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      left: 300px; } }\n\n.no-csstransforms3d .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  left: -80%; }\n  @media only screen and (min-width: 40.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      left: -300px; } }\n  @media only screen and (min-width: 64.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      left: -300px; } }\n\n.no-csstransforms3d .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  top: 100%; }\n  @media only screen and (min-width: 40.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      top: 100%; } }\n  @media only screen and (min-width: 64.063em) {\n    .no-csstransforms3d .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      top: 100px; } }\n\n/*****************************\n## Effect - Slide in on top ##\n*****************************/\n/* DRAWER */\n[data-effect='pure-effect-slide'] .pure-drawer {\n  z-index: 3;\n  transition-duration: 350ms; }\n\n[data-effect='pure-effect-slide'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n\n[data-effect='pure-effect-slide'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n\n[data-effect='pure-effect-slide'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n\n[data-effect='pure-effect-slide'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-slide'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-slide'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* OVERLAY */\n[data-effect='pure-effect-slide'] .pure-overlay {\n  transition-duration: 350ms;\n  transition-delay: 175ms; }\n\n/********************\n## Effect - Reveal ##\n********************/\n/* DRAWER */\n[data-effect='pure-effect-reveal'] .pure-drawer {\n  visibility: visible;\n  transition-duration: 500ms; }\n\n/* PUSHER */\n[data-effect='pure-effect-reveal'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reveal'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-reveal'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/*************************\n## Effect - Slide along ##\n*************************/\n/* DRAWER */\n[data-effect='pure-effect-slideAlong'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-slideAlong'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0); }\n\n[data-effect='pure-effect-slideAlong'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(50%, 0, 0);\n  transform: translate3d(50%, 0, 0); }\n\n[data-effect='pure-effect-slideAlong'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, -50%, 0);\n  transform: translate3d(0, -50%, 0); }\n\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER */\n[data-effect='pure-effect-slideAlong'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-slideAlong'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-slideAlong'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/*******************************\n## Effect - Reverse slide out ##\n*******************************/\n/* DRAWER */\n[data-effect='pure-effect-reverseSlide'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-reverseSlide'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(50%, 0, 0);\n  transform: translate3d(50%, 0, 0); }\n\n[data-effect='pure-effect-reverseSlide'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(-50%, 0, 0);\n  transform: translate3d(-50%, 0, 0); }\n\n[data-effect='pure-effect-reverseSlide'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, 50%, 0);\n  transform: translate3d(0, 50%, 0); }\n\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER */\n[data-effect='pure-effect-reverseSlide'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-reverseSlide'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-reverseSlide'] .pure-overlay {\n  transition-duration: 500ms; }\n\n/*********************************\n## Effect 5 - Scale Down Pusher ##\n*********************************/\n/* DRAWER */\n[data-effect='pure-effect-scaleDown'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleDown'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n\n[data-effect='pure-effect-scaleDown'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n\n[data-effect='pure-effect-scaleDown'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n\n[data-effect='pure-effect-scaleDown'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-scaleDown'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-scaleDown'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER CONTAINER */\n[data-effect='pure-effect-scaleDown'] .pure-pusher-container {\n  -webkit-perspective: 1500px;\n  perspective: 1500px; }\n\n/* PUSHER */\n/* Needed for Firefox */\n[data-effect='pure-effect-scaleDown'] .pure-pusher-container .pure-pusher {\n  z-index: 1;\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleDown'] .pure-toggle:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 0, -300px);\n  transform: translate3d(0, 0, -300px); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleDown'] .pure-toggle:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 0, -300px);\n      transform: translate3d(0, 0, -300px); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleDown'] .pure-toggle:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 0, -300px);\n      transform: translate3d(0, 0, -300px); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-scaleDown'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/*************************\n## Effect - Scale Up ##\n*************************/\n/* CONTAINER */\n[data-effect='pure-effect-scaleUp'] {\n  -webkit-perspective: 1500px;\n  perspective: 1500px; }\n\n[data-effect='pure-effect-scaleUp'][data-position='left'] {\n  -webkit-perspective-origin: 0% 50%;\n  perspective-origin: 0% 50%; }\n\n[data-effect='pure-effect-scaleUp'][data-position='right'] {\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%; }\n\n[data-effect='pure-effect-scaleUp'][data-position='top'] {\n  -webkit-perspective-origin: 50% 0;\n  perspective-origin: 50% 0; }\n\n/* DRAWER */\n[data-effect='pure-effect-scaleUp'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(0, 0, -80%);\n  transform: translate3d(0, 0, -80%); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='left'] {\n      -webkit-transform: translate3d(0, 0, -300px);\n      transform: translate3d(0, 0, -300px); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='left'] {\n      -webkit-transform: translate3d(0, 0, -300px);\n      transform: translate3d(0, 0, -300px); } }\n\n[data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(80%, 0, -80%);\n  transform: translate3d(80%, 0, -80%); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='right'] {\n      -webkit-transform: translate3d(300px, 0, -300px);\n      transform: translate3d(300px, 0, -300px); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='right'] {\n      -webkit-transform: translate3d(300px, 0, -300px);\n      transform: translate3d(300px, 0, -300px); } }\n\n[data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, 0, -100%);\n  transform: translate3d(0, 0, -100%); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='top'] {\n      -webkit-transform: translate3d(0, 0, -100%);\n      transform: translate3d(0, 0, -100%); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-drawer[data-position='top'] {\n      -webkit-transform: translate3d(0, 0, -100px);\n      transform: translate3d(0, 0, -100px); } }\n\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER */\n[data-effect='pure-effect-scaleUp'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-scaleUp'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-scaleUp'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/****************************************\n## Effect - Scale and Rotate Pusher ##\n****************************************/\n/* DRAWER */\n[data-effect='pure-effect-scaleRotate'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleRotate'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n\n[data-effect='pure-effect-scaleRotate'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n\n[data-effect='pure-effect-scaleRotate'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER CONTAINER */\n[data-effect='pure-effect-scaleRotate'] .pure-pusher-container {\n  -webkit-perspective: 1500px;\n  perspective: 1500px; }\n\n/* PUSHER */\n[data-effect='pure-effect-scaleRotate'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(100px, 0, -600px) rotateY(-20deg);\n  transform: translate3d(100px, 0, -600px) rotateY(-20deg); }\n\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(100px, 0, -600px) rotateY(20deg);\n  transform: translate3d(100px, 0, -600px) rotateY(20deg); }\n\n[data-effect='pure-effect-scaleRotate'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 0, -100px) rotateX(20deg);\n  transform: translate3d(0, 0, -100px) rotateX(20deg); }\n\n/* OVERLAY */\n[data-effect='pure-effect-scaleRotate'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/**************************\n## Effect - Fall in ##\n**************************/\n/* DRAWER */\n[data-effect='pure-effect-fall'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-fall'] .pure-drawer[data-position='left'],\n[data-effect='pure-effect-fall'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n\n[data-effect='pure-effect-fall'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transition-timing-function: ease-in-out;\n  transition-timing-function: ease-in-out;\n  -webkit-transition-property: -webkit-transform;\n  transition-property: transform;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER */\n[data-effect='pure-effect-fall'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-fall'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-fall'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-fall'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/*********************\n## Effect - Push ##\n*********************/\n/* DRAWER */\n[data-effect='pure-effect-push'] .pure-drawer {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-push'] .pure-drawer[data-position='left'] {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0); }\n\n[data-effect='pure-effect-push'] .pure-drawer[data-position='right'] {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0); }\n\n[data-effect='pure-effect-push'] .pure-drawer[data-position='top'] {\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0); }\n\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n/* PUSHER */\n[data-effect='pure-effect-push'] .pure-pusher-container .pure-pusher {\n  transition-duration: 500ms; }\n\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(80%, 0, 0);\n  transform: translate3d(80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='left']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(300px, 0, 0);\n      transform: translate3d(300px, 0, 0); } }\n\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(-80%, 0, 0);\n  transform: translate3d(-80%, 0, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='right']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(-300px, 0, 0);\n      transform: translate3d(-300px, 0, 0); } }\n\n[data-effect='pure-effect-push'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0); }\n  @media only screen and (min-width: 40.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0); } }\n  @media only screen and (min-width: 64.063em) {\n    [data-effect='pure-effect-push'] .pure-toggle[data-toggle='top']:checked ~ .pure-pusher-container .pure-pusher {\n      -webkit-transform: translate3d(0, 100px, 0);\n      transform: translate3d(0, 100px, 0); } }\n\n/* OVERLAY */\n[data-effect='pure-effect-push'] .pure-overlay {\n  transition-duration: 500ms;\n  transition-delay: 250ms; }\n\n/********************\n## Effect - Bounce ##\n********************/\n/* DRAWER */\n[data-effect=\"pure-effect-bounce\"] .pure-drawer {\n  z-index: 3;\n  -webkit-animation-duration: 1000ms;\n  animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n[data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible; }\n\n/* OVERLAY */\n[data-effect=\"pure-effect-bounce\"] .pure-overlay {\n  transition-duration: 1000ms;\n  transition-delay: 500ms; }\n\n/******************\n## Effect - Fade ##\n******************/\n/* DRAWER */\n[data-effect=\"pure-effect-fade\"] .pure-drawer {\n  z-index: 3;\n  -webkit-animation-duration: 1000ms;\n  animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n[data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible; }\n\n/* OVERLAY */\n[data-effect=\"pure-effect-fade\"] .pure-overlay {\n  transition-duration: 1000ms;\n  transition-delay: 500ms; }\n\n/*******************\n## Effect - FlipX ##\n*******************/\n/* DRAWER */\n[data-effect=\"pure-effect-flipX\"] .pure-drawer {\n  z-index: 3;\n  -webkit-animation-duration: 1000ms;\n  animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n[data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible; }\n\n/* OVERLAY */\n[data-effect=\"pure-effect-flipX\"] .pure-overlay {\n  transition-duration: 1000ms;\n  transition-delay: 500ms; }\n\n/*******************\n## Effect - FlipY ##\n*******************/\n/* DRAWER */\n[data-effect=\"pure-effect-flipY\"] .pure-drawer {\n  z-index: 3;\n  -webkit-animation-duration: 1000ms;\n  animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n[data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible; }\n\n/* OVERLAY */\n[data-effect=\"pure-effect-flipY\"] .pure-overlay {\n  transition-duration: 1000ms;\n  transition-delay: 500ms; }\n\n/******************\n## Effect - Zoom ##\n******************/\n/* DRAWER */\n[data-effect=\"pure-effect-zoom\"] .pure-drawer {\n  z-index: 3;\n  -webkit-animation-duration: 1000ms;\n  animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n[data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'],\n[data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'],\n[data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  visibility: visible; }\n\n/* OVERLAY */\n[data-effect=\"pure-effect-zoom\"] .pure-overlay {\n  transition-duration: 1000ms;\n  transition-delay: 500ms; }\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2014 Daniel Eden\n*/\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both; }\n\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite; }\n\n.animated.hinge {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s; }\n\n@-webkit-keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n@keyframes bounce {\n  0%, 20%, 53%, 80%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  40%, 43% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -30px, 0);\n    transform: translate3d(0, -30px, 0); }\n  70% {\n    -webkit-transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n    -webkit-transform: translate3d(0, -15px, 0);\n    transform: translate3d(0, -15px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -4px, 0);\n    transform: translate3d(0, -4px, 0); } }\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n  -webkit-transform-origin: center bottom;\n  -ms-transform-origin: center bottom;\n  transform-origin: center bottom; }\n\n@-webkit-keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n@keyframes flash {\n  0%, 50%, 100% {\n    opacity: 1; }\n  25%, 75% {\n    opacity: 0; } }\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes pulse {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  50% {\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\n    transform: scale3d(1.05, 1.05, 1.05); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse; }\n\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1); }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1); }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1); }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1); }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand; }\n\n@-webkit-keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n@keyframes shake {\n  0%, 100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n  10%, 30%, 50%, 70%, 90% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  20%, 40%, 60%, 80% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); } }\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake; }\n\n@-webkit-keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n@keyframes swing {\n  20% {\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\n    transform: rotate3d(0, 0, 1, 15deg); }\n  40% {\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\n    transform: rotate3d(0, 0, 1, -10deg); }\n  60% {\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\n    transform: rotate3d(0, 0, 1, 5deg); }\n  80% {\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\n    transform: rotate3d(0, 0, 1, -5deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n    transform: rotate3d(0, 0, 1, 0deg); } }\n\n.swing {\n  -webkit-transform-origin: top center;\n  -ms-transform-origin: top center;\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing; }\n\n@-webkit-keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes tada {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); }\n  10%, 20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg); }\n  30%, 50%, 70%, 90% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); }\n  40%, 60%, 80% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes wobble {\n  0% {\n    -webkit-transform: none;\n    transform: none; }\n  15% {\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg); }\n  30% {\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg); }\n  45% {\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg); }\n  60% {\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg); }\n  75% {\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble; }\n\n@-webkit-keyframes bounceIn {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n@keyframes bounceIn {\n  0%, 20%, 40%, 60%, 80%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  20% {\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  40% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\n    transform: scale3d(1.03, 1.03, 1.03); }\n  80% {\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\n    transform: scale3d(0.97, 0.97, 0.97); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); } }\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounceInDown {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInDown {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3000px, 0);\n    transform: translate3d(0, -3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 25px, 0);\n    transform: translate3d(0, 25px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, 5px, 0);\n    transform: translate3d(0, 5px, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInDown, [data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown; }\n\n@-webkit-keyframes bounceInLeft {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInLeft {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-3000px, 0, 0);\n    transform: translate3d(-3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(25px, 0, 0);\n    transform: translate3d(25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(-10px, 0, 0);\n    transform: translate3d(-10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(5px, 0, 0);\n    transform: translate3d(5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInLeft, [data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'] {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft; }\n\n@-webkit-keyframes bounceInRight {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes bounceInRight {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(3000px, 0, 0);\n    transform: translate3d(3000px, 0, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(-25px, 0, 0);\n    transform: translate3d(-25px, 0, 0); }\n  75% {\n    -webkit-transform: translate3d(10px, 0, 0);\n    transform: translate3d(10px, 0, 0); }\n  90% {\n    -webkit-transform: translate3d(-5px, 0, 0);\n    transform: translate3d(-5px, 0, 0); }\n  100% {\n    -webkit-transform: none;\n    transform: none; } }\n\n.bounceInRight, [data-effect=\"pure-effect-bounce\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'] {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight; }\n\n@-webkit-keyframes bounceInUp {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n@keyframes bounceInUp {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0); }\n  60% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0); }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp; }\n\n@-webkit-keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n@keyframes bounceOut {\n  20% {\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\n    transform: scale3d(0.9, 0.9, 0.9); }\n  50%, 55% {\n    opacity: 1;\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\n    transform: scale3d(1.1, 1.1, 1.1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); } }\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes bounceOutDown {\n  20% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown; }\n\n@-webkit-keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(20px, 0, 0);\n    transform: translate3d(20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.bounceOutLeft, [data-effect=\"pure-effect-bounce\"] .pure-drawer[data-position='left'] {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft; }\n\n@-webkit-keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    -webkit-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.bounceOutRight, [data-effect=\"pure-effect-bounce\"] .pure-drawer[data-position='right'] {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight; }\n\n@-webkit-keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes bounceOutUp {\n  20% {\n    -webkit-transform: translate3d(0, -10px, 0);\n    transform: translate3d(0, -10px, 0); }\n  40%, 45% {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 20px, 0);\n    transform: translate3d(0, 20px, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.bounceOutUp, [data-effect=\"pure-effect-bounce\"] .pure-drawer[data-position='top'] {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp; }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDown, [data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig; }\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeft, [data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'] {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft; }\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig; }\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRight, [data-effect=\"pure-effect-fade\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'] {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight; }\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig; }\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp; }\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut; }\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0); } }\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown; }\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 2000px, 0);\n    transform: translate3d(0, 2000px, 0); } }\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig; }\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0); } }\n\n.fadeOutLeft, [data-effect=\"pure-effect-fade\"] .pure-drawer[data-position='left'] {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft; }\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(-2000px, 0, 0);\n    transform: translate3d(-2000px, 0, 0); } }\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig; }\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); } }\n\n.fadeOutRight, [data-effect=\"pure-effect-fade\"] .pure-drawer[data-position='right'] {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight; }\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0); } }\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig; }\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0); } }\n\n.fadeOutUp, [data-effect=\"pure-effect-fade\"] .pure-drawer[data-position='top'] {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp; }\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -2000px, 0);\n    transform: translate3d(0, -2000px, 0); } }\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig; }\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n@keyframes flip {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  40% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n  50% {\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  80% {\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in; } }\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip; }\n\n@-webkit-keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInX {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInX, [data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'], [data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'], [data-effect=\"pure-effect-flipX\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX; }\n\n@-webkit-keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n@keyframes flipInY {\n  0% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n    opacity: 0; }\n  40% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    -webkit-transition-timing-function: ease-in;\n    transition-timing-function: ease-in; }\n  60% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg); }\n  100% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); } }\n\n.flipInY, [data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'], [data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'], [data-effect=\"pure-effect-flipY\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY; }\n\n@-webkit-keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutX {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutX, [data-effect=\"pure-effect-flipX\"] .pure-drawer[data-position='left'], [data-effect=\"pure-effect-flipX\"] .pure-drawer[data-position='right'], [data-effect=\"pure-effect-flipX\"] .pure-drawer[data-position='top'] {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important; }\n\n@-webkit-keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n@keyframes flipOutY {\n  0% {\n    -webkit-transform: perspective(400px);\n    transform: perspective(400px); }\n  30% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0; } }\n\n.flipOutY, [data-effect=\"pure-effect-flipY\"] .pure-drawer[data-position='left'], [data-effect=\"pure-effect-flipY\"] .pure-drawer[data-position='right'], [data-effect=\"pure-effect-flipY\"] .pure-drawer[data-position='top'] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n  -webkit-animation-duration: .75s;\n  animation-duration: .75s; }\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes lightSpeedIn {\n  0% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0; }\n  60% {\n    -webkit-transform: skewX(20deg);\n    transform: skewX(20deg);\n    opacity: 1; }\n  80% {\n    -webkit-transform: skewX(-5deg);\n    transform: skewX(-5deg);\n    opacity: 1; }\n  100% {\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out; }\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n@keyframes lightSpeedOut {\n  0% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0; } }\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in; }\n\n@-webkit-keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateIn {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn; }\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft; }\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight; }\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft; }\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n@keyframes rotateInUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: none;\n    transform: none;\n    opacity: 1; } }\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight; }\n\n@-webkit-keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n@keyframes rotateOut {\n  0% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: center;\n    transform-origin: center;\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0; } }\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut; }\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0; } }\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft; }\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutDownRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight; }\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpLeft {\n  0% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: left bottom;\n    transform-origin: left bottom;\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0; } }\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft; }\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n@keyframes rotateOutUpRight {\n  0% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    opacity: 1; }\n  100% {\n    -webkit-transform-origin: right bottom;\n    transform-origin: right bottom;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0; } }\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight; }\n\n@-webkit-keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n@keyframes hinge {\n  0% {\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  20%, 60% {\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\n    transform: rotate3d(0, 0, 1, 80deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out; }\n  40%, 80% {\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n    transform: rotate3d(0, 0, 1, 60deg);\n    -webkit-transform-origin: top left;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n    opacity: 1; }\n  100% {\n    -webkit-transform: translate3d(0, 700px, 0);\n    transform: translate3d(0, 700px, 0);\n    opacity: 0; } }\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn; }\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n@keyframes rollOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg); } }\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut; }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  50% {\n    opacity: 1; } }\n\n.zoomIn {\n  -webkit-animation-name: zoomIn;\n  animation-name: zoomIn; }\n\n@-webkit-keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInDown, [data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='top']:checked ~ .pure-drawer[data-position='top'] {\n  -webkit-animation-name: zoomInDown;\n  animation-name: zoomInDown; }\n\n@-webkit-keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInLeft, [data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='left']:checked ~ .pure-drawer[data-position='left'] {\n  -webkit-animation-name: zoomInLeft;\n  animation-name: zoomInLeft; }\n\n@-webkit-keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInRight, [data-effect=\"pure-effect-zoom\"] .pure-toggle[data-toggle='right']:checked ~ .pure-drawer[data-position='right'] {\n  -webkit-animation-name: zoomInRight;\n  animation-name: zoomInRight; }\n\n@-webkit-keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  60% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomInUp {\n  -webkit-animation-name: zoomInUp;\n  animation-name: zoomInUp; }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n@keyframes zoomOut {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3); }\n  100% {\n    opacity: 0; } }\n\n.zoomOut {\n  -webkit-animation-name: zoomOut;\n  animation-name: zoomOut; }\n\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutDown {\n  -webkit-animation-name: zoomOutDown;\n  animation-name: zoomOutDown; }\n\n@-webkit-keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\n    -webkit-transform-origin: left center;\n    transform-origin: left center; } }\n\n.zoomOutLeft, [data-effect=\"pure-effect-zoom\"] .pure-drawer[data-position='left'] {\n  -webkit-animation-name: zoomOutLeft;\n  animation-name: zoomOutLeft; }\n\n@-webkit-keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\n    transform: scale(0.1) translate3d(2000px, 0, 0);\n    -webkit-transform-origin: right center;\n    transform-origin: right center; } }\n\n.zoomOutRight, [data-effect=\"pure-effect-zoom\"] .pure-drawer[data-position='right'] {\n  -webkit-animation-name: zoomOutRight;\n  animation-name: zoomOutRight; }\n\n@-webkit-keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1); } }\n\n.zoomOutUp, [data-effect=\"pure-effect-zoom\"] .pure-drawer[data-position='top'] {\n  -webkit-animation-name: zoomOutUp;\n  animation-name: zoomOutUp; }\n\n@-webkit-keyframes slideInDown {\n  0% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes slideInDown {\n  0% {\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown; }\n\n@-webkit-keyframes slideInLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes slideInLeft {\n  0% {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft; }\n\n@-webkit-keyframes slideInRight {\n  0% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n@keyframes slideInRight {\n  0% {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight; }\n\n@-webkit-keyframes slideInUp {\n  0% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n@keyframes slideInUp {\n  0% {\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%);\n    visibility: visible; }\n  100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n\n.slideInUp {\n  -webkit-animation-name: slideInUp;\n  animation-name: slideInUp; }\n\n@-webkit-keyframes slideOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); } }\n\n@keyframes slideOutDown {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); } }\n\n.slideOutDown {\n  -webkit-animation-name: slideOutDown;\n  animation-name: slideOutDown; }\n\n@-webkit-keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); } }\n\n@keyframes slideOutLeft {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%); } }\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft; }\n\n@-webkit-keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); } }\n\n@keyframes slideOutRight {\n  0% {\n    -webkit-transform: translateX(0);\n    transform: translateX(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%); } }\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight; }\n\n@-webkit-keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%); } }\n\n@keyframes slideOutUp {\n  0% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  100% {\n    visibility: hidden;\n    -webkit-transform: translateY(-100%);\n    transform: translateY(-100%); } }\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp; }\n\nbody {\n  font-family: 'Fira Sans', sans; }\n\na {\n  color: #DB3440; }\n\n.action-bar {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: row; }\n  .action-bar > .begin {\n    display: flex;\n    flex-direction: row; }\n  .action-bar > .end {\n    justify-content: flex-end;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    align-self: flex-end; }\n\n.alert-box {\n  margin: 1rem;\n  padding: 1rem;\n  color: white; }\n  .alert-box.-success {\n    background-color: #259B24; }\n  .alert-box.-info {\n    background-color: #FAAF3F; }\n  .alert-box.-error {\n    background-color: #DB3440; }\n\n.back-arrow {\n  text-decoration: none;\n  font-size: 1.3rem;\n  padding: .5rem;\n  color: #444444;\n  display: inline-block; }\n  .back-arrow:hover {\n    color: #DB3440; }\n  .back-arrow + .pure-menu-heading {\n    padding-left: 0; }\n\n.badge-block {\n  border-radius: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background-color: #dbe8f1;\n  color: #444444; }\n  .badge-block.-highlight {\n    background-color: #DB3440;\n    color: #ffffff; }\n\n.button-primary {\n  background: #DB3440;\n  color: #ffffff; }\n  .button-primary.-inverted {\n    background: transparent;\n    color: #DB3440; }\n  .button-primary.-muted {\n    background: transparent;\n    color: #444444; }\n\n.category-header {\n  display: flex;\n  flex-direction: row; }\n  .category-header > h2 {\n    margin-bottom: 0;\n    margin-top: 0; }\n  .category-header .spacer {\n    flex-grow: 1; }\n  .category-header .actions {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    .category-header .actions > li {\n      display: inline-block; }\n\n.category-list {\n  padding: 0;\n  margin-top: 0; }\n  .category-list .category-list {\n    margin-left: 1rem; }\n  .category-list > li {\n    list-style-type: none; }\n  .category-list > li > h2 > a {\n    text-decoration: none; }\n    .category-list > li > h2 > a:hover {\n      text-decoration: underline; }\n  .category-list > li > h2 {\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin: 0; }\n  .category-list > li > .category-list > li > h2 {\n    font-size: 1.25rem;\n    font-weight: 400; }\n\n.category-pill {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 0;\n  font-size: .75rem; }\n  .category-pill > .category {\n    list-style-type: none; }\n    .category-pill > .category > a {\n      color: #ffffff;\n      text-decoration: none;\n      display: inline-block;\n      padding: 0.25rem 0.5rem;\n      border-right: 1px solid white; }\n      .category-pill > .category > a:hover {\n        background: #8259cb; }\n    .category-pill > .category.-color-0 a {\n      background-color: red; }\n    .category-pill > .category.-color-1 a {\n      background-color: #ff0400; }\n    .category-pill > .category.-color-2 a {\n      background-color: #ff0900; }\n    .category-pill > .category.-color-3 a {\n      background-color: #ff0d00; }\n    .category-pill > .category.-color-4 a {\n      background-color: #ff1100; }\n    .category-pill > .category.-color-5 a {\n      background-color: #ff1500; }\n    .category-pill > .category.-color-6 a {\n      background-color: #ff1a00; }\n    .category-pill > .category.-color-7 a {\n      background-color: #ff1e00; }\n    .category-pill > .category.-color-8 a {\n      background-color: #ff2200; }\n    .category-pill > .category.-color-9 a {\n      background-color: #ff2600; }\n    .category-pill > .category.-color-10 a {\n      background-color: #ff2b00; }\n    .category-pill > .category.-color-11 a {\n      background-color: #ff2f00; }\n    .category-pill > .category.-color-12 a {\n      background-color: #ff3300; }\n    .category-pill > .category.-color-13 a {\n      background-color: #ff3700; }\n    .category-pill > .category.-color-14 a {\n      background-color: #ff3c00; }\n    .category-pill > .category.-color-15 a {\n      background-color: #ff4000; }\n    .category-pill > .category.-color-16 a {\n      background-color: #ff4400; }\n    .category-pill > .category.-color-17 a {\n      background-color: #ff4800; }\n    .category-pill > .category.-color-18 a {\n      background-color: #ff4d00; }\n    .category-pill > .category.-color-19 a {\n      background-color: #ff5100; }\n    .category-pill > .category.-color-20 a {\n      background-color: #ff5500; }\n    .category-pill > .category.-color-21 a {\n      background-color: #ff5900; }\n    .category-pill > .category.-color-22 a {\n      background-color: #ff5e00; }\n    .category-pill > .category.-color-23 a {\n      background-color: #ff6200; }\n    .category-pill > .category.-color-24 a {\n      background-color: #ff6600; }\n    .category-pill > .category.-color-25 a {\n      background-color: #ff6a00; }\n    .category-pill > .category.-color-26 a {\n      background-color: #ff6f00; }\n    .category-pill > .category.-color-27 a {\n      background-color: #ff7300; }\n    .category-pill > .category.-color-28 a {\n      background-color: #ff7700; }\n    .category-pill > .category.-color-29 a {\n      background-color: #ff7b00; }\n    .category-pill > .category.-color-30 a {\n      background-color: #ff8000; }\n    .category-pill > .category.-color-31 a {\n      background-color: #ff8400; }\n    .category-pill > .category.-color-32 a {\n      background-color: #ff8800; }\n    .category-pill > .category.-color-33 a {\n      background-color: darkorange; }\n    .category-pill > .category.-color-34 a {\n      background-color: #ff9100; }\n    .category-pill > .category.-color-35 a {\n      background-color: #ff9500; }\n    .category-pill > .category.-color-36 a {\n      background-color: #ff9900; }\n    .category-pill > .category.-color-37 a {\n      background-color: #ff9d00; }\n    .category-pill > .category.-color-38 a {\n      background-color: #ffa200; }\n    .category-pill > .category.-color-39 a {\n      background-color: #ffa600; }\n    .category-pill > .category.-color-40 a {\n      background-color: #ffaa00; }\n    .category-pill > .category.-color-41 a {\n      background-color: #ffae00; }\n    .category-pill > .category.-color-42 a {\n      background-color: #ffb300; }\n    .category-pill > .category.-color-43 a {\n      background-color: #ffb700; }\n    .category-pill > .category.-color-44 a {\n      background-color: #ffbb00; }\n    .category-pill > .category.-color-45 a {\n      background-color: #ffbf00; }\n    .category-pill > .category.-color-46 a {\n      background-color: #ffc400; }\n    .category-pill > .category.-color-47 a {\n      background-color: #ffc800; }\n    .category-pill > .category.-color-48 a {\n      background-color: #ffcc00; }\n    .category-pill > .category.-color-49 a {\n      background-color: #ffd000; }\n    .category-pill > .category.-color-50 a {\n      background-color: #ffd500; }\n    .category-pill > .category.-color-51 a {\n      background-color: #ffd900; }\n    .category-pill > .category.-color-52 a {\n      background-color: #ffdd00; }\n    .category-pill > .category.-color-53 a {\n      background-color: #ffe100; }\n    .category-pill > .category.-color-54 a {\n      background-color: #ffe600; }\n    .category-pill > .category.-color-55 a {\n      background-color: #ffea00; }\n    .category-pill > .category.-color-56 a {\n      background-color: #ffee00; }\n    .category-pill > .category.-color-57 a {\n      background-color: #fff200; }\n    .category-pill > .category.-color-58 a {\n      background-color: #fff700; }\n    .category-pill > .category.-color-59 a {\n      background-color: #fffb00; }\n    .category-pill > .category.-color-60 a {\n      background-color: yellow; }\n    .category-pill > .category.-color-61 a {\n      background-color: #fbff00; }\n    .category-pill > .category.-color-62 a {\n      background-color: #f7ff00; }\n    .category-pill > .category.-color-63 a {\n      background-color: #f2ff00; }\n    .category-pill > .category.-color-64 a {\n      background-color: #eeff00; }\n    .category-pill > .category.-color-65 a {\n      background-color: #eaff00; }\n    .category-pill > .category.-color-66 a {\n      background-color: #e6ff00; }\n    .category-pill > .category.-color-67 a {\n      background-color: #e1ff00; }\n    .category-pill > .category.-color-68 a {\n      background-color: #ddff00; }\n    .category-pill > .category.-color-69 a {\n      background-color: #d9ff00; }\n    .category-pill > .category.-color-70 a {\n      background-color: #d5ff00; }\n    .category-pill > .category.-color-71 a {\n      background-color: #d0ff00; }\n    .category-pill > .category.-color-72 a {\n      background-color: #ccff00; }\n    .category-pill > .category.-color-73 a {\n      background-color: #c8ff00; }\n    .category-pill > .category.-color-74 a {\n      background-color: #c4ff00; }\n    .category-pill > .category.-color-75 a {\n      background-color: #bfff00; }\n    .category-pill > .category.-color-76 a {\n      background-color: #bbff00; }\n    .category-pill > .category.-color-77 a {\n      background-color: #b7ff00; }\n    .category-pill > .category.-color-78 a {\n      background-color: #b3ff00; }\n    .category-pill > .category.-color-79 a {\n      background-color: #aeff00; }\n    .category-pill > .category.-color-80 a {\n      background-color: #aaff00; }\n    .category-pill > .category.-color-81 a {\n      background-color: #a6ff00; }\n    .category-pill > .category.-color-82 a {\n      background-color: #a2ff00; }\n    .category-pill > .category.-color-83 a {\n      background-color: #9dff00; }\n    .category-pill > .category.-color-84 a {\n      background-color: #99ff00; }\n    .category-pill > .category.-color-85 a {\n      background-color: #95ff00; }\n    .category-pill > .category.-color-86 a {\n      background-color: #91ff00; }\n    .category-pill > .category.-color-87 a {\n      background-color: #8cff00; }\n    .category-pill > .category.-color-88 a {\n      background-color: #88ff00; }\n    .category-pill > .category.-color-89 a {\n      background-color: #84ff00; }\n    .category-pill > .category.-color-90 a {\n      background-color: #80ff00; }\n    .category-pill > .category.-color-91 a {\n      background-color: #7bff00; }\n    .category-pill > .category.-color-92 a {\n      background-color: #77ff00; }\n    .category-pill > .category.-color-93 a {\n      background-color: #73ff00; }\n    .category-pill > .category.-color-94 a {\n      background-color: #6fff00; }\n    .category-pill > .category.-color-95 a {\n      background-color: #6aff00; }\n    .category-pill > .category.-color-96 a {\n      background-color: #66ff00; }\n    .category-pill > .category.-color-97 a {\n      background-color: #62ff00; }\n    .category-pill > .category.-color-98 a {\n      background-color: #5eff00; }\n    .category-pill > .category.-color-99 a {\n      background-color: #59ff00; }\n    .category-pill > .category.-color-100 a {\n      background-color: #55ff00; }\n    .category-pill > .category.-color-101 a {\n      background-color: #51ff00; }\n    .category-pill > .category.-color-102 a {\n      background-color: #4dff00; }\n    .category-pill > .category.-color-103 a {\n      background-color: #48ff00; }\n    .category-pill > .category.-color-104 a {\n      background-color: #44ff00; }\n    .category-pill > .category.-color-105 a {\n      background-color: #40ff00; }\n    .category-pill > .category.-color-106 a {\n      background-color: #3cff00; }\n    .category-pill > .category.-color-107 a {\n      background-color: #37ff00; }\n    .category-pill > .category.-color-108 a {\n      background-color: #33ff00; }\n    .category-pill > .category.-color-109 a {\n      background-color: #2fff00; }\n    .category-pill > .category.-color-110 a {\n      background-color: #2bff00; }\n    .category-pill > .category.-color-111 a {\n      background-color: #26ff00; }\n    .category-pill > .category.-color-112 a {\n      background-color: #22ff00; }\n    .category-pill > .category.-color-113 a {\n      background-color: #1eff00; }\n    .category-pill > .category.-color-114 a {\n      background-color: #1aff00; }\n    .category-pill > .category.-color-115 a {\n      background-color: #15ff00; }\n    .category-pill > .category.-color-116 a {\n      background-color: #11ff00; }\n    .category-pill > .category.-color-117 a {\n      background-color: #0dff00; }\n    .category-pill > .category.-color-118 a {\n      background-color: #09ff00; }\n    .category-pill > .category.-color-119 a {\n      background-color: #04ff00; }\n    .category-pill > .category.-color-120 a {\n      background-color: lime; }\n    .category-pill > .category.-color-121 a {\n      background-color: #00ff04; }\n    .category-pill > .category.-color-122 a {\n      background-color: #00ff09; }\n    .category-pill > .category.-color-123 a {\n      background-color: #00ff0d; }\n    .category-pill > .category.-color-124 a {\n      background-color: #00ff11; }\n    .category-pill > .category.-color-125 a {\n      background-color: #00ff15; }\n    .category-pill > .category.-color-126 a {\n      background-color: #00ff1a; }\n    .category-pill > .category.-color-127 a {\n      background-color: #00ff1e; }\n    .category-pill > .category.-color-128 a {\n      background-color: #00ff22; }\n    .category-pill > .category.-color-129 a {\n      background-color: #00ff26; }\n    .category-pill > .category.-color-130 a {\n      background-color: #00ff2b; }\n    .category-pill > .category.-color-131 a {\n      background-color: #00ff2f; }\n    .category-pill > .category.-color-132 a {\n      background-color: #00ff33; }\n    .category-pill > .category.-color-133 a {\n      background-color: #00ff37; }\n    .category-pill > .category.-color-134 a {\n      background-color: #00ff3c; }\n    .category-pill > .category.-color-135 a {\n      background-color: #00ff40; }\n    .category-pill > .category.-color-136 a {\n      background-color: #00ff44; }\n    .category-pill > .category.-color-137 a {\n      background-color: #00ff48; }\n    .category-pill > .category.-color-138 a {\n      background-color: #00ff4d; }\n    .category-pill > .category.-color-139 a {\n      background-color: #00ff51; }\n    .category-pill > .category.-color-140 a {\n      background-color: #00ff55; }\n    .category-pill > .category.-color-141 a {\n      background-color: #00ff59; }\n    .category-pill > .category.-color-142 a {\n      background-color: #00ff5e; }\n    .category-pill > .category.-color-143 a {\n      background-color: #00ff62; }\n    .category-pill > .category.-color-144 a {\n      background-color: #00ff66; }\n    .category-pill > .category.-color-145 a {\n      background-color: #00ff6a; }\n    .category-pill > .category.-color-146 a {\n      background-color: #00ff6f; }\n    .category-pill > .category.-color-147 a {\n      background-color: #00ff73; }\n    .category-pill > .category.-color-148 a {\n      background-color: #00ff77; }\n    .category-pill > .category.-color-149 a {\n      background-color: #00ff7b; }\n    .category-pill > .category.-color-150 a {\n      background-color: #00ff80; }\n    .category-pill > .category.-color-151 a {\n      background-color: #00ff84; }\n    .category-pill > .category.-color-152 a {\n      background-color: #00ff88; }\n    .category-pill > .category.-color-153 a {\n      background-color: #00ff8c; }\n    .category-pill > .category.-color-154 a {\n      background-color: #00ff91; }\n    .category-pill > .category.-color-155 a {\n      background-color: #00ff95; }\n    .category-pill > .category.-color-156 a {\n      background-color: #00ff99; }\n    .category-pill > .category.-color-157 a {\n      background-color: #00ff9d; }\n    .category-pill > .category.-color-158 a {\n      background-color: #00ffa2; }\n    .category-pill > .category.-color-159 a {\n      background-color: #00ffa6; }\n    .category-pill > .category.-color-160 a {\n      background-color: #00ffaa; }\n    .category-pill > .category.-color-161 a {\n      background-color: #00ffae; }\n    .category-pill > .category.-color-162 a {\n      background-color: #00ffb3; }\n    .category-pill > .category.-color-163 a {\n      background-color: #00ffb7; }\n    .category-pill > .category.-color-164 a {\n      background-color: #00ffbb; }\n    .category-pill > .category.-color-165 a {\n      background-color: #00ffbf; }\n    .category-pill > .category.-color-166 a {\n      background-color: #00ffc4; }\n    .category-pill > .category.-color-167 a {\n      background-color: #00ffc8; }\n    .category-pill > .category.-color-168 a {\n      background-color: #00ffcc; }\n    .category-pill > .category.-color-169 a {\n      background-color: #00ffd0; }\n    .category-pill > .category.-color-170 a {\n      background-color: #00ffd5; }\n    .category-pill > .category.-color-171 a {\n      background-color: #00ffd9; }\n    .category-pill > .category.-color-172 a {\n      background-color: #00ffdd; }\n    .category-pill > .category.-color-173 a {\n      background-color: #00ffe1; }\n    .category-pill > .category.-color-174 a {\n      background-color: #00ffe6; }\n    .category-pill > .category.-color-175 a {\n      background-color: #00ffea; }\n    .category-pill > .category.-color-176 a {\n      background-color: #00ffee; }\n    .category-pill > .category.-color-177 a {\n      background-color: #00fff2; }\n    .category-pill > .category.-color-178 a {\n      background-color: #00fff7; }\n    .category-pill > .category.-color-179 a {\n      background-color: #00fffb; }\n    .category-pill > .category.-color-180 a {\n      background-color: cyan; }\n    .category-pill > .category.-color-181 a {\n      background-color: #00fbff; }\n    .category-pill > .category.-color-182 a {\n      background-color: #00f7ff; }\n    .category-pill > .category.-color-183 a {\n      background-color: #00f2ff; }\n    .category-pill > .category.-color-184 a {\n      background-color: #00eeff; }\n    .category-pill > .category.-color-185 a {\n      background-color: #00eaff; }\n    .category-pill > .category.-color-186 a {\n      background-color: #00e6ff; }\n    .category-pill > .category.-color-187 a {\n      background-color: #00e1ff; }\n    .category-pill > .category.-color-188 a {\n      background-color: #00ddff; }\n    .category-pill > .category.-color-189 a {\n      background-color: #00d9ff; }\n    .category-pill > .category.-color-190 a {\n      background-color: #00d5ff; }\n    .category-pill > .category.-color-191 a {\n      background-color: #00d0ff; }\n    .category-pill > .category.-color-192 a {\n      background-color: #00ccff; }\n    .category-pill > .category.-color-193 a {\n      background-color: #00c8ff; }\n    .category-pill > .category.-color-194 a {\n      background-color: #00c4ff; }\n    .category-pill > .category.-color-195 a {\n      background-color: deepskyblue; }\n    .category-pill > .category.-color-196 a {\n      background-color: #00bbff; }\n    .category-pill > .category.-color-197 a {\n      background-color: #00b7ff; }\n    .category-pill > .category.-color-198 a {\n      background-color: #00b3ff; }\n    .category-pill > .category.-color-199 a {\n      background-color: #00aeff; }\n    .category-pill > .category.-color-200 a {\n      background-color: #00aaff; }\n    .category-pill > .category.-color-201 a {\n      background-color: #00a6ff; }\n    .category-pill > .category.-color-202 a {\n      background-color: #00a2ff; }\n    .category-pill > .category.-color-203 a {\n      background-color: #009dff; }\n    .category-pill > .category.-color-204 a {\n      background-color: #0099ff; }\n    .category-pill > .category.-color-205 a {\n      background-color: #0095ff; }\n    .category-pill > .category.-color-206 a {\n      background-color: #0091ff; }\n    .category-pill > .category.-color-207 a {\n      background-color: #008cff; }\n    .category-pill > .category.-color-208 a {\n      background-color: #0088ff; }\n    .category-pill > .category.-color-209 a {\n      background-color: #0084ff; }\n    .category-pill > .category.-color-210 a {\n      background-color: #0080ff; }\n    .category-pill > .category.-color-211 a {\n      background-color: #007bff; }\n    .category-pill > .category.-color-212 a {\n      background-color: #0077ff; }\n    .category-pill > .category.-color-213 a {\n      background-color: #0073ff; }\n    .category-pill > .category.-color-214 a {\n      background-color: #006fff; }\n    .category-pill > .category.-color-215 a {\n      background-color: #006aff; }\n    .category-pill > .category.-color-216 a {\n      background-color: #0066ff; }\n    .category-pill > .category.-color-217 a {\n      background-color: #0062ff; }\n    .category-pill > .category.-color-218 a {\n      background-color: #005eff; }\n    .category-pill > .category.-color-219 a {\n      background-color: #0059ff; }\n    .category-pill > .category.-color-220 a {\n      background-color: #0055ff; }\n    .category-pill > .category.-color-221 a {\n      background-color: #0051ff; }\n    .category-pill > .category.-color-222 a {\n      background-color: #004dff; }\n    .category-pill > .category.-color-223 a {\n      background-color: #0048ff; }\n    .category-pill > .category.-color-224 a {\n      background-color: #0044ff; }\n    .category-pill > .category.-color-225 a {\n      background-color: #0040ff; }\n    .category-pill > .category.-color-226 a {\n      background-color: #003cff; }\n    .category-pill > .category.-color-227 a {\n      background-color: #0037ff; }\n    .category-pill > .category.-color-228 a {\n      background-color: #0033ff; }\n    .category-pill > .category.-color-229 a {\n      background-color: #002fff; }\n    .category-pill > .category.-color-230 a {\n      background-color: #002bff; }\n    .category-pill > .category.-color-231 a {\n      background-color: #0026ff; }\n    .category-pill > .category.-color-232 a {\n      background-color: #0022ff; }\n    .category-pill > .category.-color-233 a {\n      background-color: #001eff; }\n    .category-pill > .category.-color-234 a {\n      background-color: #001aff; }\n    .category-pill > .category.-color-235 a {\n      background-color: #0015ff; }\n    .category-pill > .category.-color-236 a {\n      background-color: #0011ff; }\n    .category-pill > .category.-color-237 a {\n      background-color: #000dff; }\n    .category-pill > .category.-color-238 a {\n      background-color: #0009ff; }\n    .category-pill > .category.-color-239 a {\n      background-color: #0004ff; }\n    .category-pill > .category.-color-240 a {\n      background-color: blue; }\n    .category-pill > .category.-color-241 a {\n      background-color: #0400ff; }\n    .category-pill > .category.-color-242 a {\n      background-color: #0900ff; }\n    .category-pill > .category.-color-243 a {\n      background-color: #0d00ff; }\n    .category-pill > .category.-color-244 a {\n      background-color: #1100ff; }\n    .category-pill > .category.-color-245 a {\n      background-color: #1500ff; }\n    .category-pill > .category.-color-246 a {\n      background-color: #1a00ff; }\n    .category-pill > .category.-color-247 a {\n      background-color: #1e00ff; }\n    .category-pill > .category.-color-248 a {\n      background-color: #2200ff; }\n    .category-pill > .category.-color-249 a {\n      background-color: #2600ff; }\n    .category-pill > .category.-color-250 a {\n      background-color: #2b00ff; }\n    .category-pill > .category.-color-251 a {\n      background-color: #2f00ff; }\n    .category-pill > .category.-color-252 a {\n      background-color: #3300ff; }\n    .category-pill > .category.-color-253 a {\n      background-color: #3700ff; }\n    .category-pill > .category.-color-254 a {\n      background-color: #3c00ff; }\n    .category-pill > .category.-color-255 a {\n      background-color: #4000ff; }\n    .category-pill > .category.-color-256 a {\n      background-color: #4400ff; }\n    .category-pill > .category.-color-257 a {\n      background-color: #4800ff; }\n    .category-pill > .category.-color-258 a {\n      background-color: #4d00ff; }\n    .category-pill > .category.-color-259 a {\n      background-color: #5100ff; }\n    .category-pill > .category.-color-260 a {\n      background-color: #5500ff; }\n    .category-pill > .category.-color-261 a {\n      background-color: #5900ff; }\n    .category-pill > .category.-color-262 a {\n      background-color: #5e00ff; }\n    .category-pill > .category.-color-263 a {\n      background-color: #6200ff; }\n    .category-pill > .category.-color-264 a {\n      background-color: #6600ff; }\n    .category-pill > .category.-color-265 a {\n      background-color: #6a00ff; }\n    .category-pill > .category.-color-266 a {\n      background-color: #6f00ff; }\n    .category-pill > .category.-color-267 a {\n      background-color: #7300ff; }\n    .category-pill > .category.-color-268 a {\n      background-color: #7700ff; }\n    .category-pill > .category.-color-269 a {\n      background-color: #7b00ff; }\n    .category-pill > .category.-color-270 a {\n      background-color: #8000ff; }\n    .category-pill > .category.-color-271 a {\n      background-color: #8400ff; }\n    .category-pill > .category.-color-272 a {\n      background-color: #8800ff; }\n    .category-pill > .category.-color-273 a {\n      background-color: #8c00ff; }\n    .category-pill > .category.-color-274 a {\n      background-color: #9100ff; }\n    .category-pill > .category.-color-275 a {\n      background-color: #9500ff; }\n    .category-pill > .category.-color-276 a {\n      background-color: #9900ff; }\n    .category-pill > .category.-color-277 a {\n      background-color: #9d00ff; }\n    .category-pill > .category.-color-278 a {\n      background-color: #a200ff; }\n    .category-pill > .category.-color-279 a {\n      background-color: #a600ff; }\n    .category-pill > .category.-color-280 a {\n      background-color: #aa00ff; }\n    .category-pill > .category.-color-281 a {\n      background-color: #ae00ff; }\n    .category-pill > .category.-color-282 a {\n      background-color: #b300ff; }\n    .category-pill > .category.-color-283 a {\n      background-color: #b700ff; }\n    .category-pill > .category.-color-284 a {\n      background-color: #bb00ff; }\n    .category-pill > .category.-color-285 a {\n      background-color: #bf00ff; }\n    .category-pill > .category.-color-286 a {\n      background-color: #c400ff; }\n    .category-pill > .category.-color-287 a {\n      background-color: #c800ff; }\n    .category-pill > .category.-color-288 a {\n      background-color: #cc00ff; }\n    .category-pill > .category.-color-289 a {\n      background-color: #d000ff; }\n    .category-pill > .category.-color-290 a {\n      background-color: #d500ff; }\n    .category-pill > .category.-color-291 a {\n      background-color: #d900ff; }\n    .category-pill > .category.-color-292 a {\n      background-color: #dd00ff; }\n    .category-pill > .category.-color-293 a {\n      background-color: #e100ff; }\n    .category-pill > .category.-color-294 a {\n      background-color: #e600ff; }\n    .category-pill > .category.-color-295 a {\n      background-color: #ea00ff; }\n    .category-pill > .category.-color-296 a {\n      background-color: #ee00ff; }\n    .category-pill > .category.-color-297 a {\n      background-color: #f200ff; }\n    .category-pill > .category.-color-298 a {\n      background-color: #f700ff; }\n    .category-pill > .category.-color-299 a {\n      background-color: #fb00ff; }\n    .category-pill > .category.-color-300 a {\n      background-color: magenta; }\n    .category-pill > .category.-color-301 a {\n      background-color: #ff00fb; }\n    .category-pill > .category.-color-302 a {\n      background-color: #ff00f7; }\n    .category-pill > .category.-color-303 a {\n      background-color: #ff00f2; }\n    .category-pill > .category.-color-304 a {\n      background-color: #ff00ee; }\n    .category-pill > .category.-color-305 a {\n      background-color: #ff00ea; }\n    .category-pill > .category.-color-306 a {\n      background-color: #ff00e6; }\n    .category-pill > .category.-color-307 a {\n      background-color: #ff00e1; }\n    .category-pill > .category.-color-308 a {\n      background-color: #ff00dd; }\n    .category-pill > .category.-color-309 a {\n      background-color: #ff00d9; }\n    .category-pill > .category.-color-310 a {\n      background-color: #ff00d5; }\n    .category-pill > .category.-color-311 a {\n      background-color: #ff00d0; }\n    .category-pill > .category.-color-312 a {\n      background-color: #ff00cc; }\n    .category-pill > .category.-color-313 a {\n      background-color: #ff00c8; }\n    .category-pill > .category.-color-314 a {\n      background-color: #ff00c4; }\n    .category-pill > .category.-color-315 a {\n      background-color: #ff00bf; }\n    .category-pill > .category.-color-316 a {\n      background-color: #ff00bb; }\n    .category-pill > .category.-color-317 a {\n      background-color: #ff00b7; }\n    .category-pill > .category.-color-318 a {\n      background-color: #ff00b3; }\n    .category-pill > .category.-color-319 a {\n      background-color: #ff00ae; }\n    .category-pill > .category.-color-320 a {\n      background-color: #ff00aa; }\n    .category-pill > .category.-color-321 a {\n      background-color: #ff00a6; }\n    .category-pill > .category.-color-322 a {\n      background-color: #ff00a2; }\n    .category-pill > .category.-color-323 a {\n      background-color: #ff009d; }\n    .category-pill > .category.-color-324 a {\n      background-color: #ff0099; }\n    .category-pill > .category.-color-325 a {\n      background-color: #ff0095; }\n    .category-pill > .category.-color-326 a {\n      background-color: #ff0091; }\n    .category-pill > .category.-color-327 a {\n      background-color: #ff008c; }\n    .category-pill > .category.-color-328 a {\n      background-color: #ff0088; }\n    .category-pill > .category.-color-329 a {\n      background-color: #ff0084; }\n    .category-pill > .category.-color-330 a {\n      background-color: #ff0080; }\n    .category-pill > .category.-color-331 a {\n      background-color: #ff007b; }\n    .category-pill > .category.-color-332 a {\n      background-color: #ff0077; }\n    .category-pill > .category.-color-333 a {\n      background-color: #ff0073; }\n    .category-pill > .category.-color-334 a {\n      background-color: #ff006f; }\n    .category-pill > .category.-color-335 a {\n      background-color: #ff006a; }\n    .category-pill > .category.-color-336 a {\n      background-color: #ff0066; }\n    .category-pill > .category.-color-337 a {\n      background-color: #ff0062; }\n    .category-pill > .category.-color-338 a {\n      background-color: #ff005e; }\n    .category-pill > .category.-color-339 a {\n      background-color: #ff0059; }\n    .category-pill > .category.-color-340 a {\n      background-color: #ff0055; }\n    .category-pill > .category.-color-341 a {\n      background-color: #ff0051; }\n    .category-pill > .category.-color-342 a {\n      background-color: #ff004d; }\n    .category-pill > .category.-color-343 a {\n      background-color: #ff0048; }\n    .category-pill > .category.-color-344 a {\n      background-color: #ff0044; }\n    .category-pill > .category.-color-345 a {\n      background-color: #ff0040; }\n    .category-pill > .category.-color-346 a {\n      background-color: #ff003c; }\n    .category-pill > .category.-color-347 a {\n      background-color: #ff0037; }\n    .category-pill > .category.-color-348 a {\n      background-color: #ff0033; }\n    .category-pill > .category.-color-349 a {\n      background-color: #ff002f; }\n    .category-pill > .category.-color-350 a {\n      background-color: #ff002b; }\n    .category-pill > .category.-color-351 a {\n      background-color: #ff0026; }\n    .category-pill > .category.-color-352 a {\n      background-color: #ff0022; }\n    .category-pill > .category.-color-353 a {\n      background-color: #ff001e; }\n    .category-pill > .category.-color-354 a {\n      background-color: #ff001a; }\n    .category-pill > .category.-color-355 a {\n      background-color: #ff0015; }\n    .category-pill > .category.-color-356 a {\n      background-color: #ff0011; }\n    .category-pill > .category.-color-357 a {\n      background-color: #ff000d; }\n    .category-pill > .category.-color-358 a {\n      background-color: #ff0009; }\n    .category-pill > .category.-color-359 a {\n      background-color: #ff0004; }\n    .category-pill > .category:first-child a {\n      border-top-left-radius: 0.25rem;\n      border-bottom-left-radius: 0.25rem; }\n    .category-pill > .category:last-child a {\n      border-top-right-radius: 0.25rem;\n      border-bottom-right-radius: 0.25rem;\n      border-right: 0; }\n\n.emoticon-faces {\n  background: url(" + __webpack_require__(15) + ");\n  width: 36px;\n  height: 19px;\n  display: inline-block; }\n\n.fa.-highlight {\n  color: red; }\n\n.hero-logo > img {\n  max-width: 845px;\n  width: 100%; }\n\n.hero-logo > span {\n  display: none; }\n\n.item-metadata {\n  display: flex;\n  flex-direction: row;\n  color: #acb7bf; }\n  .item-metadata > * {\n    margin-right: 0.5rem; }\n  .item-metadata > .username {\n    text-decoration: none; }\n    .item-metadata > .username:hover {\n      text-decoration: underline; }\n  .item-metadata > abbr {\n    border-bottom: none; }\n\n.navigation-logo > img {\n  height: 40px; }\n\n.navigation-logo > span {\n  display: none; }\n\n.navigation-menu {\n  padding: 0.5rem;\n  background: #ffffff;\n  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24); }\n  .navigation-menu a {\n    vertical-align: middle; }\n  .navigation-menu > ul {\n    float: right;\n    padding: 0.5rem; }\n\n.new-thread {\n  display: flex;\n  flex-direction: column; }\n  .new-thread > input, .new-thread > textarea {\n    border-width: 0 0 1px 0;\n    border-color: #acb7bf;\n    resize: vertical;\n    margin-top: .1rem;\n    margin-bottom: .1rem; }\n    .new-thread > input:focus, .new-thread > textarea:focus {\n      border-color: #64caec;\n      outline: none;\n      box-shadow: none; }\n\n.post-editor {\n  display: flex;\n  flex-direction: column; }\n  .post-editor > textarea {\n    border-width: 0 0 1px 0;\n    border-color: #acb7bf;\n    resize: vertical;\n    margin-top: .1rem;\n    margin-bottom: .1rem;\n    overflow: auto; }\n    .post-editor > textarea:focus {\n      border-color: #64caec;\n      outline: none;\n      box-shadow: none; }\n\n.post-item-actions {\n  display: flex;\n  flex-direction: row; }\n  .post-item-actions > .spacer {\n    flex-grow: 1; }\n  .post-item-actions > .actions {\n    align-self: flex-end;\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n    .post-item-actions > .actions > li {\n      display: inline-block; }\n      .post-item-actions > .actions > li > a {\n        padding: 0.5rem;\n        color: #acb7bf;\n        transition-property: color;\n        transition-duration: 0.5s;\n        transition-timing-function: easeInOutSine; }\n        .post-item-actions > .actions > li > a:active {\n          color: #DB3440; }\n        .post-item-actions > .actions > li > a > i.fa {\n          font-size: 22px; }\n          .post-item-actions > .actions > li > a > i.fa.fa-eye:before {\n            top: -2px;\n            position: relative; }\n\n.post-item {\n  border-bottom: 1px solid #dbe8f1;\n  padding: 0.5rem; }\n  .post-item:target {\n    background-color: rgba(219, 52, 64, 0.03); }\n\n.post-list {\n  padding: 0; }\n  .post-list > li {\n    list-style-type: none; }\n\n.reply-count {\n  color: #acb7bf;\n  font-style: oblique; }\n\n.tag-editor > .add-tag {\n  display: block; }\n\n.tag-editor > .tag-form {\n  display: none; }\n  .tag-editor > .tag-form > button {\n    font-size: 75%; }\n\n.tag-editor.editing > .add-tag {\n  display: none; }\n\n.tag-editor.editing > .tag-form {\n  display: block; }\n\n.tag-list {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: flex; }\n\n.thread-header > h2 {\n  margin-bottom: 0;\n  margin-top: 0; }\n\n.thread-list-item {\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #dbe8f1; }\n  .thread-list-item > .details {\n    flex-grow: 1; }\n    .thread-list-item > .details > .summary > .title {\n      color: #444444;\n      text-decoration: none; }\n      .thread-list-item > .details > .summary > .title:hover {\n        text-decoration: underline; }\n    .thread-list-item > .details > .summary > .user-name {\n      text-decoration: none; }\n      .thread-list-item > .details > .summary > .user-name:hover {\n        text-decoration: underline; }\n    .thread-list-item > .details > .metadata {\n      color: #acb7bf; }\n\n.thread-list {\n  padding: 0;\n  margin-left: 1rem; }\n  .thread-list > li {\n    list-style-type: none; }\n\n.login-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 2rem; }\n  .login-page .logo {\n    margin-bottom: 4rem;\n    margin-top: 4rem; }\n  .login-page > button, .login-page > .github-link, .login-page > .pure-button {\n    margin-bottom: 1rem;\n    width: 100%;\n    font-size: 1.5rem;\n    position: relative; }\n    .login-page > button > i, .login-page > .github-link > i, .login-page > .pure-button > i {\n      position: absolute;\n      left: 2rem;\n      font-size: 2rem; }\n  .login-page a.sign-in-link {\n    text-transform: uppercase;\n    padding: 1rem 0 1rem 1rem;\n    align-self: flex-end;\n    text-decoration: none; }\n  .login-page .legal-disclaimer {\n    color: #acb7bf; }\n\n.layout-app .layout-content {\n  padding: 1rem; }\n\n.elm-overlay {\n  z-index: 100; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-300.9d033f8d.woff2";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-300.5dc73cd1.woff";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-regular.cdb8bcf7.woff2";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-regular.b190e164.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-500.fe8d3ca7.woff2";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-500.57651d01.woff";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-600.365bd343.woff2";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-600.d4f6bb86.woff";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-700.4b73eeb4.woff2";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/media/fira-sans-v7-latin-700.66d9198a.woff";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAATCAYAAAD4f6+NAAAABGdBTUEAALGPC/xhBQAABWlJREFUSA3NVltvVFUU/s5l7tMCpS2d0iml3NogIBWJEAEJJlyk0ShBE3znD8iT4oOXJ+OLb74aS9RUjBYEhARQLmKgIgpU6tjSi8W2DO30zPTMzJk5rm9PT0khRR9MdCene87Z6/Kttb61djXMslzXjcvRPsdxWovQGg0NFYZh3JVvCXmOytOmaVq/7H+7Ojo6wpPBmC9kD+VbW1szj1LQHjwUIAErk3n/zujY/uHRpGmlMygUizB0HdFIGAsqK1BXU4mA358V3Q/kOSjA+HvGOnziRLWL0Msa3J1ic5kcBuWxRbbbhXZMw+SnL27fPjxDSV5mABLF6kTf4PlE3x9Lc04BrgApFGR3xYSmQTIETYD5TQNNjfWor11Ae9/L87ycTxtvP3b6VZF92/T5Gmaz4eTzvWL74J6dWz+mEW9NA2Jmfv410f17/1DcldOC43gyD+2GaapIViyOo2nJIp4T1DPMVPvXp183feY7/9SGk3fe2LNr67uek2lAN7p7O2719u/2MuIJzLZ7GWtZuRzxWDXF3jt84turhmm0eTrMbHEqw9436unMtOzeKjiFfS/t2HKI7+rrrZ6Bx7t7+zqlTBozQwVd06VcjiqXp1gCYaLoFpUjZorl27ZxnXDKlz1+9lJy0rZjiVs3cS85inkVVahfvAQ+vx9FKb8u5c7ncujrScj5iJxXYsnyZvGBgYKrt+zdtXlEp7MJy3pLOkmBIUfuDPbjxk9XkMtmpyMhGL5fv3oZdwb6FZcIXvQwMKToE2iIx2L5fF7pjCXv4mTH5zjSfghpa0IFyZ3v/M5z2qR8IBisM1B8hVgUoJSVeZrk0yQrVmoc33zVjlNHv8CPP5xXRKYgCd156RxOHjmM419+puQoT72hEU4DoKpiLpg18mcyk0ZZ+RyM3buL7pu/wOfzq53v/M5zylG+WJTG0dznaMP8kDPCtsvJHS6iZrnUrhvqm/dH5zvPJYseA6jH0eDIHgkFMZlOI2tP4qlN2xAVx5SlMLPbvHotmletVeVj4CPDQ0reNH2Qui0jFrM6GvULUl3qKN+KiJSVY/sLezEukdQ3LlVtT0B0vHb9RlRUVmFuxXzljLxwXUm2KJPAfp+JcDQqjlukTJaAlE6datasfb/8BBiKlqG5JkanCqAEGiAWc9iycvFooCiBq3SwBNU1tVhQu1C1Ph1xcSc5Vzy2Rv32xoLoSUY1ldFcvuT9yvkziNfWIBjkLLy/SpZK71nbRte1P/HEhs1MOh1kh610ztwvo/z0xc6UU5ycxyywVBOpMeU8FI5Mt60qofDIzmSQy2URkQgJktziBDdlH59Iw3HySI0l8WTrLoRCoak+pkdvsRTCMSnr9Y/aIAMS9CO+u4nFpFh5NHzOsrOt/M2aswMuXziLJql3bV09fIGAatehgT7cvNaJdRu3KGKqAEQ+VjWfqhhOjsHvD6AgDl87cECILNyQZUs2GBAD8LLG7mpetQZ+sa3pkmFX4/0IBagsGn1TH03uFsar1o83NCKTtnDxzCmVDbkCVCQs2YYt28BzgmGHSJ+hrjQYs739g0nDMGOrW9bjdqJbsiVjQShAQJFIBGkhvF9sMKvhcBiUE3lpAntAbstPCGg6lw9OajqzUikM9vXAmkghKmRfWN+gyEz+MGIafmhSG3obSfFb13V8d+o4fIaOpqYmlM8px/j4OLq6uoTsLjY9uwNLm1YqUhcKxZmTmsgknQ/dZZ5TOhABlRXFGwHLSB51lzFyTuvB2z3I2xlVLtrxB0NYuKhRTWneBLPeZVOg/tXbXvjUQOTkC0tnyByTi1eRWhqjV8o++21PQFzM1P/m/6ESpNJfAfaf/Mf4F0GIJAq+bi+CAAAAAElFTkSuQmCC"

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = {
	  apiBaseUrl: "https://firestorm-dogfood.herokuapp.com/api/v1/"
	}


/***/ },
/* 18 */
/***/ function(module, exports) {

	
	(function() {
	'use strict';

	function F2(fun)
	{
	  function wrapper(a) { return function(b) { return fun(a,b); }; }
	  wrapper.arity = 2;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F3(fun)
	{
	  function wrapper(a) {
	    return function(b) { return function(c) { return fun(a, b, c); }; };
	  }
	  wrapper.arity = 3;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F4(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return fun(a, b, c, d); }; }; };
	  }
	  wrapper.arity = 4;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F5(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
	  }
	  wrapper.arity = 5;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F6(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return fun(a, b, c, d, e, f); }; }; }; }; };
	  }
	  wrapper.arity = 6;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F7(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
	  }
	  wrapper.arity = 7;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F8(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) {
	    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
	  }
	  wrapper.arity = 8;
	  wrapper.func = fun;
	  return wrapper;
	}

	function F9(fun)
	{
	  function wrapper(a) { return function(b) { return function(c) {
	    return function(d) { return function(e) { return function(f) {
	    return function(g) { return function(h) { return function(i) {
	    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
	  }
	  wrapper.arity = 9;
	  wrapper.func = fun;
	  return wrapper;
	}

	function A2(fun, a, b)
	{
	  return fun.arity === 2
	    ? fun.func(a, b)
	    : fun(a)(b);
	}
	function A3(fun, a, b, c)
	{
	  return fun.arity === 3
	    ? fun.func(a, b, c)
	    : fun(a)(b)(c);
	}
	function A4(fun, a, b, c, d)
	{
	  return fun.arity === 4
	    ? fun.func(a, b, c, d)
	    : fun(a)(b)(c)(d);
	}
	function A5(fun, a, b, c, d, e)
	{
	  return fun.arity === 5
	    ? fun.func(a, b, c, d, e)
	    : fun(a)(b)(c)(d)(e);
	}
	function A6(fun, a, b, c, d, e, f)
	{
	  return fun.arity === 6
	    ? fun.func(a, b, c, d, e, f)
	    : fun(a)(b)(c)(d)(e)(f);
	}
	function A7(fun, a, b, c, d, e, f, g)
	{
	  return fun.arity === 7
	    ? fun.func(a, b, c, d, e, f, g)
	    : fun(a)(b)(c)(d)(e)(f)(g);
	}
	function A8(fun, a, b, c, d, e, f, g, h)
	{
	  return fun.arity === 8
	    ? fun.func(a, b, c, d, e, f, g, h)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h);
	}
	function A9(fun, a, b, c, d, e, f, g, h, i)
	{
	  return fun.arity === 9
	    ? fun.func(a, b, c, d, e, f, g, h, i)
	    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
	}

	var _elm_lang$lazy$Native_Lazy = function() {

	function memoize(thunk)
	{
	    var value;
	    var isForced = false;
	    return function(tuple0) {
	        if (!isForced) {
	            value = thunk(tuple0);
	            isForced = true;
	        }
	        return value;
	    };
	}

	return {
	    memoize: memoize
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Basics = function() {

	function div(a, b)
	{
		return (a / b) | 0;
	}
	function rem(a, b)
	{
		return a % b;
	}
	function mod(a, b)
	{
		if (b === 0)
		{
			throw new Error('Cannot perform mod 0. Division by zero error.');
		}
		var r = a % b;
		var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

		return m === b ? 0 : m;
	}
	function logBase(base, n)
	{
		return Math.log(n) / Math.log(base);
	}
	function negate(n)
	{
		return -n;
	}
	function abs(n)
	{
		return n < 0 ? -n : n;
	}

	function min(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
	}
	function max(a, b)
	{
		return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
	}
	function clamp(lo, hi, n)
	{
		return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
			? lo
			: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
				? hi
				: n;
	}

	var ord = ['LT', 'EQ', 'GT'];

	function compare(x, y)
	{
		return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
	}

	function xor(a, b)
	{
		return a !== b;
	}
	function not(b)
	{
		return !b;
	}
	function isInfinite(n)
	{
		return n === Infinity || n === -Infinity;
	}

	function truncate(n)
	{
		return n | 0;
	}

	function degrees(d)
	{
		return d * Math.PI / 180;
	}
	function turns(t)
	{
		return 2 * Math.PI * t;
	}
	function fromPolar(point)
	{
		var r = point._0;
		var t = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
	}
	function toPolar(point)
	{
		var x = point._0;
		var y = point._1;
		return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
	}

	return {
		div: F2(div),
		rem: F2(rem),
		mod: F2(mod),

		pi: Math.PI,
		e: Math.E,
		cos: Math.cos,
		sin: Math.sin,
		tan: Math.tan,
		acos: Math.acos,
		asin: Math.asin,
		atan: Math.atan,
		atan2: F2(Math.atan2),

		degrees: degrees,
		turns: turns,
		fromPolar: fromPolar,
		toPolar: toPolar,

		sqrt: Math.sqrt,
		logBase: F2(logBase),
		negate: negate,
		abs: abs,
		min: F2(min),
		max: F2(max),
		clamp: F3(clamp),
		compare: F2(compare),

		xor: F2(xor),
		not: not,

		truncate: truncate,
		ceiling: Math.ceil,
		floor: Math.floor,
		round: Math.round,
		toFloat: function(x) { return x; },
		isNaN: isNaN,
		isInfinite: isInfinite
	};

	}();
	//import //

	var _elm_lang$core$Native_Utils = function() {

	// COMPARISONS

	function eq(x, y)
	{
		var stack = [];
		var isEqual = eqHelp(x, y, 0, stack);
		var pair;
		while (isEqual && (pair = stack.pop()))
		{
			isEqual = eqHelp(pair.x, pair.y, 0, stack);
		}
		return isEqual;
	}


	function eqHelp(x, y, depth, stack)
	{
		if (depth > 100)
		{
			stack.push({ x: x, y: y });
			return true;
		}

		if (x === y)
		{
			return true;
		}

		if (typeof x !== 'object')
		{
			if (typeof x === 'function')
			{
				throw new Error(
					'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
					+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
					+ ' which describes why it is this way and what the better version will look like.'
				);
			}
			return false;
		}

		if (x === null || y === null)
		{
			return false
		}

		if (x instanceof Date)
		{
			return x.getTime() === y.getTime();
		}

		if (!('ctor' in x))
		{
			for (var key in x)
			{
				if (!eqHelp(x[key], y[key], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		// convert Dicts and Sets to lists
		if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
		{
			x = _elm_lang$core$Dict$toList(x);
			y = _elm_lang$core$Dict$toList(y);
		}
		if (x.ctor === 'Set_elm_builtin')
		{
			x = _elm_lang$core$Set$toList(x);
			y = _elm_lang$core$Set$toList(y);
		}

		// check if lists are equal without recursion
		if (x.ctor === '::')
		{
			var a = x;
			var b = y;
			while (a.ctor === '::' && b.ctor === '::')
			{
				if (!eqHelp(a._0, b._0, depth + 1, stack))
				{
					return false;
				}
				a = a._1;
				b = b._1;
			}
			return a.ctor === b.ctor;
		}

		// check if Arrays are equal
		if (x.ctor === '_Array')
		{
			var xs = _elm_lang$core$Native_Array.toJSArray(x);
			var ys = _elm_lang$core$Native_Array.toJSArray(y);
			if (xs.length !== ys.length)
			{
				return false;
			}
			for (var i = 0; i < xs.length; i++)
			{
				if (!eqHelp(xs[i], ys[i], depth + 1, stack))
				{
					return false;
				}
			}
			return true;
		}

		if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
		{
			return false;
		}

		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
	// the particular integer values assigned to LT, EQ, and GT.

	var LT = -1, EQ = 0, GT = 1;

	function cmp(x, y)
	{
		if (typeof x !== 'object')
		{
			return x === y ? EQ : x < y ? LT : GT;
		}

		if (x instanceof String)
		{
			var a = x.valueOf();
			var b = y.valueOf();
			return a === b ? EQ : a < b ? LT : GT;
		}

		if (x.ctor === '::' || x.ctor === '[]')
		{
			while (x.ctor === '::' && y.ctor === '::')
			{
				var ord = cmp(x._0, y._0);
				if (ord !== EQ)
				{
					return ord;
				}
				x = x._1;
				y = y._1;
			}
			return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
		}

		if (x.ctor.slice(0, 6) === '_Tuple')
		{
			var ord;
			var n = x.ctor.slice(6) - 0;
			var err = 'cannot compare tuples with more than 6 elements.';
			if (n === 0) return EQ;
			if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
			if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
			if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
			if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
			if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
			if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
			if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
			return EQ;
		}

		throw new Error(
			'Comparison error: comparison is only defined on ints, '
			+ 'floats, times, chars, strings, lists of comparable values, '
			+ 'and tuples of comparable values.'
		);
	}


	// COMMON VALUES

	var Tuple0 = {
		ctor: '_Tuple0'
	};

	function Tuple2(x, y)
	{
		return {
			ctor: '_Tuple2',
			_0: x,
			_1: y
		};
	}

	function chr(c)
	{
		return new String(c);
	}


	// GUID

	var count = 0;
	function guid(_)
	{
		return count++;
	}


	// RECORDS

	function update(oldRecord, updatedFields)
	{
		var newRecord = {};

		for (var key in oldRecord)
		{
			newRecord[key] = oldRecord[key];
		}

		for (var key in updatedFields)
		{
			newRecord[key] = updatedFields[key];
		}

		return newRecord;
	}


	//// LIST STUFF ////

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return {
			ctor: '::',
			_0: hd,
			_1: tl
		};
	}

	function append(xs, ys)
	{
		// append Strings
		if (typeof xs === 'string')
		{
			return xs + ys;
		}

		// append Lists
		if (xs.ctor === '[]')
		{
			return ys;
		}
		var root = Cons(xs._0, Nil);
		var curr = root;
		xs = xs._1;
		while (xs.ctor !== '[]')
		{
			curr._1 = Cons(xs._0, Nil);
			xs = xs._1;
			curr = curr._1;
		}
		curr._1 = ys;
		return root;
	}


	// CRASHES

	function crash(moduleName, region)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function crashCase(moduleName, region, value)
	{
		return function(message) {
			throw new Error(
				'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
				+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
				+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
				+ 'The message provided by the code author is:\n\n    '
				+ message
			);
		};
	}

	function regionToString(region)
	{
		if (region.start.line == region.end.line)
		{
			return 'on line ' + region.start.line;
		}
		return 'between lines ' + region.start.line + ' and ' + region.end.line;
	}


	// TO STRING

	function toString(v)
	{
		var type = typeof v;
		if (type === 'function')
		{
			return '<function>';
		}

		if (type === 'boolean')
		{
			return v ? 'True' : 'False';
		}

		if (type === 'number')
		{
			return v + '';
		}

		if (v instanceof String)
		{
			return '\'' + addSlashes(v, true) + '\'';
		}

		if (type === 'string')
		{
			return '"' + addSlashes(v, false) + '"';
		}

		if (v === null)
		{
			return 'null';
		}

		if (type === 'object' && 'ctor' in v)
		{
			var ctorStarter = v.ctor.substring(0, 5);

			if (ctorStarter === '_Tupl')
			{
				var output = [];
				for (var k in v)
				{
					if (k === 'ctor') continue;
					output.push(toString(v[k]));
				}
				return '(' + output.join(',') + ')';
			}

			if (ctorStarter === '_Task')
			{
				return '<task>'
			}

			if (v.ctor === '_Array')
			{
				var list = _elm_lang$core$Array$toList(v);
				return 'Array.fromList ' + toString(list);
			}

			if (v.ctor === '<decoder>')
			{
				return '<decoder>';
			}

			if (v.ctor === '_Process')
			{
				return '<process:' + v.id + '>';
			}

			if (v.ctor === '::')
			{
				var output = '[' + toString(v._0);
				v = v._1;
				while (v.ctor === '::')
				{
					output += ',' + toString(v._0);
					v = v._1;
				}
				return output + ']';
			}

			if (v.ctor === '[]')
			{
				return '[]';
			}

			if (v.ctor === 'Set_elm_builtin')
			{
				return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
			}

			if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
			{
				return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
			}

			var output = '';
			for (var i in v)
			{
				if (i === 'ctor') continue;
				var str = toString(v[i]);
				var c0 = str[0];
				var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
				output += ' ' + (parenless ? str : '(' + str + ')');
			}
			return v.ctor + output;
		}

		if (type === 'object')
		{
			if (v instanceof Date)
			{
				return '<' + v.toString() + '>';
			}

			if (v.elm_web_socket)
			{
				return '<websocket>';
			}

			var output = [];
			for (var k in v)
			{
				output.push(k + ' = ' + toString(v[k]));
			}
			if (output.length === 0)
			{
				return '{}';
			}
			return '{ ' + output.join(', ') + ' }';
		}

		return '<internal structure>';
	}

	function addSlashes(str, isChar)
	{
		var s = str.replace(/\\/g, '\\\\')
				  .replace(/\n/g, '\\n')
				  .replace(/\t/g, '\\t')
				  .replace(/\r/g, '\\r')
				  .replace(/\v/g, '\\v')
				  .replace(/\0/g, '\\0');
		if (isChar)
		{
			return s.replace(/\'/g, '\\\'');
		}
		else
		{
			return s.replace(/\"/g, '\\"');
		}
	}


	return {
		eq: eq,
		cmp: cmp,
		Tuple0: Tuple0,
		Tuple2: Tuple2,
		chr: chr,
		update: update,
		guid: guid,

		append: F2(append),

		crash: crash,
		crashCase: crashCase,

		toString: toString
	};

	}();
	var _elm_lang$core$Basics$never = function (_p0) {
		never:
		while (true) {
			var _p1 = _p0;
			var _v1 = _p1._0;
			_p0 = _v1;
			continue never;
		}
	};
	var _elm_lang$core$Basics$uncurry = F2(
		function (f, _p2) {
			var _p3 = _p2;
			return A2(f, _p3._0, _p3._1);
		});
	var _elm_lang$core$Basics$curry = F3(
		function (f, a, b) {
			return f(
				{ctor: '_Tuple2', _0: a, _1: b});
		});
	var _elm_lang$core$Basics$flip = F3(
		function (f, b, a) {
			return A2(f, a, b);
		});
	var _elm_lang$core$Basics$always = F2(
		function (a, _p4) {
			return a;
		});
	var _elm_lang$core$Basics$identity = function (x) {
		return x;
	};
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<|'] = F2(
		function (f, x) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['|>'] = F2(
		function (x, f) {
			return f(x);
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>>'] = F3(
		function (f, g, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<<'] = F3(
		function (g, f, x) {
			return g(
				f(x));
		});
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
	var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
	var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
	var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
	var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
	var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
	var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
	var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
	var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
	var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
	var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
	var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
	var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
	var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
	var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
	var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
	var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
	var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
	var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
	var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
	var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
	var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
	var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
	var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
	var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
	var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
	var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
	var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
	var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
	var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
	_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
	var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
	var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
	var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
	var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
	var _elm_lang$core$Basics$radians = function (t) {
		return t;
	};
	var _elm_lang$core$Basics$GT = {ctor: 'GT'};
	var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
	var _elm_lang$core$Basics$LT = {ctor: 'LT'};
	var _elm_lang$core$Basics$JustOneMore = function (a) {
		return {ctor: 'JustOneMore', _0: a};
	};

	//import Native.Utils //

	var _elm_lang$core$Native_Debug = function() {

	function log(tag, value)
	{
		var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
		var process = process || {};
		if (process.stdout)
		{
			process.stdout.write(msg);
		}
		else
		{
			console.log(msg);
		}
		return value;
	}

	function crash(message)
	{
		throw new Error(message);
	}

	return {
		crash: crash,
		log: F2(log)
	};

	}();
	var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
	var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

	var _elm_lang$core$Maybe$withDefault = F2(
		function ($default, maybe) {
			var _p0 = maybe;
			if (_p0.ctor === 'Just') {
				return _p0._0;
			} else {
				return $default;
			}
		});
	var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
	var _elm_lang$core$Maybe$andThen = F2(
		function (callback, maybeValue) {
			var _p1 = maybeValue;
			if (_p1.ctor === 'Just') {
				return callback(_p1._0);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$Just = function (a) {
		return {ctor: 'Just', _0: a};
	};
	var _elm_lang$core$Maybe$map = F2(
		function (f, maybe) {
			var _p2 = maybe;
			if (_p2.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					f(_p2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map2 = F3(
		function (func, ma, mb) {
			var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
			if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A2(func, _p3._0._0, _p3._1._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map3 = F4(
		function (func, ma, mb, mc) {
			var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
			if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map4 = F5(
		function (func, ma, mb, mc, md) {
			var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
			if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _elm_lang$core$Maybe$map5 = F6(
		function (func, ma, mb, mc, md, me) {
			var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
			if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
				return _elm_lang$core$Maybe$Just(
					A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});

	//import Native.Utils //

	var _elm_lang$core$Native_List = function() {

	var Nil = { ctor: '[]' };

	function Cons(hd, tl)
	{
		return { ctor: '::', _0: hd, _1: tl };
	}

	function fromArray(arr)
	{
		var out = Nil;
		for (var i = arr.length; i--; )
		{
			out = Cons(arr[i], out);
		}
		return out;
	}

	function toArray(xs)
	{
		var out = [];
		while (xs.ctor !== '[]')
		{
			out.push(xs._0);
			xs = xs._1;
		}
		return out;
	}

	function foldr(f, b, xs)
	{
		var arr = toArray(xs);
		var acc = b;
		for (var i = arr.length; i--; )
		{
			acc = A2(f, arr[i], acc);
		}
		return acc;
	}

	function map2(f, xs, ys)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]')
		{
			arr.push(A2(f, xs._0, ys._0));
			xs = xs._1;
			ys = ys._1;
		}
		return fromArray(arr);
	}

	function map3(f, xs, ys, zs)
	{
		var arr = [];
		while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
		{
			arr.push(A3(f, xs._0, ys._0, zs._0));
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map4(f, ws, xs, ys, zs)
	{
		var arr = [];
		while (   ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function map5(f, vs, ws, xs, ys, zs)
	{
		var arr = [];
		while (   vs.ctor !== '[]'
			   && ws.ctor !== '[]'
			   && xs.ctor !== '[]'
			   && ys.ctor !== '[]'
			   && zs.ctor !== '[]')
		{
			arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
			vs = vs._1;
			ws = ws._1;
			xs = xs._1;
			ys = ys._1;
			zs = zs._1;
		}
		return fromArray(arr);
	}

	function sortBy(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
		}));
	}

	function sortWith(f, xs)
	{
		return fromArray(toArray(xs).sort(function(a, b) {
			var ord = f(a)(b).ctor;
			return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
		}));
	}

	return {
		Nil: Nil,
		Cons: Cons,
		cons: F2(Cons),
		toArray: toArray,
		fromArray: fromArray,

		foldr: F3(foldr),

		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		sortBy: F2(sortBy),
		sortWith: F2(sortWith)
	};

	}();
	var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
	var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
	var _elm_lang$core$List$sort = function (xs) {
		return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
	};
	var _elm_lang$core$List$singleton = function (value) {
		return {
			ctor: '::',
			_0: value,
			_1: {ctor: '[]'}
		};
	};
	var _elm_lang$core$List$drop = F2(
		function (n, list) {
			drop:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return list;
				} else {
					var _p0 = list;
					if (_p0.ctor === '[]') {
						return list;
					} else {
						var _v1 = n - 1,
							_v2 = _p0._1;
						n = _v1;
						list = _v2;
						continue drop;
					}
				}
			}
		});
	var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
	var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
	var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
	var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
	var _elm_lang$core$List$any = F2(
		function (isOkay, list) {
			any:
			while (true) {
				var _p1 = list;
				if (_p1.ctor === '[]') {
					return false;
				} else {
					if (isOkay(_p1._0)) {
						return true;
					} else {
						var _v4 = isOkay,
							_v5 = _p1._1;
						isOkay = _v4;
						list = _v5;
						continue any;
					}
				}
			}
		});
	var _elm_lang$core$List$all = F2(
		function (isOkay, list) {
			return !A2(
				_elm_lang$core$List$any,
				function (_p2) {
					return !isOkay(_p2);
				},
				list);
		});
	var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
	var _elm_lang$core$List$foldl = F3(
		function (func, acc, list) {
			foldl:
			while (true) {
				var _p3 = list;
				if (_p3.ctor === '[]') {
					return acc;
				} else {
					var _v7 = func,
						_v8 = A2(func, _p3._0, acc),
						_v9 = _p3._1;
					func = _v7;
					acc = _v8;
					list = _v9;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$List$length = function (xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p4, i) {
					return i + 1;
				}),
			0,
			xs);
	};
	var _elm_lang$core$List$sum = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x + y;
				}),
			0,
			numbers);
	};
	var _elm_lang$core$List$product = function (numbers) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return x * y;
				}),
			1,
			numbers);
	};
	var _elm_lang$core$List$maximum = function (list) {
		var _p5 = list;
		if (_p5.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$minimum = function (list) {
		var _p6 = list;
		if (_p6.ctor === '::') {
			return _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$member = F2(
		function (x, xs) {
			return A2(
				_elm_lang$core$List$any,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(a, x);
				},
				xs);
		});
	var _elm_lang$core$List$isEmpty = function (xs) {
		var _p7 = xs;
		if (_p7.ctor === '[]') {
			return true;
		} else {
			return false;
		}
	};
	var _elm_lang$core$List$tail = function (list) {
		var _p8 = list;
		if (_p8.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p8._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List$head = function (list) {
		var _p9 = list;
		if (_p9.ctor === '::') {
			return _elm_lang$core$Maybe$Just(_p9._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
	_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
	var _elm_lang$core$List$map = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, acc) {
						return {
							ctor: '::',
							_0: f(x),
							_1: acc
						};
					}),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$filter = F2(
		function (pred, xs) {
			var conditionalCons = F2(
				function (front, back) {
					return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
				});
			return A3(
				_elm_lang$core$List$foldr,
				conditionalCons,
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$maybeCons = F3(
		function (f, mx, xs) {
			var _p10 = f(mx);
			if (_p10.ctor === 'Just') {
				return {ctor: '::', _0: _p10._0, _1: xs};
			} else {
				return xs;
			}
		});
	var _elm_lang$core$List$filterMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$List$maybeCons(f),
				{ctor: '[]'},
				xs);
		});
	var _elm_lang$core$List$reverse = function (list) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			{ctor: '[]'},
			list);
	};
	var _elm_lang$core$List$scanl = F3(
		function (f, b, xs) {
			var scan1 = F2(
				function (x, accAcc) {
					var _p11 = accAcc;
					if (_p11.ctor === '::') {
						return {
							ctor: '::',
							_0: A2(f, x, _p11._0),
							_1: accAcc
						};
					} else {
						return {ctor: '[]'};
					}
				});
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$foldl,
					scan1,
					{
						ctor: '::',
						_0: b,
						_1: {ctor: '[]'}
					},
					xs));
		});
	var _elm_lang$core$List$append = F2(
		function (xs, ys) {
			var _p12 = ys;
			if (_p12.ctor === '[]') {
				return xs;
			} else {
				return A3(
					_elm_lang$core$List$foldr,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					ys,
					xs);
			}
		});
	var _elm_lang$core$List$concat = function (lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$append,
			{ctor: '[]'},
			lists);
	};
	var _elm_lang$core$List$concatMap = F2(
		function (f, list) {
			return _elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, f, list));
		});
	var _elm_lang$core$List$partition = F2(
		function (pred, list) {
			var step = F2(
				function (x, _p13) {
					var _p14 = _p13;
					var _p16 = _p14._0;
					var _p15 = _p14._1;
					return pred(x) ? {
						ctor: '_Tuple2',
						_0: {ctor: '::', _0: x, _1: _p16},
						_1: _p15
					} : {
						ctor: '_Tuple2',
						_0: _p16,
						_1: {ctor: '::', _0: x, _1: _p15}
					};
				});
			return A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: {ctor: '[]'}
				},
				list);
		});
	var _elm_lang$core$List$unzip = function (pairs) {
		var step = F2(
			function (_p18, _p17) {
				var _p19 = _p18;
				var _p20 = _p17;
				return {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
					_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			pairs);
	};
	var _elm_lang$core$List$intersperse = F2(
		function (sep, xs) {
			var _p21 = xs;
			if (_p21.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var step = F2(
					function (x, rest) {
						return {
							ctor: '::',
							_0: sep,
							_1: {ctor: '::', _0: x, _1: rest}
						};
					});
				var spersed = A3(
					_elm_lang$core$List$foldr,
					step,
					{ctor: '[]'},
					_p21._1);
				return {ctor: '::', _0: _p21._0, _1: spersed};
			}
		});
	var _elm_lang$core$List$takeReverse = F3(
		function (n, list, taken) {
			takeReverse:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return taken;
				} else {
					var _p22 = list;
					if (_p22.ctor === '[]') {
						return taken;
					} else {
						var _v23 = n - 1,
							_v24 = _p22._1,
							_v25 = {ctor: '::', _0: _p22._0, _1: taken};
						n = _v23;
						list = _v24;
						taken = _v25;
						continue takeReverse;
					}
				}
			}
		});
	var _elm_lang$core$List$takeTailRec = F2(
		function (n, list) {
			return _elm_lang$core$List$reverse(
				A3(
					_elm_lang$core$List$takeReverse,
					n,
					list,
					{ctor: '[]'}));
		});
	var _elm_lang$core$List$takeFast = F3(
		function (ctr, n, list) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return {ctor: '[]'};
			} else {
				var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
				_v26_5:
				do {
					_v26_1:
					do {
						if (_p23.ctor === '_Tuple2') {
							if (_p23._1.ctor === '[]') {
								return list;
							} else {
								if (_p23._1._1.ctor === '::') {
									switch (_p23._0) {
										case 1:
											break _v26_1;
										case 2:
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {ctor: '[]'}
												}
											};
										case 3:
											if (_p23._1._1._1.ctor === '::') {
												return {
													ctor: '::',
													_0: _p23._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._0,
														_1: {
															ctor: '::',
															_0: _p23._1._1._1._0,
															_1: {ctor: '[]'}
														}
													}
												};
											} else {
												break _v26_5;
											}
										default:
											if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
												var _p28 = _p23._1._1._1._0;
												var _p27 = _p23._1._1._0;
												var _p26 = _p23._1._0;
												var _p25 = _p23._1._1._1._1._0;
												var _p24 = _p23._1._1._1._1._1;
												return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
															}
														}
													}
												} : {
													ctor: '::',
													_0: _p26,
													_1: {
														ctor: '::',
														_0: _p27,
														_1: {
															ctor: '::',
															_0: _p28,
															_1: {
																ctor: '::',
																_0: _p25,
																_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
															}
														}
													}
												};
											} else {
												break _v26_5;
											}
									}
								} else {
									if (_p23._0 === 1) {
										break _v26_1;
									} else {
										break _v26_5;
									}
								}
							}
						} else {
							break _v26_5;
						}
					} while(false);
					return {
						ctor: '::',
						_0: _p23._1._0,
						_1: {ctor: '[]'}
					};
				} while(false);
				return list;
			}
		});
	var _elm_lang$core$List$take = F2(
		function (n, list) {
			return A3(_elm_lang$core$List$takeFast, 0, n, list);
		});
	var _elm_lang$core$List$repeatHelp = F3(
		function (result, n, value) {
			repeatHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
					return result;
				} else {
					var _v27 = {ctor: '::', _0: value, _1: result},
						_v28 = n - 1,
						_v29 = value;
					result = _v27;
					n = _v28;
					value = _v29;
					continue repeatHelp;
				}
			}
		});
	var _elm_lang$core$List$repeat = F2(
		function (n, value) {
			return A3(
				_elm_lang$core$List$repeatHelp,
				{ctor: '[]'},
				n,
				value);
		});
	var _elm_lang$core$List$rangeHelp = F3(
		function (lo, hi, list) {
			rangeHelp:
			while (true) {
				if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
					var _v30 = lo,
						_v31 = hi - 1,
						_v32 = {ctor: '::', _0: hi, _1: list};
					lo = _v30;
					hi = _v31;
					list = _v32;
					continue rangeHelp;
				} else {
					return list;
				}
			}
		});
	var _elm_lang$core$List$range = F2(
		function (lo, hi) {
			return A3(
				_elm_lang$core$List$rangeHelp,
				lo,
				hi,
				{ctor: '[]'});
		});
	var _elm_lang$core$List$indexedMap = F2(
		function (f, xs) {
			return A3(
				_elm_lang$core$List$map2,
				f,
				A2(
					_elm_lang$core$List$range,
					0,
					_elm_lang$core$List$length(xs) - 1),
				xs);
		});

	var _elm_lang$core$Result$toMaybe = function (result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return _elm_lang$core$Maybe$Just(_p0._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _elm_lang$core$Result$withDefault = F2(
		function (def, result) {
			var _p1 = result;
			if (_p1.ctor === 'Ok') {
				return _p1._0;
			} else {
				return def;
			}
		});
	var _elm_lang$core$Result$Err = function (a) {
		return {ctor: 'Err', _0: a};
	};
	var _elm_lang$core$Result$andThen = F2(
		function (callback, result) {
			var _p2 = result;
			if (_p2.ctor === 'Ok') {
				return callback(_p2._0);
			} else {
				return _elm_lang$core$Result$Err(_p2._0);
			}
		});
	var _elm_lang$core$Result$Ok = function (a) {
		return {ctor: 'Ok', _0: a};
	};
	var _elm_lang$core$Result$map = F2(
		function (func, ra) {
			var _p3 = ra;
			if (_p3.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					func(_p3._0));
			} else {
				return _elm_lang$core$Result$Err(_p3._0);
			}
		});
	var _elm_lang$core$Result$map2 = F3(
		function (func, ra, rb) {
			var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
			if (_p4._0.ctor === 'Ok') {
				if (_p4._1.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A2(func, _p4._0._0, _p4._1._0));
				} else {
					return _elm_lang$core$Result$Err(_p4._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p4._0._0);
			}
		});
	var _elm_lang$core$Result$map3 = F4(
		function (func, ra, rb, rc) {
			var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
			if (_p5._0.ctor === 'Ok') {
				if (_p5._1.ctor === 'Ok') {
					if (_p5._2.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
					} else {
						return _elm_lang$core$Result$Err(_p5._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p5._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._0._0);
			}
		});
	var _elm_lang$core$Result$map4 = F5(
		function (func, ra, rb, rc, rd) {
			var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
			if (_p6._0.ctor === 'Ok') {
				if (_p6._1.ctor === 'Ok') {
					if (_p6._2.ctor === 'Ok') {
						if (_p6._3.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
						} else {
							return _elm_lang$core$Result$Err(_p6._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p6._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._0._0);
			}
		});
	var _elm_lang$core$Result$map5 = F6(
		function (func, ra, rb, rc, rd, re) {
			var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
			if (_p7._0.ctor === 'Ok') {
				if (_p7._1.ctor === 'Ok') {
					if (_p7._2.ctor === 'Ok') {
						if (_p7._3.ctor === 'Ok') {
							if (_p7._4.ctor === 'Ok') {
								return _elm_lang$core$Result$Ok(
									A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
							} else {
								return _elm_lang$core$Result$Err(_p7._4._0);
							}
						} else {
							return _elm_lang$core$Result$Err(_p7._3._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._2._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._1._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._0._0);
			}
		});
	var _elm_lang$core$Result$mapError = F2(
		function (f, result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(_p8._0);
			} else {
				return _elm_lang$core$Result$Err(
					f(_p8._0));
			}
		});
	var _elm_lang$core$Result$fromMaybe = F2(
		function (err, maybe) {
			var _p9 = maybe;
			if (_p9.ctor === 'Just') {
				return _elm_lang$core$Result$Ok(_p9._0);
			} else {
				return _elm_lang$core$Result$Err(err);
			}
		});

	//import Maybe, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_String = function() {

	function isEmpty(str)
	{
		return str.length === 0;
	}
	function cons(chr, str)
	{
		return chr + str;
	}
	function uncons(str)
	{
		var hd = str[0];
		if (hd)
		{
			return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
		}
		return _elm_lang$core$Maybe$Nothing;
	}
	function append(a, b)
	{
		return a + b;
	}
	function concat(strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join('');
	}
	function length(str)
	{
		return str.length;
	}
	function map(f, str)
	{
		var out = str.split('');
		for (var i = out.length; i--; )
		{
			out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
		}
		return out.join('');
	}
	function filter(pred, str)
	{
		return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
	}
	function reverse(str)
	{
		return str.split('').reverse().join('');
	}
	function foldl(f, b, str)
	{
		var len = str.length;
		for (var i = 0; i < len; ++i)
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function foldr(f, b, str)
	{
		for (var i = str.length; i--; )
		{
			b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
		}
		return b;
	}
	function split(sep, str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(sep));
	}
	function join(sep, strs)
	{
		return _elm_lang$core$Native_List.toArray(strs).join(sep);
	}
	function repeat(n, str)
	{
		var result = '';
		while (n > 0)
		{
			if (n & 1)
			{
				result += str;
			}
			n >>= 1, str += str;
		}
		return result;
	}
	function slice(start, end, str)
	{
		return str.slice(start, end);
	}
	function left(n, str)
	{
		return n < 1 ? '' : str.slice(0, n);
	}
	function right(n, str)
	{
		return n < 1 ? '' : str.slice(-n);
	}
	function dropLeft(n, str)
	{
		return n < 1 ? str : str.slice(n);
	}
	function dropRight(n, str)
	{
		return n < 1 ? str : str.slice(0, -n);
	}
	function pad(n, chr, str)
	{
		var half = (n - str.length) / 2;
		return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
	}
	function padRight(n, chr, str)
	{
		return str + repeat(n - str.length, chr);
	}
	function padLeft(n, chr, str)
	{
		return repeat(n - str.length, chr) + str;
	}

	function trim(str)
	{
		return str.trim();
	}
	function trimLeft(str)
	{
		return str.replace(/^\s+/, '');
	}
	function trimRight(str)
	{
		return str.replace(/\s+$/, '');
	}

	function words(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
	}
	function lines(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
	}

	function toUpper(str)
	{
		return str.toUpperCase();
	}
	function toLower(str)
	{
		return str.toLowerCase();
	}

	function any(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return true;
			}
		}
		return false;
	}
	function all(pred, str)
	{
		for (var i = str.length; i--; )
		{
			if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
			{
				return false;
			}
		}
		return true;
	}

	function contains(sub, str)
	{
		return str.indexOf(sub) > -1;
	}
	function startsWith(sub, str)
	{
		return str.indexOf(sub) === 0;
	}
	function endsWith(sub, str)
	{
		return str.length >= sub.length &&
			str.lastIndexOf(sub) === str.length - sub.length;
	}
	function indexes(sub, str)
	{
		var subLen = sub.length;

		if (subLen < 1)
		{
			return _elm_lang$core$Native_List.Nil;
		}

		var i = 0;
		var is = [];

		while ((i = str.indexOf(sub, i)) > -1)
		{
			is.push(i);
			i = i + subLen;
		}

		return _elm_lang$core$Native_List.fromArray(is);
	}


	function toInt(s)
	{
		var len = s.length;

		// if empty
		if (len === 0)
		{
			return intErr(s);
		}

		// if hex
		var c = s[0];
		if (c === '0' && s[1] === 'x')
		{
			for (var i = 2; i < len; ++i)
			{
				var c = s[i];
				if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
				{
					continue;
				}
				return intErr(s);
			}
			return _elm_lang$core$Result$Ok(parseInt(s, 16));
		}

		// is decimal
		if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
		{
			return intErr(s);
		}
		for (var i = 1; i < len; ++i)
		{
			var c = s[i];
			if (c < '0' || '9' < c)
			{
				return intErr(s);
			}
		}

		return _elm_lang$core$Result$Ok(parseInt(s, 10));
	}

	function intErr(s)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
	}


	function toFloat(s)
	{
		// check if it is a hex, octal, or binary number
		if (s.length === 0 || /[\sxbo]/.test(s))
		{
			return floatErr(s);
		}
		var n = +s;
		// faster isNaN check
		return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
	}

	function floatErr(s)
	{
		return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
	}


	function toList(str)
	{
		return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
	}
	function fromList(chars)
	{
		return _elm_lang$core$Native_List.toArray(chars).join('');
	}

	return {
		isEmpty: isEmpty,
		cons: F2(cons),
		uncons: uncons,
		append: F2(append),
		concat: concat,
		length: length,
		map: F2(map),
		filter: F2(filter),
		reverse: reverse,
		foldl: F3(foldl),
		foldr: F3(foldr),

		split: F2(split),
		join: F2(join),
		repeat: F2(repeat),

		slice: F3(slice),
		left: F2(left),
		right: F2(right),
		dropLeft: F2(dropLeft),
		dropRight: F2(dropRight),

		pad: F3(pad),
		padLeft: F3(padLeft),
		padRight: F3(padRight),

		trim: trim,
		trimLeft: trimLeft,
		trimRight: trimRight,

		words: words,
		lines: lines,

		toUpper: toUpper,
		toLower: toLower,

		any: F2(any),
		all: F2(all),

		contains: F2(contains),
		startsWith: F2(startsWith),
		endsWith: F2(endsWith),
		indexes: F2(indexes),

		toInt: toInt,
		toFloat: toFloat,
		toList: toList,
		fromList: fromList
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Char = function() {

	return {
		fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
		toCode: function(c) { return c.charCodeAt(0); },
		toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
		toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
		toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
		toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
	};

	}();
	var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
	var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
	var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
	var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
	var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
	var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
	var _elm_lang$core$Char$isBetween = F3(
		function (low, high, $char) {
			var code = _elm_lang$core$Char$toCode($char);
			return (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
				code,
				_elm_lang$core$Char$toCode(high)) < 1);
		});
	var _elm_lang$core$Char$isUpper = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('Z'));
	var _elm_lang$core$Char$isLower = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('z'));
	var _elm_lang$core$Char$isDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('9'));
	var _elm_lang$core$Char$isOctDigit = A2(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('0'),
		_elm_lang$core$Native_Utils.chr('7'));
	var _elm_lang$core$Char$isHexDigit = function ($char) {
		return _elm_lang$core$Char$isDigit($char) || (A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('a'),
			_elm_lang$core$Native_Utils.chr('f'),
			$char) || A3(
			_elm_lang$core$Char$isBetween,
			_elm_lang$core$Native_Utils.chr('A'),
			_elm_lang$core$Native_Utils.chr('F'),
			$char));
	};

	var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
	var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
	var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
	var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
	var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
	var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
	var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
	var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
	var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
	var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
	var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
	var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
	var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
	var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
	var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
	var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
	var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
	var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
	var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
	var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
	var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
	var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
	var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
	var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
	var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
	var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
	var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
	var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
	var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
	var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
	var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
	var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
	var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
	var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
	var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
	var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
	var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
	var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
	var _elm_lang$core$String$fromChar = function ($char) {
		return A2(_elm_lang$core$String$cons, $char, '');
	};
	var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

	var _elm_lang$core$Tuple$mapSecond = F2(
		function (func, _p0) {
			var _p1 = _p0;
			return {
				ctor: '_Tuple2',
				_0: _p1._0,
				_1: func(_p1._1)
			};
		});
	var _elm_lang$core$Tuple$mapFirst = F2(
		function (func, _p2) {
			var _p3 = _p2;
			return {
				ctor: '_Tuple2',
				_0: func(_p3._0),
				_1: _p3._1
			};
		});
	var _elm_lang$core$Tuple$second = function (_p4) {
		var _p5 = _p4;
		return _p5._1;
	};
	var _elm_lang$core$Tuple$first = function (_p6) {
		var _p7 = _p6;
		return _p7._0;
	};

	//import //

	var _elm_lang$core$Native_Platform = function() {


	// PROGRAMS

	function program(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flags !== 'undefined')
					{
						throw new Error(
							'The `' + moduleName + '` module does not need flags.\n'
							+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
						);
					}

					return initialize(
						impl.init,
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function programWithFlags(impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName)
			{
				object['worker'] = function worker(flags)
				{
					if (typeof flagDecoder === 'undefined')
					{
						throw new Error(
							'Are you trying to sneak a Never value into Elm? Trickster!\n'
							+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
							+ 'Use `program` instead if you do not want flags.'
						);
					}

					var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
					if (result.ctor === 'Err')
					{
						throw new Error(
							moduleName + '.worker(...) was called with an unexpected argument.\n'
							+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
							+ result._0
						);
					}

					return initialize(
						impl.init(result._0),
						impl.update,
						impl.subscriptions,
						renderer
					);
				};
			};
		};
	}

	function renderer(enqueue, _)
	{
		return function(_) {};
	}


	// HTML TO PROGRAM

	function htmlToProgram(vnode)
	{
		var emptyBag = batch(_elm_lang$core$Native_List.Nil);
		var noChange = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			emptyBag
		);

		return _elm_lang$virtual_dom$VirtualDom$program({
			init: noChange,
			view: function(model) { return main; },
			update: F2(function(msg, model) { return noChange; }),
			subscriptions: function (model) { return emptyBag; }
		});
	}


	// INITIALIZE A PROGRAM

	function initialize(init, update, subscriptions, renderer)
	{
		// ambient state
		var managers = {};
		var updateView;

		// init and update state in main process
		var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var model = init._0;
			updateView = renderer(enqueue, model);
			var cmds = init._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});

		function onMessage(msg, model)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
				var results = A2(update, msg, model);
				model = results._0;
				updateView(model);
				var cmds = results._1;
				var subs = subscriptions(model);
				dispatchEffects(managers, cmds, subs);
				callback(_elm_lang$core$Native_Scheduler.succeed(model));
			});
		}

		var mainProcess = spawnLoop(initApp, onMessage);

		function enqueue(msg)
		{
			_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
		}

		var ports = setupEffects(managers, enqueue);

		return ports ? { ports: ports } : {};
	}


	// EFFECT MANAGERS

	var effectManagers = {};

	function setupEffects(managers, callback)
	{
		var ports;

		// setup all necessary effect managers
		for (var key in effectManagers)
		{
			var manager = effectManagers[key];

			if (manager.isForeign)
			{
				ports = ports || {};
				ports[key] = manager.tag === 'cmd'
					? setupOutgoingPort(key)
					: setupIncomingPort(key, callback);
			}

			managers[key] = makeManager(manager, callback);
		}

		return ports;
	}

	function makeManager(info, callback)
	{
		var router = {
			main: callback,
			self: undefined
		};

		var tag = info.tag;
		var onEffects = info.onEffects;
		var onSelfMsg = info.onSelfMsg;

		function onMessage(msg, state)
		{
			if (msg.ctor === 'self')
			{
				return A3(onSelfMsg, router, msg._0, state);
			}

			var fx = msg._0;
			switch (tag)
			{
				case 'cmd':
					return A3(onEffects, router, fx.cmds, state);

				case 'sub':
					return A3(onEffects, router, fx.subs, state);

				case 'fx':
					return A4(onEffects, router, fx.cmds, fx.subs, state);
			}
		}

		var process = spawnLoop(info.init, onMessage);
		router.self = process;
		return process;
	}

	function sendToApp(router, msg)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			router.main(msg);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sendToSelf(router, msg)
	{
		return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
			ctor: 'self',
			_0: msg
		});
	}


	// HELPER for STATEFUL LOOPS

	function spawnLoop(init, onMessage)
	{
		var andThen = _elm_lang$core$Native_Scheduler.andThen;

		function loop(state)
		{
			var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
				return onMessage(msg, state);
			});
			return A2(andThen, loop, handleMsg);
		}

		var task = A2(andThen, loop, init);

		return _elm_lang$core$Native_Scheduler.rawSpawn(task);
	}


	// BAGS

	function leaf(home)
	{
		return function(value)
		{
			return {
				type: 'leaf',
				home: home,
				value: value
			};
		};
	}

	function batch(list)
	{
		return {
			type: 'node',
			branches: list
		};
	}

	function map(tagger, bag)
	{
		return {
			type: 'map',
			tagger: tagger,
			tree: bag
		}
	}


	// PIPE BAGS INTO EFFECT MANAGERS

	function dispatchEffects(managers, cmdBag, subBag)
	{
		var effectsDict = {};
		gatherEffects(true, cmdBag, effectsDict, null);
		gatherEffects(false, subBag, effectsDict, null);

		for (var home in managers)
		{
			var fx = home in effectsDict
				? effectsDict[home]
				: {
					cmds: _elm_lang$core$Native_List.Nil,
					subs: _elm_lang$core$Native_List.Nil
				};

			_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
		}
	}

	function gatherEffects(isCmd, bag, effectsDict, taggers)
	{
		switch (bag.type)
		{
			case 'leaf':
				var home = bag.home;
				var effect = toEffect(isCmd, home, taggers, bag.value);
				effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
				return;

			case 'node':
				var list = bag.branches;
				while (list.ctor !== '[]')
				{
					gatherEffects(isCmd, list._0, effectsDict, taggers);
					list = list._1;
				}
				return;

			case 'map':
				gatherEffects(isCmd, bag.tree, effectsDict, {
					tagger: bag.tagger,
					rest: taggers
				});
				return;
		}
	}

	function toEffect(isCmd, home, taggers, value)
	{
		function applyTaggers(x)
		{
			var temp = taggers;
			while (temp)
			{
				x = temp.tagger(x);
				temp = temp.rest;
			}
			return x;
		}

		var map = isCmd
			? effectManagers[home].cmdMap
			: effectManagers[home].subMap;

		return A2(map, applyTaggers, value)
	}

	function insert(isCmd, newEffect, effects)
	{
		effects = effects || {
			cmds: _elm_lang$core$Native_List.Nil,
			subs: _elm_lang$core$Native_List.Nil
		};
		if (isCmd)
		{
			effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
			return effects;
		}
		effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
		return effects;
	}


	// PORTS

	function checkPortName(name)
	{
		if (name in effectManagers)
		{
			throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
		}
	}


	// OUTGOING PORTS

	function outgoingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'cmd',
			cmdMap: outgoingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var outgoingPortMap = F2(function cmdMap(tagger, value) {
		return value;
	});

	function setupOutgoingPort(name)
	{
		var subs = [];
		var converter = effectManagers[name].converter;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function onEffects(router, cmdList, state)
		{
			while (cmdList.ctor !== '[]')
			{
				// grab a separate reference to subs in case unsubscribe is called
				var currentSubs = subs;
				var value = converter(cmdList._0);
				for (var i = 0; i < currentSubs.length; i++)
				{
					currentSubs[i](value);
				}
				cmdList = cmdList._1;
			}
			return init;
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function subscribe(callback)
		{
			subs.push(callback);
		}

		function unsubscribe(callback)
		{
			// copy subs into a new array in case unsubscribe is called within a
			// subscribed callback
			subs = subs.slice();
			var index = subs.indexOf(callback);
			if (index >= 0)
			{
				subs.splice(index, 1);
			}
		}

		return {
			subscribe: subscribe,
			unsubscribe: unsubscribe
		};
	}


	// INCOMING PORTS

	function incomingPort(name, converter)
	{
		checkPortName(name);
		effectManagers[name] = {
			tag: 'sub',
			subMap: incomingPortMap,
			converter: converter,
			isForeign: true
		};
		return leaf(name);
	}

	var incomingPortMap = F2(function subMap(tagger, finalTagger)
	{
		return function(value)
		{
			return tagger(finalTagger(value));
		};
	});

	function setupIncomingPort(name, callback)
	{
		var sentBeforeInit = [];
		var subs = _elm_lang$core$Native_List.Nil;
		var converter = effectManagers[name].converter;
		var currentOnEffects = preInitOnEffects;
		var currentSend = preInitSend;

		// CREATE MANAGER

		var init = _elm_lang$core$Native_Scheduler.succeed(null);

		function preInitOnEffects(router, subList, state)
		{
			var postInitResult = postInitOnEffects(router, subList, state);

			for(var i = 0; i < sentBeforeInit.length; i++)
			{
				postInitSend(sentBeforeInit[i]);
			}

			sentBeforeInit = null; // to release objects held in queue
			currentSend = postInitSend;
			currentOnEffects = postInitOnEffects;
			return postInitResult;
		}

		function postInitOnEffects(router, subList, state)
		{
			subs = subList;
			return init;
		}

		function onEffects(router, subList, state)
		{
			return currentOnEffects(router, subList, state);
		}

		effectManagers[name].init = init;
		effectManagers[name].onEffects = F3(onEffects);

		// PUBLIC API

		function preInitSend(value)
		{
			sentBeforeInit.push(value);
		}

		function postInitSend(value)
		{
			var temp = subs;
			while (temp.ctor !== '[]')
			{
				callback(temp._0(value));
				temp = temp._1;
			}
		}

		function send(incomingValue)
		{
			var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
			if (result.ctor === 'Err')
			{
				throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
			}

			currentSend(result._0);
		}

		return { send: send };
	}

	return {
		// routers
		sendToApp: F2(sendToApp),
		sendToSelf: F2(sendToSelf),

		// global setup
		effectManagers: effectManagers,
		outgoingPort: outgoingPort,
		incomingPort: incomingPort,

		htmlToProgram: htmlToProgram,
		program: program,
		programWithFlags: programWithFlags,
		initialize: initialize,

		// effect bags
		leaf: leaf,
		batch: batch,
		map: F2(map)
	};

	}();

	//import Native.Utils //

	var _elm_lang$core$Native_Scheduler = function() {

	var MAX_STEPS = 10000;


	// TASKS

	function succeed(value)
	{
		return {
			ctor: '_Task_succeed',
			value: value
		};
	}

	function fail(error)
	{
		return {
			ctor: '_Task_fail',
			value: error
		};
	}

	function nativeBinding(callback)
	{
		return {
			ctor: '_Task_nativeBinding',
			callback: callback,
			cancel: null
		};
	}

	function andThen(callback, task)
	{
		return {
			ctor: '_Task_andThen',
			callback: callback,
			task: task
		};
	}

	function onError(callback, task)
	{
		return {
			ctor: '_Task_onError',
			callback: callback,
			task: task
		};
	}

	function receive(callback)
	{
		return {
			ctor: '_Task_receive',
			callback: callback
		};
	}


	// PROCESSES

	function rawSpawn(task)
	{
		var process = {
			ctor: '_Process',
			id: _elm_lang$core$Native_Utils.guid(),
			root: task,
			stack: null,
			mailbox: []
		};

		enqueue(process);

		return process;
	}

	function spawn(task)
	{
		return nativeBinding(function(callback) {
			var process = rawSpawn(task);
			callback(succeed(process));
		});
	}

	function rawSend(process, msg)
	{
		process.mailbox.push(msg);
		enqueue(process);
	}

	function send(process, msg)
	{
		return nativeBinding(function(callback) {
			rawSend(process, msg);
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function kill(process)
	{
		return nativeBinding(function(callback) {
			var root = process.root;
			if (root.ctor === '_Task_nativeBinding' && root.cancel)
			{
				root.cancel();
			}

			process.root = null;

			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function sleep(time)
	{
		return nativeBinding(function(callback) {
			var id = setTimeout(function() {
				callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
			}, time);

			return function() { clearTimeout(id); };
		});
	}


	// STEP PROCESSES

	function step(numSteps, process)
	{
		while (numSteps < MAX_STEPS)
		{
			var ctor = process.root.ctor;

			if (ctor === '_Task_succeed')
			{
				while (process.stack && process.stack.ctor === '_Task_onError')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_fail')
			{
				while (process.stack && process.stack.ctor === '_Task_andThen')
				{
					process.stack = process.stack.rest;
				}
				if (process.stack === null)
				{
					break;
				}
				process.root = process.stack.callback(process.root.value);
				process.stack = process.stack.rest;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_andThen')
			{
				process.stack = {
					ctor: '_Task_andThen',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_onError')
			{
				process.stack = {
					ctor: '_Task_onError',
					callback: process.root.callback,
					rest: process.stack
				};
				process.root = process.root.task;
				++numSteps;
				continue;
			}

			if (ctor === '_Task_nativeBinding')
			{
				process.root.cancel = process.root.callback(function(newRoot) {
					process.root = newRoot;
					enqueue(process);
				});

				break;
			}

			if (ctor === '_Task_receive')
			{
				var mailbox = process.mailbox;
				if (mailbox.length === 0)
				{
					break;
				}

				process.root = process.root.callback(mailbox.shift());
				++numSteps;
				continue;
			}

			throw new Error(ctor);
		}

		if (numSteps < MAX_STEPS)
		{
			return numSteps + 1;
		}
		enqueue(process);

		return numSteps;
	}


	// WORK QUEUE

	var working = false;
	var workQueue = [];

	function enqueue(process)
	{
		workQueue.push(process);

		if (!working)
		{
			setTimeout(work, 0);
			working = true;
		}
	}

	function work()
	{
		var numSteps = 0;
		var process;
		while (numSteps < MAX_STEPS && (process = workQueue.shift()))
		{
			if (process.root)
			{
				numSteps = step(numSteps, process);
			}
		}
		if (!process)
		{
			working = false;
			return;
		}
		setTimeout(work, 0);
	}


	return {
		succeed: succeed,
		fail: fail,
		nativeBinding: nativeBinding,
		andThen: F2(andThen),
		onError: F2(onError),
		receive: receive,

		spawn: spawn,
		kill: kill,
		sleep: sleep,
		send: F2(send),

		rawSpawn: rawSpawn,
		rawSend: rawSend
	};

	}();
	var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
	_elm_lang$core$Platform_Cmd_ops['!'] = F2(
		function (model, commands) {
			return {
				ctor: '_Tuple2',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$batch(commands)
			};
		});
	var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

	var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
	var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
		{ctor: '[]'});
	var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
	var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

	var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
	var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
	var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
	var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
	var _elm_lang$core$Platform$Program = {ctor: 'Program'};
	var _elm_lang$core$Platform$Task = {ctor: 'Task'};
	var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
	var _elm_lang$core$Platform$Router = {ctor: 'Router'};

	var _elm_lang$lazy$Lazy$force = function (_p0) {
		var _p1 = _p0;
		return _p1._0(
			{ctor: '_Tuple0'});
	};
	var _elm_lang$lazy$Lazy$Lazy = function (a) {
		return {ctor: 'Lazy', _0: a};
	};
	var _elm_lang$lazy$Lazy$lazy = function (thunk) {
		return _elm_lang$lazy$Lazy$Lazy(
			_elm_lang$lazy$Native_Lazy.memoize(thunk));
	};
	var _elm_lang$lazy$Lazy$map = F2(
		function (f, a) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p2) {
					var _p3 = _p2;
					return f(
						_elm_lang$lazy$Lazy$force(a));
				});
		});
	var _elm_lang$lazy$Lazy$map2 = F3(
		function (f, a, b) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p4) {
					var _p5 = _p4;
					return A2(
						f,
						_elm_lang$lazy$Lazy$force(a),
						_elm_lang$lazy$Lazy$force(b));
				});
		});
	var _elm_lang$lazy$Lazy$map3 = F4(
		function (f, a, b, c) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p6) {
					var _p7 = _p6;
					return A3(
						f,
						_elm_lang$lazy$Lazy$force(a),
						_elm_lang$lazy$Lazy$force(b),
						_elm_lang$lazy$Lazy$force(c));
				});
		});
	var _elm_lang$lazy$Lazy$map4 = F5(
		function (f, a, b, c, d) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p8) {
					var _p9 = _p8;
					return A4(
						f,
						_elm_lang$lazy$Lazy$force(a),
						_elm_lang$lazy$Lazy$force(b),
						_elm_lang$lazy$Lazy$force(c),
						_elm_lang$lazy$Lazy$force(d));
				});
		});
	var _elm_lang$lazy$Lazy$map5 = F6(
		function (f, a, b, c, d, e) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p10) {
					var _p11 = _p10;
					return A5(
						f,
						_elm_lang$lazy$Lazy$force(a),
						_elm_lang$lazy$Lazy$force(b),
						_elm_lang$lazy$Lazy$force(c),
						_elm_lang$lazy$Lazy$force(d),
						_elm_lang$lazy$Lazy$force(e));
				});
		});
	var _elm_lang$lazy$Lazy$apply = F2(
		function (f, x) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p12) {
					var _p13 = _p12;
					return A2(
						_elm_lang$lazy$Lazy$force,
						f,
						_elm_lang$lazy$Lazy$force(x));
				});
		});
	var _elm_lang$lazy$Lazy$andThen = F2(
		function (callback, a) {
			return _elm_lang$lazy$Lazy$lazy(
				function (_p14) {
					var _p15 = _p14;
					return _elm_lang$lazy$Lazy$force(
						callback(
							_elm_lang$lazy$Lazy$force(a)));
				});
		});

	//import Maybe, Native.List //

	var _elm_lang$core$Native_Regex = function() {

	function escape(str)
	{
		return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	}
	function caseInsensitive(re)
	{
		return new RegExp(re.source, 'gi');
	}
	function regex(raw)
	{
		return new RegExp(raw, 'g');
	}

	function contains(re, string)
	{
		return string.match(re) !== null;
	}

	function find(n, re, str)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		var out = [];
		var number = 0;
		var string = str;
		var lastIndex = re.lastIndex;
		var prevLastIndex = -1;
		var result;
		while (number++ < n && (result = re.exec(string)))
		{
			if (prevLastIndex === re.lastIndex) break;
			var i = result.length - 1;
			var subs = new Array(i);
			while (i > 0)
			{
				var submatch = result[i];
				subs[--i] = submatch === undefined
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just(submatch);
			}
			out.push({
				match: result[0],
				submatches: _elm_lang$core$Native_List.fromArray(subs),
				index: result.index,
				number: number
			});
			prevLastIndex = re.lastIndex;
		}
		re.lastIndex = lastIndex;
		return _elm_lang$core$Native_List.fromArray(out);
	}

	function replace(n, re, replacer, string)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		var count = 0;
		function jsReplacer(match)
		{
			if (count++ >= n)
			{
				return match;
			}
			var i = arguments.length - 3;
			var submatches = new Array(i);
			while (i > 0)
			{
				var submatch = arguments[i];
				submatches[--i] = submatch === undefined
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just(submatch);
			}
			return replacer({
				match: match,
				submatches: _elm_lang$core$Native_List.fromArray(submatches),
				index: arguments[arguments.length - 2],
				number: count
			});
		}
		return string.replace(re, jsReplacer);
	}

	function split(n, re, str)
	{
		n = n.ctor === 'All' ? Infinity : n._0;
		if (n === Infinity)
		{
			return _elm_lang$core$Native_List.fromArray(str.split(re));
		}
		var string = str;
		var result;
		var out = [];
		var start = re.lastIndex;
		var restoreLastIndex = re.lastIndex;
		while (n--)
		{
			if (!(result = re.exec(string))) break;
			out.push(string.slice(start, result.index));
			start = re.lastIndex;
		}
		out.push(string.slice(start));
		re.lastIndex = restoreLastIndex;
		return _elm_lang$core$Native_List.fromArray(out);
	}

	return {
		regex: regex,
		caseInsensitive: caseInsensitive,
		escape: escape,

		contains: F2(contains),
		find: F3(find),
		replace: F4(replace),
		split: F3(split)
	};

	}();

	var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
	var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
	var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
	var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
	var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
	var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
	var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
	var _elm_lang$core$Regex$Match = F4(
		function (a, b, c, d) {
			return {match: a, submatches: b, index: c, number: d};
		});
	var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
	var _elm_lang$core$Regex$AtMost = function (a) {
		return {ctor: 'AtMost', _0: a};
	};
	var _elm_lang$core$Regex$All = {ctor: 'All'};

	var _Bogdanp$elm_combine$Combine$app = function (p) {
		var _p0 = p;
		if (_p0.ctor === 'Parser') {
			return _p0._0;
		} else {
			return _elm_lang$lazy$Lazy$force(_p0._0);
		}
	};
	var _Bogdanp$elm_combine$Combine$InputStream = F3(
		function (a, b, c) {
			return {data: a, input: b, position: c};
		});
	var _Bogdanp$elm_combine$Combine$initStream = function (s) {
		return A3(_Bogdanp$elm_combine$Combine$InputStream, s, s, 0);
	};
	var _Bogdanp$elm_combine$Combine$runParser = F3(
		function (p, st, s) {
			var _p1 = A3(
				_Bogdanp$elm_combine$Combine$app,
				p,
				st,
				_Bogdanp$elm_combine$Combine$initStream(s));
			if (_p1._2.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
			} else {
				return _elm_lang$core$Result$Err(
					{ctor: '_Tuple3', _0: _p1._0, _1: _p1._1, _2: _p1._2._0});
			}
		});
	var _Bogdanp$elm_combine$Combine$parse = function (p) {
		return A2(
			_Bogdanp$elm_combine$Combine$runParser,
			p,
			{ctor: '_Tuple0'});
	};
	var _Bogdanp$elm_combine$Combine$ParseLocation = F3(
		function (a, b, c) {
			return {source: a, line: b, column: c};
		});
	var _Bogdanp$elm_combine$Combine$currentLocation = function (stream) {
		var find = F3(
			function (position, currentLine, lines) {
				find:
				while (true) {
					var _p2 = lines;
					if (_p2.ctor === '[]') {
						return A3(_Bogdanp$elm_combine$Combine$ParseLocation, '', 1, position);
					} else {
						if (_p2._1.ctor === '[]') {
							return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p2._0, currentLine + 1, position);
						} else {
							var _p3 = _p2._0;
							var length = _elm_lang$core$String$length(_p3);
							if (_elm_lang$core$Native_Utils.cmp(position, length) > -1) {
								var _v3 = (position - length) - 1,
									_v4 = currentLine + 1,
									_v5 = _p2._1;
								position = _v3;
								currentLine = _v4;
								lines = _v5;
								continue find;
							} else {
								if (_elm_lang$core$Native_Utils.eq(currentLine, 0)) {
									return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p3, 1, position);
								} else {
									return A3(_Bogdanp$elm_combine$Combine$ParseLocation, _p3, currentLine, position - 1);
								}
							}
						}
					}
				}
			});
		var lines = A2(_elm_lang$core$String$split, '\n', stream.data);
		return A3(find, stream.position, 0, lines);
	};
	var _Bogdanp$elm_combine$Combine$currentSourceLine = function (_p4) {
		return function (_) {
			return _.source;
		}(
			_Bogdanp$elm_combine$Combine$currentLocation(_p4));
	};
	var _Bogdanp$elm_combine$Combine$currentLine = function (_p5) {
		return function (_) {
			return _.line;
		}(
			_Bogdanp$elm_combine$Combine$currentLocation(_p5));
	};
	var _Bogdanp$elm_combine$Combine$currentColumn = function (_p6) {
		return function (_) {
			return _.column;
		}(
			_Bogdanp$elm_combine$Combine$currentLocation(_p6));
	};
	var _Bogdanp$elm_combine$Combine$RecursiveParser = function (a) {
		return {ctor: 'RecursiveParser', _0: a};
	};
	var _Bogdanp$elm_combine$Combine$lazy = function (t) {
		return _Bogdanp$elm_combine$Combine$RecursiveParser(
			_elm_lang$lazy$Lazy$lazy(
				function (_p7) {
					var _p8 = _p7;
					return _Bogdanp$elm_combine$Combine$app(
						t(
							{ctor: '_Tuple0'}));
				}));
	};
	var _Bogdanp$elm_combine$Combine$Parser = function (a) {
		return {ctor: 'Parser', _0: a};
	};
	var _Bogdanp$elm_combine$Combine$primitive = _Bogdanp$elm_combine$Combine$Parser;
	var _Bogdanp$elm_combine$Combine$bimap = F3(
		function (fok, ferr, p) {
			return _Bogdanp$elm_combine$Combine$Parser(
				F2(
					function (state, stream) {
						var _p9 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
						if (_p9._2.ctor === 'Ok') {
							return {
								ctor: '_Tuple3',
								_0: _p9._0,
								_1: _p9._1,
								_2: _elm_lang$core$Result$Ok(
									fok(_p9._2._0))
							};
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p9._0,
								_1: _p9._1,
								_2: _elm_lang$core$Result$Err(
									ferr(_p9._2._0))
							};
						}
					}));
		});
	var _Bogdanp$elm_combine$Combine$map = F2(
		function (f, p) {
			return A3(_Bogdanp$elm_combine$Combine$bimap, f, _elm_lang$core$Basics$identity, p);
		});
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<$>'] = _Bogdanp$elm_combine$Combine$map;
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<$'] = function (res) {
		return _Bogdanp$elm_combine$Combine$map(
			_elm_lang$core$Basics$always(res));
	};
	var _Bogdanp$elm_combine$Combine$skip = function (p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<$'],
			{ctor: '_Tuple0'},
			p);
	};
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['$>'] = _elm_lang$core$Basics$flip(
		F2(
			function (x, y) {
				return A2(_Bogdanp$elm_combine$Combine_ops['<$'], x, y);
			}));
	var _Bogdanp$elm_combine$Combine$mapError = _Bogdanp$elm_combine$Combine$bimap(_elm_lang$core$Basics$identity);
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<?>'] = F2(
		function (p, m) {
			return A2(
				_Bogdanp$elm_combine$Combine$mapError,
				_elm_lang$core$Basics$always(
					{
						ctor: '::',
						_0: m,
						_1: {ctor: '[]'}
					}),
				p);
		});
	var _Bogdanp$elm_combine$Combine$withState = function (f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						f(state),
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$withLocation = function (f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						f(
							_Bogdanp$elm_combine$Combine$currentLocation(stream)),
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$withLine = function (f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						f(
							_Bogdanp$elm_combine$Combine$currentLine(stream)),
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$withColumn = function (f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						f(
							_Bogdanp$elm_combine$Combine$currentColumn(stream)),
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$andThen = F2(
		function (f, p) {
			return _Bogdanp$elm_combine$Combine$Parser(
				F2(
					function (state, stream) {
						var _p10 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
						if (_p10._2.ctor === 'Ok') {
							return A3(
								_Bogdanp$elm_combine$Combine$app,
								f(_p10._2._0),
								_p10._0,
								_p10._1);
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p10._0,
								_1: _p10._1,
								_2: _elm_lang$core$Result$Err(_p10._2._0)
							};
						}
					}));
		});
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['>>='] = _elm_lang$core$Basics$flip(_Bogdanp$elm_combine$Combine$andThen);
	var _Bogdanp$elm_combine$Combine$andMap = F2(
		function (rp, lp) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['>>='],
				lp,
				A2(_elm_lang$core$Basics$flip, _Bogdanp$elm_combine$Combine$map, rp));
		});
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<*>'] = _elm_lang$core$Basics$flip(_Bogdanp$elm_combine$Combine$andMap);
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<*'] = F2(
		function (lp, rp) {
			return A2(
				_Bogdanp$elm_combine$Combine$andMap,
				rp,
				A2(_Bogdanp$elm_combine$Combine$map, _elm_lang$core$Basics$always, lp));
		});
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['*>'] = F2(
		function (lp, rp) {
			return A2(
				_Bogdanp$elm_combine$Combine$andMap,
				rp,
				A2(
					_Bogdanp$elm_combine$Combine$map,
					_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always),
					lp));
		});
	var _Bogdanp$elm_combine$Combine$between = F3(
		function (lp, rp, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<*'],
				A2(_Bogdanp$elm_combine$Combine_ops['*>'], lp, p),
				rp);
		});
	var _Bogdanp$elm_combine$Combine$sequence = function (ps) {
		var accumulate = F4(
			function (acc, ps, state, stream) {
				accumulate:
				while (true) {
					var _p11 = ps;
					if (_p11.ctor === '[]') {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$List$reverse(acc))
						};
					} else {
						var _p12 = A3(_Bogdanp$elm_combine$Combine$app, _p11._0, state, stream);
						if (_p12._2.ctor === 'Ok') {
							var _v11 = {ctor: '::', _0: _p12._2._0, _1: acc},
								_v12 = _p11._1,
								_v13 = _p12._0,
								_v14 = _p12._1;
							acc = _v11;
							ps = _v12;
							state = _v13;
							stream = _v14;
							continue accumulate;
						} else {
							return {
								ctor: '_Tuple3',
								_0: _p12._0,
								_1: _p12._1,
								_2: _elm_lang$core$Result$Err(_p12._2._0)
							};
						}
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A4(
						accumulate,
						{ctor: '[]'},
						ps,
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$fail = function (m) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Err(
							{
								ctor: '::',
								_0: m,
								_1: {ctor: '[]'}
							})
					};
				}));
	};
	var _Bogdanp$elm_combine$Combine$emptyErr = _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{ctor: '[]'})
				};
			}));
	var _Bogdanp$elm_combine$Combine$succeed = function (res) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return {
						ctor: '_Tuple3',
						_0: state,
						_1: stream,
						_2: _elm_lang$core$Result$Ok(res)
					};
				}));
	};
	var _Bogdanp$elm_combine$Combine$putState = function (state) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (_p13, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						_Bogdanp$elm_combine$Combine$succeed(
							{ctor: '_Tuple0'}),
						state,
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$modifyState = function (f) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					return A3(
						_Bogdanp$elm_combine$Combine$app,
						_Bogdanp$elm_combine$Combine$succeed(
							{ctor: '_Tuple0'}),
						f(state),
						stream);
				}));
	};
	var _Bogdanp$elm_combine$Combine$count = F2(
		function (n, p) {
			var accumulate = F2(
				function (x, acc) {
					return (_elm_lang$core$Native_Utils.cmp(x, 0) < 1) ? _Bogdanp$elm_combine$Combine$succeed(
						_elm_lang$core$List$reverse(acc)) : A2(
						_Bogdanp$elm_combine$Combine$andThen,
						function (res) {
							return A2(
								accumulate,
								x - 1,
								{ctor: '::', _0: res, _1: acc});
						},
						p);
				});
			return A2(
				accumulate,
				n,
				{ctor: '[]'});
		});
	var _Bogdanp$elm_combine$Combine$string = function (s) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					if (A2(_elm_lang$core$String$startsWith, s, stream.input)) {
						var len = _elm_lang$core$String$length(s);
						var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
						var pos = stream.position + len;
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: _elm_lang$core$Native_Utils.update(
								stream,
								{input: rem, position: pos}),
							_2: _elm_lang$core$Result$Ok(s)
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'expected ',
										_elm_lang$core$Basics$toString(s)),
									_1: {ctor: '[]'}
								})
						};
					}
				}));
	};
	var _Bogdanp$elm_combine$Combine$parens = A2(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine$string('('),
		_Bogdanp$elm_combine$Combine$string(')'));
	var _Bogdanp$elm_combine$Combine$braces = A2(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine$string('{'),
		_Bogdanp$elm_combine$Combine$string('}'));
	var _Bogdanp$elm_combine$Combine$brackets = A2(
		_Bogdanp$elm_combine$Combine$between,
		_Bogdanp$elm_combine$Combine$string('['),
		_Bogdanp$elm_combine$Combine$string(']'));
	var _Bogdanp$elm_combine$Combine$regex = function (pat) {
		var pattern = A2(_elm_lang$core$String$startsWith, '^', pat) ? pat : A2(_elm_lang$core$Basics_ops['++'], '^', pat);
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p14 = A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_elm_lang$core$Regex$regex(pattern),
						stream.input);
					if ((_p14.ctor === '::') && (_p14._1.ctor === '[]')) {
						var _p15 = _p14._0;
						var len = _elm_lang$core$String$length(_p15.match);
						var rem = A2(_elm_lang$core$String$dropLeft, len, stream.input);
						var pos = stream.position + len;
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: _elm_lang$core$Native_Utils.update(
								stream,
								{input: rem, position: pos}),
							_2: _elm_lang$core$Result$Ok(_p15.match)
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'expected input matching Regexp /',
										A2(_elm_lang$core$Basics_ops['++'], pattern, '/')),
									_1: {ctor: '[]'}
								})
						};
					}
				}));
	};
	var _Bogdanp$elm_combine$Combine$whitespace = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine$regex('[ \t\r\n]*'),
		'whitespace');
	var _Bogdanp$elm_combine$Combine$while = function (pred) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p16 = _elm_lang$core$String$uncons(stream.input);
					if (_p16.ctor === 'Just') {
						var _p17 = _p16._0._0;
						if (pred(_p17)) {
							var pos = stream.position + 1;
							var c = A2(_elm_lang$core$String$cons, _p17, '');
							var _v17 = A2(_elm_lang$core$Basics_ops['++'], acc, c),
								_v18 = state,
								_v19 = _elm_lang$core$Native_Utils.update(
								stream,
								{input: _p16._0._1, position: pos});
							acc = _v17;
							state = _v18;
							stream = _v19;
							continue accumulate;
						} else {
							return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
						}
					} else {
						return {ctor: '_Tuple3', _0: state, _1: stream, _2: acc};
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p18 = A3(accumulate, '', state, stream);
					var rstate = _p18._0;
					var rstream = _p18._1;
					var res = _p18._2;
					return {
						ctor: '_Tuple3',
						_0: rstate,
						_1: rstream,
						_2: _elm_lang$core$Result$Ok(res)
					};
				}));
	};
	var _Bogdanp$elm_combine$Combine$end = _Bogdanp$elm_combine$Combine$Parser(
		F2(
			function (state, stream) {
				return _elm_lang$core$Native_Utils.eq(stream.input, '') ? {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Ok(
						{ctor: '_Tuple0'})
				} : {
					ctor: '_Tuple3',
					_0: state,
					_1: stream,
					_2: _elm_lang$core$Result$Err(
						{
							ctor: '::',
							_0: 'expected end of input',
							_1: {ctor: '[]'}
						})
				};
			}));
	var _Bogdanp$elm_combine$Combine$lookAhead = function (p) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p19 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
					if ((_p19.ctor === '_Tuple3') && (_p19._2.ctor === 'Ok')) {
						return {
							ctor: '_Tuple3',
							_0: _p19._0,
							_1: stream,
							_2: _elm_lang$core$Result$Ok(_p19._2._0)
						};
					} else {
						return _p19;
					}
				}));
	};
	var _Bogdanp$elm_combine$Combine$or = F2(
		function (lp, rp) {
			return _Bogdanp$elm_combine$Combine$Parser(
				F2(
					function (state, stream) {
						var _p20 = A3(_Bogdanp$elm_combine$Combine$app, lp, state, stream);
						if (_p20._2.ctor === 'Ok') {
							return _p20;
						} else {
							var _p21 = A3(_Bogdanp$elm_combine$Combine$app, rp, state, stream);
							if (_p21._2.ctor === 'Ok') {
								return _p21;
							} else {
								return {
									ctor: '_Tuple3',
									_0: state,
									_1: stream,
									_2: _elm_lang$core$Result$Err(
										A2(_elm_lang$core$Basics_ops['++'], _p20._2._0, _p21._2._0))
								};
							}
						}
					}));
		});
	var _Bogdanp$elm_combine$Combine$choice = function (xs) {
		return A3(_elm_lang$core$List$foldr, _Bogdanp$elm_combine$Combine$or, _Bogdanp$elm_combine$Combine$emptyErr, xs);
	};
	var _Bogdanp$elm_combine$Combine_ops = _Bogdanp$elm_combine$Combine_ops || {};
	_Bogdanp$elm_combine$Combine_ops['<|>'] = _Bogdanp$elm_combine$Combine$or;
	var _Bogdanp$elm_combine$Combine$optional = F2(
		function (res, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<|>'],
				p,
				_Bogdanp$elm_combine$Combine$succeed(res));
		});
	var _Bogdanp$elm_combine$Combine$chainl = F2(
		function (op, p) {
			var accumulate = function (x) {
				return A2(
					_Bogdanp$elm_combine$Combine_ops['<|>'],
					A2(
						_Bogdanp$elm_combine$Combine$andThen,
						function (f) {
							return A2(
								_Bogdanp$elm_combine$Combine$andThen,
								function (y) {
									return accumulate(
										A2(f, x, y));
								},
								p);
						},
						op),
					_Bogdanp$elm_combine$Combine$succeed(x));
			};
			return A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p);
		});
	var _Bogdanp$elm_combine$Combine$chainr = F2(
		function (op, p) {
			var accumulate = function (x) {
				return A2(
					_Bogdanp$elm_combine$Combine_ops['<|>'],
					A2(
						_Bogdanp$elm_combine$Combine$andThen,
						function (f) {
							return A2(
								_Bogdanp$elm_combine$Combine$andThen,
								function (y) {
									return _Bogdanp$elm_combine$Combine$succeed(
										A2(f, x, y));
								},
								A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p));
						},
						op),
					_Bogdanp$elm_combine$Combine$succeed(x));
			};
			return A2(_Bogdanp$elm_combine$Combine$andThen, accumulate, p);
		});
	var _Bogdanp$elm_combine$Combine$maybe = function (p) {
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p22 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
					if ((_p22.ctor === '_Tuple3') && (_p22._2.ctor === 'Ok')) {
						return {
							ctor: '_Tuple3',
							_0: _p22._0,
							_1: _p22._1,
							_2: _elm_lang$core$Result$Ok(
								_elm_lang$core$Maybe$Just(_p22._2._0))
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Ok(_elm_lang$core$Maybe$Nothing)
						};
					}
				}));
	};
	var _Bogdanp$elm_combine$Combine$many = function (p) {
		var accumulate = F3(
			function (acc, state, stream) {
				accumulate:
				while (true) {
					var _p23 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
					if ((_p23.ctor === '_Tuple3') && (_p23._2.ctor === 'Ok')) {
						var _p25 = _p23._1;
						var _p24 = _p23._0;
						if (_elm_lang$core$Native_Utils.eq(stream, _p25)) {
							return {
								ctor: '_Tuple3',
								_0: _p24,
								_1: _p25,
								_2: _elm_lang$core$List$reverse(acc)
							};
						} else {
							var _v25 = {ctor: '::', _0: _p23._2._0, _1: acc},
								_v26 = _p24,
								_v27 = _p25;
							acc = _v25;
							state = _v26;
							stream = _v27;
							continue accumulate;
						}
					} else {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$List$reverse(acc)
						};
					}
				}
			});
		return _Bogdanp$elm_combine$Combine$Parser(
			F2(
				function (state, stream) {
					var _p26 = A3(
						accumulate,
						{ctor: '[]'},
						state,
						stream);
					var rstate = _p26._0;
					var rstream = _p26._1;
					var res = _p26._2;
					return {
						ctor: '_Tuple3',
						_0: rstate,
						_1: rstream,
						_2: _elm_lang$core$Result$Ok(res)
					};
				}));
	};
	var _Bogdanp$elm_combine$Combine$many1 = function (p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<*>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				p),
			_Bogdanp$elm_combine$Combine$many(p));
	};
	var _Bogdanp$elm_combine$Combine$skipMany1 = function (p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<$'],
			{ctor: '_Tuple0'},
			_Bogdanp$elm_combine$Combine$many1(
				_Bogdanp$elm_combine$Combine$skip(p)));
	};
	var _Bogdanp$elm_combine$Combine$sepBy1 = F2(
		function (sep, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<*>'],
				A2(
					_Bogdanp$elm_combine$Combine_ops['<$>'],
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					p),
				_Bogdanp$elm_combine$Combine$many(
					A2(_Bogdanp$elm_combine$Combine_ops['*>'], sep, p)));
		});
	var _Bogdanp$elm_combine$Combine$sepBy = F2(
		function (sep, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<|>'],
				A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
				_Bogdanp$elm_combine$Combine$succeed(
					{ctor: '[]'}));
		});
	var _Bogdanp$elm_combine$Combine$sepEndBy1 = F2(
		function (sep, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<*'],
				A2(_Bogdanp$elm_combine$Combine$sepBy1, sep, p),
				_Bogdanp$elm_combine$Combine$maybe(sep));
		});
	var _Bogdanp$elm_combine$Combine$sepEndBy = F2(
		function (sep, p) {
			return A2(
				_Bogdanp$elm_combine$Combine_ops['<|>'],
				A2(_Bogdanp$elm_combine$Combine$sepEndBy1, sep, p),
				_Bogdanp$elm_combine$Combine$succeed(
					{ctor: '[]'}));
		});
	var _Bogdanp$elm_combine$Combine$skipMany = function (p) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<$'],
			{ctor: '_Tuple0'},
			_Bogdanp$elm_combine$Combine$many(
				_Bogdanp$elm_combine$Combine$skip(p)));
	};
	var _Bogdanp$elm_combine$Combine$manyTill = F2(
		function (p, end) {
			var accumulate = F3(
				function (acc, state, stream) {
					accumulate:
					while (true) {
						var _p27 = A3(_Bogdanp$elm_combine$Combine$app, end, state, stream);
						if (_p27._2.ctor === 'Ok') {
							return {
								ctor: '_Tuple3',
								_0: _p27._0,
								_1: _p27._1,
								_2: _elm_lang$core$Result$Ok(
									_elm_lang$core$List$reverse(acc))
							};
						} else {
							var _p28 = A3(_Bogdanp$elm_combine$Combine$app, p, state, stream);
							if ((_p28.ctor === '_Tuple3') && (_p28._2.ctor === 'Ok')) {
								var _v30 = {ctor: '::', _0: _p28._2._0, _1: acc},
									_v31 = _p28._0,
									_v32 = _p28._1;
								acc = _v30;
								state = _v31;
								stream = _v32;
								continue accumulate;
							} else {
								return {
									ctor: '_Tuple3',
									_0: _p27._0,
									_1: _p27._1,
									_2: _elm_lang$core$Result$Err(_p27._2._0)
								};
							}
						}
					}
				});
			return _Bogdanp$elm_combine$Combine$Parser(
				accumulate(
					{ctor: '[]'}));
		});

	var _Bogdanp$elm_combine$Combine_Char$crlf = A2(
		_Bogdanp$elm_combine$Combine_ops['<$'],
		_elm_lang$core$Native_Utils.chr('\n'),
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			_Bogdanp$elm_combine$Combine$regex('\r\n'),
			'expected crlf'));
	var _Bogdanp$elm_combine$Combine_Char$satisfy = function (pred) {
		return _Bogdanp$elm_combine$Combine$primitive(
			F2(
				function (state, stream) {
					var message = 'could not satisfy predicate';
					var _p0 = _elm_lang$core$String$uncons(stream.input);
					if (_p0.ctor === 'Just') {
						var _p1 = _p0._0._0;
						return pred(_p1) ? {
							ctor: '_Tuple3',
							_0: state,
							_1: _elm_lang$core$Native_Utils.update(
								stream,
								{input: _p0._0._1, position: stream.position + 1}),
							_2: _elm_lang$core$Result$Ok(_p1)
						} : {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: message,
									_1: {ctor: '[]'}
								})
						};
					} else {
						return {
							ctor: '_Tuple3',
							_0: state,
							_1: stream,
							_2: _elm_lang$core$Result$Err(
								{
									ctor: '::',
									_0: message,
									_1: {ctor: '[]'}
								})
						};
					}
				}));
	};
	var _Bogdanp$elm_combine$Combine_Char$char = function (c) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			_Bogdanp$elm_combine$Combine_Char$satisfy(
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(c)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'expected ',
				_elm_lang$core$Basics$toString(c)));
	};
	var _Bogdanp$elm_combine$Combine_Char$anyChar = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			_elm_lang$core$Basics$always(true)),
		'expected any character');
	var _Bogdanp$elm_combine$Combine_Char$oneOf = function (cs) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			_Bogdanp$elm_combine$Combine_Char$satisfy(
				A2(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs)),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'expected one of ',
				_elm_lang$core$Basics$toString(cs)));
	};
	var _Bogdanp$elm_combine$Combine_Char$noneOf = function (cs) {
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			_Bogdanp$elm_combine$Combine_Char$satisfy(
				function (_p2) {
					return !A3(_elm_lang$core$Basics$flip, _elm_lang$core$List$member, cs, _p2);
				}),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'expected none of ',
				_elm_lang$core$Basics$toString(cs)));
	};
	var _Bogdanp$elm_combine$Combine_Char$space = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				_elm_lang$core$Native_Utils.chr(' '))),
		'expected space');
	var _Bogdanp$elm_combine$Combine_Char$tab = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				_elm_lang$core$Native_Utils.chr('\t'))),
		'expected tab');
	var _Bogdanp$elm_combine$Combine_Char$newline = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(
				_elm_lang$core$Native_Utils.chr('\n'))),
		'expected newline');
	var _Bogdanp$elm_combine$Combine_Char$eol = A2(_Bogdanp$elm_combine$Combine_ops['<|>'], _Bogdanp$elm_combine$Combine_Char$newline, _Bogdanp$elm_combine$Combine_Char$crlf);
	var _Bogdanp$elm_combine$Combine_Char$lower = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isLower),
		'expected a lowercase character');
	var _Bogdanp$elm_combine$Combine_Char$upper = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isUpper),
		'expected an uppercase character');
	var _Bogdanp$elm_combine$Combine_Char$digit = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isDigit),
		'expected a digit');
	var _Bogdanp$elm_combine$Combine_Char$octDigit = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isOctDigit),
		'expected an octal digit');
	var _Bogdanp$elm_combine$Combine_Char$hexDigit = A2(
		_Bogdanp$elm_combine$Combine_ops['<?>'],
		_Bogdanp$elm_combine$Combine_Char$satisfy(_elm_lang$core$Char$isHexDigit),
		'expected a hexadecimal digit');

	var _Bogdanp$elm_combine$Combine_Num$digit = function () {
		var toDigit = function (c) {
			return _elm_lang$core$Char$toCode(c) - _elm_lang$core$Char$toCode(
				_elm_lang$core$Native_Utils.chr('0'));
		};
		return A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			toDigit,
			A2(_Bogdanp$elm_combine$Combine_ops['<?>'], _Bogdanp$elm_combine$Combine_Char$digit, 'expected a digit'));
	}();
	var _Bogdanp$elm_combine$Combine_Num$sign = A2(
		_Bogdanp$elm_combine$Combine$optional,
		1,
		_Bogdanp$elm_combine$Combine$choice(
			{
				ctor: '::',
				_0: A2(
					_Bogdanp$elm_combine$Combine_ops['<$'],
					1,
					_Bogdanp$elm_combine$Combine$string('+')),
				_1: {
					ctor: '::',
					_0: A2(
						_Bogdanp$elm_combine$Combine_ops['<$'],
						-1,
						_Bogdanp$elm_combine$Combine$string('-')),
					_1: {ctor: '[]'}
				}
			}));
	var _Bogdanp$elm_combine$Combine_Num$unwrap = F2(
		function (f, s) {
			var _p0 = f(s);
			if (_p0.ctor === 'Ok') {
				return _p0._0;
			} else {
				return _elm_lang$core$Native_Utils.crashCase(
					'Combine.Num',
					{
						start: {line: 23, column: 3},
						end: {line: 28, column: 79}
					},
					_p0)(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'impossible state in Combine.Num.unwrap: ',
						_elm_lang$core$Basics$toString(_p0._0)));
			}
		});
	var _Bogdanp$elm_combine$Combine_Num$toInt = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toInt);
	var _Bogdanp$elm_combine$Combine_Num$int = A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			F2(
				function (x, y) {
					return x * y;
				}),
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				_Bogdanp$elm_combine$Combine_Num$toInt,
				_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)')),
			'expected an integer'));
	var _Bogdanp$elm_combine$Combine_Num$toFloat = _Bogdanp$elm_combine$Combine_Num$unwrap(_elm_lang$core$String$toFloat);
	var _Bogdanp$elm_combine$Combine_Num$float = A2(
		_Bogdanp$elm_combine$Combine_ops['<*>'],
		A2(
			_Bogdanp$elm_combine$Combine_ops['<$>'],
			function (_p2) {
				return F2(
					function (x, y) {
						return x * y;
					})(
					_elm_lang$core$Basics$toFloat(_p2));
			},
			_Bogdanp$elm_combine$Combine_Num$sign),
		A2(
			_Bogdanp$elm_combine$Combine_ops['<?>'],
			A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				_Bogdanp$elm_combine$Combine_Num$toFloat,
				_Bogdanp$elm_combine$Combine$regex('(0|[1-9][0-9]*)(\\.[0-9]+)')),
			'expected a float'));

	var _Bogdanp$elm_route$Route$reverse = F2(
		function (_p0, inputs) {
			var _p1 = _p0;
			var accumulate = F3(
				function (cs, is, xs) {
					accumulate:
					while (true) {
						var _p2 = {ctor: '_Tuple2', _0: is, _1: xs};
						_v1_5:
						do {
							if (_p2.ctor === '_Tuple2') {
								if (_p2._1.ctor === '[]') {
									if (_p2._0.ctor === '[]') {
										return A2(
											_elm_lang$core$Basics_ops['++'],
											'/',
											A2(
												_elm_lang$core$String$join,
												'/',
												_elm_lang$core$List$reverse(cs)));
									} else {
										break _v1_5;
									}
								} else {
									switch (_p2._1._0.ctor) {
										case 'CStatic':
											var _v2 = {ctor: '::', _0: _p2._1._0._0, _1: cs},
												_v3 = is,
												_v4 = _p2._1._1;
											cs = _v2;
											is = _v3;
											xs = _v4;
											continue accumulate;
										case 'CCustom':
											if (_p2._0.ctor === '::') {
												var _p5 = _p2._0._0;
												var _p3 = _p2._1._0._0(_p5);
												if (_p3.ctor === 'Ok') {
													var _v6 = {ctor: '::', _0: _p5, _1: cs},
														_v7 = _p2._0._1,
														_v8 = _p2._1._1;
													cs = _v6;
													is = _v7;
													xs = _v8;
													continue accumulate;
												} else {
													return _elm_lang$core$Native_Utils.crashCase(
														'Route',
														{
															start: {line: 388, column: 21},
															end: {line: 393, column: 100}
														},
														_p3)(
														A2(
															_elm_lang$core$Basics_ops['++'],
															_p3._0,
															A2(
																_elm_lang$core$Basics_ops['++'],
																' in a call to \'reverse\' but received \'',
																A2(_elm_lang$core$Basics_ops['++'], _p5, '\''))));
												}
											} else {
												break _v1_5;
											}
										case 'CString':
											if (_p2._0.ctor === '::') {
												var _v9 = {ctor: '::', _0: _p2._0._0, _1: cs},
													_v10 = _p2._0._1,
													_v11 = _p2._1._1;
												cs = _v9;
												is = _v10;
												xs = _v11;
												continue accumulate;
											} else {
												break _v1_5;
											}
										default:
											if (_p2._0.ctor === '::') {
												var _p7 = _p2._0._0;
												var _p6 = _elm_lang$core$String$toInt(_p7);
												if (_p6.ctor === 'Ok') {
													var _v13 = {ctor: '::', _0: _p7, _1: cs},
														_v14 = _p2._0._1,
														_v15 = _p2._1._1;
													cs = _v13;
													is = _v14;
													xs = _v15;
													continue accumulate;
												} else {
													return A2(
														_elm_lang$core$Basics_ops['++'],
														_elm_lang$core$Native_Utils.crash(
															'Route',
															{
																start: {line: 404, column: 29},
																end: {line: 404, column: 40}
															})(_p6._0),
														' in a call to \'reverse\'');
												}
											} else {
												break _v1_5;
											}
									}
								}
							} else {
								break _v1_5;
							}
						} while(false);
						return _elm_lang$core$Native_Utils.crashCase(
							'Route',
							{
								start: {line: 380, column: 13},
								end: {line: 407, column: 90}
							},
							_p2)('\'reverse\' called with an unexpected number of arguments');
					}
				});
			return A3(
				accumulate,
				{ctor: '[]'},
				inputs,
				_p1._0.components);
		});
	var _Bogdanp$elm_route$Route$match = F2(
		function (_p9, path) {
			var _p10 = _p9;
			var _p11 = _elm_lang$core$String$uncons(path);
			if (((_p11.ctor === 'Just') && (_p11._0.ctor === '_Tuple2')) && (_p11._0._0.valueOf() === '/')) {
				return A2(
					_elm_lang$core$Maybe$map,
					function (_p12) {
						var _p13 = _p12;
						return _p13._2;
					},
					_elm_lang$core$Result$toMaybe(
						A2(_Bogdanp$elm_combine$Combine$parse, _p10._0, _p11._0._1)));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		});
	var _Bogdanp$elm_route$Route$CInt = {ctor: 'CInt'};
	var _Bogdanp$elm_route$Route$CString = {ctor: 'CString'};
	var _Bogdanp$elm_route$Route$CCustom = function (a) {
		return {ctor: 'CCustom', _0: a};
	};
	var _Bogdanp$elm_route$Route$CStatic = function (a) {
		return {ctor: 'CStatic', _0: a};
	};
	var _Bogdanp$elm_route$Route$Route = function (a) {
		return {ctor: 'Route', _0: a};
	};
	var _Bogdanp$elm_route$Route$route = F2(
		function (x, _p14) {
			var _p15 = _p14;
			var _p16 = _p15._0;
			return _Bogdanp$elm_route$Route$Route(
				{
					parser: A2(
						_Bogdanp$elm_combine$Combine_ops['>>='],
						_p16.parser,
						function (k) {
							return _Bogdanp$elm_combine$Combine$succeed(
								k(x));
						}),
					components: _p16.components
				});
		});
	var _Bogdanp$elm_route$Route_ops = _Bogdanp$elm_route$Route_ops || {};
	_Bogdanp$elm_route$Route_ops[':='] = _Bogdanp$elm_route$Route$route;
	var _Bogdanp$elm_route$Route$static = function (s) {
		return _Bogdanp$elm_route$Route$Route(
			{
				parser: A2(
					_Bogdanp$elm_combine$Combine_ops['<$'],
					_elm_lang$core$Basics$identity,
					_Bogdanp$elm_combine$Combine$string(s)),
				components: {
					ctor: '::',
					_0: _Bogdanp$elm_route$Route$CStatic(s),
					_1: {ctor: '[]'}
				}
			});
	};
	var _Bogdanp$elm_route$Route$custom = function (p) {
		var validator = function (s) {
			var _p17 = A2(_Bogdanp$elm_combine$Combine$parse, p, s);
			if (_p17.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					{ctor: '_Tuple0'});
			} else {
				return _elm_lang$core$Result$Err(
					A2(_elm_lang$core$String$join, ' or ', _p17._0._2));
			}
		};
		return _Bogdanp$elm_route$Route$Route(
			{
				parser: A2(
					_Bogdanp$elm_combine$Combine_ops['<$>'],
					F2(
						function (x, y) {
							return y(x);
						}),
					p),
				components: {
					ctor: '::',
					_0: _Bogdanp$elm_route$Route$CCustom(validator),
					_1: {ctor: '[]'}
				}
			});
	};
	var _Bogdanp$elm_route$Route$string = _Bogdanp$elm_route$Route$Route(
		{
			parser: A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return y(x);
					}),
				_Bogdanp$elm_combine$Combine$regex('[^/]+')),
			components: {
				ctor: '::',
				_0: _Bogdanp$elm_route$Route$CString,
				_1: {ctor: '[]'}
			}
		});
	var _Bogdanp$elm_route$Route$int = _Bogdanp$elm_route$Route$Route(
		{
			parser: A2(
				_Bogdanp$elm_combine$Combine_ops['<$>'],
				F2(
					function (x, y) {
						return y(x);
					}),
				_Bogdanp$elm_combine$Combine_Num$int),
			components: {
				ctor: '::',
				_0: _Bogdanp$elm_route$Route$CInt,
				_1: {ctor: '[]'}
			}
		});
	var _Bogdanp$elm_route$Route$and = F2(
		function (_p19, _p18) {
			var _p20 = _p19;
			var _p24 = _p20._0;
			var _p21 = _p18;
			var _p23 = _p21._0;
			return _Bogdanp$elm_route$Route$Route(
				{
					parser: A2(
						_Bogdanp$elm_combine$Combine_ops['<*>'],
						A2(
							_Bogdanp$elm_combine$Combine_ops['<$>'],
							F2(
								function (x, y) {
									return function (_p22) {
										return y(
											x(_p22));
									};
								}),
							_p24.parser),
						A2(
							_Bogdanp$elm_combine$Combine_ops['*>'],
							_Bogdanp$elm_combine$Combine$string('/'),
							_p23.parser)),
					components: A2(_elm_lang$core$Basics_ops['++'], _p24.components, _p23.components)
				});
		});
	var _Bogdanp$elm_route$Route_ops = _Bogdanp$elm_route$Route_ops || {};
	_Bogdanp$elm_route$Route_ops['</>'] = _Bogdanp$elm_route$Route$and;
	var _Bogdanp$elm_route$Route$Router = function (a) {
		return {ctor: 'Router', _0: a};
	};
	var _Bogdanp$elm_route$Route$router = function (rs) {
		return _Bogdanp$elm_route$Route$Router(
			_Bogdanp$elm_combine$Combine$choice(
				A2(
					_elm_lang$core$List$map,
					function (_p25) {
						var _p26 = _p25;
						return A2(_Bogdanp$elm_combine$Combine_ops['<*'], _p26._0.parser, _Bogdanp$elm_combine$Combine$end);
					},
					rs)));
	};

	//import Native.List //

	var _elm_lang$core$Native_Array = function() {

	// A RRB-Tree has two distinct data types.
	// Leaf -> "height"  is always 0
	//         "table"   is an array of elements
	// Node -> "height"  is always greater than 0
	//         "table"   is an array of child nodes
	//         "lengths" is an array of accumulated lengths of the child nodes

	// M is the maximal table size. 32 seems fast. E is the allowed increase
	// of search steps when concatting to find an index. Lower values will
	// decrease balancing, but will increase search steps.
	var M = 32;
	var E = 2;

	// An empty array.
	var empty = {
		ctor: '_Array',
		height: 0,
		table: []
	};


	function get(i, array)
	{
		if (i < 0 || i >= length(array))
		{
			throw new Error(
				'Index ' + i + ' is out of range. Check the length of ' +
				'your array first or use getMaybe or getWithDefault.');
		}
		return unsafeGet(i, array);
	}


	function unsafeGet(i, array)
	{
		for (var x = array.height; x > 0; x--)
		{
			var slot = i >> (x * 5);
			while (array.lengths[slot] <= i)
			{
				slot++;
			}
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array = array.table[slot];
		}
		return array.table[i];
	}


	// Sets the value at the index i. Only the nodes leading to i will get
	// copied and updated.
	function set(i, item, array)
	{
		if (i < 0 || length(array) <= i)
		{
			return array;
		}
		return unsafeSet(i, item, array);
	}


	function unsafeSet(i, item, array)
	{
		array = nodeCopy(array);

		if (array.height === 0)
		{
			array.table[i] = item;
		}
		else
		{
			var slot = getSlot(i, array);
			if (slot > 0)
			{
				i -= array.lengths[slot - 1];
			}
			array.table[slot] = unsafeSet(i, item, array.table[slot]);
		}
		return array;
	}


	function initialize(len, f)
	{
		if (len <= 0)
		{
			return empty;
		}
		var h = Math.floor( Math.log(len) / Math.log(M) );
		return initialize_(f, h, 0, len);
	}

	function initialize_(f, h, from, to)
	{
		if (h === 0)
		{
			var table = new Array((to - from) % (M + 1));
			for (var i = 0; i < table.length; i++)
			{
			  table[i] = f(from + i);
			}
			return {
				ctor: '_Array',
				height: 0,
				table: table
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	function fromList(list)
	{
		if (list.ctor === '[]')
		{
			return empty;
		}

		// Allocate M sized blocks (table) and write list elements to it.
		var table = new Array(M);
		var nodes = [];
		var i = 0;

		while (list.ctor !== '[]')
		{
			table[i] = list._0;
			list = list._1;
			i++;

			// table is full, so we can push a leaf containing it into the
			// next node.
			if (i === M)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table
				};
				fromListPush(leaf, nodes);
				table = new Array(M);
				i = 0;
			}
		}

		// Maybe there is something left on the table.
		if (i > 0)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table.splice(0, i)
			};
			fromListPush(leaf, nodes);
		}

		// Go through all of the nodes and eventually push them into higher nodes.
		for (var h = 0; h < nodes.length - 1; h++)
		{
			if (nodes[h].table.length > 0)
			{
				fromListPush(nodes[h], nodes);
			}
		}

		var head = nodes[nodes.length - 1];
		if (head.height > 0 && head.table.length === 1)
		{
			return head.table[0];
		}
		else
		{
			return head;
		}
	}

	// Push a node into a higher node as a child.
	function fromListPush(toPush, nodes)
	{
		var h = toPush.height;

		// Maybe the node on this height does not exist.
		if (nodes.length === h)
		{
			var node = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
			nodes.push(node);
		}

		nodes[h].table.push(toPush);
		var len = length(toPush);
		if (nodes[h].lengths.length > 0)
		{
			len += nodes[h].lengths[nodes[h].lengths.length - 1];
		}
		nodes[h].lengths.push(len);

		if (nodes[h].table.length === M)
		{
			fromListPush(nodes[h], nodes);
			nodes[h] = {
				ctor: '_Array',
				height: h + 1,
				table: [],
				lengths: []
			};
		}
	}

	// Pushes an item via push_ to the bottom right of a tree.
	function push(item, a)
	{
		var pushed = push_(item, a);
		if (pushed !== null)
		{
			return pushed;
		}

		var newTree = create(item, a.height);
		return siblise(a, newTree);
	}

	// Recursively tries to push an item to the bottom-right most
	// tree possible. If there is no space left for the item,
	// null will be returned.
	function push_(item, a)
	{
		// Handle resursion stop at leaf level.
		if (a.height === 0)
		{
			if (a.table.length < M)
			{
				var newA = {
					ctor: '_Array',
					height: 0,
					table: a.table.slice()
				};
				newA.table.push(item);
				return newA;
			}
			else
			{
			  return null;
			}
		}

		// Recursively push
		var pushed = push_(item, botRight(a));

		// There was space in the bottom right tree, so the slot will
		// be updated.
		if (pushed !== null)
		{
			var newA = nodeCopy(a);
			newA.table[newA.table.length - 1] = pushed;
			newA.lengths[newA.lengths.length - 1]++;
			return newA;
		}

		// When there was no space left, check if there is space left
		// for a new slot with a tree which contains only the item
		// at the bottom.
		if (a.table.length < M)
		{
			var newSlot = create(item, a.height - 1);
			var newA = nodeCopy(a);
			newA.table.push(newSlot);
			newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
			return newA;
		}
		else
		{
			return null;
		}
	}

	// Converts an array into a list of elements.
	function toList(a)
	{
		return toList_(_elm_lang$core$Native_List.Nil, a);
	}

	function toList_(list, a)
	{
		for (var i = a.table.length - 1; i >= 0; i--)
		{
			list =
				a.height === 0
					? _elm_lang$core$Native_List.Cons(a.table[i], list)
					: toList_(list, a.table[i]);
		}
		return list;
	}

	// Maps a function over the elements of an array.
	function map(f, a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? f(a.table[i])
					: map(f, a.table[i]);
		}
		return newA;
	}

	// Maps a function over the elements with their index as first argument.
	function indexedMap(f, a)
	{
		return indexedMap_(f, a, 0);
	}

	function indexedMap_(f, a, from)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: new Array(a.table.length)
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths;
		}
		for (var i = 0; i < a.table.length; i++)
		{
			newA.table[i] =
				a.height === 0
					? A2(f, from + i, a.table[i])
					: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
		}
		return newA;
	}

	function foldl(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = 0; i < a.table.length; i++)
			{
				b = foldl(f, b, a.table[i]);
			}
		}
		return b;
	}

	function foldr(f, b, a)
	{
		if (a.height === 0)
		{
			for (var i = a.table.length; i--; )
			{
				b = A2(f, a.table[i], b);
			}
		}
		else
		{
			for (var i = a.table.length; i--; )
			{
				b = foldr(f, b, a.table[i]);
			}
		}
		return b;
	}

	// TODO: currently, it slices the right, then the left. This can be
	// optimized.
	function slice(from, to, a)
	{
		if (from < 0)
		{
			from += length(a);
		}
		if (to < 0)
		{
			to += length(a);
		}
		return sliceLeft(from, sliceRight(to, a));
	}

	function sliceRight(to, a)
	{
		if (to === length(a))
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(0, to);
			return newA;
		}

		// Slice the right recursively.
		var right = getSlot(to, a);
		var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (right === 0)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(0, right),
			lengths: a.lengths.slice(0, right)
		};
		if (sliced.table.length > 0)
		{
			newA.table[right] = sliced;
			newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
		}
		return newA;
	}

	function sliceLeft(from, a)
	{
		if (from === 0)
		{
			return a;
		}

		// Handle leaf level.
		if (a.height === 0)
		{
			var newA = { ctor:'_Array', height:0 };
			newA.table = a.table.slice(from, a.table.length + 1);
			return newA;
		}

		// Slice the left recursively.
		var left = getSlot(from, a);
		var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

		// Maybe the a node is not even needed, as sliced contains the whole slice.
		if (left === a.table.length - 1)
		{
			return sliced;
		}

		// Create new node.
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice(left, a.table.length + 1),
			lengths: new Array(a.table.length - left)
		};
		newA.table[0] = sliced;
		var len = 0;
		for (var i = 0; i < newA.table.length; i++)
		{
			len += length(newA.table[i]);
			newA.lengths[i] = len;
		}

		return newA;
	}

	// Appends two trees.
	function append(a,b)
	{
		if (a.table.length === 0)
		{
			return b;
		}
		if (b.table.length === 0)
		{
			return a;
		}

		var c = append_(a, b);

		// Check if both nodes can be crunshed together.
		if (c[0].table.length + c[1].table.length <= M)
		{
			if (c[0].table.length === 0)
			{
				return c[1];
			}
			if (c[1].table.length === 0)
			{
				return c[0];
			}

			// Adjust .table and .lengths
			c[0].table = c[0].table.concat(c[1].table);
			if (c[0].height > 0)
			{
				var len = length(c[0]);
				for (var i = 0; i < c[1].lengths.length; i++)
				{
					c[1].lengths[i] += len;
				}
				c[0].lengths = c[0].lengths.concat(c[1].lengths);
			}

			return c[0];
		}

		if (c[0].height > 0)
		{
			var toRemove = calcToRemove(a, b);
			if (toRemove > E)
			{
				c = shuffle(c[0], c[1], toRemove);
			}
		}

		return siblise(c[0], c[1]);
	}

	// Returns an array of two nodes; right and left. One node _may_ be empty.
	function append_(a, b)
	{
		if (a.height === 0 && b.height === 0)
		{
			return [a, b];
		}

		if (a.height !== 1 || b.height !== 1)
		{
			if (a.height === b.height)
			{
				a = nodeCopy(a);
				b = nodeCopy(b);
				var appended = append_(botRight(a), botLeft(b));

				insertRight(a, appended[1]);
				insertLeft(b, appended[0]);
			}
			else if (a.height > b.height)
			{
				a = nodeCopy(a);
				var appended = append_(botRight(a), b);

				insertRight(a, appended[0]);
				b = parentise(appended[1], appended[1].height + 1);
			}
			else
			{
				b = nodeCopy(b);
				var appended = append_(a, botLeft(b));

				var left = appended[0].table.length === 0 ? 0 : 1;
				var right = left === 0 ? 1 : 0;
				insertLeft(b, appended[left]);
				a = parentise(appended[right], appended[right].height + 1);
			}
		}

		// Check if balancing is needed and return based on that.
		if (a.table.length === 0 || b.table.length === 0)
		{
			return [a, b];
		}

		var toRemove = calcToRemove(a, b);
		if (toRemove <= E)
		{
			return [a, b];
		}
		return shuffle(a, b, toRemove);
	}

	// Helperfunctions for append_. Replaces a child node at the side of the parent.
	function insertRight(parent, node)
	{
		var index = parent.table.length - 1;
		parent.table[index] = node;
		parent.lengths[index] = length(node);
		parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
	}

	function insertLeft(parent, node)
	{
		if (node.table.length > 0)
		{
			parent.table[0] = node;
			parent.lengths[0] = length(node);

			var len = length(parent.table[0]);
			for (var i = 1; i < parent.lengths.length; i++)
			{
				len += length(parent.table[i]);
				parent.lengths[i] = len;
			}
		}
		else
		{
			parent.table.shift();
			for (var i = 1; i < parent.lengths.length; i++)
			{
				parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
			}
			parent.lengths.shift();
		}
	}

	// Returns the extra search steps for E. Refer to the paper.
	function calcToRemove(a, b)
	{
		var subLengths = 0;
		for (var i = 0; i < a.table.length; i++)
		{
			subLengths += a.table[i].table.length;
		}
		for (var i = 0; i < b.table.length; i++)
		{
			subLengths += b.table[i].table.length;
		}

		var toRemove = a.table.length + b.table.length;
		return toRemove - (Math.floor((subLengths - 1) / M) + 1);
	}

	// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
	function get2(a, b, index)
	{
		return index < a.length
			? a[index]
			: b[index - a.length];
	}

	function set2(a, b, index, value)
	{
		if (index < a.length)
		{
			a[index] = value;
		}
		else
		{
			b[index - a.length] = value;
		}
	}

	function saveSlot(a, b, index, slot)
	{
		set2(a.table, b.table, index, slot);

		var l = (index === 0 || index === a.lengths.length)
			? 0
			: get2(a.lengths, a.lengths, index - 1);

		set2(a.lengths, b.lengths, index, l + length(slot));
	}

	// Creates a node or leaf with a given length at their arrays for perfomance.
	// Is only used by shuffle.
	function createNode(h, length)
	{
		if (length < 0)
		{
			length = 0;
		}
		var a = {
			ctor: '_Array',
			height: h,
			table: new Array(length)
		};
		if (h > 0)
		{
			a.lengths = new Array(length);
		}
		return a;
	}

	// Returns an array of two balanced nodes.
	function shuffle(a, b, toRemove)
	{
		var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
		var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

		// Skip the slots with size M. More precise: copy the slot references
		// to the new node
		var read = 0;
		while (get2(a.table, b.table, read).table.length % M === 0)
		{
			set2(newA.table, newB.table, read, get2(a.table, b.table, read));
			set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
			read++;
		}

		// Pulling items from left to right, caching in a slot before writing
		// it into the new nodes.
		var write = read;
		var slot = new createNode(a.height - 1, 0);
		var from = 0;

		// If the current slot is still containing data, then there will be at
		// least one more write, so we do not break this loop yet.
		while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
		{
			// Find out the max possible items for copying.
			var source = get2(a.table, b.table, read);
			var to = Math.min(M - slot.table.length, source.table.length);

			// Copy and adjust size table.
			slot.table = slot.table.concat(source.table.slice(from, to));
			if (slot.height > 0)
			{
				var len = slot.lengths.length;
				for (var i = len; i < len + to - from; i++)
				{
					slot.lengths[i] = length(slot.table[i]);
					slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
				}
			}

			from += to;

			// Only proceed to next slots[i] if the current one was
			// fully copied.
			if (source.table.length <= to)
			{
				read++; from = 0;
			}

			// Only create a new slot if the current one is filled up.
			if (slot.table.length === M)
			{
				saveSlot(newA, newB, write, slot);
				slot = createNode(a.height - 1, 0);
				write++;
			}
		}

		// Cleanup after the loop. Copy the last slot into the new nodes.
		if (slot.table.length > 0)
		{
			saveSlot(newA, newB, write, slot);
			write++;
		}

		// Shift the untouched slots to the left
		while (read < a.table.length + b.table.length )
		{
			saveSlot(newA, newB, write, get2(a.table, b.table, read));
			read++;
			write++;
		}

		return [newA, newB];
	}

	// Navigation functions
	function botRight(a)
	{
		return a.table[a.table.length - 1];
	}
	function botLeft(a)
	{
		return a.table[0];
	}

	// Copies a node for updating. Note that you should not use this if
	// only updating only one of "table" or "lengths" for performance reasons.
	function nodeCopy(a)
	{
		var newA = {
			ctor: '_Array',
			height: a.height,
			table: a.table.slice()
		};
		if (a.height > 0)
		{
			newA.lengths = a.lengths.slice();
		}
		return newA;
	}

	// Returns how many items are in the tree.
	function length(array)
	{
		if (array.height === 0)
		{
			return array.table.length;
		}
		else
		{
			return array.lengths[array.lengths.length - 1];
		}
	}

	// Calculates in which slot of "table" the item probably is, then
	// find the exact slot via forward searching in  "lengths". Returns the index.
	function getSlot(i, a)
	{
		var slot = i >> (5 * a.height);
		while (a.lengths[slot] <= i)
		{
			slot++;
		}
		return slot;
	}

	// Recursively creates a tree with a given height containing
	// only the given item.
	function create(item, h)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: [item]
			};
		}
		return {
			ctor: '_Array',
			height: h,
			table: [create(item, h - 1)],
			lengths: [1]
		};
	}

	// Recursively creates a tree that contains the given tree.
	function parentise(tree, h)
	{
		if (h === tree.height)
		{
			return tree;
		}

		return {
			ctor: '_Array',
			height: h,
			table: [parentise(tree, h - 1)],
			lengths: [length(tree)]
		};
	}

	// Emphasizes blood brotherhood beneath two trees.
	function siblise(a, b)
	{
		return {
			ctor: '_Array',
			height: a.height + 1,
			table: [a, b],
			lengths: [length(a), length(a) + length(b)]
		};
	}

	function toJSArray(a)
	{
		var jsArray = new Array(length(a));
		toJSArray_(jsArray, 0, a);
		return jsArray;
	}

	function toJSArray_(jsArray, i, a)
	{
		for (var t = 0; t < a.table.length; t++)
		{
			if (a.height === 0)
			{
				jsArray[i + t] = a.table[t];
			}
			else
			{
				var inc = t === 0 ? 0 : a.lengths[t - 1];
				toJSArray_(jsArray, i + inc, a.table[t]);
			}
		}
	}

	function fromJSArray(jsArray)
	{
		if (jsArray.length === 0)
		{
			return empty;
		}
		var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
		return fromJSArray_(jsArray, h, 0, jsArray.length);
	}

	function fromJSArray_(jsArray, h, from, to)
	{
		if (h === 0)
		{
			return {
				ctor: '_Array',
				height: 0,
				table: jsArray.slice(from, to)
			};
		}

		var step = Math.pow(M, h);
		var table = new Array(Math.ceil((to - from) / step));
		var lengths = new Array(table.length);
		for (var i = 0; i < table.length; i++)
		{
			table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
			lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
		}
		return {
			ctor: '_Array',
			height: h,
			table: table,
			lengths: lengths
		};
	}

	return {
		empty: empty,
		fromList: fromList,
		toList: toList,
		initialize: F2(initialize),
		append: F2(append),
		push: F2(push),
		slice: F3(slice),
		get: F2(get),
		set: F3(set),
		map: F2(map),
		indexedMap: F2(indexedMap),
		foldl: F3(foldl),
		foldr: F3(foldr),
		length: length,

		toJSArray: toJSArray,
		fromJSArray: fromJSArray
	};

	}();
	var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
	var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
	var _elm_lang$core$Array$isEmpty = function (array) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Array$length(array),
			0);
	};
	var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
	var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
	var _elm_lang$core$Array$get = F2(
		function (i, array) {
			return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
				i,
				_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
				A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
		});
	var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
	var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
	var _elm_lang$core$Array$filter = F2(
		function (isOkay, arr) {
			var update = F2(
				function (x, xs) {
					return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
				});
			return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
		});
	var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
	var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
	var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
	var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
	var _elm_lang$core$Array$toIndexedList = function (array) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$Native_Array.length(array) - 1),
			_elm_lang$core$Native_Array.toList(array));
	};
	var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
	var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
	var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
	var _elm_lang$core$Array$repeat = F2(
		function (n, e) {
			return A2(
				_elm_lang$core$Array$initialize,
				n,
				_elm_lang$core$Basics$always(e));
		});
	var _elm_lang$core$Array$Array = {ctor: 'Array'};

	var _elm_lang$core$Dict$foldr = F3(
		function (f, acc, t) {
			foldr:
			while (true) {
				var _p0 = t;
				if (_p0.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v1 = f,
						_v2 = A3(
						f,
						_p0._1,
						_p0._2,
						A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
						_v3 = _p0._3;
					f = _v1;
					acc = _v2;
					t = _v3;
					continue foldr;
				}
			}
		});
	var _elm_lang$core$Dict$keys = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, keyList) {
					return {ctor: '::', _0: key, _1: keyList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$values = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, valueList) {
					return {ctor: '::', _0: value, _1: valueList};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$toList = function (dict) {
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (key, value, list) {
					return {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: key, _1: value},
						_1: list
					};
				}),
			{ctor: '[]'},
			dict);
	};
	var _elm_lang$core$Dict$foldl = F3(
		function (f, acc, dict) {
			foldl:
			while (true) {
				var _p1 = dict;
				if (_p1.ctor === 'RBEmpty_elm_builtin') {
					return acc;
				} else {
					var _v5 = f,
						_v6 = A3(
						f,
						_p1._1,
						_p1._2,
						A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
						_v7 = _p1._4;
					f = _v5;
					acc = _v6;
					dict = _v7;
					continue foldl;
				}
			}
		});
	var _elm_lang$core$Dict$merge = F6(
		function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
			var stepState = F3(
				function (rKey, rValue, _p2) {
					stepState:
					while (true) {
						var _p3 = _p2;
						var _p9 = _p3._1;
						var _p8 = _p3._0;
						var _p4 = _p8;
						if (_p4.ctor === '[]') {
							return {
								ctor: '_Tuple2',
								_0: _p8,
								_1: A3(rightStep, rKey, rValue, _p9)
							};
						} else {
							var _p7 = _p4._1;
							var _p6 = _p4._0._1;
							var _p5 = _p4._0._0;
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
								var _v10 = rKey,
									_v11 = rValue,
									_v12 = {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A3(leftStep, _p5, _p6, _p9)
								};
								rKey = _v10;
								rValue = _v11;
								_p2 = _v12;
								continue stepState;
							} else {
								if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
									return {
										ctor: '_Tuple2',
										_0: _p8,
										_1: A3(rightStep, rKey, rValue, _p9)
									};
								} else {
									return {
										ctor: '_Tuple2',
										_0: _p7,
										_1: A4(bothStep, _p5, _p6, rValue, _p9)
									};
								}
							}
						}
					}
				});
			var _p10 = A3(
				_elm_lang$core$Dict$foldl,
				stepState,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$Dict$toList(leftDict),
					_1: initialResult
				},
				rightDict);
			var leftovers = _p10._0;
			var intermediateResult = _p10._1;
			return A3(
				_elm_lang$core$List$foldl,
				F2(
					function (_p11, result) {
						var _p12 = _p11;
						return A3(leftStep, _p12._0, _p12._1, result);
					}),
				intermediateResult,
				leftovers);
		});
	var _elm_lang$core$Dict$reportRemBug = F4(
		function (msg, c, lgot, rgot) {
			return _elm_lang$core$Native_Debug.crash(
				_elm_lang$core$String$concat(
					{
						ctor: '::',
						_0: 'Internal red-black tree invariant violated, expected ',
						_1: {
							ctor: '::',
							_0: msg,
							_1: {
								ctor: '::',
								_0: ' and got ',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(c),
									_1: {
										ctor: '::',
										_0: '/',
										_1: {
											ctor: '::',
											_0: lgot,
											_1: {
												ctor: '::',
												_0: '/',
												_1: {
													ctor: '::',
													_0: rgot,
													_1: {
														ctor: '::',
														_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}));
		});
	var _elm_lang$core$Dict$isBBlack = function (dict) {
		var _p13 = dict;
		_v14_2:
		do {
			if (_p13.ctor === 'RBNode_elm_builtin') {
				if (_p13._0.ctor === 'BBlack') {
					return true;
				} else {
					break _v14_2;
				}
			} else {
				if (_p13._0.ctor === 'LBBlack') {
					return true;
				} else {
					break _v14_2;
				}
			}
		} while(false);
		return false;
	};
	var _elm_lang$core$Dict$sizeHelp = F2(
		function (n, dict) {
			sizeHelp:
			while (true) {
				var _p14 = dict;
				if (_p14.ctor === 'RBEmpty_elm_builtin') {
					return n;
				} else {
					var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
						_v17 = _p14._3;
					n = _v16;
					dict = _v17;
					continue sizeHelp;
				}
			}
		});
	var _elm_lang$core$Dict$size = function (dict) {
		return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
	};
	var _elm_lang$core$Dict$get = F2(
		function (targetKey, dict) {
			get:
			while (true) {
				var _p15 = dict;
				if (_p15.ctor === 'RBEmpty_elm_builtin') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
					switch (_p16.ctor) {
						case 'LT':
							var _v20 = targetKey,
								_v21 = _p15._3;
							targetKey = _v20;
							dict = _v21;
							continue get;
						case 'EQ':
							return _elm_lang$core$Maybe$Just(_p15._2);
						default:
							var _v22 = targetKey,
								_v23 = _p15._4;
							targetKey = _v22;
							dict = _v23;
							continue get;
					}
				}
			}
		});
	var _elm_lang$core$Dict$member = F2(
		function (key, dict) {
			var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
			if (_p17.ctor === 'Just') {
				return true;
			} else {
				return false;
			}
		});
	var _elm_lang$core$Dict$maxWithDefault = F3(
		function (k, v, r) {
			maxWithDefault:
			while (true) {
				var _p18 = r;
				if (_p18.ctor === 'RBEmpty_elm_builtin') {
					return {ctor: '_Tuple2', _0: k, _1: v};
				} else {
					var _v26 = _p18._1,
						_v27 = _p18._2,
						_v28 = _p18._4;
					k = _v26;
					v = _v27;
					r = _v28;
					continue maxWithDefault;
				}
			}
		});
	var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
	var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
	var _elm_lang$core$Dict$Black = {ctor: 'Black'};
	var _elm_lang$core$Dict$blackish = function (t) {
		var _p19 = t;
		if (_p19.ctor === 'RBNode_elm_builtin') {
			var _p20 = _p19._0;
			return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
		} else {
			return true;
		}
	};
	var _elm_lang$core$Dict$Red = {ctor: 'Red'};
	var _elm_lang$core$Dict$moreBlack = function (color) {
		var _p21 = color;
		switch (_p21.ctor) {
			case 'Black':
				return _elm_lang$core$Dict$BBlack;
			case 'Red':
				return _elm_lang$core$Dict$Black;
			case 'NBlack':
				return _elm_lang$core$Dict$Red;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
		}
	};
	var _elm_lang$core$Dict$lessBlack = function (color) {
		var _p22 = color;
		switch (_p22.ctor) {
			case 'BBlack':
				return _elm_lang$core$Dict$Black;
			case 'Black':
				return _elm_lang$core$Dict$Red;
			case 'Red':
				return _elm_lang$core$Dict$NBlack;
			default:
				return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
		}
	};
	var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
	var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
	var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a};
	};
	var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	var _elm_lang$core$Dict$isEmpty = function (dict) {
		return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
	};
	var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
		function (a, b, c, d, e) {
			return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
		});
	var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
		var _p23 = dict;
		if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
		} else {
			return dict;
		}
	};
	var _elm_lang$core$Dict$lessBlackTree = function (dict) {
		var _p24 = dict;
		if (_p24.ctor === 'RBNode_elm_builtin') {
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$lessBlack(_p24._0),
				_p24._1,
				_p24._2,
				_p24._3,
				_p24._4);
		} else {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		}
	};
	var _elm_lang$core$Dict$balancedTree = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_elm_lang$core$Dict$RBNode_elm_builtin,
													_elm_lang$core$Dict$lessBlack(col),
													yk,
													yv,
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
													A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$core$Dict$blacken = function (t) {
		var _p25 = t;
		if (_p25.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
		}
	};
	var _elm_lang$core$Dict$redden = function (t) {
		var _p26 = t;
		if (_p26.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
		} else {
			return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
		}
	};
	var _elm_lang$core$Dict$balanceHelp = function (tree) {
		var _p27 = tree;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_elm_lang$core$Dict$Black,
					_p27._4._3._1,
					_p27._4._3._2,
					A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
					A5(
						_elm_lang$core$Dict$balance,
						_elm_lang$core$Dict$Black,
						_p27._4._1,
						_p27._4._2,
						_p27._4._3._4,
						_elm_lang$core$Dict$redden(_p27._4._4)));
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._3._4._1,
				_p27._3._4._2,
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._3._1,
					_p27._3._2,
					_elm_lang$core$Dict$redden(_p27._3._3),
					_p27._3._4._3),
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
		} while(false);
		return tree;
	};
	var _elm_lang$core$Dict$balance = F5(
		function (c, k, v, l, r) {
			var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
			return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
		});
	var _elm_lang$core$Dict$bubble = F5(
		function (c, k, v, l, r) {
			return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$moreBlack(c),
				k,
				v,
				_elm_lang$core$Dict$lessBlackTree(l),
				_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		});
	var _elm_lang$core$Dict$removeMax = F5(
		function (c, k, v, l, r) {
			var _p28 = r;
			if (_p28.ctor === 'RBEmpty_elm_builtin') {
				return A3(_elm_lang$core$Dict$rem, c, l, r);
			} else {
				return A5(
					_elm_lang$core$Dict$bubble,
					c,
					k,
					v,
					l,
					A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
			}
		});
	var _elm_lang$core$Dict$rem = F3(
		function (color, left, right) {
			var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
			if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p30 = color;
					switch (_p30.ctor) {
						case 'Red':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
						case 'Black':
							return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
						default:
							return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
					}
				} else {
					var _p33 = _p29._1._0;
					var _p32 = _p29._0._0;
					var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
					if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/LBlack/Red',
							color,
							_elm_lang$core$Basics$toString(_p32),
							_elm_lang$core$Basics$toString(_p33));
					}
				}
			} else {
				if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
					var _p36 = _p29._1._0;
					var _p35 = _p29._0._0;
					var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
					if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
						return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
					} else {
						return A4(
							_elm_lang$core$Dict$reportRemBug,
							'Black/Red/LBlack',
							color,
							_elm_lang$core$Basics$toString(_p35),
							_elm_lang$core$Basics$toString(_p36));
					}
				} else {
					var _p40 = _p29._0._2;
					var _p39 = _p29._0._4;
					var _p38 = _p29._0._1;
					var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
					var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
					var k = _p37._0;
					var v = _p37._1;
					return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
				}
			}
		});
	var _elm_lang$core$Dict$map = F2(
		function (f, dict) {
			var _p41 = dict;
			if (_p41.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
			} else {
				var _p42 = _p41._1;
				return A5(
					_elm_lang$core$Dict$RBNode_elm_builtin,
					_p41._0,
					_p42,
					A2(f, _p42, _p41._2),
					A2(_elm_lang$core$Dict$map, f, _p41._3),
					A2(_elm_lang$core$Dict$map, f, _p41._4));
			}
		});
	var _elm_lang$core$Dict$Same = {ctor: 'Same'};
	var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
	var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
	var _elm_lang$core$Dict$update = F3(
		function (k, alter, dict) {
			var up = function (dict) {
				var _p43 = dict;
				if (_p43.ctor === 'RBEmpty_elm_builtin') {
					var _p44 = alter(_elm_lang$core$Maybe$Nothing);
					if (_p44.ctor === 'Nothing') {
						return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Dict$Insert,
							_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
						};
					}
				} else {
					var _p55 = _p43._2;
					var _p54 = _p43._4;
					var _p53 = _p43._3;
					var _p52 = _p43._1;
					var _p51 = _p43._0;
					var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
					switch (_p45.ctor) {
						case 'EQ':
							var _p46 = alter(
								_elm_lang$core$Maybe$Just(_p55));
							if (_p46.ctor === 'Nothing') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
								};
							}
						case 'LT':
							var _p47 = up(_p53);
							var flag = _p47._0;
							var newLeft = _p47._1;
							var _p48 = flag;
							switch (_p48.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
									};
							}
						default:
							var _p49 = up(_p54);
							var flag = _p49._0;
							var newRight = _p49._1;
							var _p50 = flag;
							switch (_p50.ctor) {
								case 'Same':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Same,
										_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
									};
								case 'Insert':
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Insert,
										_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
									};
								default:
									return {
										ctor: '_Tuple2',
										_0: _elm_lang$core$Dict$Remove,
										_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
									};
							}
					}
				}
			};
			var _p56 = up(dict);
			var flag = _p56._0;
			var updatedDict = _p56._1;
			var _p57 = flag;
			switch (_p57.ctor) {
				case 'Same':
					return updatedDict;
				case 'Insert':
					return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
				default:
					return _elm_lang$core$Dict$blacken(updatedDict);
			}
		});
	var _elm_lang$core$Dict$insert = F3(
		function (key, value, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(
					_elm_lang$core$Maybe$Just(value)),
				dict);
		});
	var _elm_lang$core$Dict$singleton = F2(
		function (key, value) {
			return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
		});
	var _elm_lang$core$Dict$union = F2(
		function (t1, t2) {
			return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
		});
	var _elm_lang$core$Dict$filter = F2(
		function (predicate, dictionary) {
			var add = F3(
				function (key, value, dict) {
					return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
				});
			return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
		});
	var _elm_lang$core$Dict$intersect = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p58) {
						return A2(_elm_lang$core$Dict$member, k, t2);
					}),
				t1);
		});
	var _elm_lang$core$Dict$partition = F2(
		function (predicate, dict) {
			var add = F3(
				function (key, value, _p59) {
					var _p60 = _p59;
					var _p62 = _p60._1;
					var _p61 = _p60._0;
					return A2(predicate, key, value) ? {
						ctor: '_Tuple2',
						_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
						_1: _p62
					} : {
						ctor: '_Tuple2',
						_0: _p61,
						_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
					};
				});
			return A3(
				_elm_lang$core$Dict$foldl,
				add,
				{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
				dict);
		});
	var _elm_lang$core$Dict$fromList = function (assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p63, dict) {
					var _p64 = _p63;
					return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
				}),
			_elm_lang$core$Dict$empty,
			assocs);
	};
	var _elm_lang$core$Dict$remove = F2(
		function (key, dict) {
			return A3(
				_elm_lang$core$Dict$update,
				key,
				_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
				dict);
		});
	var _elm_lang$core$Dict$diff = F2(
		function (t1, t2) {
			return A3(
				_elm_lang$core$Dict$foldl,
				F3(
					function (k, v, t) {
						return A2(_elm_lang$core$Dict$remove, k, t);
					}),
				t1,
				t2);
		});

	//import Maybe, Native.Array, Native.List, Native.Utils, Result //

	var _elm_lang$core$Native_Json = function() {


	// CORE DECODERS

	function succeed(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'succeed',
			msg: msg
		};
	}

	function fail(msg)
	{
		return {
			ctor: '<decoder>',
			tag: 'fail',
			msg: msg
		};
	}

	function decodePrimitive(tag)
	{
		return {
			ctor: '<decoder>',
			tag: tag
		};
	}

	function decodeContainer(tag, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: tag,
			decoder: decoder
		};
	}

	function decodeNull(value)
	{
		return {
			ctor: '<decoder>',
			tag: 'null',
			value: value
		};
	}

	function decodeField(field, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'field',
			field: field,
			decoder: decoder
		};
	}

	function decodeIndex(index, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'index',
			index: index,
			decoder: decoder
		};
	}

	function decodeKeyValuePairs(decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'key-value',
			decoder: decoder
		};
	}

	function mapMany(f, decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'map-many',
			func: f,
			decoders: decoders
		};
	}

	function andThen(callback, decoder)
	{
		return {
			ctor: '<decoder>',
			tag: 'andThen',
			decoder: decoder,
			callback: callback
		};
	}

	function oneOf(decoders)
	{
		return {
			ctor: '<decoder>',
			tag: 'oneOf',
			decoders: decoders
		};
	}


	// DECODING OBJECTS

	function map1(f, d1)
	{
		return mapMany(f, [d1]);
	}

	function map2(f, d1, d2)
	{
		return mapMany(f, [d1, d2]);
	}

	function map3(f, d1, d2, d3)
	{
		return mapMany(f, [d1, d2, d3]);
	}

	function map4(f, d1, d2, d3, d4)
	{
		return mapMany(f, [d1, d2, d3, d4]);
	}

	function map5(f, d1, d2, d3, d4, d5)
	{
		return mapMany(f, [d1, d2, d3, d4, d5]);
	}

	function map6(f, d1, d2, d3, d4, d5, d6)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6]);
	}

	function map7(f, d1, d2, d3, d4, d5, d6, d7)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
	}

	function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
	{
		return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
	}


	// DECODE HELPERS

	function ok(value)
	{
		return { tag: 'ok', value: value };
	}

	function badPrimitive(type, value)
	{
		return { tag: 'primitive', type: type, value: value };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badField(field, nestedProblems)
	{
		return { tag: 'field', field: field, rest: nestedProblems };
	}

	function badIndex(index, nestedProblems)
	{
		return { tag: 'index', index: index, rest: nestedProblems };
	}

	function badOneOf(problems)
	{
		return { tag: 'oneOf', problems: problems };
	}

	function bad(msg)
	{
		return { tag: 'fail', msg: msg };
	}

	function badToString(problem)
	{
		var context = '_';
		while (problem)
		{
			switch (problem.tag)
			{
				case 'primitive':
					return 'Expecting ' + problem.type
						+ (context === '_' ? '' : ' at ' + context)
						+ ' but instead got: ' + jsToString(problem.value);

				case 'index':
					context += '[' + problem.index + ']';
					problem = problem.rest;
					break;

				case 'field':
					context += '.' + problem.field;
					problem = problem.rest;
					break;

				case 'oneOf':
					var problems = problem.problems;
					for (var i = 0; i < problems.length; i++)
					{
						problems[i] = badToString(problems[i]);
					}
					return 'I ran into the following problems'
						+ (context === '_' ? '' : ' at ' + context)
						+ ':\n\n' + problems.join('\n');

				case 'fail':
					return 'I ran into a `fail` decoder'
						+ (context === '_' ? '' : ' at ' + context)
						+ ': ' + problem.msg;
			}
		}
	}

	function jsToString(value)
	{
		return value === undefined
			? 'undefined'
			: JSON.stringify(value);
	}


	// DECODE

	function runOnString(decoder, string)
	{
		var json;
		try
		{
			json = JSON.parse(string);
		}
		catch (e)
		{
			return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
		}
		return run(decoder, json);
	}

	function run(decoder, value)
	{
		var result = runHelp(decoder, value);
		return (result.tag === 'ok')
			? _elm_lang$core$Result$Ok(result.value)
			: _elm_lang$core$Result$Err(badToString(result));
	}

	function runHelp(decoder, value)
	{
		switch (decoder.tag)
		{
			case 'bool':
				return (typeof value === 'boolean')
					? ok(value)
					: badPrimitive('a Bool', value);

			case 'int':
				if (typeof value !== 'number') {
					return badPrimitive('an Int', value);
				}

				if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
					return ok(value);
				}

				if (isFinite(value) && !(value % 1)) {
					return ok(value);
				}

				return badPrimitive('an Int', value);

			case 'float':
				return (typeof value === 'number')
					? ok(value)
					: badPrimitive('a Float', value);

			case 'string':
				return (typeof value === 'string')
					? ok(value)
					: (value instanceof String)
						? ok(value + '')
						: badPrimitive('a String', value);

			case 'null':
				return (value === null)
					? ok(decoder.value)
					: badPrimitive('null', value);

			case 'value':
				return ok(value);

			case 'list':
				if (!(value instanceof Array))
				{
					return badPrimitive('a List', value);
				}

				var list = _elm_lang$core$Native_List.Nil;
				for (var i = value.length; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result)
					}
					list = _elm_lang$core$Native_List.Cons(result.value, list);
				}
				return ok(list);

			case 'array':
				if (!(value instanceof Array))
				{
					return badPrimitive('an Array', value);
				}

				var len = value.length;
				var array = new Array(len);
				for (var i = len; i--; )
				{
					var result = runHelp(decoder.decoder, value[i]);
					if (result.tag !== 'ok')
					{
						return badIndex(i, result);
					}
					array[i] = result.value;
				}
				return ok(_elm_lang$core$Native_Array.fromJSArray(array));

			case 'maybe':
				var result = runHelp(decoder.decoder, value);
				return (result.tag === 'ok')
					? ok(_elm_lang$core$Maybe$Just(result.value))
					: ok(_elm_lang$core$Maybe$Nothing);

			case 'field':
				var field = decoder.field;
				if (typeof value !== 'object' || value === null || !(field in value))
				{
					return badPrimitive('an object with a field named `' + field + '`', value);
				}

				var result = runHelp(decoder.decoder, value[field]);
				return (result.tag === 'ok') ? result : badField(field, result);

			case 'index':
				var index = decoder.index;
				if (!(value instanceof Array))
				{
					return badPrimitive('an array', value);
				}
				if (index >= value.length)
				{
					return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
				}

				var result = runHelp(decoder.decoder, value[index]);
				return (result.tag === 'ok') ? result : badIndex(index, result);

			case 'key-value':
				if (typeof value !== 'object' || value === null || value instanceof Array)
				{
					return badPrimitive('an object', value);
				}

				var keyValuePairs = _elm_lang$core$Native_List.Nil;
				for (var key in value)
				{
					var result = runHelp(decoder.decoder, value[key]);
					if (result.tag !== 'ok')
					{
						return badField(key, result);
					}
					var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
					keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
				}
				return ok(keyValuePairs);

			case 'map-many':
				var answer = decoder.func;
				var decoders = decoder.decoders;
				for (var i = 0; i < decoders.length; i++)
				{
					var result = runHelp(decoders[i], value);
					if (result.tag !== 'ok')
					{
						return result;
					}
					answer = answer(result.value);
				}
				return ok(answer);

			case 'andThen':
				var result = runHelp(decoder.decoder, value);
				return (result.tag !== 'ok')
					? result
					: runHelp(decoder.callback(result.value), value);

			case 'oneOf':
				var errors = [];
				var temp = decoder.decoders;
				while (temp.ctor !== '[]')
				{
					var result = runHelp(temp._0, value);

					if (result.tag === 'ok')
					{
						return result;
					}

					errors.push(result);

					temp = temp._1;
				}
				return badOneOf(errors);

			case 'fail':
				return bad(decoder.msg);

			case 'succeed':
				return ok(decoder.msg);
		}
	}


	// EQUALITY

	function equality(a, b)
	{
		if (a === b)
		{
			return true;
		}

		if (a.tag !== b.tag)
		{
			return false;
		}

		switch (a.tag)
		{
			case 'succeed':
			case 'fail':
				return a.msg === b.msg;

			case 'bool':
			case 'int':
			case 'float':
			case 'string':
			case 'value':
				return true;

			case 'null':
				return a.value === b.value;

			case 'list':
			case 'array':
			case 'maybe':
			case 'key-value':
				return equality(a.decoder, b.decoder);

			case 'field':
				return a.field === b.field && equality(a.decoder, b.decoder);

			case 'index':
				return a.index === b.index && equality(a.decoder, b.decoder);

			case 'map-many':
				if (a.func !== b.func)
				{
					return false;
				}
				return listEquality(a.decoders, b.decoders);

			case 'andThen':
				return a.callback === b.callback && equality(a.decoder, b.decoder);

			case 'oneOf':
				return listEquality(a.decoders, b.decoders);
		}
	}

	function listEquality(aDecoders, bDecoders)
	{
		var len = aDecoders.length;
		if (len !== bDecoders.length)
		{
			return false;
		}
		for (var i = 0; i < len; i++)
		{
			if (!equality(aDecoders[i], bDecoders[i]))
			{
				return false;
			}
		}
		return true;
	}


	// ENCODE

	function encode(indentLevel, value)
	{
		return JSON.stringify(value, null, indentLevel);
	}

	function identity(value)
	{
		return value;
	}

	function encodeObject(keyValuePairs)
	{
		var obj = {};
		while (keyValuePairs.ctor !== '[]')
		{
			var pair = keyValuePairs._0;
			obj[pair._0] = pair._1;
			keyValuePairs = keyValuePairs._1;
		}
		return obj;
	}

	return {
		encode: F2(encode),
		runOnString: F2(runOnString),
		run: F2(run),

		decodeNull: decodeNull,
		decodePrimitive: decodePrimitive,
		decodeContainer: F2(decodeContainer),

		decodeField: F2(decodeField),
		decodeIndex: F2(decodeIndex),

		map1: F2(map1),
		map2: F3(map2),
		map3: F4(map3),
		map4: F5(map4),
		map5: F6(map5),
		map6: F7(map6),
		map7: F8(map7),
		map8: F9(map8),
		decodeKeyValuePairs: decodeKeyValuePairs,

		andThen: F2(andThen),
		fail: fail,
		succeed: succeed,
		oneOf: oneOf,

		identity: identity,
		encodeNull: null,
		encodeArray: _elm_lang$core$Native_Array.toJSArray,
		encodeList: _elm_lang$core$Native_List.toArray,
		encodeObject: encodeObject,

		equality: equality
	};

	}();

	var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
	var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
	var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
	var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
	var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
	var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
	var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

	var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
	var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
	var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
	var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
	var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
	var _elm_lang$core$Json_Decode$lazy = function (thunk) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			thunk,
			_elm_lang$core$Json_Decode$succeed(
				{ctor: '_Tuple0'}));
	};
	var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
	var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
	var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
	var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
	var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
	var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
	var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
	var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
	var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
	var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
	var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
	var _elm_lang$core$Json_Decode$maybe = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
	};
	var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
	var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
	var _elm_lang$core$Json_Decode$at = F2(
		function (fields, decoder) {
			return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
		});
	var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
	var _elm_lang$core$Json_Decode$dict = function (decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Dict$fromList,
			_elm_lang$core$Json_Decode$keyValuePairs(decoder));
	};
	var _elm_lang$core$Json_Decode$array = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
	};
	var _elm_lang$core$Json_Decode$list = function (decoder) {
		return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
	};
	var _elm_lang$core$Json_Decode$nullable = function (decoder) {
		return _elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
					_1: {ctor: '[]'}
				}
			});
	};
	var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
	var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
	var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
	var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
	var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = _elm_lang$core$Json_Decode$map2(
		F2(
			function (x, y) {
				return y(x);
			}));
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
		return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
			_elm_lang$core$Json_Decode$succeed(_p0));
	};
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
		function (pathDecoder, valDecoder, fallback) {
			var nullOr = function (decoder) {
				return _elm_lang$core$Json_Decode$oneOf(
					{
						ctor: '::',
						_0: decoder,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Json_Decode$null(fallback),
							_1: {ctor: '[]'}
						}
					});
			};
			var handleResult = function (input) {
				var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
				if (_p1.ctor === 'Ok') {
					var _p2 = A2(
						_elm_lang$core$Json_Decode$decodeValue,
						nullOr(valDecoder),
						_p1._0);
					if (_p2.ctor === 'Ok') {
						return _elm_lang$core$Json_Decode$succeed(_p2._0);
					} else {
						return _elm_lang$core$Json_Decode$fail(_p2._0);
					}
				} else {
					return _elm_lang$core$Json_Decode$succeed(fallback);
				}
			};
			return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
		function (path, valDecoder, fallback, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
					A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
					valDecoder,
					fallback),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
		function (key, valDecoder, fallback, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
					A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
					valDecoder,
					fallback),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
		function (path, valDecoder, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
				decoder);
		});
	var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
		function (key, valDecoder, decoder) {
			return A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
				decoder);
		});

	var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
	var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
	var _elm_lang$core$Task$spawnCmd = F2(
		function (router, _p0) {
			var _p1 = _p0;
			return _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Task$andThen,
					_elm_lang$core$Platform$sendToApp(router),
					_p1._0));
		});
	var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
	var _elm_lang$core$Task$mapError = F2(
		function (convert, task) {
			return A2(
				_elm_lang$core$Task$onError,
				function (_p2) {
					return _elm_lang$core$Task$fail(
						convert(_p2));
				},
				task);
		});
	var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
	var _elm_lang$core$Task$map = F2(
		function (func, taskA) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return _elm_lang$core$Task$succeed(
						func(a));
				},
				taskA);
		});
	var _elm_lang$core$Task$map2 = F3(
		function (func, taskA, taskB) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return _elm_lang$core$Task$succeed(
								A2(func, a, b));
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map3 = F4(
		function (func, taskA, taskB, taskC) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return _elm_lang$core$Task$succeed(
										A3(func, a, b, c));
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map4 = F5(
		function (func, taskA, taskB, taskC, taskD) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return _elm_lang$core$Task$succeed(
												A4(func, a, b, c, d));
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$map5 = F6(
		function (func, taskA, taskB, taskC, taskD, taskE) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (a) {
					return A2(
						_elm_lang$core$Task$andThen,
						function (b) {
							return A2(
								_elm_lang$core$Task$andThen,
								function (c) {
									return A2(
										_elm_lang$core$Task$andThen,
										function (d) {
											return A2(
												_elm_lang$core$Task$andThen,
												function (e) {
													return _elm_lang$core$Task$succeed(
														A5(func, a, b, c, d, e));
												},
												taskE);
										},
										taskD);
								},
								taskC);
						},
						taskB);
				},
				taskA);
		});
	var _elm_lang$core$Task$sequence = function (tasks) {
		var _p3 = tasks;
		if (_p3.ctor === '[]') {
			return _elm_lang$core$Task$succeed(
				{ctor: '[]'});
		} else {
			return A3(
				_elm_lang$core$Task$map2,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p3._0,
				_elm_lang$core$Task$sequence(_p3._1));
		}
	};
	var _elm_lang$core$Task$onEffects = F3(
		function (router, commands, state) {
			return A2(
				_elm_lang$core$Task$map,
				function (_p4) {
					return {ctor: '_Tuple0'};
				},
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Task$spawnCmd(router),
						commands)));
		});
	var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
		{ctor: '_Tuple0'});
	var _elm_lang$core$Task$onSelfMsg = F3(
		function (_p7, _p6, _p5) {
			return _elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'});
		});
	var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
	var _elm_lang$core$Task$Perform = function (a) {
		return {ctor: 'Perform', _0: a};
	};
	var _elm_lang$core$Task$perform = F2(
		function (toMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(_elm_lang$core$Task$map, toMessage, task)));
		});
	var _elm_lang$core$Task$attempt = F2(
		function (resultToMessage, task) {
			return _elm_lang$core$Task$command(
				_elm_lang$core$Task$Perform(
					A2(
						_elm_lang$core$Task$onError,
						function (_p8) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Err(_p8)));
						},
						A2(
							_elm_lang$core$Task$andThen,
							function (_p9) {
								return _elm_lang$core$Task$succeed(
									resultToMessage(
										_elm_lang$core$Result$Ok(_p9)));
							},
							task))));
		});
	var _elm_lang$core$Task$cmdMap = F2(
		function (tagger, _p10) {
			var _p11 = _p10;
			return _elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, tagger, _p11._0));
		});
	_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

	//import Native.Scheduler //

	var _elm_lang$core$Native_Time = function() {

	var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
	});

	function setInterval_(interval, task)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var id = setInterval(function() {
				_elm_lang$core$Native_Scheduler.rawSpawn(task);
			}, interval);

			return function() { clearInterval(id); };
		});
	}

	return {
		now: now,
		setInterval_: F2(setInterval_)
	};

	}();
	var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
	var _elm_lang$core$Time$spawnHelp = F3(
		function (router, intervals, processes) {
			var _p0 = intervals;
			if (_p0.ctor === '[]') {
				return _elm_lang$core$Task$succeed(processes);
			} else {
				var _p1 = _p0._0;
				var spawnRest = function (id) {
					return A3(
						_elm_lang$core$Time$spawnHelp,
						router,
						_p0._1,
						A3(_elm_lang$core$Dict$insert, _p1, id, processes));
				};
				var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
					A2(
						_elm_lang$core$Time$setInterval,
						_p1,
						A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
				return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
			}
		});
	var _elm_lang$core$Time$addMySub = F2(
		function (_p2, state) {
			var _p3 = _p2;
			var _p6 = _p3._1;
			var _p5 = _p3._0;
			var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
			if (_p4.ctor === 'Nothing') {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{
						ctor: '::',
						_0: _p6,
						_1: {ctor: '[]'}
					},
					state);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					_p5,
					{ctor: '::', _0: _p6, _1: _p4._0},
					state);
			}
		});
	var _elm_lang$core$Time$inMilliseconds = function (t) {
		return t;
	};
	var _elm_lang$core$Time$millisecond = 1;
	var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
	var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
	var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
	var _elm_lang$core$Time$inHours = function (t) {
		return t / _elm_lang$core$Time$hour;
	};
	var _elm_lang$core$Time$inMinutes = function (t) {
		return t / _elm_lang$core$Time$minute;
	};
	var _elm_lang$core$Time$inSeconds = function (t) {
		return t / _elm_lang$core$Time$second;
	};
	var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
	var _elm_lang$core$Time$onSelfMsg = F3(
		function (router, interval, state) {
			var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
			if (_p7.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var tellTaggers = function (time) {
					return _elm_lang$core$Task$sequence(
						A2(
							_elm_lang$core$List$map,
							function (tagger) {
								return A2(
									_elm_lang$core$Platform$sendToApp,
									router,
									tagger(time));
							},
							_p7._0));
				};
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p8) {
						return _elm_lang$core$Task$succeed(state);
					},
					A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
			}
		});
	var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
	var _elm_lang$core$Time$State = F2(
		function (a, b) {
			return {taggers: a, processes: b};
		});
	var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
		A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _elm_lang$core$Time$onEffects = F3(
		function (router, subs, _p9) {
			var _p10 = _p9;
			var rightStep = F3(
				function (_p12, id, _p11) {
					var _p13 = _p11;
					return {
						ctor: '_Tuple3',
						_0: _p13._0,
						_1: _p13._1,
						_2: A2(
							_elm_lang$core$Task$andThen,
							function (_p14) {
								return _p13._2;
							},
							_elm_lang$core$Native_Scheduler.kill(id))
					};
				});
			var bothStep = F4(
				function (interval, taggers, id, _p15) {
					var _p16 = _p15;
					return {
						ctor: '_Tuple3',
						_0: _p16._0,
						_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
						_2: _p16._2
					};
				});
			var leftStep = F3(
				function (interval, taggers, _p17) {
					var _p18 = _p17;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: interval, _1: _p18._0},
						_1: _p18._1,
						_2: _p18._2
					};
				});
			var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
			var _p19 = A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				newTaggers,
				_p10.processes,
				{
					ctor: '_Tuple3',
					_0: {ctor: '[]'},
					_1: _elm_lang$core$Dict$empty,
					_2: _elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'})
				});
			var spawnList = _p19._0;
			var existingDict = _p19._1;
			var killTask = _p19._2;
			return A2(
				_elm_lang$core$Task$andThen,
				function (newProcesses) {
					return _elm_lang$core$Task$succeed(
						A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
				},
				A2(
					_elm_lang$core$Task$andThen,
					function (_p20) {
						return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
					},
					killTask));
		});
	var _elm_lang$core$Time$Every = F2(
		function (a, b) {
			return {ctor: 'Every', _0: a, _1: b};
		});
	var _elm_lang$core$Time$every = F2(
		function (interval, tagger) {
			return _elm_lang$core$Time$subscription(
				A2(_elm_lang$core$Time$Every, interval, tagger));
		});
	var _elm_lang$core$Time$subMap = F2(
		function (f, _p21) {
			var _p22 = _p21;
			return A2(
				_elm_lang$core$Time$Every,
				_p22._0,
				function (_p23) {
					return f(
						_p22._1(_p23));
				});
		});
	_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

	var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
	var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
	var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

	var _elm_lang$dom$Native_Dom = function() {

	var fakeNode = {
		addEventListener: function() {},
		removeEventListener: function() {}
	};

	var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
	var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

	function on(node)
	{
		return function(eventName, decoder, toTask)
		{
			return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

				function performTask(event)
				{
					var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
					if (result.ctor === 'Ok')
					{
						_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
					}
				}

				node.addEventListener(eventName, performTask);

				return function()
				{
					node.removeEventListener(eventName, performTask);
				};
			});
		};
	}

	var rAF = typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { callback(); };

	function withNode(id, doStuff)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			rAF(function()
			{
				var node = document.getElementById(id);
				if (node === null)
				{
					callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
					return;
				}
				callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
			});
		});
	}


	// FOCUS

	function focus(id)
	{
		return withNode(id, function(node) {
			node.focus();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function blur(id)
	{
		return withNode(id, function(node) {
			node.blur();
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SCROLLING

	function getScrollTop(id)
	{
		return withNode(id, function(node) {
			return node.scrollTop;
		});
	}

	function setScrollTop(id, desiredScrollTop)
	{
		return withNode(id, function(node) {
			node.scrollTop = desiredScrollTop;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toBottom(id)
	{
		return withNode(id, function(node) {
			node.scrollTop = node.scrollHeight;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function getScrollLeft(id)
	{
		return withNode(id, function(node) {
			return node.scrollLeft;
		});
	}

	function setScrollLeft(id, desiredScrollLeft)
	{
		return withNode(id, function(node) {
			node.scrollLeft = desiredScrollLeft;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}

	function toRight(id)
	{
		return withNode(id, function(node) {
			node.scrollLeft = node.scrollWidth;
			return _elm_lang$core$Native_Utils.Tuple0;
		});
	}


	// SIZE

	function width(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollWidth;
				case 'VisibleContent':
					return node.clientWidth;
				case 'VisibleContentWithBorders':
					return node.offsetWidth;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.right - rect.left;
			}
		});
	}

	function height(options, id)
	{
		return withNode(id, function(node) {
			switch (options.ctor)
			{
				case 'Content':
					return node.scrollHeight;
				case 'VisibleContent':
					return node.clientHeight;
				case 'VisibleContentWithBorders':
					return node.offsetHeight;
				case 'VisibleContentWithBordersAndMargins':
					var rect = node.getBoundingClientRect();
					return rect.bottom - rect.top;
			}
		});
	}

	return {
		onDocument: F3(onDocument),
		onWindow: F3(onWindow),

		focus: focus,
		blur: blur,

		getScrollTop: getScrollTop,
		setScrollTop: F2(setScrollTop),
		getScrollLeft: getScrollLeft,
		setScrollLeft: F2(setScrollLeft),
		toBottom: toBottom,
		toRight: toRight,

		height: F2(height),
		width: F2(width)
	};

	}();

	var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
	var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

	var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
	var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

	var _elm_lang$virtual_dom$Native_VirtualDom = function() {

	var STYLE_KEY = 'STYLE';
	var EVENT_KEY = 'EVENT';
	var ATTR_KEY = 'ATTR';
	var ATTR_NS_KEY = 'ATTR_NS';

	var localDoc = typeof document !== 'undefined' ? document : {};


	////////////  VIRTUAL DOM NODES  ////////////


	function text(string)
	{
		return {
			type: 'text',
			text: string
		};
	}


	function node(tag)
	{
		return F2(function(factList, kidList) {
			return nodeHelp(tag, factList, kidList);
		});
	}


	function nodeHelp(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function keyedNode(tag, factList, kidList)
	{
		var organized = organizeFacts(factList);
		var namespace = organized.namespace;
		var facts = organized.facts;

		var children = [];
		var descendantsCount = 0;
		while (kidList.ctor !== '[]')
		{
			var kid = kidList._0;
			descendantsCount += (kid._1.descendantsCount || 0);
			children.push(kid);
			kidList = kidList._1;
		}
		descendantsCount += children.length;

		return {
			type: 'keyed-node',
			tag: tag,
			facts: facts,
			children: children,
			namespace: namespace,
			descendantsCount: descendantsCount
		};
	}


	function custom(factList, model, impl)
	{
		var facts = organizeFacts(factList).facts;

		return {
			type: 'custom',
			facts: facts,
			model: model,
			impl: impl
		};
	}


	function map(tagger, node)
	{
		return {
			type: 'tagger',
			tagger: tagger,
			node: node,
			descendantsCount: 1 + (node.descendantsCount || 0)
		};
	}


	function thunk(func, args, thunk)
	{
		return {
			type: 'thunk',
			func: func,
			args: args,
			thunk: thunk,
			node: undefined
		};
	}

	function lazy(fn, a)
	{
		return thunk(fn, [a], function() {
			return fn(a);
		});
	}

	function lazy2(fn, a, b)
	{
		return thunk(fn, [a,b], function() {
			return A2(fn, a, b);
		});
	}

	function lazy3(fn, a, b, c)
	{
		return thunk(fn, [a,b,c], function() {
			return A3(fn, a, b, c);
		});
	}



	// FACTS


	function organizeFacts(factList)
	{
		var namespace, facts = {};

		while (factList.ctor !== '[]')
		{
			var entry = factList._0;
			var key = entry.key;

			if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
			{
				var subFacts = facts[key] || {};
				subFacts[entry.realKey] = entry.value;
				facts[key] = subFacts;
			}
			else if (key === STYLE_KEY)
			{
				var styles = facts[key] || {};
				var styleList = entry.value;
				while (styleList.ctor !== '[]')
				{
					var style = styleList._0;
					styles[style._0] = style._1;
					styleList = styleList._1;
				}
				facts[key] = styles;
			}
			else if (key === 'namespace')
			{
				namespace = entry.value;
			}
			else if (key === 'className')
			{
				var classes = facts[key];
				facts[key] = typeof classes === 'undefined'
					? entry.value
					: classes + ' ' + entry.value;
			}
	 		else
			{
				facts[key] = entry.value;
			}
			factList = factList._1;
		}

		return {
			facts: facts,
			namespace: namespace
		};
	}



	////////////  PROPERTIES AND ATTRIBUTES  ////////////


	function style(value)
	{
		return {
			key: STYLE_KEY,
			value: value
		};
	}


	function property(key, value)
	{
		return {
			key: key,
			value: value
		};
	}


	function attribute(key, value)
	{
		return {
			key: ATTR_KEY,
			realKey: key,
			value: value
		};
	}


	function attributeNS(namespace, key, value)
	{
		return {
			key: ATTR_NS_KEY,
			realKey: key,
			value: {
				value: value,
				namespace: namespace
			}
		};
	}


	function on(name, options, decoder)
	{
		return {
			key: EVENT_KEY,
			realKey: name,
			value: {
				options: options,
				decoder: decoder
			}
		};
	}


	function equalEvents(a, b)
	{
		if (a.options !== b.options)
		{
			if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
			{
				return false;
			}
		}
		return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
	}


	function mapProperty(func, property)
	{
		if (property.key !== EVENT_KEY)
		{
			return property;
		}
		return on(
			property.realKey,
			property.value.options,
			A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
		);
	}


	////////////  RENDER  ////////////


	function render(vNode, eventNode)
	{
		switch (vNode.type)
		{
			case 'thunk':
				if (!vNode.node)
				{
					vNode.node = vNode.thunk();
				}
				return render(vNode.node, eventNode);

			case 'tagger':
				var subNode = vNode.node;
				var tagger = vNode.tagger;

				while (subNode.type === 'tagger')
				{
					typeof tagger !== 'object'
						? tagger = [tagger, subNode.tagger]
						: tagger.push(subNode.tagger);

					subNode = subNode.node;
				}

				var subEventRoot = { tagger: tagger, parent: eventNode };
				var domNode = render(subNode, subEventRoot);
				domNode.elm_event_node_ref = subEventRoot;
				return domNode;

			case 'text':
				return localDoc.createTextNode(vNode.text);

			case 'node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i], eventNode));
				}

				return domNode;

			case 'keyed-node':
				var domNode = vNode.namespace
					? localDoc.createElementNS(vNode.namespace, vNode.tag)
					: localDoc.createElement(vNode.tag);

				applyFacts(domNode, eventNode, vNode.facts);

				var children = vNode.children;

				for (var i = 0; i < children.length; i++)
				{
					domNode.appendChild(render(children[i]._1, eventNode));
				}

				return domNode;

			case 'custom':
				var domNode = vNode.impl.render(vNode.model);
				applyFacts(domNode, eventNode, vNode.facts);
				return domNode;
		}
	}



	////////////  APPLY FACTS  ////////////


	function applyFacts(domNode, eventNode, facts)
	{
		for (var key in facts)
		{
			var value = facts[key];

			switch (key)
			{
				case STYLE_KEY:
					applyStyles(domNode, value);
					break;

				case EVENT_KEY:
					applyEvents(domNode, eventNode, value);
					break;

				case ATTR_KEY:
					applyAttrs(domNode, value);
					break;

				case ATTR_NS_KEY:
					applyAttrsNS(domNode, value);
					break;

				case 'value':
					if (domNode[key] !== value)
					{
						domNode[key] = value;
					}
					break;

				default:
					domNode[key] = value;
					break;
			}
		}
	}

	function applyStyles(domNode, styles)
	{
		var domNodeStyle = domNode.style;

		for (var key in styles)
		{
			domNodeStyle[key] = styles[key];
		}
	}

	function applyEvents(domNode, eventNode, events)
	{
		var allHandlers = domNode.elm_handlers || {};

		for (var key in events)
		{
			var handler = allHandlers[key];
			var value = events[key];

			if (typeof value === 'undefined')
			{
				domNode.removeEventListener(key, handler);
				allHandlers[key] = undefined;
			}
			else if (typeof handler === 'undefined')
			{
				var handler = makeEventHandler(eventNode, value);
				domNode.addEventListener(key, handler);
				allHandlers[key] = handler;
			}
			else
			{
				handler.info = value;
			}
		}

		domNode.elm_handlers = allHandlers;
	}

	function makeEventHandler(eventNode, info)
	{
		function eventHandler(event)
		{
			var info = eventHandler.info;

			var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

			if (value.ctor === 'Ok')
			{
				var options = info.options;
				if (options.stopPropagation)
				{
					event.stopPropagation();
				}
				if (options.preventDefault)
				{
					event.preventDefault();
				}

				var message = value._0;

				var currentEventNode = eventNode;
				while (currentEventNode)
				{
					var tagger = currentEventNode.tagger;
					if (typeof tagger === 'function')
					{
						message = tagger(message);
					}
					else
					{
						for (var i = tagger.length; i--; )
						{
							message = tagger[i](message);
						}
					}
					currentEventNode = currentEventNode.parent;
				}
			}
		};

		eventHandler.info = info;

		return eventHandler;
	}

	function applyAttrs(domNode, attrs)
	{
		for (var key in attrs)
		{
			var value = attrs[key];
			if (typeof value === 'undefined')
			{
				domNode.removeAttribute(key);
			}
			else
			{
				domNode.setAttribute(key, value);
			}
		}
	}

	function applyAttrsNS(domNode, nsAttrs)
	{
		for (var key in nsAttrs)
		{
			var pair = nsAttrs[key];
			var namespace = pair.namespace;
			var value = pair.value;

			if (typeof value === 'undefined')
			{
				domNode.removeAttributeNS(namespace, key);
			}
			else
			{
				domNode.setAttributeNS(namespace, key, value);
			}
		}
	}



	////////////  DIFF  ////////////


	function diff(a, b)
	{
		var patches = [];
		diffHelp(a, b, patches, 0);
		return patches;
	}


	function makePatch(type, index, data)
	{
		return {
			index: index,
			type: type,
			data: data,
			domNode: undefined,
			eventNode: undefined
		};
	}


	function diffHelp(a, b, patches, index)
	{
		if (a === b)
		{
			return;
		}

		var aType = a.type;
		var bType = b.type;

		// Bail if you run into different types of nodes. Implies that the
		// structure has changed significantly and it's not worth a diff.
		if (aType !== bType)
		{
			patches.push(makePatch('p-redraw', index, b));
			return;
		}

		// Now we know that both nodes are the same type.
		switch (bType)
		{
			case 'thunk':
				var aArgs = a.args;
				var bArgs = b.args;
				var i = aArgs.length;
				var same = a.func === b.func && i === bArgs.length;
				while (same && i--)
				{
					same = aArgs[i] === bArgs[i];
				}
				if (same)
				{
					b.node = a.node;
					return;
				}
				b.node = b.thunk();
				var subPatches = [];
				diffHelp(a.node, b.node, subPatches, 0);
				if (subPatches.length > 0)
				{
					patches.push(makePatch('p-thunk', index, subPatches));
				}
				return;

			case 'tagger':
				// gather nested taggers
				var aTaggers = a.tagger;
				var bTaggers = b.tagger;
				var nesting = false;

				var aSubNode = a.node;
				while (aSubNode.type === 'tagger')
				{
					nesting = true;

					typeof aTaggers !== 'object'
						? aTaggers = [aTaggers, aSubNode.tagger]
						: aTaggers.push(aSubNode.tagger);

					aSubNode = aSubNode.node;
				}

				var bSubNode = b.node;
				while (bSubNode.type === 'tagger')
				{
					nesting = true;

					typeof bTaggers !== 'object'
						? bTaggers = [bTaggers, bSubNode.tagger]
						: bTaggers.push(bSubNode.tagger);

					bSubNode = bSubNode.node;
				}

				// Just bail if different numbers of taggers. This implies the
				// structure of the virtual DOM has changed.
				if (nesting && aTaggers.length !== bTaggers.length)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				// check if taggers are "the same"
				if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
				{
					patches.push(makePatch('p-tagger', index, bTaggers));
				}

				// diff everything below the taggers
				diffHelp(aSubNode, bSubNode, patches, index + 1);
				return;

			case 'text':
				if (a.text !== b.text)
				{
					patches.push(makePatch('p-text', index, b.text));
					return;
				}

				return;

			case 'node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffChildren(a, b, patches, index);
				return;

			case 'keyed-node':
				// Bail if obvious indicators have changed. Implies more serious
				// structural changes such that it's not worth it to diff.
				if (a.tag !== b.tag || a.namespace !== b.namespace)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);

				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				diffKeyedChildren(a, b, patches, index);
				return;

			case 'custom':
				if (a.impl !== b.impl)
				{
					patches.push(makePatch('p-redraw', index, b));
					return;
				}

				var factsDiff = diffFacts(a.facts, b.facts);
				if (typeof factsDiff !== 'undefined')
				{
					patches.push(makePatch('p-facts', index, factsDiff));
				}

				var patch = b.impl.diff(a,b);
				if (patch)
				{
					patches.push(makePatch('p-custom', index, patch));
					return;
				}

				return;
		}
	}


	// assumes the incoming arrays are the same length
	function pairwiseRefEqual(as, bs)
	{
		for (var i = 0; i < as.length; i++)
		{
			if (as[i] !== bs[i])
			{
				return false;
			}
		}

		return true;
	}


	// TODO Instead of creating a new diff object, it's possible to just test if
	// there *is* a diff. During the actual patch, do the diff again and make the
	// modifications directly. This way, there's no new allocations. Worth it?
	function diffFacts(a, b, category)
	{
		var diff;

		// look for changes and removals
		for (var aKey in a)
		{
			if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
			{
				var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
				if (subDiff)
				{
					diff = diff || {};
					diff[aKey] = subDiff;
				}
				continue;
			}

			// remove if not in the new facts
			if (!(aKey in b))
			{
				diff = diff || {};
				diff[aKey] =
					(typeof category === 'undefined')
						? (typeof a[aKey] === 'string' ? '' : null)
						:
					(category === STYLE_KEY)
						? ''
						:
					(category === EVENT_KEY || category === ATTR_KEY)
						? undefined
						:
					{ namespace: a[aKey].namespace, value: undefined };

				continue;
			}

			var aValue = a[aKey];
			var bValue = b[aKey];

			// reference equal, so don't worry about it
			if (aValue === bValue && aKey !== 'value'
				|| category === EVENT_KEY && equalEvents(aValue, bValue))
			{
				continue;
			}

			diff = diff || {};
			diff[aKey] = bValue;
		}

		// add new stuff
		for (var bKey in b)
		{
			if (!(bKey in a))
			{
				diff = diff || {};
				diff[bKey] = b[bKey];
			}
		}

		return diff;
	}


	function diffChildren(aParent, bParent, patches, rootIndex)
	{
		var aChildren = aParent.children;
		var bChildren = bParent.children;

		var aLen = aChildren.length;
		var bLen = bChildren.length;

		// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

		if (aLen > bLen)
		{
			patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
		}
		else if (aLen < bLen)
		{
			patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
		}

		// PAIRWISE DIFF EVERYTHING ELSE

		var index = rootIndex;
		var minLen = aLen < bLen ? aLen : bLen;
		for (var i = 0; i < minLen; i++)
		{
			index++;
			var aChild = aChildren[i];
			diffHelp(aChild, bChildren[i], patches, index);
			index += aChild.descendantsCount || 0;
		}
	}



	////////////  KEYED DIFF  ////////////


	function diffKeyedChildren(aParent, bParent, patches, rootIndex)
	{
		var localPatches = [];

		var changes = {}; // Dict String Entry
		var inserts = []; // Array { index : Int, entry : Entry }
		// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

		var aChildren = aParent.children;
		var bChildren = bParent.children;
		var aLen = aChildren.length;
		var bLen = bChildren.length;
		var aIndex = 0;
		var bIndex = 0;

		var index = rootIndex;

		while (aIndex < aLen && bIndex < bLen)
		{
			var a = aChildren[aIndex];
			var b = bChildren[bIndex];

			var aKey = a._0;
			var bKey = b._0;
			var aNode = a._1;
			var bNode = b._1;

			// check if keys match

			if (aKey === bKey)
			{
				index++;
				diffHelp(aNode, bNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex++;
				bIndex++;
				continue;
			}

			// look ahead 1 to detect insertions and removals.

			var aLookAhead = aIndex + 1 < aLen;
			var bLookAhead = bIndex + 1 < bLen;

			if (aLookAhead)
			{
				var aNext = aChildren[aIndex + 1];
				var aNextKey = aNext._0;
				var aNextNode = aNext._1;
				var oldMatch = bKey === aNextKey;
			}

			if (bLookAhead)
			{
				var bNext = bChildren[bIndex + 1];
				var bNextKey = bNext._0;
				var bNextNode = bNext._1;
				var newMatch = aKey === bNextKey;
			}


			// swap a and b
			if (aLookAhead && bLookAhead && newMatch && oldMatch)
			{
				index++;
				diffHelp(aNode, bNextNode, localPatches, index);
				insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				removeNode(changes, localPatches, aKey, aNextNode, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			// insert b
			if (bLookAhead && newMatch)
			{
				index++;
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				diffHelp(aNode, bNextNode, localPatches, index);
				index += aNode.descendantsCount || 0;

				aIndex += 1;
				bIndex += 2;
				continue;
			}

			// remove a
			if (aLookAhead && oldMatch)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 1;
				continue;
			}

			// remove a, insert b
			if (aLookAhead && bLookAhead && aNextKey === bNextKey)
			{
				index++;
				removeNode(changes, localPatches, aKey, aNode, index);
				insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
				index += aNode.descendantsCount || 0;

				index++;
				diffHelp(aNextNode, bNextNode, localPatches, index);
				index += aNextNode.descendantsCount || 0;

				aIndex += 2;
				bIndex += 2;
				continue;
			}

			break;
		}

		// eat up any remaining nodes with removeNode and insertNode

		while (aIndex < aLen)
		{
			index++;
			var a = aChildren[aIndex];
			var aNode = a._1;
			removeNode(changes, localPatches, a._0, aNode, index);
			index += aNode.descendantsCount || 0;
			aIndex++;
		}

		var endInserts;
		while (bIndex < bLen)
		{
			endInserts = endInserts || [];
			var b = bChildren[bIndex];
			insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
			bIndex++;
		}

		if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
		{
			patches.push(makePatch('p-reorder', rootIndex, {
				patches: localPatches,
				inserts: inserts,
				endInserts: endInserts
			}));
		}
	}



	////////////  CHANGES FROM KEYED DIFF  ////////////


	var POSTFIX = '_elmW6BL';


	function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			entry = {
				tag: 'insert',
				vnode: vnode,
				index: bIndex,
				data: undefined
			};

			inserts.push({ index: bIndex, entry: entry });
			changes[key] = entry;

			return;
		}

		// this key was removed earlier, a match!
		if (entry.tag === 'remove')
		{
			inserts.push({ index: bIndex, entry: entry });

			entry.tag = 'move';
			var subPatches = [];
			diffHelp(entry.vnode, vnode, subPatches, entry.index);
			entry.index = bIndex;
			entry.data.data = {
				patches: subPatches,
				entry: entry
			};

			return;
		}

		// this key has already been inserted or moved, a duplicate!
		insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
	}


	function removeNode(changes, localPatches, key, vnode, index)
	{
		var entry = changes[key];

		// never seen this key before
		if (typeof entry === 'undefined')
		{
			var patch = makePatch('p-remove', index, undefined);
			localPatches.push(patch);

			changes[key] = {
				tag: 'remove',
				vnode: vnode,
				index: index,
				data: patch
			};

			return;
		}

		// this key was inserted earlier, a match!
		if (entry.tag === 'insert')
		{
			entry.tag = 'move';
			var subPatches = [];
			diffHelp(vnode, entry.vnode, subPatches, index);

			var patch = makePatch('p-remove', index, {
				patches: subPatches,
				entry: entry
			});
			localPatches.push(patch);

			return;
		}

		// this key has already been removed or moved, a duplicate!
		removeNode(changes, localPatches, key + POSTFIX, vnode, index);
	}



	////////////  ADD DOM NODES  ////////////
	//
	// Each DOM node has an "index" assigned in order of traversal. It is important
	// to minimize our crawl over the actual DOM, so these indexes (along with the
	// descendantsCount of virtual nodes) let us skip touching entire subtrees of
	// the DOM if we know there are no patches there.


	function addDomNodes(domNode, vNode, patches, eventNode)
	{
		addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
	}


	// assumes `patches` is non-empty and indexes increase monotonically.
	function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
	{
		var patch = patches[i];
		var index = patch.index;

		while (index === low)
		{
			var patchType = patch.type;

			if (patchType === 'p-thunk')
			{
				addDomNodes(domNode, vNode.node, patch.data, eventNode);
			}
			else if (patchType === 'p-reorder')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var subPatches = patch.data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
			else if (patchType === 'p-remove')
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;

				var data = patch.data;
				if (typeof data !== 'undefined')
				{
					data.entry.data = domNode;
					var subPatches = data.patches;
					if (subPatches.length > 0)
					{
						addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
					}
				}
			}
			else
			{
				patch.domNode = domNode;
				patch.eventNode = eventNode;
			}

			i++;

			if (!(patch = patches[i]) || (index = patch.index) > high)
			{
				return i;
			}
		}

		switch (vNode.type)
		{
			case 'tagger':
				var subNode = vNode.node;

				while (subNode.type === "tagger")
				{
					subNode = subNode.node;
				}

				return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

			case 'node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j];
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'keyed-node':
				var vChildren = vNode.children;
				var childNodes = domNode.childNodes;
				for (var j = 0; j < vChildren.length; j++)
				{
					low++;
					var vChild = vChildren[j]._1;
					var nextLow = low + (vChild.descendantsCount || 0);
					if (low <= index && index <= nextLow)
					{
						i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
						if (!(patch = patches[i]) || (index = patch.index) > high)
						{
							return i;
						}
					}
					low = nextLow;
				}
				return i;

			case 'text':
			case 'thunk':
				throw new Error('should never traverse `text` or `thunk` nodes like this');
		}
	}



	////////////  APPLY PATCHES  ////////////


	function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
	{
		if (patches.length === 0)
		{
			return rootDomNode;
		}

		addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
		return applyPatchesHelp(rootDomNode, patches);
	}

	function applyPatchesHelp(rootDomNode, patches)
	{
		for (var i = 0; i < patches.length; i++)
		{
			var patch = patches[i];
			var localDomNode = patch.domNode
			var newNode = applyPatch(localDomNode, patch);
			if (localDomNode === rootDomNode)
			{
				rootDomNode = newNode;
			}
		}
		return rootDomNode;
	}

	function applyPatch(domNode, patch)
	{
		switch (patch.type)
		{
			case 'p-redraw':
				return applyPatchRedraw(domNode, patch.data, patch.eventNode);

			case 'p-facts':
				applyFacts(domNode, patch.eventNode, patch.data);
				return domNode;

			case 'p-text':
				domNode.replaceData(0, domNode.length, patch.data);
				return domNode;

			case 'p-thunk':
				return applyPatchesHelp(domNode, patch.data);

			case 'p-tagger':
				if (typeof domNode.elm_event_node_ref !== 'undefined')
				{
					domNode.elm_event_node_ref.tagger = patch.data;
				}
				else
				{
					domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
				}
				return domNode;

			case 'p-remove-last':
				var i = patch.data;
				while (i--)
				{
					domNode.removeChild(domNode.lastChild);
				}
				return domNode;

			case 'p-append':
				var newNodes = patch.data;
				for (var i = 0; i < newNodes.length; i++)
				{
					domNode.appendChild(render(newNodes[i], patch.eventNode));
				}
				return domNode;

			case 'p-remove':
				var data = patch.data;
				if (typeof data === 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
					return domNode;
				}
				var entry = data.entry;
				if (typeof entry.index !== 'undefined')
				{
					domNode.parentNode.removeChild(domNode);
				}
				entry.data = applyPatchesHelp(domNode, data.patches);
				return domNode;

			case 'p-reorder':
				return applyPatchReorder(domNode, patch);

			case 'p-custom':
				var impl = patch.data;
				return impl.applyPatch(domNode, impl.data);

			default:
				throw new Error('Ran into an unknown patch!');
		}
	}


	function applyPatchRedraw(domNode, vNode, eventNode)
	{
		var parentNode = domNode.parentNode;
		var newNode = render(vNode, eventNode);

		if (typeof newNode.elm_event_node_ref === 'undefined')
		{
			newNode.elm_event_node_ref = domNode.elm_event_node_ref;
		}

		if (parentNode && newNode !== domNode)
		{
			parentNode.replaceChild(newNode, domNode);
		}
		return newNode;
	}


	function applyPatchReorder(domNode, patch)
	{
		var data = patch.data;

		// remove end inserts
		var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

		// removals
		domNode = applyPatchesHelp(domNode, data.patches);

		// inserts
		var inserts = data.inserts;
		for (var i = 0; i < inserts.length; i++)
		{
			var insert = inserts[i];
			var entry = insert.entry;
			var node = entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode);
			domNode.insertBefore(node, domNode.childNodes[insert.index]);
		}

		// add end inserts
		if (typeof frag !== 'undefined')
		{
			domNode.appendChild(frag);
		}

		return domNode;
	}


	function applyPatchReorderEndInsertsHelp(endInserts, patch)
	{
		if (typeof endInserts === 'undefined')
		{
			return;
		}

		var frag = localDoc.createDocumentFragment();
		for (var i = 0; i < endInserts.length; i++)
		{
			var insert = endInserts[i];
			var entry = insert.entry;
			frag.appendChild(entry.tag === 'move'
				? entry.data
				: render(entry.vnode, patch.eventNode)
			);
		}
		return frag;
	}


	// PROGRAMS

	var program = makeProgram(checkNoFlags);
	var programWithFlags = makeProgram(checkYesFlags);

	function makeProgram(flagChecker)
	{
		return F2(function(debugWrap, impl)
		{
			return function(flagDecoder)
			{
				return function(object, moduleName, debugMetadata)
				{
					var checker = flagChecker(flagDecoder, moduleName);
					if (typeof debugMetadata === 'undefined')
					{
						normalSetup(impl, object, moduleName, checker);
					}
					else
					{
						debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
					}
				};
			};
		});
	}

	function staticProgram(vNode)
	{
		var nothing = _elm_lang$core$Native_Utils.Tuple2(
			_elm_lang$core$Native_Utils.Tuple0,
			_elm_lang$core$Platform_Cmd$none
		);
		return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
			init: nothing,
			view: function() { return vNode; },
			update: F2(function() { return nothing; }),
			subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
		})();
	}


	// FLAG CHECKERS

	function checkNoFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flags === 'undefined')
			{
				return init;
			}

			var errorMessage =
				'The `' + moduleName + '` module does not need flags.\n'
				+ 'Initialize it with no arguments and you should be all set!';

			crash(errorMessage, domNode);
		};
	}

	function checkYesFlags(flagDecoder, moduleName)
	{
		return function(init, flags, domNode)
		{
			if (typeof flagDecoder === 'undefined')
			{
				var errorMessage =
					'Are you trying to sneak a Never value into Elm? Trickster!\n'
					+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
					+ 'Use `program` instead if you do not want flags.'

				crash(errorMessage, domNode);
			}

			var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
			if (result.ctor === 'Ok')
			{
				return init(result._0);
			}

			var errorMessage =
				'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
				+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
				+ result._0;

			crash(errorMessage, domNode);
		};
	}

	function crash(errorMessage, domNode)
	{
		if (domNode)
		{
			domNode.innerHTML =
				'<div style="padding-left:1em;">'
				+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
				+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
				+ '</div>';
		}

		throw new Error(errorMessage);
	}


	//  NORMAL SETUP

	function normalSetup(impl, object, moduleName, flagChecker)
	{
		object['embed'] = function embed(node, flags)
		{
			while (node.lastChild)
			{
				node.removeChild(node.lastChild);
			}

			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update,
				impl.subscriptions,
				normalRenderer(node, impl.view)
			);
		};

		object['fullscreen'] = function fullscreen(flags)
		{
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update,
				impl.subscriptions,
				normalRenderer(document.body, impl.view)
			);
		};
	}

	function normalRenderer(parentNode, view)
	{
		return function(tagger, initialModel)
		{
			var eventNode = { tagger: tagger, parent: undefined };
			var initialVirtualNode = view(initialModel);
			var domNode = render(initialVirtualNode, eventNode);
			parentNode.appendChild(domNode);
			return makeStepper(domNode, view, initialVirtualNode, eventNode);
		};
	}


	// STEPPER

	var rAF =
		typeof requestAnimationFrame !== 'undefined'
			? requestAnimationFrame
			: function(callback) { setTimeout(callback, 1000 / 60); };

	function makeStepper(domNode, view, initialVirtualNode, eventNode)
	{
		var state = 'NO_REQUEST';
		var currNode = initialVirtualNode;
		var nextModel;

		function updateIfNeeded()
		{
			switch (state)
			{
				case 'NO_REQUEST':
					throw new Error(
						'Unexpected draw callback.\n' +
						'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
					);

				case 'PENDING_REQUEST':
					rAF(updateIfNeeded);
					state = 'EXTRA_REQUEST';

					var nextNode = view(nextModel);
					var patches = diff(currNode, nextNode);
					domNode = applyPatches(domNode, currNode, patches, eventNode);
					currNode = nextNode;

					return;

				case 'EXTRA_REQUEST':
					state = 'NO_REQUEST';
					return;
			}
		}

		return function stepper(model)
		{
			if (state === 'NO_REQUEST')
			{
				rAF(updateIfNeeded);
			}
			state = 'PENDING_REQUEST';
			nextModel = model;
		};
	}


	// DEBUG SETUP

	function debugSetup(impl, object, moduleName, flagChecker)
	{
		object['fullscreen'] = function fullscreen(flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, document.body),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};

		object['embed'] = function fullscreen(node, flags)
		{
			var popoutRef = { doc: undefined };
			return _elm_lang$core$Native_Platform.initialize(
				flagChecker(impl.init, flags, node),
				impl.update(scrollTask(popoutRef)),
				impl.subscriptions,
				debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
			);
		};
	}

	function scrollTask(popoutRef)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var doc = popoutRef.doc;
			if (doc)
			{
				var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
				if (msgs)
				{
					msgs.scrollTop = msgs.scrollHeight;
				}
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}


	function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
	{
		return function(tagger, initialModel)
		{
			var appEventNode = { tagger: tagger, parent: undefined };
			var eventNode = { tagger: tagger, parent: undefined };

			// make normal stepper
			var appVirtualNode = view(initialModel);
			var appNode = render(appVirtualNode, appEventNode);
			parentNode.appendChild(appNode);
			var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

			// make overlay stepper
			var overVirtualNode = viewIn(initialModel)._1;
			var overNode = render(overVirtualNode, eventNode);
			parentNode.appendChild(overNode);
			var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
			var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

			// make debugger stepper
			var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

			return function stepper(model)
			{
				appStepper(model);
				overStepper(model);
				debugStepper(model);
			}
		};
	}

	function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
	{
		var curr;
		var domNode;

		return function stepper(model)
		{
			if (!model.isDebuggerOpen)
			{
				return;
			}

			if (!popoutRef.doc)
			{
				curr = view(model);
				domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
				return;
			}

			// switch to document of popout
			localDoc = popoutRef.doc;

			var next = view(model);
			var patches = diff(curr, next);
			domNode = applyPatches(domNode, curr, patches, eventNode);
			curr = next;

			// switch back to normal document
			localDoc = document;
		};
	}

	function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
	{
		var w = 900;
		var h = 360;
		var x = screen.width - w;
		var y = screen.height - h;
		var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

		// switch to window document
		localDoc = debugWindow.document;

		popoutRef.doc = localDoc;
		localDoc.title = 'Debugger - ' + moduleName;
		localDoc.body.style.margin = '0';
		localDoc.body.style.padding = '0';
		var domNode = render(virtualNode, eventNode);
		localDoc.body.appendChild(domNode);

		localDoc.addEventListener('keydown', function(event) {
			if (event.metaKey && event.which === 82)
			{
				window.location.reload();
			}
			if (event.which === 38)
			{
				eventNode.tagger({ ctor: 'Up' });
				event.preventDefault();
			}
			if (event.which === 40)
			{
				eventNode.tagger({ ctor: 'Down' });
				event.preventDefault();
			}
		});

		function close()
		{
			popoutRef.doc = undefined;
			debugWindow.close();
		}
		window.addEventListener('unload', close);
		debugWindow.addEventListener('unload', function() {
			popoutRef.doc = undefined;
			window.removeEventListener('unload', close);
			eventNode.tagger({ ctor: 'Close' });
		});

		// switch back to the normal document
		localDoc = document;

		return domNode;
	}


	// BLOCK EVENTS

	function wrapViewIn(appEventNode, overlayNode, viewIn)
	{
		var ignorer = makeIgnorer(overlayNode);
		var blocking = 'Normal';
		var overflow;

		var normalTagger = appEventNode.tagger;
		var blockTagger = function() {};

		return function(model)
		{
			var tuple = viewIn(model);
			var newBlocking = tuple._0.ctor;
			appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
			if (blocking !== newBlocking)
			{
				traverse('removeEventListener', ignorer, blocking);
				traverse('addEventListener', ignorer, newBlocking);

				if (blocking === 'Normal')
				{
					overflow = document.body.style.overflow;
					document.body.style.overflow = 'hidden';
				}

				if (newBlocking === 'Normal')
				{
					document.body.style.overflow = overflow;
				}

				blocking = newBlocking;
			}
			return tuple._1;
		}
	}

	function traverse(verbEventListener, ignorer, blocking)
	{
		switch(blocking)
		{
			case 'Normal':
				return;

			case 'Pause':
				return traverseHelp(verbEventListener, ignorer, mostEvents);

			case 'Message':
				return traverseHelp(verbEventListener, ignorer, allEvents);
		}
	}

	function traverseHelp(verbEventListener, handler, eventNames)
	{
		for (var i = 0; i < eventNames.length; i++)
		{
			document.body[verbEventListener](eventNames[i], handler, true);
		}
	}

	function makeIgnorer(overlayNode)
	{
		return function(event)
		{
			if (event.type === 'keydown' && event.metaKey && event.which === 82)
			{
				return;
			}

			var isScroll = event.type === 'scroll' || event.type === 'wheel';

			var node = event.target;
			while (node !== null)
			{
				if (node.className === 'elm-overlay-message-details' && isScroll)
				{
					return;
				}

				if (node === overlayNode && !isScroll)
				{
					return;
				}
				node = node.parentNode;
			}

			event.stopPropagation();
			event.preventDefault();
		}
	}

	var mostEvents = [
		'click', 'dblclick', 'mousemove',
		'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
		'touchstart', 'touchend', 'touchcancel', 'touchmove',
		'pointerdown', 'pointerup', 'pointerover', 'pointerout',
		'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
		'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
		'keyup', 'keydown', 'keypress',
		'input', 'change',
		'focus', 'blur'
	];

	var allEvents = mostEvents.concat('wheel', 'scroll');


	return {
		node: node,
		text: text,
		custom: custom,
		map: F2(map),

		on: F3(on),
		style: style,
		property: F2(property),
		attribute: F2(attribute),
		attributeNS: F3(attributeNS),
		mapProperty: F2(mapProperty),

		lazy: F2(lazy),
		lazy2: F3(lazy2),
		lazy3: F4(lazy3),
		keyedNode: F3(keyedNode),

		program: program,
		programWithFlags: programWithFlags,
		staticProgram: staticProgram
	};

	}();

	var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
		return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
	};
	var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
	var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
	var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
	var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
	var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
	var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
	var _elm_lang$virtual_dom$VirtualDom$on = F2(
		function (eventName, decoder) {
			return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
		});
	var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
	var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
	var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
	var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
	var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
	var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
	var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
	var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
	var _elm_lang$virtual_dom$VirtualDom$Options = F2(
		function (a, b) {
			return {stopPropagation: a, preventDefault: b};
		});
	var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
	var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

	var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
	var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
	var _elm_lang$html$Html$beginnerProgram = function (_p0) {
		var _p1 = _p0;
		return _elm_lang$html$Html$program(
			{
				init: A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					_p1.model,
					{ctor: '[]'}),
				update: F2(
					function (msg, model) {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							A2(_p1.update, msg, model),
							{ctor: '[]'});
					}),
				view: _p1.view,
				subscriptions: function (_p2) {
					return _elm_lang$core$Platform_Sub$none;
				}
			});
	};
	var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
	var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
	var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
	var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
	var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
	var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
	var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
	var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
	var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
	var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
	var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
	var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
	var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
	var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
	var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
	var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
	var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
	var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
	var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
	var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
	var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
	var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
	var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
	var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
	var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
	var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
	var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
	var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
	var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
	var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
	var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
	var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
	var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
	var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
	var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
	var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
	var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
	var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
	var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
	var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
	var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
	var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
	var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
	var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
	var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
	var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
	var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
	var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
	var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
	var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
	var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
	var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
	var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
	var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
	var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
	var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
	var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
	var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
	var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
	var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
	var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
	var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
	var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
	var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
	var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
	var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
	var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
	var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
	var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
	var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
	var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
	var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
	var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
	var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
	var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
	var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
	var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
	var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
	var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
	var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
	var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
	var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
	var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
	var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
	var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
	var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
	var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
	var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
	var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
	var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
	var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
	var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
	var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
	var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
	var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
	var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
	var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
	var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
	var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
	var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
	var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

	var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
	var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
	var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
	};
	var _elm_lang$html$Html_Attributes$draggable = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
	};
	var _elm_lang$html$Html_Attributes$itemprop = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
	};
	var _elm_lang$html$Html_Attributes$tabindex = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'tabIndex',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$charset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
	};
	var _elm_lang$html$Html_Attributes$height = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'height',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$width = function (value) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'width',
			_elm_lang$core$Basics$toString(value));
	};
	var _elm_lang$html$Html_Attributes$formaction = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
	};
	var _elm_lang$html$Html_Attributes$list = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
	};
	var _elm_lang$html$Html_Attributes$minlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'minLength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$maxlength = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'maxlength',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$size = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'size',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$form = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
	};
	var _elm_lang$html$Html_Attributes$cols = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'cols',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rows = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rows',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$challenge = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
	};
	var _elm_lang$html$Html_Attributes$media = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
	};
	var _elm_lang$html$Html_Attributes$rel = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
	};
	var _elm_lang$html$Html_Attributes$datetime = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
	};
	var _elm_lang$html$Html_Attributes$pubdate = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
	};
	var _elm_lang$html$Html_Attributes$colspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'colspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$rowspan = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$attribute,
			'rowspan',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$manifest = function (value) {
		return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
	};
	var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
	var _elm_lang$html$Html_Attributes$stringProperty = F2(
		function (name, string) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$string(string));
		});
	var _elm_lang$html$Html_Attributes$class = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
	};
	var _elm_lang$html$Html_Attributes$id = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
	};
	var _elm_lang$html$Html_Attributes$title = function (name) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
	};
	var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'accessKey',
			_elm_lang$core$String$fromChar($char));
	};
	var _elm_lang$html$Html_Attributes$dir = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
	};
	var _elm_lang$html$Html_Attributes$dropzone = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
	};
	var _elm_lang$html$Html_Attributes$lang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
	};
	var _elm_lang$html$Html_Attributes$content = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
	};
	var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
	};
	var _elm_lang$html$Html_Attributes$language = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
	};
	var _elm_lang$html$Html_Attributes$src = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
	};
	var _elm_lang$html$Html_Attributes$alt = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
	};
	var _elm_lang$html$Html_Attributes$preload = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
	};
	var _elm_lang$html$Html_Attributes$poster = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
	};
	var _elm_lang$html$Html_Attributes$kind = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
	};
	var _elm_lang$html$Html_Attributes$srclang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
	};
	var _elm_lang$html$Html_Attributes$sandbox = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
	};
	var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
	};
	var _elm_lang$html$Html_Attributes$type_ = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
	};
	var _elm_lang$html$Html_Attributes$value = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
	};
	var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
	};
	var _elm_lang$html$Html_Attributes$placeholder = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
	};
	var _elm_lang$html$Html_Attributes$accept = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
	};
	var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
	};
	var _elm_lang$html$Html_Attributes$action = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
	};
	var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'autocomplete',
			bool ? 'on' : 'off');
	};
	var _elm_lang$html$Html_Attributes$enctype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
	};
	var _elm_lang$html$Html_Attributes$method = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
	};
	var _elm_lang$html$Html_Attributes$name = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
	};
	var _elm_lang$html$Html_Attributes$pattern = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
	};
	var _elm_lang$html$Html_Attributes$for = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
	};
	var _elm_lang$html$Html_Attributes$max = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
	};
	var _elm_lang$html$Html_Attributes$min = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
	};
	var _elm_lang$html$Html_Attributes$step = function (n) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
	};
	var _elm_lang$html$Html_Attributes$wrap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
	};
	var _elm_lang$html$Html_Attributes$usemap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
	};
	var _elm_lang$html$Html_Attributes$shape = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
	};
	var _elm_lang$html$Html_Attributes$coords = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
	};
	var _elm_lang$html$Html_Attributes$keytype = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
	};
	var _elm_lang$html$Html_Attributes$align = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
	};
	var _elm_lang$html$Html_Attributes$cite = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
	};
	var _elm_lang$html$Html_Attributes$href = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
	};
	var _elm_lang$html$Html_Attributes$target = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
	};
	var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
	};
	var _elm_lang$html$Html_Attributes$hreflang = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
	};
	var _elm_lang$html$Html_Attributes$ping = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
	};
	var _elm_lang$html$Html_Attributes$start = function (n) {
		return A2(
			_elm_lang$html$Html_Attributes$stringProperty,
			'start',
			_elm_lang$core$Basics$toString(n));
	};
	var _elm_lang$html$Html_Attributes$headers = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
	};
	var _elm_lang$html$Html_Attributes$scope = function (value) {
		return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
	};
	var _elm_lang$html$Html_Attributes$boolProperty = F2(
		function (name, bool) {
			return A2(
				_elm_lang$html$Html_Attributes$property,
				name,
				_elm_lang$core$Json_Encode$bool(bool));
		});
	var _elm_lang$html$Html_Attributes$hidden = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
	};
	var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
	};
	var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
	};
	var _elm_lang$html$Html_Attributes$async = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
	};
	var _elm_lang$html$Html_Attributes$defer = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
	};
	var _elm_lang$html$Html_Attributes$scoped = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
	};
	var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
	};
	var _elm_lang$html$Html_Attributes$controls = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
	};
	var _elm_lang$html$Html_Attributes$loop = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
	};
	var _elm_lang$html$Html_Attributes$default = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
	};
	var _elm_lang$html$Html_Attributes$seamless = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
	};
	var _elm_lang$html$Html_Attributes$checked = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
	};
	var _elm_lang$html$Html_Attributes$selected = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
	};
	var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
	};
	var _elm_lang$html$Html_Attributes$disabled = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
	};
	var _elm_lang$html$Html_Attributes$multiple = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
	};
	var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
	};
	var _elm_lang$html$Html_Attributes$readonly = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
	};
	var _elm_lang$html$Html_Attributes$required = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
	};
	var _elm_lang$html$Html_Attributes$ismap = function (value) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
	};
	var _elm_lang$html$Html_Attributes$download = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
	};
	var _elm_lang$html$Html_Attributes$reversed = function (bool) {
		return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
	};
	var _elm_lang$html$Html_Attributes$classList = function (list) {
		return _elm_lang$html$Html_Attributes$class(
			A2(
				_elm_lang$core$String$join,
				' ',
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Tuple$first,
					A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
	};
	var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

	var _elm_lang$http$Native_Http = function() {


	// ENCODING AND DECODING

	function encodeUri(string)
	{
		return encodeURIComponent(string);
	}

	function decodeUri(string)
	{
		try
		{
			return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
		}
		catch(e)
		{
			return _elm_lang$core$Maybe$Nothing;
		}
	}


	// SEND REQUEST

	function toTask(request, maybeProgress)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var xhr = new XMLHttpRequest();

			configureProgress(xhr, maybeProgress);

			xhr.addEventListener('error', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
			});
			xhr.addEventListener('timeout', function() {
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
			});
			xhr.addEventListener('load', function() {
				callback(handleResponse(xhr, request.expect.responseToResult));
			});

			try
			{
				xhr.open(request.method, request.url, true);
			}
			catch (e)
			{
				return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
			}

			configureRequest(xhr, request);
			send(xhr, request.body);

			return function() { xhr.abort(); };
		});
	}

	function configureProgress(xhr, maybeProgress)
	{
		if (maybeProgress.ctor === 'Nothing')
		{
			return;
		}

		xhr.addEventListener('progress', function(event) {
			if (!event.lengthComputable)
			{
				return;
			}
			_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
				bytes: event.loaded,
				bytesExpected: event.total
			}));
		});
	}

	function configureRequest(xhr, request)
	{
		function setHeader(pair)
		{
			xhr.setRequestHeader(pair._0, pair._1);
		}

		A2(_elm_lang$core$List$map, setHeader, request.headers);
		xhr.responseType = request.expect.responseType;
		xhr.withCredentials = request.withCredentials;

		if (request.timeout.ctor === 'Just')
		{
			xhr.timeout = request.timeout._0;
		}
	}

	function send(xhr, body)
	{
		switch (body.ctor)
		{
			case 'EmptyBody':
				xhr.send();
				return;

			case 'StringBody':
				xhr.setRequestHeader('Content-Type', body._0);
				xhr.send(body._1);
				return;

			case 'FormDataBody':
				xhr.send(body._0);
				return;
		}
	}


	// RESPONSES

	function handleResponse(xhr, responseToResult)
	{
		var response = toResponse(xhr);

		if (xhr.status < 200 || 300 <= xhr.status)
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadStatus',
				_0: response
			});
		}

		var result = responseToResult(response);

		if (result.ctor === 'Ok')
		{
			return _elm_lang$core$Native_Scheduler.succeed(result._0);
		}
		else
		{
			response.body = xhr.responseText;
			return _elm_lang$core$Native_Scheduler.fail({
				ctor: 'BadPayload',
				_0: result._0,
				_1: response
			});
		}
	}

	function toResponse(xhr)
	{
		return {
			status: { code: xhr.status, message: xhr.statusText },
			headers: parseHeaders(xhr.getAllResponseHeaders()),
			url: xhr.responseURL,
			body: xhr.response
		};
	}

	function parseHeaders(rawHeaders)
	{
		var headers = _elm_lang$core$Dict$empty;

		if (!rawHeaders)
		{
			return headers;
		}

		var headerPairs = rawHeaders.split('\u000d\u000a');
		for (var i = headerPairs.length; i--; )
		{
			var headerPair = headerPairs[i];
			var index = headerPair.indexOf('\u003a\u0020');
			if (index > 0)
			{
				var key = headerPair.substring(0, index);
				var value = headerPair.substring(index + 2);

				headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
					if (oldValue.ctor === 'Just')
					{
						return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
					}
					return _elm_lang$core$Maybe$Just(value);
				}, headers);
			}
		}

		return headers;
	}


	// EXPECTORS

	function expectStringResponse(responseToResult)
	{
		return {
			responseType: 'text',
			responseToResult: responseToResult
		};
	}

	function mapExpect(func, expect)
	{
		return {
			responseType: expect.responseType,
			responseToResult: function(response) {
				var convertedResponse = expect.responseToResult(response);
				return A2(_elm_lang$core$Result$map, func, convertedResponse);
			}
		};
	}


	// BODY

	function multipart(parts)
	{
		var formData = new FormData();

		while (parts.ctor !== '[]')
		{
			var part = parts._0;
			formData.append(part._0, part._1);
			parts = parts._1;
		}

		return { ctor: 'FormDataBody', _0: formData };
	}

	return {
		toTask: F2(toTask),
		expectStringResponse: expectStringResponse,
		mapExpect: F2(mapExpect),
		multipart: multipart,
		encodeUri: encodeUri,
		decodeUri: decodeUri
	};

	}();

	var _elm_lang$http$Http_Internal$map = F2(
		function (func, request) {
			return _elm_lang$core$Native_Utils.update(
				request,
				{
					expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
				});
		});
	var _elm_lang$http$Http_Internal$RawRequest = F7(
		function (a, b, c, d, e, f, g) {
			return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
		});
	var _elm_lang$http$Http_Internal$Request = function (a) {
		return {ctor: 'Request', _0: a};
	};
	var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
	var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
	var _elm_lang$http$Http_Internal$StringBody = F2(
		function (a, b) {
			return {ctor: 'StringBody', _0: a, _1: b};
		});
	var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
	var _elm_lang$http$Http_Internal$Header = F2(
		function (a, b) {
			return {ctor: 'Header', _0: a, _1: b};
		});

	var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
	var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
	var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
	var _elm_lang$http$Http$expectJson = function (decoder) {
		return _elm_lang$http$Http$expectStringResponse(
			function (response) {
				return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
			});
	};
	var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return _elm_lang$core$Result$Ok(response.body);
		});
	var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
	var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
	var _elm_lang$http$Http$jsonBody = function (value) {
		return A2(
			_elm_lang$http$Http_Internal$StringBody,
			'application/json',
			A2(_elm_lang$core$Json_Encode$encode, 0, value));
	};
	var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
	var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
	var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
	var _elm_lang$http$Http$post = F3(
		function (url, body, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'POST',
					headers: {ctor: '[]'},
					url: url,
					body: body,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$get = F2(
		function (url, decoder) {
			return _elm_lang$http$Http$request(
				{
					method: 'GET',
					headers: {ctor: '[]'},
					url: url,
					body: _elm_lang$http$Http$emptyBody,
					expect: _elm_lang$http$Http$expectJson(decoder),
					timeout: _elm_lang$core$Maybe$Nothing,
					withCredentials: false
				});
		});
	var _elm_lang$http$Http$getString = function (url) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectString,
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	};
	var _elm_lang$http$Http$toTask = function (_p0) {
		var _p1 = _p0;
		return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
	};
	var _elm_lang$http$Http$send = F2(
		function (resultToMessage, request) {
			return A2(
				_elm_lang$core$Task$attempt,
				resultToMessage,
				_elm_lang$http$Http$toTask(request));
		});
	var _elm_lang$http$Http$Response = F4(
		function (a, b, c, d) {
			return {url: a, status: b, headers: c, body: d};
		});
	var _elm_lang$http$Http$BadPayload = F2(
		function (a, b) {
			return {ctor: 'BadPayload', _0: a, _1: b};
		});
	var _elm_lang$http$Http$BadStatus = function (a) {
		return {ctor: 'BadStatus', _0: a};
	};
	var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
	var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
	var _elm_lang$http$Http$BadUrl = function (a) {
		return {ctor: 'BadUrl', _0: a};
	};
	var _elm_lang$http$Http$StringPart = F2(
		function (a, b) {
			return {ctor: 'StringPart', _0: a, _1: b};
		});
	var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

	var _elm_lang$navigation$Native_Navigation = function() {


	// FAKE NAVIGATION

	function go(n)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			if (n !== 0)
			{
				history.go(n);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function pushState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.pushState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}

	function replaceState(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			history.replaceState({}, '', url);
			callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
		});
	}


	// REAL NAVIGATION

	function reloadPage(skipCache)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			document.location.reload(skipCache);
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}

	function setLocation(url)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			try
			{
				window.location = url;
			}
			catch(err)
			{
				// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
				// Other browsers reload the page, so let's be consistent about that.
				document.location.reload(false);
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
		});
	}


	// GET LOCATION

	function getLocation()
	{
		var location = document.location;

		return {
			href: location.href,
			host: location.host,
			hostname: location.hostname,
			protocol: location.protocol,
			origin: location.origin,
			port_: location.port,
			pathname: location.pathname,
			search: location.search,
			hash: location.hash,
			username: location.username,
			password: location.password
		};
	}


	// DETECT IE11 PROBLEMS

	function isInternetExplorer11()
	{
		return window.navigator.userAgent.indexOf('Trident') !== -1;
	}


	return {
		go: go,
		setLocation: setLocation,
		reloadPage: reloadPage,
		pushState: pushState,
		replaceState: replaceState,
		getLocation: getLocation,
		isInternetExplorer11: isInternetExplorer11
	};

	}();

	var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
	var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
	var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
	var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
	var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
	var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
	_elm_lang$navigation$Navigation_ops['&>'] = F2(
		function (task1, task2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p0) {
					return task2;
				},
				task1);
		});
	var _elm_lang$navigation$Navigation$notify = F3(
		function (router, subs, location) {
			var send = function (_p1) {
				var _p2 = _p1;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p2._0(location));
			};
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, subs)),
				_elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'}));
		});
	var _elm_lang$navigation$Navigation$cmdHelp = F3(
		function (router, subs, cmd) {
			var _p3 = cmd;
			switch (_p3.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$go(_p3._0);
				case 'New':
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$pushState(_p3._0));
				case 'Modify':
					return A2(
						_elm_lang$core$Task$andThen,
						A2(_elm_lang$navigation$Navigation$notify, router, subs),
						_elm_lang$navigation$Navigation$replaceState(_p3._0));
				case 'Visit':
					return _elm_lang$navigation$Navigation$setLocation(_p3._0);
				default:
					return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
			}
		});
	var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
		var _p4 = popWatcher;
		if (_p4.ctor === 'Normal') {
			return _elm_lang$core$Process$kill(_p4._0);
		} else {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Process$kill(_p4._0),
				_elm_lang$core$Process$kill(_p4._1));
		}
	};
	var _elm_lang$navigation$Navigation$onSelfMsg = F3(
		function (router, location, state) {
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
				_elm_lang$core$Task$succeed(state));
		});
	var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
	var _elm_lang$navigation$Navigation$Location = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	var _elm_lang$navigation$Navigation$State = F2(
		function (a, b) {
			return {subs: a, popWatcher: b};
		});
	var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
		A2(
			_elm_lang$navigation$Navigation$State,
			{ctor: '[]'},
			_elm_lang$core$Maybe$Nothing));
	var _elm_lang$navigation$Navigation$Reload = function (a) {
		return {ctor: 'Reload', _0: a};
	};
	var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Reload(false));
	var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Reload(true));
	var _elm_lang$navigation$Navigation$Visit = function (a) {
		return {ctor: 'Visit', _0: a};
	};
	var _elm_lang$navigation$Navigation$load = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Visit(url));
	};
	var _elm_lang$navigation$Navigation$Modify = function (a) {
		return {ctor: 'Modify', _0: a};
	};
	var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Modify(url));
	};
	var _elm_lang$navigation$Navigation$New = function (a) {
		return {ctor: 'New', _0: a};
	};
	var _elm_lang$navigation$Navigation$newUrl = function (url) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$New(url));
	};
	var _elm_lang$navigation$Navigation$Jump = function (a) {
		return {ctor: 'Jump', _0: a};
	};
	var _elm_lang$navigation$Navigation$back = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(0 - n));
	};
	var _elm_lang$navigation$Navigation$forward = function (n) {
		return _elm_lang$navigation$Navigation$command(
			_elm_lang$navigation$Navigation$Jump(n));
	};
	var _elm_lang$navigation$Navigation$cmdMap = F2(
		function (_p5, myCmd) {
			var _p6 = myCmd;
			switch (_p6.ctor) {
				case 'Jump':
					return _elm_lang$navigation$Navigation$Jump(_p6._0);
				case 'New':
					return _elm_lang$navigation$Navigation$New(_p6._0);
				case 'Modify':
					return _elm_lang$navigation$Navigation$Modify(_p6._0);
				case 'Visit':
					return _elm_lang$navigation$Navigation$Visit(_p6._0);
				default:
					return _elm_lang$navigation$Navigation$Reload(_p6._0);
			}
		});
	var _elm_lang$navigation$Navigation$Monitor = function (a) {
		return {ctor: 'Monitor', _0: a};
	};
	var _elm_lang$navigation$Navigation$program = F2(
		function (locationToMessage, stuff) {
			var init = stuff.init(
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$program(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$programWithFlags = F2(
		function (locationToMessage, stuff) {
			var init = function (flags) {
				return A2(
					stuff.init,
					flags,
					_elm_lang$navigation$Native_Navigation.getLocation(
						{ctor: '_Tuple0'}));
			};
			var subs = function (model) {
				return _elm_lang$core$Platform_Sub$batch(
					{
						ctor: '::',
						_0: _elm_lang$navigation$Navigation$subscription(
							_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
						_1: {
							ctor: '::',
							_0: stuff.subscriptions(model),
							_1: {ctor: '[]'}
						}
					});
			};
			return _elm_lang$html$Html$programWithFlags(
				{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
		});
	var _elm_lang$navigation$Navigation$subMap = F2(
		function (func, _p7) {
			var _p8 = _p7;
			return _elm_lang$navigation$Navigation$Monitor(
				function (_p9) {
					return func(
						_p8._0(_p9));
				});
		});
	var _elm_lang$navigation$Navigation$InternetExplorer = F2(
		function (a, b) {
			return {ctor: 'InternetExplorer', _0: a, _1: b};
		});
	var _elm_lang$navigation$Navigation$Normal = function (a) {
		return {ctor: 'Normal', _0: a};
	};
	var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
		var reportLocation = function (_p10) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
			{ctor: '_Tuple0'}) ? A3(
			_elm_lang$core$Task$map2,
			_elm_lang$navigation$Navigation$InternetExplorer,
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
			_elm_lang$core$Task$map,
			_elm_lang$navigation$Navigation$Normal,
			_elm_lang$core$Process$spawn(
				A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
	};
	var _elm_lang$navigation$Navigation$onEffects = F4(
		function (router, cmds, subs, _p11) {
			var _p12 = _p11;
			var _p15 = _p12.popWatcher;
			var stepState = function () {
				var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
				_v6_2:
				do {
					if (_p13._0.ctor === '[]') {
						if (_p13._1.ctor === 'Just') {
							return A2(
								_elm_lang$navigation$Navigation_ops['&>'],
								_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
								_elm_lang$core$Task$succeed(
									A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
						} else {
							break _v6_2;
						}
					} else {
						if (_p13._1.ctor === 'Nothing') {
							return A2(
								_elm_lang$core$Task$map,
								function (_p14) {
									return A2(
										_elm_lang$navigation$Navigation$State,
										subs,
										_elm_lang$core$Maybe$Just(_p14));
								},
								_elm_lang$navigation$Navigation$spawnPopWatcher(router));
						} else {
							break _v6_2;
						}
					}
				} while(false);
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$navigation$Navigation$State, subs, _p15));
			}();
			return A2(
				_elm_lang$navigation$Navigation_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
						cmds)),
				stepState);
		});
	_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

	var _elm_lang$websocket$Native_WebSocket = function() {

	function open(url, settings)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			try
			{
				var socket = new WebSocket(url);
				socket.elm_web_socket = true;
			}
			catch(err)
			{
				return callback(_elm_lang$core$Native_Scheduler.fail({
					ctor: err.name === 'SecurityError' ? 'BadSecurity' : 'BadArgs',
					_0: err.message
				}));
			}

			socket.addEventListener("open", function(event) {
				callback(_elm_lang$core$Native_Scheduler.succeed(socket));
			});

			socket.addEventListener("message", function(event) {
				_elm_lang$core$Native_Scheduler.rawSpawn(A2(settings.onMessage, socket, event.data));
			});

			socket.addEventListener("close", function(event) {
				_elm_lang$core$Native_Scheduler.rawSpawn(settings.onClose({
					code: event.code,
					reason: event.reason,
					wasClean: event.wasClean
				}));
			});

			return function()
			{
				if (socket && socket.close)
				{
					socket.close();
				}
			};
		});
	}

	function send(socket, string)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
		{
			var result =
				socket.readyState === WebSocket.OPEN
					? _elm_lang$core$Maybe$Nothing
					: _elm_lang$core$Maybe$Just({ ctor: 'NotOpen' });

			try
			{
				socket.send(string);
			}
			catch(err)
			{
				result = _elm_lang$core$Maybe$Just({ ctor: 'BadString' });
			}

			callback(_elm_lang$core$Native_Scheduler.succeed(result));
		});
	}

	function close(code, reason, socket)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			try
			{
				socket.close(code, reason);
			}
			catch(err)
			{
				return callback(_elm_lang$core$Native_Scheduler.fail(_elm_lang$core$Maybe$Just({
					ctor: err.name === 'SyntaxError' ? 'BadReason' : 'BadCode'
				})));
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Maybe$Nothing));
		});
	}

	function bytesQueued(socket)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			callback(_elm_lang$core$Native_Scheduler.succeed(socket.bufferedAmount));
		});
	}

	return {
		open: F2(open),
		send: F2(send),
		close: F3(close),
		bytesQueued: bytesQueued
	};

	}();

	var _elm_lang$websocket$WebSocket_LowLevel$bytesQueued = _elm_lang$websocket$Native_WebSocket.bytesQueued;
	var _elm_lang$websocket$WebSocket_LowLevel$send = _elm_lang$websocket$Native_WebSocket.send;
	var _elm_lang$websocket$WebSocket_LowLevel$closeWith = _elm_lang$websocket$Native_WebSocket.close;
	var _elm_lang$websocket$WebSocket_LowLevel$close = function (socket) {
		return A2(
			_elm_lang$core$Task$map,
			_elm_lang$core$Basics$always(
				{ctor: '_Tuple0'}),
			A3(_elm_lang$websocket$WebSocket_LowLevel$closeWith, 1000, '', socket));
	};
	var _elm_lang$websocket$WebSocket_LowLevel$open = _elm_lang$websocket$Native_WebSocket.open;
	var _elm_lang$websocket$WebSocket_LowLevel$Settings = F2(
		function (a, b) {
			return {onMessage: a, onClose: b};
		});
	var _elm_lang$websocket$WebSocket_LowLevel$WebSocket = {ctor: 'WebSocket'};
	var _elm_lang$websocket$WebSocket_LowLevel$BadArgs = {ctor: 'BadArgs'};
	var _elm_lang$websocket$WebSocket_LowLevel$BadSecurity = {ctor: 'BadSecurity'};
	var _elm_lang$websocket$WebSocket_LowLevel$BadReason = {ctor: 'BadReason'};
	var _elm_lang$websocket$WebSocket_LowLevel$BadCode = {ctor: 'BadCode'};
	var _elm_lang$websocket$WebSocket_LowLevel$BadString = {ctor: 'BadString'};
	var _elm_lang$websocket$WebSocket_LowLevel$NotOpen = {ctor: 'NotOpen'};

	var _evancz$elm_markdown$Native_Markdown = function() {


	// VIRTUAL-DOM WIDGETS

	function toHtml(options, factList, rawMarkdown)
	{
		var model = {
			options: options,
			markdown: rawMarkdown
		};
		return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
	}


	// WIDGET IMPLEMENTATION

	var implementation = {
		render: render,
		diff: diff
	};

	function render(model)
	{
		var html = marked(model.markdown, formatOptions(model.options));
		var div = document.createElement('div');
		div.innerHTML = html;
		return div;
	}

	function diff(a, b)
	{
		
		if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
		{
			return null;
		}

		return {
			applyPatch: applyPatch,
			data: marked(b.model.markdown, formatOptions(b.model.options))
		};
	}

	function applyPatch(domNode, data)
	{
		domNode.innerHTML = data;
		return domNode;
	}


	// ACTUAL MARKDOWN PARSER

	var marked = function() {
		// catch the `marked` object regardless of the outer environment.
		// (ex. a CommonJS module compatible environment.)
		// note that this depends on marked's implementation of environment detection.
		var module = {};
		var exports = module.exports = {};

		/**
		 * marked - a markdown parser
		 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
		 * https://github.com/chjj/marked
		 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
		 */
		(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

		return module.exports;
	}();


	// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

	function formatOptions(options)
	{
		function toHighlight(code, lang)
		{
			if (!lang && options.defaultHighlighting.ctor === 'Just')
			{
				lang = options.defaultHighlighting._0;
			}

			if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
			{
				return hljs.highlight(lang, code, true).value;
			}

			return code;
		}

		var gfm = options.githubFlavored;
		if (gfm.ctor === 'Just')
		{
			return {
				highlight: toHighlight,
				gfm: true,
				tables: gfm._0.tables,
				breaks: gfm._0.breaks,
				sanitize: options.sanitize,
				smartypants: options.smartypants
			};
		}

		return {
			highlight: toHighlight,
			gfm: false,
			tables: false,
			breaks: false,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}


	// EXPORTS

	return {
		toHtml: F3(toHtml)
	};

	}();

	var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
	var _evancz$elm_markdown$Markdown$defaultOptions = {
		githubFlavored: _elm_lang$core$Maybe$Just(
			{tables: false, breaks: false}),
		defaultHighlighting: _elm_lang$core$Maybe$Nothing,
		sanitize: false,
		smartypants: false
	};
	var _evancz$elm_markdown$Markdown$toHtml = F2(
		function (attrs, string) {
			return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
		});
	var _evancz$elm_markdown$Markdown$Options = F4(
		function (a, b, c, d) {
			return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
		});

	var _lukewestby$elm_http_builder$HttpBuilder$replace = F2(
		function (old, $new) {
			return function (_p0) {
				return A2(
					_elm_lang$core$String$join,
					$new,
					A2(_elm_lang$core$String$split, old, _p0));
			};
		});
	var _lukewestby$elm_http_builder$HttpBuilder$queryEscape = function (_p1) {
		return A3(
			_lukewestby$elm_http_builder$HttpBuilder$replace,
			'%20',
			'+',
			_elm_lang$http$Http$encodeUri(_p1));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$queryPair = function (_p2) {
		var _p3 = _p2;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._0),
			A2(
				_elm_lang$core$Basics_ops['++'],
				'=',
				_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._1)));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded = function (args) {
		return A2(
			_elm_lang$core$String$join,
			'&',
			A2(_elm_lang$core$List$map, _lukewestby$elm_http_builder$HttpBuilder$queryPair, args));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$toRequest = function (builder) {
		var encodedParams = _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(builder.queryParams);
		var fullUrl = _elm_lang$core$String$isEmpty(encodedParams) ? builder.url : A2(
			_elm_lang$core$Basics_ops['++'],
			builder.url,
			A2(_elm_lang$core$Basics_ops['++'], '?', encodedParams));
		return _elm_lang$http$Http$request(
			{method: builder.method, url: fullUrl, headers: builder.headers, body: builder.body, expect: builder.expect, timeout: builder.timeout, withCredentials: builder.withCredentials});
	};
	var _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain = function (builder) {
		return _elm_lang$http$Http$toTask(
			_lukewestby$elm_http_builder$HttpBuilder$toRequest(builder));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$withCacheBuster = F2(
		function (paramName, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{
					cacheBuster: _elm_lang$core$Maybe$Just(paramName)
				});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withQueryParams = F2(
		function (queryParams, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{
					queryParams: A2(_elm_lang$core$Basics_ops['++'], builder.queryParams, queryParams)
				});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$toTaskWithCacheBuster = F2(
		function (paramName, builder) {
			var request = function (timestamp) {
				return _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain(
					A2(
						_lukewestby$elm_http_builder$HttpBuilder$withQueryParams,
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: paramName,
								_1: _elm_lang$core$Basics$toString(timestamp)
							},
							_1: {ctor: '[]'}
						},
						builder));
			};
			return A2(_elm_lang$core$Task$andThen, request, _elm_lang$core$Time$now);
		});
	var _lukewestby$elm_http_builder$HttpBuilder$toTask = function (builder) {
		var _p4 = builder.cacheBuster;
		if (_p4.ctor === 'Just') {
			return A2(_lukewestby$elm_http_builder$HttpBuilder$toTaskWithCacheBuster, _p4._0, builder);
		} else {
			return _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain(builder);
		}
	};
	var _lukewestby$elm_http_builder$HttpBuilder$send = F2(
		function (tagger, builder) {
			return A2(
				_elm_lang$core$Task$attempt,
				tagger,
				_lukewestby$elm_http_builder$HttpBuilder$toTask(builder));
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withExpect = F2(
		function (expect, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{expect: expect});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withCredentials = function (builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{withCredentials: true});
	};
	var _lukewestby$elm_http_builder$HttpBuilder$withTimeout = F2(
		function (timeout, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{
					timeout: _elm_lang$core$Maybe$Just(timeout)
				});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withBody = F2(
		function (body, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{body: body});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withStringBody = F2(
		function (contentType, value) {
			return _lukewestby$elm_http_builder$HttpBuilder$withBody(
				A2(_elm_lang$http$Http$stringBody, contentType, value));
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withUrlEncodedBody = function (_p5) {
		return A2(
			_lukewestby$elm_http_builder$HttpBuilder$withStringBody,
			'application/x-www-form-urlencoded',
			_lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(_p5));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$withJsonBody = function (value) {
		return _lukewestby$elm_http_builder$HttpBuilder$withBody(
			_elm_lang$http$Http$jsonBody(value));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$withMultipartStringBody = function (partPairs) {
		return _lukewestby$elm_http_builder$HttpBuilder$withBody(
			_elm_lang$http$Http$multipartBody(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Basics$uncurry(_elm_lang$http$Http$stringPart),
					partPairs)));
	};
	var _lukewestby$elm_http_builder$HttpBuilder$withHeaders = F2(
		function (headerPairs, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{
					headers: A2(
						_elm_lang$core$Basics_ops['++'],
						A2(
							_elm_lang$core$List$map,
							_elm_lang$core$Basics$uncurry(_elm_lang$http$Http$header),
							headerPairs),
						builder.headers)
				});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$withHeader = F3(
		function (key, value, builder) {
			return _elm_lang$core$Native_Utils.update(
				builder,
				{
					headers: {
						ctor: '::',
						_0: A2(_elm_lang$http$Http$header, key, value),
						_1: builder.headers
					}
				});
		});
	var _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl = F2(
		function (method, url) {
			return {
				method: method,
				url: url,
				headers: {ctor: '[]'},
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectStringResponse(
					function (_p6) {
						return _elm_lang$core$Result$Ok(
							{ctor: '_Tuple0'});
					}),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false,
				queryParams: {ctor: '[]'},
				cacheBuster: _elm_lang$core$Maybe$Nothing
			};
		});
	var _lukewestby$elm_http_builder$HttpBuilder$get = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('GET');
	var _lukewestby$elm_http_builder$HttpBuilder$post = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('POST');
	var _lukewestby$elm_http_builder$HttpBuilder$put = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('PUT');
	var _lukewestby$elm_http_builder$HttpBuilder$patch = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('PATCH');
	var _lukewestby$elm_http_builder$HttpBuilder$delete = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('DELETE');
	var _lukewestby$elm_http_builder$HttpBuilder$options = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('OPTIONS');
	var _lukewestby$elm_http_builder$HttpBuilder$trace = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('TRACE');
	var _lukewestby$elm_http_builder$HttpBuilder$head = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('HEAD');
	var _lukewestby$elm_http_builder$HttpBuilder$RequestBuilder = F9(
		function (a, b, c, d, e, f, g, h, i) {
			return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g, queryParams: h, cacheBuster: i};
		});

	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops = _saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops || {};
	_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'] = F2(
		function (x, f) {
			return A2(_elm_lang$core$Task$andThen, f, x);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops = _saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops || {};
	_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'] = F2(
		function (t1, t2) {
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p0) {
					return t2;
				},
				t1);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$statusInfo = function (status) {
		var _p1 = status;
		switch (_p1) {
			case 'ok':
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Result$Ok,
					A2(_elm_lang$core$Json_Decode$field, 'response', _elm_lang$core$Json_Decode$value));
			case 'error':
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Result$Err,
					A2(_elm_lang$core$Json_Decode$field, 'response', _elm_lang$core$Json_Decode$value));
			default:
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], status, ' is a not supported status'));
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$decodeReplyPayload = function (value) {
		var result = A2(
			_elm_lang$core$Json_Decode$decodeValue,
			A2(
				_elm_lang$core$Json_Decode$andThen,
				_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$statusInfo,
				A2(_elm_lang$core$Json_Decode$field, 'status', _elm_lang$core$Json_Decode$string)),
			value);
		var _p2 = result;
		if (_p2.ctor === 'Err') {
			var _p3 = _elm_lang$core$Debug$log(_p2._0);
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Just(_p2._0);
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$add = F2(
		function (value, maybeList) {
			var _p4 = maybeList;
			if (_p4.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(
					{
						ctor: '::',
						_0: value,
						_1: {ctor: '[]'}
					});
			} else {
				return _elm_lang$core$Maybe$Just(
					{ctor: '::', _0: value, _1: _p4._0});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$removeIn = F3(
		function (a, b, dict) {
			var remove = function (maybeDict_) {
				var _p5 = maybeDict_;
				if (_p5.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					var newDict = A2(_elm_lang$core$Dict$remove, b, _p5._0);
					return _elm_lang$core$Dict$isEmpty(newDict) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(newDict);
				}
			};
			return A3(_elm_lang$core$Dict$update, a, remove, dict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$insertIn = F4(
		function (a, b, value, dict) {
			var update_ = function (maybeValue) {
				var _p6 = maybeValue;
				if (_p6.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Just(
						A2(_elm_lang$core$Dict$singleton, b, value));
				} else {
					return _elm_lang$core$Maybe$Just(
						A3(_elm_lang$core$Dict$insert, b, value, _p6._0));
				}
			};
			return A3(_elm_lang$core$Dict$update, a, update_, dict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$updateIn = F4(
		function (a, b, update, dict) {
			var update_ = function (maybeDict) {
				var dict_ = A3(
					_elm_lang$core$Dict$update,
					b,
					update,
					A2(_elm_lang$core$Maybe$withDefault, _elm_lang$core$Dict$empty, maybeDict));
				return _elm_lang$core$Dict$isEmpty(dict_) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(dict_);
			};
			return A3(_elm_lang$core$Dict$update, a, update_, dict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$getIn = F3(
		function (a, b, dict) {
			return A2(
				_elm_lang$core$Maybe$andThen,
				_elm_lang$core$Dict$get(b),
				A2(_elm_lang$core$Dict$get, a, dict));
		});

	var _saschatimme$elm_phoenix$Phoenix_Push$map = F2(
		function (func, push) {
			var f = _elm_lang$core$Maybe$map(
				F2(
					function (x, y) {
						return function (_p0) {
							return x(
								y(_p0));
						};
					})(func));
			return _elm_lang$core$Native_Utils.update(
				push,
				{
					onOk: f(push.onOk),
					onError: f(push.onError)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Push$onError = F2(
		function (cb, push) {
			return _elm_lang$core$Native_Utils.update(
				push,
				{
					onError: _elm_lang$core$Maybe$Just(cb)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Push$onOk = F2(
		function (cb, push) {
			return _elm_lang$core$Native_Utils.update(
				push,
				{
					onOk: _elm_lang$core$Maybe$Just(cb)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Push$withPayload = F2(
		function (payload, push) {
			return _elm_lang$core$Native_Utils.update(
				push,
				{payload: payload});
		});
	var _saschatimme$elm_phoenix$Phoenix_Push$PhoenixPush = F5(
		function (a, b, c, d, e) {
			return {topic: a, event: b, payload: c, onOk: d, onError: e};
		});
	var _saschatimme$elm_phoenix$Phoenix_Push$init = F2(
		function (topic, event) {
			return A5(
				_saschatimme$elm_phoenix$Phoenix_Push$PhoenixPush,
				topic,
				event,
				_elm_lang$core$Json_Encode$object(
					{ctor: '[]'}),
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$Maybe$Nothing);
		});

	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$encode = function (_p0) {
		var _p1 = _p0;
		return A2(
			_elm_lang$core$Json_Encode$encode,
			0,
			_elm_lang$core$Json_Encode$object(
				{
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'topic',
						_1: _elm_lang$core$Json_Encode$string(_p1.topic)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'event',
							_1: _elm_lang$core$Json_Encode$string(_p1.event)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'ref',
								_1: A2(
									_elm_lang$core$Maybe$withDefault,
									_elm_lang$core$Json_Encode$null,
									A2(_elm_lang$core$Maybe$map, _elm_lang$core$Json_Encode$int, _p1.ref))
							},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'payload', _1: _p1.payload},
								_1: {ctor: '[]'}
							}
						}
					}
				}));
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$ref = F2(
		function (ref_, message) {
			return _elm_lang$core$Native_Utils.update(
				message,
				{
					ref: _elm_lang$core$Maybe$Just(ref_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$payload = F2(
		function (payload_, message) {
			return _elm_lang$core$Native_Utils.update(
				message,
				{payload: payload_});
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$Message = F4(
		function (a, b, c, d) {
			return {topic: a, event: b, payload: c, ref: d};
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$init = F2(
		function (topic, event) {
			return A4(
				_saschatimme$elm_phoenix$Phoenix_Internal_Message$Message,
				topic,
				event,
				_elm_lang$core$Json_Encode$object(
					{ctor: '[]'}),
				_elm_lang$core$Maybe$Nothing);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$fromPush = function (push) {
		return A2(
			_saschatimme$elm_phoenix$Phoenix_Internal_Message$payload,
			push.payload,
			A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$init, push.topic, push.event));
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Message$decode = function (msg) {
		var decoder = A5(
			_elm_lang$core$Json_Decode$map4,
			_saschatimme$elm_phoenix$Phoenix_Internal_Message$Message,
			A2(_elm_lang$core$Json_Decode$field, 'topic', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode$field, 'event', _elm_lang$core$Json_Decode$string),
			A2(_elm_lang$core$Json_Decode$field, 'payload', _elm_lang$core$Json_Decode$value),
			A2(
				_elm_lang$core$Json_Decode$field,
				'ref',
				_elm_lang$core$Json_Decode$oneOf(
					{
						ctor: '::',
						_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$int),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
							_1: {ctor: '[]'}
						}
					})));
		return A2(_elm_lang$core$Json_Decode$decodeString, decoder, msg);
	};

	var _saschatimme$elm_phoenix$Phoenix_Channel$withDebug = function (channel) {
		return _elm_lang$core$Native_Utils.update(
			channel,
			{debug: true});
	};
	var _saschatimme$elm_phoenix$Phoenix_Channel$map = F2(
		function (func, chan) {
			var f = _elm_lang$core$Maybe$map(
				F2(
					function (x, y) {
						return function (_p0) {
							return x(
								y(_p0));
						};
					})(func));
			var channel = _elm_lang$core$Native_Utils.update(
				chan,
				{
					onJoin: f(chan.onJoin),
					onJoinError: f(chan.onJoinError),
					onError: A2(_elm_lang$core$Maybe$map, func, chan.onError),
					onDisconnect: A2(_elm_lang$core$Maybe$map, func, chan.onDisconnect),
					onRejoin: f(chan.onRejoin),
					onLeave: f(chan.onLeave),
					onLeaveError: f(chan.onLeaveError),
					on: A2(
						_elm_lang$core$Dict$map,
						F2(
							function (_p1, a) {
								return function (_p2) {
									return func(
										a(_p2));
								};
							}),
						chan.on)
				});
			return channel;
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onLeaveError = F2(
		function (onLeaveError_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onLeaveError: _elm_lang$core$Maybe$Just(onLeaveError_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onLeave = F2(
		function (onLeave_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onLeave: _elm_lang$core$Maybe$Just(onLeave_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onRejoin = F2(
		function (onRejoin_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onRejoin: _elm_lang$core$Maybe$Just(onRejoin_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onDisconnect = F2(
		function (onDisconnect_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onDisconnect: _elm_lang$core$Maybe$Just(onDisconnect_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onError = F2(
		function (onError_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onError: _elm_lang$core$Maybe$Just(onError_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onJoinError = F2(
		function (onJoinError_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					onJoinError: _elm_lang$core$Maybe$Just(onJoinError_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$onJoin = F2(
		function (onJoin_, chan) {
			var _p3 = chan.onRejoin;
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.update(
					chan,
					{
						onJoin: _elm_lang$core$Maybe$Just(onJoin_),
						onRejoin: _elm_lang$core$Maybe$Just(onJoin_)
					});
			} else {
				return _elm_lang$core$Native_Utils.update(
					chan,
					{
						onJoin: _elm_lang$core$Maybe$Just(onJoin_)
					});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$on = F3(
		function (event, cb, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					on: A3(_elm_lang$core$Dict$insert, event, cb, chan.on)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$withPayload = F2(
		function (payload_, chan) {
			return _elm_lang$core$Native_Utils.update(
				chan,
				{
					payload: _elm_lang$core$Maybe$Just(payload_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Channel$init = function (topic) {
		return {topic: topic, payload: _elm_lang$core$Maybe$Nothing, onJoin: _elm_lang$core$Maybe$Nothing, onJoinError: _elm_lang$core$Maybe$Nothing, onDisconnect: _elm_lang$core$Maybe$Nothing, onError: _elm_lang$core$Maybe$Nothing, onRejoin: _elm_lang$core$Maybe$Nothing, onLeave: _elm_lang$core$Maybe$Nothing, onLeaveError: _elm_lang$core$Maybe$Nothing, on: _elm_lang$core$Dict$empty, debug: false};
	};
	var _saschatimme$elm_phoenix$Phoenix_Channel$PhoenixChannel = function (a) {
		return function (b) {
			return function (c) {
				return function (d) {
					return function (e) {
						return function (f) {
							return function (g) {
								return function (h) {
									return function (i) {
										return function (j) {
											return function (k) {
												return {topic: a, payload: b, onJoin: c, onJoinError: d, onDisconnect: e, onError: f, onRejoin: g, onLeave: h, onLeaveError: i, on: j, debug: k};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};

	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$get = F3(
		function (endpoint, topic, channelsDict) {
			return A3(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$getIn, endpoint, topic, channelsDict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$getState = F3(
		function (endpoint, topic, channelsDict) {
			return A2(
				_elm_lang$core$Maybe$map,
				function (_p0) {
					var _p1 = _p0;
					return _p1.state;
				},
				A3(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$get, endpoint, topic, channelsDict));
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$leaveMessage = function (_p2) {
		var _p3 = _p2;
		return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$init, _p3.channel.topic, 'phx_leave');
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$joinMessage = function (_p4) {
		var _p5 = _p4;
		var _p7 = _p5.channel;
		var base = A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$init, _p7.topic, 'phx_join');
		var _p6 = _p7.payload;
		if (_p6.ctor === 'Nothing') {
			return base;
		} else {
			return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$payload, _p6._0, base);
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel = F2(
		function (a, b) {
			return {state: a, channel: b};
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$map = F2(
		function (func, _p8) {
			var _p9 = _p8;
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel,
				_p9.state,
				A2(_saschatimme$elm_phoenix$Phoenix_Channel$map, func, _p9.channel));
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateState = F2(
		function (state, internalChannel) {
			if (internalChannel.channel.debug) {
				var _p10 = function () {
					var _p11 = {ctor: '_Tuple2', _0: state, _1: internalChannel.state};
					_v5_5:
					do {
						if (_p11.ctor === '_Tuple2') {
							switch (_p11._0.ctor) {
								case 'Closed':
									if (_p11._1.ctor === 'Closed') {
										return state;
									} else {
										break _v5_5;
									}
								case 'Joining':
									if (_p11._1.ctor === 'Joining') {
										return state;
									} else {
										break _v5_5;
									}
								case 'Joined':
									if (_p11._1.ctor === 'Joined') {
										return state;
									} else {
										break _v5_5;
									}
								case 'Errored':
									if (_p11._1.ctor === 'Errored') {
										return state;
									} else {
										break _v5_5;
									}
								default:
									if (_p11._1.ctor === 'Disconnected') {
										return state;
									} else {
										break _v5_5;
									}
							}
						} else {
							break _v5_5;
						}
					} while(false);
					return A2(
						_elm_lang$core$Debug$log,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Channel \"',
							A2(_elm_lang$core$Basics_ops['++'], internalChannel.channel.topic, '\"')),
						state);
				}();
				return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel, state, internalChannel.channel);
			} else {
				return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel, state, internalChannel.channel);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$insertState = F4(
		function (endpoint, topic, state, dict) {
			var update = _elm_lang$core$Maybe$map(
				_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateState(state));
			return A4(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$updateIn, endpoint, topic, update, dict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$updatePayload = F2(
		function (payload, _p12) {
			var _p13 = _p12;
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel,
				_p13.state,
				_elm_lang$core$Native_Utils.update(
					_p13.channel,
					{payload: payload}));
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateOn = F2(
		function (on, _p14) {
			var _p15 = _p14;
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel,
				_p15.state,
				_elm_lang$core$Native_Utils.update(
					_p15.channel,
					{on: on}));
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Disconnected = {ctor: 'Disconnected'};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Errored = {ctor: 'Errored'};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Joined = {ctor: 'Joined'};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Joining = {ctor: 'Joining'};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Closed = {ctor: 'Closed'};

	var _saschatimme$elm_phoenix$Phoenix_Socket$map = F2(
		function (func, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					onClose: A2(
						_elm_lang$core$Maybe$map,
						F2(
							function (x, y) {
								return function (_p0) {
									return x(
										y(_p0));
								};
							})(func),
						socket.onClose),
					onNormalClose: A2(_elm_lang$core$Maybe$map, func, socket.onNormalClose),
					onAbnormalClose: A2(_elm_lang$core$Maybe$map, func, socket.onAbnormalClose)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$defaultReconnectTimer = function (failedAttempts) {
		return (_elm_lang$core$Native_Utils.cmp(failedAttempts, 1) < 0) ? 0 : _elm_lang$core$Basics$toFloat(
			10 * Math.pow(2, failedAttempts));
	};
	var _saschatimme$elm_phoenix$Phoenix_Socket$onClose = F2(
		function (onClose_, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					onClose: _elm_lang$core$Maybe$Just(onClose_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$onNormalClose = F2(
		function (onNormalClose_, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					onNormalClose: _elm_lang$core$Maybe$Just(onNormalClose_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$onAbnormalClose = F2(
		function (onAbnormalClose_, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					onAbnormalClose: _elm_lang$core$Maybe$Just(onAbnormalClose_)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$withDebug = function (socket) {
		return _elm_lang$core$Native_Utils.update(
			socket,
			{debug: true});
	};
	var _saschatimme$elm_phoenix$Phoenix_Socket$reconnectTimer = F2(
		function (timerFunc, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{reconnectTimer: timerFunc});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$withoutHeartbeat = function (socket) {
		return _elm_lang$core$Native_Utils.update(
			socket,
			{withoutHeartbeat: true});
	};
	var _saschatimme$elm_phoenix$Phoenix_Socket$heartbeatIntervallSeconds = F2(
		function (intervall, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					heartbeatIntervall: _elm_lang$core$Basics$toFloat(intervall) * _elm_lang$core$Time$second
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$withParams = F2(
		function (params, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{params: params});
		});
	var _saschatimme$elm_phoenix$Phoenix_Socket$init = function (endpoint) {
		return {
			endpoint: endpoint,
			params: {ctor: '[]'},
			heartbeatIntervall: 30 * _elm_lang$core$Time$second,
			withoutHeartbeat: false,
			reconnectTimer: _saschatimme$elm_phoenix$Phoenix_Socket$defaultReconnectTimer,
			debug: false,
			onClose: _elm_lang$core$Maybe$Nothing,
			onAbnormalClose: _elm_lang$core$Maybe$Nothing,
			onNormalClose: _elm_lang$core$Maybe$Nothing
		};
	};
	var _saschatimme$elm_phoenix$Phoenix_Socket$PhoenixSocket = F9(
		function (a, b, c, d, e, f, g, h, i) {
			return {endpoint: a, params: b, heartbeatIntervall: c, withoutHeartbeat: d, reconnectTimer: e, debug: f, onClose: g, onAbnormalClose: h, onNormalClose: i};
		});

	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$debugLogMessage = F2(
		function (_p0, msg) {
			var _p1 = _p0;
			return _p1.socket.debug ? A2(_elm_lang$core$Debug$log, 'Received', msg) : msg;
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$ref = function (_p2) {
		var _p3 = _p2;
		var _p4 = _p3.connection;
		if (_p4.ctor === 'Connected') {
			return _elm_lang$core$Maybe$Just(_p4._1);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$get = F2(
		function (endpoint, dict) {
			return A2(_elm_lang$core$Dict$get, endpoint, dict);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$getRef = F2(
		function (endpoint, dict) {
			return A2(
				_elm_lang$core$Maybe$andThen,
				_saschatimme$elm_phoenix$Phoenix_Internal_Socket$ref,
				A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$get, endpoint, dict));
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$close = function (_p5) {
		var _p6 = _p5;
		var _p7 = _p6.connection;
		switch (_p7.ctor) {
			case 'Opening':
				return _elm_lang$core$Process$kill(_p7._1);
			case 'Connected':
				return _elm_lang$websocket$WebSocket_LowLevel$close(_p7._0);
			default:
				return _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'});
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$after = function (backoff) {
		return (_elm_lang$core$Native_Utils.cmp(backoff, 1) < 0) ? _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'}) : _elm_lang$core$Process$sleep(backoff);
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$open = F2(
		function (_p8, settings) {
			var _p9 = _p8;
			var _p12 = _p9.socket;
			var query = A2(
				_elm_lang$core$String$join,
				'&',
				A2(
					_elm_lang$core$List$map,
					function (_p10) {
						var _p11 = _p10;
						return A2(
							_elm_lang$core$Basics_ops['++'],
							_p11._0,
							A2(_elm_lang$core$Basics_ops['++'], '=', _p11._1));
					},
					_p12.params));
			var url = A2(_elm_lang$core$String$contains, '?', _p12.endpoint) ? A2(
				_elm_lang$core$Basics_ops['++'],
				_p12.endpoint,
				A2(_elm_lang$core$Basics_ops['++'], '&', query)) : A2(
				_elm_lang$core$Basics_ops['++'],
				_p12.endpoint,
				A2(_elm_lang$core$Basics_ops['++'], '?', query));
			return A2(_elm_lang$websocket$WebSocket_LowLevel$open, url, settings);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$push = F2(
		function (message, _p13) {
			var _p14 = _p13;
			var _p19 = _p14.socket;
			var _p15 = _p14.connection;
			if (_p15.ctor === 'Connected') {
				var _p18 = _p15._1;
				var message_ = _p19.debug ? A2(
					_elm_lang$core$Debug$log,
					'Send',
					A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$ref, _p18, message)) : A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$ref, _p18, message);
				return A2(
					_elm_lang$core$Task$map,
					function (maybeBadSend) {
						var _p16 = maybeBadSend;
						if (_p16.ctor === 'Nothing') {
							return _elm_lang$core$Maybe$Just(_p18);
						} else {
							if (_p19.debug) {
								var _p17 = A2(_elm_lang$core$Debug$log, 'BadSend', _p16._0);
								return _elm_lang$core$Maybe$Nothing;
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						}
					},
					A2(
						_elm_lang$websocket$WebSocket_LowLevel$send,
						_p15._0,
						_saschatimme$elm_phoenix$Phoenix_Internal_Message$encode(message_)));
			} else {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$isOpening = function (internalSocket) {
		var _p20 = internalSocket.connection;
		if (_p20.ctor === 'Opening') {
			return true;
		} else {
			return false;
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$InternalSocket = F2(
		function (a, b) {
			return {connection: a, socket: b};
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$Connected = F2(
		function (a, b) {
			return {ctor: 'Connected', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$connected = F2(
		function (ws, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					connection: A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$Connected, ws, 0)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$increaseRef = function (socket) {
		var _p21 = socket.connection;
		if (_p21.ctor === 'Connected') {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					connection: A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$Connected, _p21._0, _p21._1 + 1)
				});
		} else {
			return socket;
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$Opening = F2(
		function (a, b) {
			return {ctor: 'Opening', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$opening = F3(
		function (backoff, pid, socket) {
			return _elm_lang$core$Native_Utils.update(
				socket,
				{
					connection: A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$Opening, backoff, pid)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$resetBackoff = function (connection) {
		var _p22 = connection;
		if (_p22.ctor === 'Opening') {
			return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$Opening, 0, _p22._1);
		} else {
			return connection;
		}
	};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$update = F2(
		function (nextSocket, _p23) {
			var _p24 = _p23;
			var _p25 = _p24.connection;
			var updatedConnection = (!_elm_lang$core$Native_Utils.eq(nextSocket.params, _p24.socket.params)) ? _saschatimme$elm_phoenix$Phoenix_Internal_Socket$resetBackoff(_p25) : _p25;
			return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$InternalSocket, updatedConnection, nextSocket);
		});
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$Closed = {ctor: 'Closed'};
	var _saschatimme$elm_phoenix$Phoenix_Internal_Socket$internalSocket = function (socket) {
		return {connection: _saschatimme$elm_phoenix$Phoenix_Internal_Socket$Closed, socket: socket};
	};

	var _saschatimme$elm_phoenix$Phoenix$after = function (backoff) {
		return (_elm_lang$core$Native_Utils.cmp(backoff, 1) < 0) ? _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'}) : _elm_lang$core$Process$sleep(backoff);
	};
	var _saschatimme$elm_phoenix$Phoenix$heartbeatMessage = A2(_saschatimme$elm_phoenix$Phoenix_Internal_Message$init, 'phoenix', 'heartbeat');
	var _saschatimme$elm_phoenix$Phoenix$handleChannelDisconnect = F3(
		function (router, endpoint, state) {
			var _p0 = A2(_elm_lang$core$Dict$get, endpoint, state.channels);
			if (_p0.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var _p8 = _p0._0;
				var updateChannel = F2(
					function (_p1, channel) {
						var _p2 = channel.state;
						if (_p2.ctor === 'Errored') {
							return channel;
						} else {
							return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateState, _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Disconnected, channel);
						}
					});
				var updatedEndpointChannels = A2(_elm_lang$core$Dict$map, updateChannel, _p8);
				var notifyApp = function (_p3) {
					var _p4 = _p3;
					var _p5 = _p4.state;
					if (_p5.ctor === 'Joined') {
						var _p6 = _p4.channel.onDisconnect;
						if (_p6.ctor === 'Nothing') {
							return _elm_lang$core$Task$succeed(
								{ctor: '_Tuple0'});
						} else {
							return A2(_elm_lang$core$Platform$sendToApp, router, _p6._0);
						}
					} else {
						return _elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'});
					}
				};
				var notify = A3(
					_elm_lang$core$Dict$foldl,
					F3(
						function (_p7, channel, task) {
							return A2(
								_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
								task,
								notifyApp(channel));
						}),
					_elm_lang$core$Task$succeed(
						{ctor: '_Tuple0'}),
					_p8);
				return A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
					notify,
					_elm_lang$core$Task$succeed(
						_elm_lang$core$Native_Utils.update(
							state,
							{
								channels: A3(_elm_lang$core$Dict$insert, endpoint, updatedEndpointChannels, state.channels)
							})));
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$getEventCb = F3(
		function (endpoint, message, channels) {
			var _p9 = A3(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$getIn, endpoint, message.topic, channels);
			if (_p9.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(_elm_lang$core$Dict$get, message.event, _p9._0.channel.on);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$dispatchMessage = F4(
		function (router, endpoint, message, channels) {
			var _p10 = A3(_saschatimme$elm_phoenix$Phoenix$getEventCb, endpoint, message, channels);
			if (_p10.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'});
			} else {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p10._0(message.payload));
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$handleSelfcallback = F4(
		function (router, endpoint, message, selfCallbacks) {
			var _p11 = message.ref;
			if (_p11.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(selfCallbacks);
			} else {
				var _p13 = _p11._0;
				var _p12 = A2(_elm_lang$core$Dict$get, _p13, selfCallbacks);
				if (_p12.ctor === 'Nothing') {
					return _elm_lang$core$Task$succeed(selfCallbacks);
				} else {
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
						A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							_p12._0(message)),
						_elm_lang$core$Task$succeed(
							A2(_elm_lang$core$Dict$remove, _p13, selfCallbacks)));
				}
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$insertSelfCallback = F3(
		function (ref, maybeSelfCb, state) {
			var _p14 = maybeSelfCb;
			if (_p14.ctor === 'Nothing') {
				return state;
			} else {
				return _elm_lang$core$Native_Utils.update(
					state,
					{
						selfCallbacks: A3(_elm_lang$core$Dict$insert, ref, _p14._0, state.selfCallbacks)
					});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$insertSocket = F3(
		function (endpoint, socket, state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{
					sockets: A3(_elm_lang$core$Dict$insert, endpoint, socket, state.sockets)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix$pushSocket_ = F4(
		function (endpoint, message, maybeSelfCb, state) {
			var _p15 = A2(_elm_lang$core$Dict$get, endpoint, state.sockets);
			if (_p15.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var _p17 = _p15._0;
				return A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
					A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$push, message, _p17),
					function (maybeRef) {
						var _p16 = maybeRef;
						if (_p16.ctor === 'Nothing') {
							return _elm_lang$core$Task$succeed(state);
						} else {
							return _elm_lang$core$Task$succeed(
								A3(
									_saschatimme$elm_phoenix$Phoenix$insertSelfCallback,
									_p16._0,
									maybeSelfCb,
									A3(
										_saschatimme$elm_phoenix$Phoenix$insertSocket,
										endpoint,
										_saschatimme$elm_phoenix$Phoenix_Internal_Socket$increaseRef(_p17),
										state)));
						}
					});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$pushSocket = F4(
		function (endpoint, message, selfCb, state) {
			var queuedState = _elm_lang$core$Task$succeed(
				_elm_lang$core$Native_Utils.update(
					state,
					{
						channelQueues: A4(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$updateIn,
							endpoint,
							message.topic,
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$add(
								{ctor: '_Tuple2', _0: message, _1: selfCb}),
							state.channelQueues)
					}));
			var afterSocketPush = F2(
				function (socket, maybeRef) {
					var _p18 = maybeRef;
					if (_p18.ctor === 'Nothing') {
						return queuedState;
					} else {
						return _elm_lang$core$Task$succeed(
							A3(
								_saschatimme$elm_phoenix$Phoenix$insertSelfCallback,
								_p18._0,
								selfCb,
								A3(
									_saschatimme$elm_phoenix$Phoenix$insertSocket,
									endpoint,
									_saschatimme$elm_phoenix$Phoenix_Internal_Socket$increaseRef(socket),
									state)));
					}
				});
			var _p19 = A2(_elm_lang$core$Dict$get, endpoint, state.sockets);
			if (_p19.ctor === 'Nothing') {
				return queuedState;
			} else {
				var _p24 = _p19._0;
				var _p20 = A3(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$get, endpoint, message.topic, state.channels);
				if (_p20.ctor === 'Nothing') {
					var _p21 = A2(_elm_lang$core$Debug$log, 'Queued message (no channel exists)', message);
					return queuedState;
				} else {
					var _p22 = _p20._0.state;
					if (_p22.ctor === 'Joined') {
						return A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
							A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$push, message, _p24),
							afterSocketPush(_p24));
					} else {
						var _p23 = A2(_elm_lang$core$Debug$log, 'Queued message (channel not joined)', message);
						return queuedState;
					}
				}
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$processQueue = F3(
		function (endpoint, messages, state) {
			var _p25 = messages;
			if (_p25.ctor === '[]') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				return A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
					A4(_saschatimme$elm_phoenix$Phoenix$pushSocket, endpoint, _p25._0._0, _p25._0._1, state),
					A2(_saschatimme$elm_phoenix$Phoenix$processQueue, endpoint, _p25._1));
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$removeChannelQueue = F3(
		function (endpoint, topic, state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{
					channelQueues: A3(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$removeIn, endpoint, topic, state.channelQueues)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix$updateSelfCallbacks = F2(
		function (selfCallbacks, state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{selfCallbacks: selfCallbacks});
		});
	var _saschatimme$elm_phoenix$Phoenix$updateChannels = F2(
		function (channels, state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{channels: channels});
		});
	var _saschatimme$elm_phoenix$Phoenix$updateSocket = F3(
		function (endpoint, socket, state) {
			return _elm_lang$core$Native_Utils.update(
				state,
				{
					sockets: A3(_elm_lang$core$Dict$insert, endpoint, socket, state.sockets)
				});
		});
	var _saschatimme$elm_phoenix$Phoenix$buildChannelsDict = F2(
		function (subs, dict) {
			var _p26 = subs;
			if (_p26.ctor === '[]') {
				return dict;
			} else {
				var internalChan = function (chan) {
					return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$InternalChannel, _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Closed, chan);
				};
				var build = F2(
					function (chan, dict_) {
						return A2(
							_saschatimme$elm_phoenix$Phoenix$buildChannelsDict,
							_p26._1,
							A4(
								_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$insertIn,
								_p26._0._0.endpoint,
								chan.topic,
								internalChan(chan),
								dict_));
					});
				return A3(_elm_lang$core$List$foldl, build, dict, _p26._0._1);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$buildSocketsDict = function (subs) {
		var insert = F2(
			function (sub, dict) {
				var _p27 = sub;
				var _p28 = _p27._0;
				return A3(_elm_lang$core$Dict$insert, _p28.endpoint, _p28, dict);
			});
		return A3(_elm_lang$core$List$foldl, insert, _elm_lang$core$Dict$empty, subs);
	};
	var _saschatimme$elm_phoenix$Phoenix$subscription = _elm_lang$core$Native_Platform.leaf('Phoenix');
	var _saschatimme$elm_phoenix$Phoenix$command = _elm_lang$core$Native_Platform.leaf('Phoenix');
	var _saschatimme$elm_phoenix$Phoenix$State = F4(
		function (a, b, c, d) {
			return {sockets: a, channels: b, selfCallbacks: c, channelQueues: d};
		});
	var _saschatimme$elm_phoenix$Phoenix$init = _elm_lang$core$Task$succeed(
		A4(_saschatimme$elm_phoenix$Phoenix$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
	var _saschatimme$elm_phoenix$Phoenix$Connect = F2(
		function (a, b) {
			return {ctor: 'Connect', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$connect = F2(
		function (socket, channels) {
			return _saschatimme$elm_phoenix$Phoenix$subscription(
				A2(_saschatimme$elm_phoenix$Phoenix$Connect, socket, channels));
		});
	var _saschatimme$elm_phoenix$Phoenix$subMap = F2(
		function (func, sub) {
			var _p29 = sub;
			return A2(
				_saschatimme$elm_phoenix$Phoenix$Connect,
				A2(_saschatimme$elm_phoenix$Phoenix_Socket$map, func, _p29._0),
				A2(
					_elm_lang$core$List$map,
					_saschatimme$elm_phoenix$Phoenix_Channel$map(func),
					_p29._1));
		});
	var _saschatimme$elm_phoenix$Phoenix$Send = F2(
		function (a, b) {
			return {ctor: 'Send', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$push = F2(
		function (endpoint, push_) {
			return _saschatimme$elm_phoenix$Phoenix$command(
				A2(_saschatimme$elm_phoenix$Phoenix$Send, endpoint, push_));
		});
	var _saschatimme$elm_phoenix$Phoenix$cmdMap = F2(
		function (func, cmd) {
			var _p30 = cmd;
			return A2(
				_saschatimme$elm_phoenix$Phoenix$Send,
				_p30._0,
				A2(_saschatimme$elm_phoenix$Phoenix_Push$map, func, _p30._1));
		});
	var _saschatimme$elm_phoenix$Phoenix$PushResponse = F2(
		function (a, b) {
			return {ctor: 'PushResponse', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$sendPushsHelp = F2(
		function (cmds, state) {
			var _p31 = cmds;
			if (_p31.ctor === '[]') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var _p32 = _p31._0._1;
				var message = _saschatimme$elm_phoenix$Phoenix_Internal_Message$fromPush(_p32);
				return A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
					A4(
						_saschatimme$elm_phoenix$Phoenix$pushSocket,
						_p31._0._0,
						message,
						_elm_lang$core$Maybe$Just(
							_saschatimme$elm_phoenix$Phoenix$PushResponse(_p32)),
						state),
					_saschatimme$elm_phoenix$Phoenix$sendPushsHelp(_p31._1));
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$SendHeartbeat = function (a) {
		return {ctor: 'SendHeartbeat', _0: a};
	};
	var _saschatimme$elm_phoenix$Phoenix$heartbeat = F3(
		function (router, endpoint, state) {
			var _p33 = A2(_elm_lang$core$Dict$get, endpoint, state.sockets);
			if (_p33.ctor === 'Just') {
				var _p34 = _p33._0.socket;
				return _p34.withoutHeartbeat ? _elm_lang$core$Task$succeed(state) : A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
					_elm_lang$core$Process$spawn(
						A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
							_elm_lang$core$Process$sleep(_p34.heartbeatIntervall),
							A2(
								_elm_lang$core$Platform$sendToSelf,
								router,
								_saschatimme$elm_phoenix$Phoenix$SendHeartbeat(endpoint)))),
					A4(_saschatimme$elm_phoenix$Phoenix$pushSocket_, endpoint, _saschatimme$elm_phoenix$Phoenix$heartbeatMessage, _elm_lang$core$Maybe$Nothing, state));
			} else {
				return _elm_lang$core$Task$succeed(state);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$GoodJoin = F2(
		function (a, b) {
			return {ctor: 'GoodJoin', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$handleChannelJoinReply = F6(
		function (router, endpoint, topic, message, prevState, channels) {
			var newChannels = function (state) {
				return _elm_lang$core$Task$succeed(
					A4(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$insertState, endpoint, topic, state, channels));
			};
			var handlePayload = F2(
				function (_p35, payload) {
					var _p36 = _p35;
					var _p43 = _p36.channel;
					var _p37 = payload;
					if (_p37.ctor === 'Err') {
						var _p38 = _p43.onJoinError;
						if (_p38.ctor === 'Nothing') {
							return newChannels(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$Errored);
						} else {
							return A2(
								_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
								A2(
									_elm_lang$core$Platform$sendToApp,
									router,
									_p38._0(_p37._0)),
								newChannels(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$Errored));
						}
					} else {
						var _p42 = _p37._0;
						var join = A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
							A2(
								_elm_lang$core$Platform$sendToSelf,
								router,
								A2(_saschatimme$elm_phoenix$Phoenix$GoodJoin, endpoint, topic)),
							newChannels(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$Joined));
						var _p39 = prevState;
						if (_p39.ctor === 'Disconnected') {
							var _p40 = _p43.onRejoin;
							if (_p40.ctor === 'Nothing') {
								return join;
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p40._0(_p42)),
									join);
							}
						} else {
							var _p41 = _p43.onJoin;
							if (_p41.ctor === 'Nothing') {
								return join;
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p41._0(_p42)),
									join);
							}
						}
					}
				});
			var maybePayload = _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$decodeReplyPayload(message.payload);
			var maybeChannel = A3(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$get, endpoint, topic, channels);
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Task$succeed(channels),
				A3(_elm_lang$core$Maybe$map2, handlePayload, maybeChannel, maybePayload));
		});
	var _saschatimme$elm_phoenix$Phoenix$ChannelJoinReply = F4(
		function (a, b, c, d) {
			return {ctor: 'ChannelJoinReply', _0: a, _1: b, _2: c, _3: d};
		});
	var _saschatimme$elm_phoenix$Phoenix$sendJoinHelper = F3(
		function (endpoint, channels, state) {
			var _p44 = channels;
			if (_p44.ctor === '[]') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				var _p45 = _p44._0;
				var newChannel = A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateState, _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Joining, _p45);
				var newChannels = A4(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$insertIn, endpoint, _p45.channel.topic, newChannel, state.channels);
				var message = _saschatimme$elm_phoenix$Phoenix_Internal_Channel$joinMessage(_p45);
				var selfCb = A3(_saschatimme$elm_phoenix$Phoenix$ChannelJoinReply, endpoint, _p45.channel.topic, _p45.state);
				return A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
					A4(
						_saschatimme$elm_phoenix$Phoenix$pushSocket_,
						endpoint,
						message,
						_elm_lang$core$Maybe$Just(selfCb),
						A2(_saschatimme$elm_phoenix$Phoenix$updateChannels, newChannels, state)),
					function (newState) {
						return A3(_saschatimme$elm_phoenix$Phoenix$sendJoinHelper, endpoint, _p44._1, newState);
					});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$handlePhoenixMessage = F4(
		function (router, endpoint, message, state) {
			var _p46 = message.event;
			switch (_p46) {
				case 'phx_error':
					var _p47 = A3(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$getIn, endpoint, message.topic, state.channels);
					if (_p47.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p49 = _p47._0;
						var sendToApp = function () {
							var _p48 = _p49.channel.onError;
							if (_p48.ctor === 'Nothing') {
								return _elm_lang$core$Task$succeed(
									{ctor: '_Tuple0'});
							} else {
								return A2(_elm_lang$core$Platform$sendToApp, router, _p48._0);
							}
						}();
						var newChannel = A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateState, _saschatimme$elm_phoenix$Phoenix_Internal_Channel$Errored, _p49);
						return A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
							sendToApp,
							A3(
								_saschatimme$elm_phoenix$Phoenix$sendJoinHelper,
								endpoint,
								{
									ctor: '::',
									_0: newChannel,
									_1: {ctor: '[]'}
								},
								state));
					}
				case 'phx_close':
					return _elm_lang$core$Task$succeed(state);
				default:
					return _elm_lang$core$Task$succeed(state);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$rejoinAllChannels = F2(
		function (endpoint, state) {
			var _p50 = A2(_elm_lang$core$Dict$get, endpoint, state.channels);
			if (_p50.ctor === 'Nothing') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				return A3(
					_saschatimme$elm_phoenix$Phoenix$sendJoinHelper,
					endpoint,
					_elm_lang$core$Dict$values(_p50._0),
					state);
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$ChannelLeaveReply = F3(
		function (a, b, c) {
			return {ctor: 'ChannelLeaveReply', _0: a, _1: b, _2: c};
		});
	var _saschatimme$elm_phoenix$Phoenix$LeaveChannel = F2(
		function (a, b) {
			return {ctor: 'LeaveChannel', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$sendLeaveChannel = F3(
		function (router, endpoint, internalChannel) {
			var _p51 = internalChannel.state;
			if (_p51.ctor === 'Joined') {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					A2(_saschatimme$elm_phoenix$Phoenix$LeaveChannel, endpoint, internalChannel));
			} else {
				return _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'});
			}
		});
	var _saschatimme$elm_phoenix$Phoenix$JoinChannel = F2(
		function (a, b) {
			return {ctor: 'JoinChannel', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$sendJoinChannel = F3(
		function (router, endpoint, internalChannel) {
			return A2(
				_elm_lang$core$Platform$sendToSelf,
				router,
				A2(_saschatimme$elm_phoenix$Phoenix$JoinChannel, endpoint, internalChannel));
		});
	var _saschatimme$elm_phoenix$Phoenix$handleEndpointChannelsUpdate = F4(
		function (router, endpoint, definedChannels, stateChannels) {
			var rightStep = F3(
				function (topic, state, getNewChannels) {
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
						A3(_saschatimme$elm_phoenix$Phoenix$sendLeaveChannel, router, endpoint, state),
						getNewChannels);
				});
			var bothStep = F4(
				function (topic, defined, state, getNewChannels) {
					var channel = A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updateOn,
						defined.channel.on,
						A2(_saschatimme$elm_phoenix$Phoenix_Internal_Channel$updatePayload, defined.channel.payload, state));
					return A2(
						_elm_lang$core$Task$map,
						A2(_elm_lang$core$Dict$insert, topic, channel),
						getNewChannels);
				});
			var leftStep = F3(
				function (topic, defined, getNewChannels) {
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
						A3(_saschatimme$elm_phoenix$Phoenix$sendJoinChannel, router, endpoint, defined),
						A2(
							_elm_lang$core$Task$map,
							A2(_elm_lang$core$Dict$insert, topic, defined),
							getNewChannels));
				});
			return A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				definedChannels,
				stateChannels,
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
		});
	var _saschatimme$elm_phoenix$Phoenix$handleChannelsUpdate = F3(
		function (router, definedChannels, internalChannels) {
			var rightStep = F3(
				function (endpoint, stateEndpointChannels, getNewChannels) {
					var sendLeave = A3(
						_elm_lang$core$List$foldl,
						F2(
							function (channel, task) {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									task,
									A3(_saschatimme$elm_phoenix$Phoenix$sendLeaveChannel, router, endpoint, channel));
							}),
						_elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'}),
						_elm_lang$core$Dict$values(stateEndpointChannels));
					return A2(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'], sendLeave, getNewChannels);
				});
			var bothStep = F4(
				function (endpoint, definedEndpointChannels, stateEndpointChannels, getNewChannels) {
					var getEndpointChannels = A4(_saschatimme$elm_phoenix$Phoenix$handleEndpointChannelsUpdate, router, endpoint, definedEndpointChannels, stateEndpointChannels);
					return A3(
						_elm_lang$core$Task$map2,
						F2(
							function (endpointChannels, newChannels) {
								return A3(_elm_lang$core$Dict$insert, endpoint, endpointChannels, newChannels);
							}),
						getEndpointChannels,
						getNewChannels);
				});
			var leftStep = F3(
				function (endpoint, definedEndpointChannels, getNewChannels) {
					var insert = function (newChannels) {
						return _elm_lang$core$Task$succeed(
							A3(_elm_lang$core$Dict$insert, endpoint, definedEndpointChannels, newChannels));
					};
					var sendJoin = A3(
						_elm_lang$core$List$foldl,
						F2(
							function (channel, task) {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									task,
									A3(_saschatimme$elm_phoenix$Phoenix$sendJoinChannel, router, endpoint, channel));
							}),
						_elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'}),
						_elm_lang$core$Dict$values(definedEndpointChannels));
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
						A2(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'], sendJoin, getNewChannels),
						insert);
				});
			return A6(
				_elm_lang$core$Dict$merge,
				leftStep,
				bothStep,
				rightStep,
				definedChannels,
				internalChannels,
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
		});
	var _saschatimme$elm_phoenix$Phoenix$Register = {ctor: 'Register'};
	var _saschatimme$elm_phoenix$Phoenix$BadOpen = F2(
		function (a, b) {
			return {ctor: 'BadOpen', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$GoodOpen = F2(
		function (a, b) {
			return {ctor: 'GoodOpen', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$Die = F2(
		function (a, b) {
			return {ctor: 'Die', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$Receive = F2(
		function (a, b) {
			return {ctor: 'Receive', _0: a, _1: b};
		});
	var _saschatimme$elm_phoenix$Phoenix$open = F2(
		function (socket, router) {
			var onMessage = F2(
				function (_p52, msg) {
					var _p53 = _saschatimme$elm_phoenix$Phoenix_Internal_Message$decode(msg);
					if (_p53.ctor === 'Ok') {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(
								_saschatimme$elm_phoenix$Phoenix$Receive,
								socket.socket.endpoint,
								A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$debugLogMessage, socket, _p53._0)));
					} else {
						return _elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'});
					}
				});
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Internal_Socket$open,
				socket,
				{
					onMessage: onMessage,
					onClose: function (details) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_saschatimme$elm_phoenix$Phoenix$Die, socket.socket.endpoint, details));
					}
				});
		});
	var _saschatimme$elm_phoenix$Phoenix$attemptOpen = F3(
		function (router, backoff, _p54) {
			var _p55 = _p54;
			var _p56 = _p55.socket;
			var badOpen = function (details) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					A2(_saschatimme$elm_phoenix$Phoenix$BadOpen, _p56.endpoint, details));
			};
			var goodOpen = function (ws) {
				return A2(
					_elm_lang$core$Platform$sendToSelf,
					router,
					A2(_saschatimme$elm_phoenix$Phoenix$GoodOpen, _p56.endpoint, ws));
			};
			var actuallyAttemptOpen = A2(
				_elm_lang$core$Task$onError,
				badOpen,
				A2(
					_elm_lang$core$Task$andThen,
					goodOpen,
					A2(_saschatimme$elm_phoenix$Phoenix$open, _p55, router)));
			return _elm_lang$core$Process$spawn(
				A2(
					_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
					_saschatimme$elm_phoenix$Phoenix$after(backoff),
					actuallyAttemptOpen));
		});
	var _saschatimme$elm_phoenix$Phoenix$handleSocketsUpdate = F3(
		function (router, definedSockets, stateSockets) {
			var removedSocketsStep = F3(
				function (endpoint, stateSocket, taskChain) {
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
						_saschatimme$elm_phoenix$Phoenix_Internal_Socket$close(stateSocket),
						taskChain);
				});
			var retainedSocketsStep = F4(
				function (endpoint, definedSocket, stateSocket, taskChain) {
					return A2(
						_elm_lang$core$Task$map,
						A2(
							_elm_lang$core$Dict$insert,
							endpoint,
							A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$update, definedSocket, stateSocket)),
						taskChain);
				});
			var addedSocketsStep = F3(
				function (endpoint, definedSocket, taskChain) {
					var socket = _saschatimme$elm_phoenix$Phoenix_Internal_Socket$internalSocket(definedSocket);
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
						taskChain,
						function (addedSockets) {
							return A2(
								_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
								A3(_saschatimme$elm_phoenix$Phoenix$attemptOpen, router, 0, socket),
								function (pid) {
									return _elm_lang$core$Task$succeed(
										A3(
											_elm_lang$core$Dict$insert,
											endpoint,
											A3(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$opening, 0, pid, socket),
											addedSockets));
								});
						});
				});
			return A6(
				_elm_lang$core$Dict$merge,
				addedSocketsStep,
				retainedSocketsStep,
				removedSocketsStep,
				definedSockets,
				stateSockets,
				_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
		});
	var _saschatimme$elm_phoenix$Phoenix$onEffects = F4(
		function (router, cmds, subs, state) {
			var definedChannels = A2(_saschatimme$elm_phoenix$Phoenix$buildChannelsDict, subs, _elm_lang$core$Dict$empty);
			var definedSockets = _saschatimme$elm_phoenix$Phoenix$buildSocketsDict(subs);
			var updateState = function (newState) {
				var getNewSockets = A3(_saschatimme$elm_phoenix$Phoenix$handleSocketsUpdate, router, definedSockets, newState.sockets);
				var getNewChannels = A3(_saschatimme$elm_phoenix$Phoenix$handleChannelsUpdate, router, definedChannels, newState.channels);
				return A3(
					_elm_lang$core$Task$map2,
					F2(
						function (newSockets, newChannels) {
							return _elm_lang$core$Native_Utils.update(
								newState,
								{sockets: newSockets, channels: newChannels});
						}),
					getNewSockets,
					getNewChannels);
			};
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
				A2(_saschatimme$elm_phoenix$Phoenix$sendPushsHelp, cmds, state),
				function (newState) {
					return updateState(newState);
				});
		});
	var _saschatimme$elm_phoenix$Phoenix$onSelfMsg = F3(
		function (router, selfMsg, state) {
			var _p57 = selfMsg;
			switch (_p57.ctor) {
				case 'GoodOpen':
					var _p61 = _p57._0;
					var _p58 = A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$get, _p61, state.sockets);
					if (_p58.ctor === 'Just') {
						var _p60 = _p58._0;
						var state_ = A3(
							_saschatimme$elm_phoenix$Phoenix$insertSocket,
							_p61,
							A2(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$connected, _p57._1, _p60),
							state);
						var _p59 = _p60.socket.debug ? A2(_elm_lang$core$Debug$log, 'WebSocket connected with ', _p61) : _p61;
						return A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
							A3(_saschatimme$elm_phoenix$Phoenix$heartbeat, router, _p61, state_),
							function (newState) {
								return A2(_saschatimme$elm_phoenix$Phoenix$rejoinAllChannels, _p61, newState);
							});
					} else {
						return _elm_lang$core$Task$succeed(state);
					}
				case 'BadOpen':
					var _p67 = _p57._0;
					var _p66 = _p57._1;
					var _p62 = A2(_elm_lang$core$Dict$get, _p67, state.sockets);
					if (_p62.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p65 = _p62._0;
						var backoffIteration = function () {
							var _p63 = _p65.connection;
							if (_p63.ctor === 'Opening') {
								return _p63._0 + 1;
							} else {
								return 0;
							}
						}();
						var backoff = _p65.socket.reconnectTimer(backoffIteration);
						var newState = function (pid) {
							return A3(
								_saschatimme$elm_phoenix$Phoenix$updateSocket,
								_p67,
								A3(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$opening, backoffIteration, pid, _p65),
								state);
						};
						var _p64 = _p65.socket.debug ? A2(
							_elm_lang$core$Debug$log,
							A2(_elm_lang$core$Basics_ops['++'], 'WebSocket couldn_t connect with ', _p67),
							_p66) : _p66;
						return A2(
							_elm_lang$core$Task$map,
							newState,
							A3(_saschatimme$elm_phoenix$Phoenix$attemptOpen, router, backoff, _p65));
					}
				case 'Die':
					var _p73 = _p57._0;
					var _p72 = _p57._1;
					var _p68 = A2(_elm_lang$core$Dict$get, _p73, state.sockets);
					if (_p68.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p71 = _p68._0.socket;
						var _p70 = _p68._0;
						var notifyOnAbnormalClose = (_saschatimme$elm_phoenix$Phoenix_Internal_Socket$isOpening(_p70) || (!_elm_lang$core$Native_Utils.eq(_p72.code, 1006))) ? _elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'}) : A2(
							_elm_lang$core$Maybe$withDefault,
							_elm_lang$core$Task$succeed(
								{ctor: '_Tuple0'}),
							A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$Platform$sendToApp(router),
								_p71.onAbnormalClose));
						var notifyOnNormalClose = (_saschatimme$elm_phoenix$Phoenix_Internal_Socket$isOpening(_p70) || (!_elm_lang$core$Native_Utils.eq(_p72.code, 1000))) ? _elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'}) : A2(
							_elm_lang$core$Maybe$withDefault,
							_elm_lang$core$Task$succeed(
								{ctor: '_Tuple0'}),
							A2(
								_elm_lang$core$Maybe$map,
								_elm_lang$core$Platform$sendToApp(router),
								_p71.onNormalClose));
						var notifyOnClose = _saschatimme$elm_phoenix$Phoenix_Internal_Socket$isOpening(_p70) ? _elm_lang$core$Task$succeed(
							{ctor: '_Tuple0'}) : A2(
							_elm_lang$core$Maybe$withDefault,
							_elm_lang$core$Task$succeed(
								{ctor: '_Tuple0'}),
							A2(
								_elm_lang$core$Maybe$map,
								function (onClose) {
									return A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										onClose(_p72));
								},
								_p71.onClose));
						var getNewState = A3(_saschatimme$elm_phoenix$Phoenix$handleChannelDisconnect, router, _p73, state);
						var backoffIteration = function () {
							var _p69 = _p68._0.connection;
							if (_p69.ctor === 'Opening') {
								return _p69._0 + 1;
							} else {
								return 0;
							}
						}();
						var backoff = _p71.reconnectTimer(backoffIteration);
						var finalNewState = function (pid) {
							return A2(
								_elm_lang$core$Task$map,
								A2(
									_saschatimme$elm_phoenix$Phoenix$updateSocket,
									_p73,
									A3(_saschatimme$elm_phoenix$Phoenix_Internal_Socket$opening, backoffIteration, pid, _p70)),
								getNewState);
						};
						return A2(
							_elm_lang$core$Task$andThen,
							finalNewState,
							A2(
								_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
								A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'], notifyOnClose, notifyOnNormalClose),
									notifyOnAbnormalClose),
								A3(_saschatimme$elm_phoenix$Phoenix$attemptOpen, router, backoff, _p70)));
					}
				case 'Receive':
					var _p75 = _p57._1;
					var _p74 = _p57._0;
					return A2(
						_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['<&>'],
						A2(
							_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
							A4(_saschatimme$elm_phoenix$Phoenix$dispatchMessage, router, _p74, _p75, state.channels),
							A2(
								_elm_lang$core$Task$map,
								function (selfCbs) {
									return A2(_saschatimme$elm_phoenix$Phoenix$updateSelfCallbacks, selfCbs, state);
								},
								A4(_saschatimme$elm_phoenix$Phoenix$handleSelfcallback, router, _p74, _p75, state.selfCallbacks))),
						A3(_saschatimme$elm_phoenix$Phoenix$handlePhoenixMessage, router, _p74, _p75));
				case 'ChannelJoinReply':
					return A2(
						_elm_lang$core$Task$map,
						function (newChannels) {
							return A2(_saschatimme$elm_phoenix$Phoenix$updateChannels, newChannels, state);
						},
						A6(_saschatimme$elm_phoenix$Phoenix$handleChannelJoinReply, router, _p57._0, _p57._1, _p57._3, _p57._2, state.channels));
				case 'JoinChannel':
					var _p79 = _p57._1;
					var _p78 = _p57._0;
					var _p76 = A2(_elm_lang$core$Dict$get, _p78, state.sockets);
					if (_p76.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p77 = _p76._0.connection;
						if (_p77.ctor === 'Connected') {
							return A4(
								_saschatimme$elm_phoenix$Phoenix$pushSocket_,
								_p78,
								_saschatimme$elm_phoenix$Phoenix_Internal_Channel$joinMessage(_p79),
								_elm_lang$core$Maybe$Just(
									A3(_saschatimme$elm_phoenix$Phoenix$ChannelJoinReply, _p78, _p79.channel.topic, _p79.state)),
								state);
						} else {
							return _elm_lang$core$Task$succeed(state);
						}
					}
				case 'LeaveChannel':
					var _p83 = _p57._1;
					var _p82 = _p57._0;
					var _p80 = A2(_elm_lang$core$Dict$get, _p82, state.sockets);
					if (_p80.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p81 = _p83.state;
						if (_p81.ctor === 'Joined') {
							return A4(
								_saschatimme$elm_phoenix$Phoenix$pushSocket_,
								_p82,
								_saschatimme$elm_phoenix$Phoenix_Internal_Channel$leaveMessage(_p83),
								_elm_lang$core$Maybe$Just(
									A2(_saschatimme$elm_phoenix$Phoenix$ChannelLeaveReply, _p82, _p83)),
								state);
						} else {
							return _elm_lang$core$Task$succeed(state);
						}
					}
				case 'ChannelLeaveReply':
					var _p88 = _p57._1.channel;
					var _p84 = _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$decodeReplyPayload(_p57._2.payload);
					if (_p84.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p85 = _p84._0;
						if (_p85.ctor === 'Err') {
							var _p86 = _p88.onLeaveError;
							if (_p86.ctor === 'Nothing') {
								return _elm_lang$core$Task$succeed(state);
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p86._0(_p85._0)),
									_elm_lang$core$Task$succeed(state));
							}
						} else {
							var _p87 = _p88.onLeave;
							if (_p87.ctor === 'Nothing') {
								return _elm_lang$core$Task$succeed(state);
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p87._0(_p85._0)),
									_elm_lang$core$Task$succeed(state));
							}
						}
					}
				case 'SendHeartbeat':
					return A3(_saschatimme$elm_phoenix$Phoenix$heartbeat, router, _p57._0, state);
				case 'GoodJoin':
					var _p91 = _p57._1;
					var _p90 = _p57._0;
					var _p89 = A3(_saschatimme$elm_phoenix$Phoenix_Internal_Helpers$getIn, _p90, _p91, state.channelQueues);
					if (_p89.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						return A2(
							_elm_lang$core$Task$map,
							A2(_saschatimme$elm_phoenix$Phoenix$removeChannelQueue, _p90, _p91),
							A3(_saschatimme$elm_phoenix$Phoenix$processQueue, _p90, _p89._0, state));
					}
				case 'PushResponse':
					var _p96 = _p57._0;
					var _p92 = _saschatimme$elm_phoenix$Phoenix_Internal_Helpers$decodeReplyPayload(_p57._1.payload);
					if (_p92.ctor === 'Nothing') {
						return _elm_lang$core$Task$succeed(state);
					} else {
						var _p93 = _p92._0;
						if (_p93.ctor === 'Err') {
							var _p94 = _p96.onError;
							if (_p94.ctor === 'Nothing') {
								return _elm_lang$core$Task$succeed(state);
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p94._0(_p93._0)),
									_elm_lang$core$Task$succeed(state));
							}
						} else {
							var _p95 = _p96.onOk;
							if (_p95.ctor === 'Nothing') {
								return _elm_lang$core$Task$succeed(state);
							} else {
								return A2(
									_saschatimme$elm_phoenix$Phoenix_Internal_Helpers_ops['&>'],
									A2(
										_elm_lang$core$Platform$sendToApp,
										router,
										_p95._0(_p93._0)),
									_elm_lang$core$Task$succeed(state));
							}
						}
					}
				default:
					return _elm_lang$core$Task$succeed(state);
			}
		});
	_elm_lang$core$Native_Platform.effectManagers['Phoenix'] = {pkg: 'saschatimme/elm-phoenix', init: _saschatimme$elm_phoenix$Phoenix$init, onEffects: _saschatimme$elm_phoenix$Phoenix$onEffects, onSelfMsg: _saschatimme$elm_phoenix$Phoenix$onSelfMsg, tag: 'fx', cmdMap: _saschatimme$elm_phoenix$Phoenix$cmdMap, subMap: _saschatimme$elm_phoenix$Phoenix$subMap};

	var _user$project$Api_Helpers$withAuthorization = function (apiKey) {
		return A2(
			_lukewestby$elm_http_builder$HttpBuilder$withHeader,
			'Authorization',
			A2(_elm_lang$core$Basics_ops['++'], 'Bearer ', apiKey));
	};
	var _user$project$Api_Helpers$withDefaultTimeout = _lukewestby$elm_http_builder$HttpBuilder$withTimeout(10 * _elm_lang$core$Time$second);
	var _user$project$Api_Helpers$apiUrl = F2(
		function (baseUrl, url) {
			return A2(_elm_lang$core$Basics_ops['++'], baseUrl, url);
		});
	var _user$project$Api_Helpers$post = F2(
		function (baseUrl, path) {
			return _user$project$Api_Helpers$withDefaultTimeout(
				_lukewestby$elm_http_builder$HttpBuilder$post(
					A2(_user$project$Api_Helpers$apiUrl, baseUrl, path)));
		});
	var _user$project$Api_Helpers$authenticatedPost = F3(
		function (baseUrl, apiKey, path) {
			return A2(
				_user$project$Api_Helpers$withAuthorization,
				apiKey,
				A2(_user$project$Api_Helpers$post, baseUrl, path));
		});
	var _user$project$Api_Helpers$get = F2(
		function (baseUrl, path) {
			return _user$project$Api_Helpers$withDefaultTimeout(
				_lukewestby$elm_http_builder$HttpBuilder$get(
					A2(_user$project$Api_Helpers$apiUrl, baseUrl, path)));
		});
	var _user$project$Api_Helpers$authenticatedGet = F3(
		function (baseUrl, apiKey, path) {
			return A2(
				_user$project$Api_Helpers$withAuthorization,
				apiKey,
				A2(_user$project$Api_Helpers$get, baseUrl, path));
		});
	var _user$project$Api_Helpers$authenticatedDelete = F3(
		function (baseUrl, apiKey, path) {
			return _user$project$Api_Helpers$withDefaultTimeout(
				A2(
					_user$project$Api_Helpers$withAuthorization,
					apiKey,
					_lukewestby$elm_http_builder$HttpBuilder$delete(
						A2(_user$project$Api_Helpers$apiUrl, baseUrl, path))));
		});
	var _user$project$Api_Helpers$authenticatedPut = F3(
		function (baseUrl, apiKey, path) {
			return _user$project$Api_Helpers$withDefaultTimeout(
				A2(
					_user$project$Api_Helpers$withAuthorization,
					apiKey,
					_lukewestby$elm_http_builder$HttpBuilder$put(
						A2(_user$project$Api_Helpers$apiUrl, baseUrl, path))));
		});

	var _user$project$Types_User$new = {id: -1, username: '', email: '', name: ''};
	var _user$project$Types_User$Model = F4(
		function (a, b, c, d) {
			return {id: a, username: b, email: c, name: d};
		});

	var _user$project$Types_Post$Model = F5(
		function (a, b, c, d, e) {
			return {id: a, body: b, threadId: c, userId: d, insertedAt: e};
		});

	var _user$project$Types_Thread$finder = function (thread) {
		var _p0 = thread.slug;
		if (_p0 === '') {
			return _elm_lang$core$Basics$toString(thread.id);
		} else {
			return _p0;
		}
	};
	var _user$project$Types_Thread$new = {
		id: -1,
		title: '',
		slug: '',
		userId: -1,
		postIds: {ctor: '[]'},
		categoryId: -1
	};
	var _user$project$Types_Thread$Model = F6(
		function (a, b, c, d, e, f) {
			return {id: a, title: b, slug: c, userId: d, postIds: e, categoryId: f};
		});

	var _user$project$Types_Category$finder = function (category) {
		var _p0 = category.slug;
		if (_p0 === '') {
			return _elm_lang$core$Basics$toString(category.id);
		} else {
			return _p0;
		}
	};
	var _user$project$Types_Category$new = {
		id: -1,
		title: '',
		slug: '',
		insertedAt: '',
		updatedAt: '',
		parentId: _elm_lang$core$Maybe$Nothing,
		childrenIds: {ctor: '[]'},
		threadIds: {ctor: '[]'}
	};
	var _user$project$Types_Category$isRoot = function (category) {
		return _elm_lang$core$Native_Utils.eq(category.parentId, _elm_lang$core$Maybe$Nothing);
	};
	var _user$project$Types_Category$roots = function (categories) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, v) {
					return _user$project$Types_Category$isRoot(v);
				}),
			categories);
	};
	var _user$project$Types_Category$Model = F8(
		function (a, b, c, d, e, f, g, h) {
			return {id: a, title: b, slug: c, insertedAt: d, updatedAt: e, parentId: f, childrenIds: g, threadIds: h};
		});

	var _user$project$Decoders$userDecoder = A4(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
		'name',
		_elm_lang$core$Json_Decode$string,
		'',
		A4(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
			'email',
			_elm_lang$core$Json_Decode$string,
			'',
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'username',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'id',
					_elm_lang$core$Json_Decode$int,
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Types_User$Model)))));
	var _user$project$Decoders$postDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'inserted_at',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'user_id',
			_elm_lang$core$Json_Decode$int,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'thread_id',
				_elm_lang$core$Json_Decode$int,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'body',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$int,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Types_Post$Model))))));
	var _user$project$Decoders$threadDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'category_id',
		_elm_lang$core$Json_Decode$int,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'post_ids',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'user_id',
				_elm_lang$core$Json_Decode$int,
				A4(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
					'slug',
					_elm_lang$core$Json_Decode$string,
					'',
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'title',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'id',
							_elm_lang$core$Json_Decode$int,
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Types_Thread$Model)))))));
	var _user$project$Decoders$idDecoder = A2(_elm_lang$core$Json_Decode$field, 'id', _elm_lang$core$Json_Decode$int);
	var _user$project$Decoders$toIdDict = function (things) {
		return _elm_lang$core$Dict$fromList(
			A2(
				_elm_lang$core$List$map,
				function (u) {
					return {ctor: '_Tuple2', _0: u.id, _1: u};
				},
				things));
	};
	var _user$project$Decoders$postsDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_user$project$Decoders$toIdDict,
		A2(
			_elm_lang$core$Json_Decode$field,
			'posts',
			_elm_lang$core$Json_Decode$list(_user$project$Decoders$postDecoder)));
	var _user$project$Decoders$usersDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_user$project$Decoders$toIdDict,
		A2(
			_elm_lang$core$Json_Decode$field,
			'users',
			_elm_lang$core$Json_Decode$list(_user$project$Decoders$userDecoder)));
	var _user$project$Decoders$threadsDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_user$project$Decoders$toIdDict,
		A2(
			_elm_lang$core$Json_Decode$field,
			'threads',
			_elm_lang$core$Json_Decode$list(_user$project$Decoders$threadDecoder)));
	var _user$project$Decoders$categoryDecoder = A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'thread_ids',
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'children_ids',
			_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$int),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'parent_id',
				_elm_lang$core$Json_Decode$maybe(_elm_lang$core$Json_Decode$int),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'updated_at',
					_elm_lang$core$Json_Decode$string,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'inserted_at',
						_elm_lang$core$Json_Decode$string,
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'slug',
							_elm_lang$core$Json_Decode$string,
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'title',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'id',
									_elm_lang$core$Json_Decode$int,
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Types_Category$Model)))))))));
	var _user$project$Decoders$categoriesDecoder = A2(
		_elm_lang$core$Json_Decode$map,
		_user$project$Decoders$toIdDict,
		A2(
			_elm_lang$core$Json_Decode$field,
			'categories',
			_elm_lang$core$Json_Decode$list(_user$project$Decoders$categoryDecoder)));

	var _user$project$Types_Store$intList = function (listInts) {
		return _elm_lang$core$Json_Encode$list(
			A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$int, listInts));
	};
	var _user$project$Types_Store$encodeReplenishRequest = function (replenishRequest) {
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'categories',
					_1: _user$project$Types_Store$intList(replenishRequest.categories)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'threads',
						_1: _user$project$Types_Store$intList(replenishRequest.threads)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'posts',
							_1: _user$project$Types_Store$intList(replenishRequest.posts)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'users',
								_1: _user$project$Types_Store$intList(replenishRequest.users)
							},
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};
	var _user$project$Types_Store$wants = F2(
		function (replenishRequest, model) {
			return _elm_lang$core$Native_Utils.update(
				model,
				{wants: replenishRequest});
		});
	var _user$project$Types_Store$wantsSomething = function (model) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(model.wants.categories),
			1) > 0) || ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(model.wants.threads),
			1) > 0) || ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(model.wants.users),
			1) > 0) || (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(model.wants.posts),
			1) > 0)));
	};
	var _user$project$Types_Store$wantsNothing = function (_p0) {
		return !_user$project$Types_Store$wantsSomething(_p0);
	};
	var _user$project$Types_Store$newStoreUpdate = {categories: _elm_lang$core$Dict$empty, threads: _elm_lang$core$Dict$empty, users: _elm_lang$core$Dict$empty, posts: _elm_lang$core$Dict$empty};
	var _user$project$Types_Store$unknownUserIds = function (model) {
		var postUserIds = A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.userId;
			},
			A2(
				_elm_lang$core$List$map,
				function (_p1) {
					var _p2 = _p1;
					return _p2._1;
				},
				_elm_lang$core$Dict$toList(model.posts)));
		var knownUserIds = _elm_lang$core$Dict$keys(model.users);
		var known = function (userId) {
			return A2(_elm_lang$core$List$member, userId, knownUserIds);
		};
		return A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 0;
				})(0),
			A2(
				_elm_lang$core$List$filter,
				function (_p3) {
					return !known(_p3);
				},
				postUserIds));
	};
	var _user$project$Types_Store$unknownPostIds = function (model) {
		var threadPostIds = A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.postIds;
			},
			A2(
				_elm_lang$core$List$map,
				function (_p4) {
					var _p5 = _p4;
					return _p5._1;
				},
				_elm_lang$core$Dict$toList(model.threads)));
		var knownPostIds = _elm_lang$core$Dict$keys(model.posts);
		var known = function (postId) {
			return A2(_elm_lang$core$List$member, postId, knownPostIds);
		};
		return A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 0;
				})(0),
			A2(
				_elm_lang$core$List$filter,
				function (_p6) {
					return !known(_p6);
				},
				threadPostIds));
	};
	var _user$project$Types_Store$unknownThreadIds = function (model) {
		var categoryThreadIds = A2(
			_elm_lang$core$List$concatMap,
			function (_) {
				return _.threadIds;
			},
			A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return _p8._1;
				},
				_elm_lang$core$Dict$toList(model.categories)));
		var knownThreadIds = _elm_lang$core$Dict$keys(model.threads);
		var known = function (threadId) {
			return A2(_elm_lang$core$List$member, threadId, knownThreadIds);
		};
		return A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 0;
				})(0),
			A2(
				_elm_lang$core$List$filter,
				function (_p9) {
					return !known(_p9);
				},
				categoryThreadIds));
	};
	var _user$project$Types_Store$unknownCategoryIds = function (model) {
		var threadCategoryIds = A2(
			_elm_lang$core$List$map,
			function (_) {
				return _.categoryId;
			},
			A2(
				_elm_lang$core$List$map,
				function (_p10) {
					var _p11 = _p10;
					return _p11._1;
				},
				_elm_lang$core$Dict$toList(model.threads)));
		var knownCategoryIds = _elm_lang$core$Dict$keys(model.categories);
		var known = function (catId) {
			return A2(_elm_lang$core$List$member, catId, knownCategoryIds);
		};
		return A2(
			_elm_lang$core$List$filter,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.cmp(x, y) < 0;
				})(0),
			A2(
				_elm_lang$core$List$filter,
				function (_p12) {
					return !known(_p12);
				},
				threadCategoryIds));
	};
	var _user$project$Types_Store$findUser = F2(
		function (model, userId) {
			return A2(_elm_lang$core$Dict$get, userId, model.users);
		});
	var _user$project$Types_Store$findThread = F2(
		function (model, threadId) {
			return A2(_elm_lang$core$Dict$get, threadId, model.threads);
		});
	var _user$project$Types_Store$findCategory = F2(
		function (model, categoryId) {
			return A2(_elm_lang$core$Dict$get, categoryId, model.categories);
		});
	var _user$project$Types_Store$newReplenishRequest = {
		categories: {ctor: '[]'},
		threads: {ctor: '[]'},
		posts: {ctor: '[]'},
		users: {ctor: '[]'}
	};
	var _user$project$Types_Store$new = {categories: _elm_lang$core$Dict$empty, threads: _elm_lang$core$Dict$empty, users: _elm_lang$core$Dict$empty, posts: _elm_lang$core$Dict$empty, wants: _user$project$Types_Store$newReplenishRequest};
	var _user$project$Types_Store$Model = F5(
		function (a, b, c, d, e) {
			return {categories: a, threads: b, users: c, posts: d, wants: e};
		});
	var _user$project$Types_Store$StoreUpdate = F4(
		function (a, b, c, d) {
			return {categories: a, threads: b, users: c, posts: d};
		});
	var _user$project$Types_Store$storeUpdateDecoder = A5(_elm_lang$core$Json_Decode$map4, _user$project$Types_Store$StoreUpdate, _user$project$Decoders$categoriesDecoder, _user$project$Decoders$threadsDecoder, _user$project$Decoders$usersDecoder, _user$project$Decoders$postsDecoder);
	var _user$project$Types_Store$fetchData = F2(
		function (tagger, replenishRequest) {
			var decodingTagger = function (v) {
				return tagger(
					A2(
						_elm_lang$core$Result$withDefault,
						_user$project$Types_Store$newStoreUpdate,
						A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Types_Store$storeUpdateDecoder, v)));
			};
			var payload = _user$project$Types_Store$encodeReplenishRequest(replenishRequest);
			return A2(
				_saschatimme$elm_phoenix$Phoenix_Push$onOk,
				decodingTagger,
				A2(
					_saschatimme$elm_phoenix$Phoenix_Push$withPayload,
					payload,
					A2(_saschatimme$elm_phoenix$Phoenix_Push$init, 'store:home', 'fetch')));
		});
	var _user$project$Types_Store$ReplenishRequest = F4(
		function (a, b, c, d) {
			return {categories: a, threads: b, posts: c, users: d};
		});
	var _user$project$Types_Store$NoOp = {ctor: 'NoOp'};
	var _user$project$Types_Store$NewData = function (a) {
		return {ctor: 'NewData', _0: a};
	};
	var _user$project$Types_Store$fetchWants = function (model) {
		return _user$project$Types_Store$wantsNothing(model) ? _elm_lang$core$Platform_Cmd$none : A2(
			_saschatimme$elm_phoenix$Phoenix$push,
			'ws://localhost:4000/socket/websocket/',
			A2(_user$project$Types_Store$fetchData, _user$project$Types_Store$NewData, model.wants));
	};
	var _user$project$Types_Store$channels = F2(
		function (mapper, model) {
			var valToStoreUpdate = function (val) {
				return _user$project$Types_Store$NewData(
					A2(
						_elm_lang$core$Result$withDefault,
						_user$project$Types_Store$newStoreUpdate,
						A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Types_Store$storeUpdateDecoder, val)));
			};
			var entityChannel = F2(
				function (entityType, id) {
					return _saschatimme$elm_phoenix$Phoenix_Channel$withDebug(
						A2(
							_saschatimme$elm_phoenix$Phoenix_Channel$map,
							mapper,
							A3(
								_saschatimme$elm_phoenix$Phoenix_Channel$on,
								'update',
								valToStoreUpdate,
								_saschatimme$elm_phoenix$Phoenix_Channel$init(
									A2(
										_elm_lang$core$Basics_ops['++'],
										entityType,
										A2(
											_elm_lang$core$Basics_ops['++'],
											':',
											_elm_lang$core$Basics$toString(id)))))));
				});
			var categoryChannel = function (id) {
				return A2(entityChannel, 'categories', id);
			};
			var categoryChannels = A2(
				_elm_lang$core$List$map,
				categoryChannel,
				_elm_lang$core$Dict$keys(model.categories));
			var threadChannel = function (id) {
				return A2(entityChannel, 'threads', id);
			};
			var threadChannels = A2(
				_elm_lang$core$List$map,
				threadChannel,
				_elm_lang$core$Dict$keys(model.threads));
			var postChannel = function (id) {
				return A2(entityChannel, 'posts', id);
			};
			var postChannels = A2(
				_elm_lang$core$List$map,
				postChannel,
				_elm_lang$core$Dict$keys(model.posts));
			var userChannel = function (id) {
				return A2(entityChannel, 'users', id);
			};
			var userChannels = A2(
				_elm_lang$core$List$map,
				userChannel,
				_elm_lang$core$Dict$keys(model.users));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				categoryChannels,
				A2(
					_elm_lang$core$Basics_ops['++'],
					threadChannels,
					A2(_elm_lang$core$Basics_ops['++'], postChannels, userChannels)));
		});

	var _user$project$Encoders$intList = function (listInts) {
		return _elm_lang$core$Json_Encode$list(
			A2(_elm_lang$core$List$map, _elm_lang$core$Json_Encode$int, listInts));
	};
	var _user$project$Encoders$encodeReplenishRequest = function (replenishRequest) {
		return _elm_lang$core$Json_Encode$object(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'categories',
					_1: _user$project$Encoders$intList(replenishRequest.categories)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'threads',
						_1: _user$project$Encoders$intList(replenishRequest.threads)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'posts',
							_1: _user$project$Encoders$intList(replenishRequest.posts)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'users',
								_1: _user$project$Encoders$intList(replenishRequest.users)
							},
							_1: {ctor: '[]'}
						}
					}
				}
			});
	};

	var _user$project$Api_Fetch$handleGetComplete = F3(
		function (tagger, errorTagger, result) {
			var _p0 = A2(_elm_lang$core$Debug$log, 'handleGetComplete', result);
			if (_p0.ctor === 'Ok') {
				return tagger(_p0._0);
			} else {
				return errorTagger(_p0._0);
			}
		});
	var _user$project$Api_Fetch$getCategory = F4(
		function (categoryFinder, apiBaseUrl, tagger, errorTagger) {
			return A2(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				A2(_user$project$Api_Fetch$handleGetComplete, tagger, errorTagger),
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withExpect,
					_elm_lang$http$Http$expectJson(_user$project$Types_Store$storeUpdateDecoder),
					A2(
						_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
						_elm_lang$core$Json_Encode$object(
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'categories',
									_1: _elm_lang$core$Json_Encode$list(
										{
											ctor: '::',
											_0: _elm_lang$core$Json_Encode$string(categoryFinder),
											_1: {ctor: '[]'}
										})
								},
								_1: {ctor: '[]'}
							}),
						A2(_user$project$Api_Helpers$post, apiBaseUrl, 'fetch'))));
		});
	var _user$project$Api_Fetch$post = F4(
		function (replenishRequest, apiBaseUrl, tagger, errorTagger) {
			return A2(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				A2(_user$project$Api_Fetch$handleGetComplete, tagger, errorTagger),
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withExpect,
					_elm_lang$http$Http$expectJson(_user$project$Types_Store$storeUpdateDecoder),
					A2(
						_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
						_user$project$Encoders$encodeReplenishRequest(replenishRequest),
						A2(_user$project$Api_Helpers$post, apiBaseUrl, 'fetch'))));
		});

	var _user$project$Api_Home$handleGetHomeComplete = F3(
		function (tagger, errorTagger, result) {
			var _p0 = A2(_elm_lang$core$Debug$log, 'handleGetHomeComplete', result);
			if (_p0.ctor === 'Ok') {
				return tagger(_p0._0);
			} else {
				return errorTagger(_p0._0);
			}
		});
	var _user$project$Api_Home$index = F3(
		function (apiBaseUrl, tagger, errorTagger) {
			return A2(
				_lukewestby$elm_http_builder$HttpBuilder$send,
				A2(_user$project$Api_Home$handleGetHomeComplete, tagger, errorTagger),
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withExpect,
					_elm_lang$http$Http$expectJson(_user$project$Types_Store$storeUpdateDecoder),
					A2(_user$project$Api_Helpers$get, apiBaseUrl, 'home')));
		});

	var _user$project$Routes$NotFoundR = {ctor: 'NotFoundR'};
	var _user$project$Routes$notFoundR = A2(
		_Bogdanp$elm_route$Route_ops[':='],
		_user$project$Routes$NotFoundR,
		_Bogdanp$elm_route$Route$static('404'));
	var _user$project$Routes$ThreadR = F2(
		function (a, b) {
			return {ctor: 'ThreadR', _0: a, _1: b};
		});
	var _user$project$Routes$threadR = A2(
		_Bogdanp$elm_route$Route_ops[':='],
		_user$project$Routes$ThreadR,
		A2(
			_Bogdanp$elm_route$Route_ops['</>'],
			A2(
				_Bogdanp$elm_route$Route_ops['</>'],
				A2(
					_Bogdanp$elm_route$Route_ops['</>'],
					_Bogdanp$elm_route$Route$static('categories'),
					_Bogdanp$elm_route$Route$string),
				_Bogdanp$elm_route$Route$static('threads')),
			_Bogdanp$elm_route$Route$string));
	var _user$project$Routes$CategoryR = function (a) {
		return {ctor: 'CategoryR', _0: a};
	};
	var _user$project$Routes$categoryR = A2(
		_Bogdanp$elm_route$Route_ops[':='],
		_user$project$Routes$CategoryR,
		A2(
			_Bogdanp$elm_route$Route_ops['</>'],
			_Bogdanp$elm_route$Route$static('categories'),
			_Bogdanp$elm_route$Route$string));
	var _user$project$Routes$HomeR = {ctor: 'HomeR'};
	var _user$project$Routes$homeR = A2(
		_Bogdanp$elm_route$Route_ops[':='],
		_user$project$Routes$HomeR,
		_Bogdanp$elm_route$Route$static(''));
	var _user$project$Routes$sitemap = _Bogdanp$elm_route$Route$router(
		{
			ctor: '::',
			_0: _user$project$Routes$homeR,
			_1: {
				ctor: '::',
				_0: _user$project$Routes$categoryR,
				_1: {
					ctor: '::',
					_0: _user$project$Routes$threadR,
					_1: {
						ctor: '::',
						_0: _user$project$Routes$notFoundR,
						_1: {ctor: '[]'}
					}
				}
			}
		});
	var _user$project$Routes$toString = function (r) {
		var _p0 = r;
		switch (_p0.ctor) {
			case 'HomeR':
				return A2(
					_Bogdanp$elm_route$Route$reverse,
					_user$project$Routes$homeR,
					{ctor: '[]'});
			case 'CategoryR':
				return A2(
					_Bogdanp$elm_route$Route$reverse,
					_user$project$Routes$categoryR,
					{
						ctor: '::',
						_0: _p0._0,
						_1: {ctor: '[]'}
					});
			case 'ThreadR':
				return A2(
					_Bogdanp$elm_route$Route$reverse,
					_user$project$Routes$threadR,
					{
						ctor: '::',
						_0: _p0._0,
						_1: {
							ctor: '::',
							_0: _p0._1,
							_1: {ctor: '[]'}
						}
					});
			default:
				return A2(
					_Bogdanp$elm_route$Route$reverse,
					_user$project$Routes$notFoundR,
					{ctor: '[]'});
		}
	};
	var _user$project$Routes$href = function (route) {
		return _elm_lang$html$Html_Attributes$href(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'#',
				_user$project$Routes$toString(route)));
	};
	var _user$project$Routes$navigateTo = function (route) {
		return _elm_lang$navigation$Navigation$newUrl(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'#',
				_user$project$Routes$toString(route)));
	};
	var _user$project$Routes$match = function (path) {
		var _p1 = path;
		if (_p1 === '') {
			return _user$project$Routes$HomeR;
		} else {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Routes$NotFoundR,
				A2(_Bogdanp$elm_route$Route$match, _user$project$Routes$sitemap, path));
		}
	};
	var _user$project$Routes$parsePath = function (_p2) {
		return _user$project$Routes$match(
			function (_) {
				return _.pathname;
			}(_p2));
	};
	var _user$project$Routes$parseHash = function (location) {
		return _user$project$Routes$match(
			A2(_elm_lang$core$String$dropLeft, 1, location.hash));
	};

	var _user$project$Msg$RequestFetch = function (a) {
		return {ctor: 'RequestFetch', _0: a};
	};
	var _user$project$Msg$RequestHomeData = {ctor: 'RequestHomeData'};
	var _user$project$Msg$StoreMsg = function (a) {
		return {ctor: 'StoreMsg', _0: a};
	};
	var _user$project$Msg$RouteChanged = function (a) {
		return {ctor: 'RouteChanged', _0: a};
	};
	var _user$project$Msg$NoOp = {ctor: 'NoOp'};

	var _user$project$Model$phxSocket = 'ws://localhost:4000/socket/websocket';
	var _user$project$Model$initialSocket = _saschatimme$elm_phoenix$Phoenix_Socket$init(_user$project$Model$phxSocket);
	var _user$project$Model$Model = F6(
		function (a, b, c, d, e, f) {
			return {store: a, apiBaseUrl: b, route: c, connectionStatus: d, socket: e, channels: f};
		});
	var _user$project$Model$Flags = function (a) {
		return {apiBaseUrl: a};
	};
	var _user$project$Model$Disconnected = {ctor: 'Disconnected'};
	var _user$project$Model$init = F2(
		function (flags, route) {
			return {store: _user$project$Types_Store$new, apiBaseUrl: flags.apiBaseUrl, route: route, connectionStatus: _user$project$Model$Disconnected, socket: _user$project$Model$initialSocket, channels: _elm_lang$core$Dict$empty};
		});
	var _user$project$Model$Connected = {ctor: 'Connected'};

	var _user$project$Update_Store$cmdFor = F2(
		function (apiBaseUrl, model) {
			var replenishRequest = {
				categories: A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Types_Store$unknownCategoryIds(model),
					model.wants.categories),
				threads: A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Types_Store$unknownThreadIds(model),
					model.wants.threads),
				posts: A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Types_Store$unknownPostIds(model),
					model.wants.posts),
				users: A2(
					_elm_lang$core$Basics_ops['++'],
					_user$project$Types_Store$unknownUserIds(model),
					model.wants.users)
			};
			var missingCounts = {
				ctor: '_Tuple4',
				_0: _elm_lang$core$List$length(replenishRequest.categories),
				_1: _elm_lang$core$List$length(replenishRequest.threads),
				_2: _elm_lang$core$List$length(replenishRequest.posts),
				_3: _elm_lang$core$List$length(replenishRequest.users)
			};
			var _p0 = missingCounts;
			if (((((_p0.ctor === '_Tuple4') && (_p0._0 === 0)) && (_p0._1 === 0)) && (_p0._2 === 0)) && (_p0._3 === 0)) {
				return _elm_lang$core$Platform_Cmd$none;
			} else {
				return A4(
					_user$project$Api_Fetch$post,
					replenishRequest,
					apiBaseUrl,
					_user$project$Types_Store$NewData,
					_elm_lang$core$Basics$always(_user$project$Types_Store$NoOp));
			}
		});
	var _user$project$Update_Store$update = F3(
		function (apiBaseUrl, msg, model) {
			var _p1 = msg;
			if (_p1.ctor === 'NewData') {
				var _p2 = _p1._0;
				var nextModel = _elm_lang$core$Native_Utils.update(
					model,
					{
						categories: A2(_elm_lang$core$Dict$union, _p2.categories, model.categories),
						threads: A2(_elm_lang$core$Dict$union, _p2.threads, model.threads),
						users: A2(_elm_lang$core$Dict$union, _p2.users, model.users),
						posts: A2(_elm_lang$core$Dict$union, _p2.posts, model.posts),
						wants: _user$project$Types_Store$newReplenishRequest
					});
				return {
					ctor: '_Tuple2',
					_0: nextModel,
					_1: A2(_user$project$Update_Store$cmdFor, apiBaseUrl, nextModel)
				};
			} else {
				return A2(
					_elm_lang$core$Platform_Cmd_ops['!'],
					model,
					{ctor: '[]'});
			}
		});

	var _user$project$Update$handleRoute = F2(
		function (route, model) {
			var _p0 = route;
			switch (_p0.ctor) {
				case 'HomeR':
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				case 'CategoryR':
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: A2(
							_elm_lang$core$Platform_Cmd$map,
							_user$project$Msg$StoreMsg,
							A4(
								_user$project$Api_Fetch$getCategory,
								_p0._0,
								model.apiBaseUrl,
								_user$project$Types_Store$NewData,
								_elm_lang$core$Basics$always(_user$project$Types_Store$NoOp)))
					};
				case 'ThreadR':
					var store = model.store;
					var id = A2(
						_elm_lang$core$Result$withDefault,
						-1,
						_elm_lang$core$String$toInt(_p0._1));
					var replenishRequest = {
						categories: {ctor: '[]'},
						threads: {
							ctor: '::',
							_0: id,
							_1: {ctor: '[]'}
						},
						posts: {ctor: '[]'},
						users: {ctor: '[]'}
					};
					var nextStore = A2(_user$project$Types_Store$wants, replenishRequest, store);
					var _p1 = id;
					if (_p1 === -1) {
						return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{store: nextStore}),
							_1: A2(
								_elm_lang$core$Platform_Cmd$map,
								_user$project$Msg$StoreMsg,
								_user$project$Types_Store$fetchWants(nextStore))
						};
					}
				default:
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			}
		});
	var _user$project$Update$homeChannelResult = function (model) {
		return A2(_elm_lang$core$Dict$get, 'store:home', model.channels);
	};
	var _user$project$Update$decodeStore = function (value) {
		return A2(
			_elm_lang$core$Result$withDefault,
			_user$project$Types_Store$newStoreUpdate,
			A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Types_Store$storeUpdateDecoder, value));
	};
	var _user$project$Update$fetchHomeData = A2(
		_saschatimme$elm_phoenix$Phoenix_Push$onOk,
		function (_p2) {
			return _user$project$Types_Store$NewData(
				_user$project$Update$decodeStore(_p2));
		},
		A2(_saschatimme$elm_phoenix$Phoenix_Push$init, 'store:home', 'fetch_home_data'));
	var _user$project$Update$update = F2(
		function (msg, model) {
			var _p3 = msg;
			switch (_p3.ctor) {
				case 'NoOp':
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				case 'RouteChanged':
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{route: _p3._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				case 'StoreMsg':
					var _p4 = A3(_user$project$Update_Store$update, model.apiBaseUrl, _p3._0, model.store);
					var nextStore = _p4._0;
					var storeCmd = _p4._1;
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{store: nextStore}),
						_1: A2(_elm_lang$core$Platform_Cmd$map, _user$project$Msg$StoreMsg, storeCmd)
					};
				case 'RequestHomeData':
					var _p5 = _user$project$Update$homeChannelResult(model);
					if (_p5.ctor === 'Just') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Platform_Cmd$map,
									_user$project$Msg$StoreMsg,
									A2(_saschatimme$elm_phoenix$Phoenix$push, _user$project$Model$phxSocket, _user$project$Update$fetchHomeData)),
								_1: {ctor: '[]'}
							});
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
				default:
					var _p6 = _user$project$Update$homeChannelResult(model);
					if (_p6.ctor === 'Just') {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$core$Platform_Cmd$map,
									_user$project$Msg$StoreMsg,
									_user$project$Types_Store$fetchWants(model.store)),
								_1: {ctor: '[]'}
							});
					} else {
						return A2(
							_elm_lang$core$Platform_Cmd_ops['!'],
							model,
							{ctor: '[]'});
					}
			}
		});

	var _user$project$App$storeHomeChannel = function (userName) {
		return _saschatimme$elm_phoenix$Phoenix_Channel$withDebug(
			A2(
				_saschatimme$elm_phoenix$Phoenix_Channel$onJoin,
				function (_p0) {
					return _user$project$Msg$RequestHomeData;
				},
				A2(
					_saschatimme$elm_phoenix$Phoenix_Channel$withPayload,
					_elm_lang$core$Json_Encode$object(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'user_name',
								_1: _elm_lang$core$Json_Encode$string(userName)
							},
							_1: {ctor: '[]'}
						}),
					_saschatimme$elm_phoenix$Phoenix_Channel$init('store:home'))));
	};
	var _user$project$App$subscriptions = function (model) {
		var storeEntityChannels = A2(_user$project$Types_Store$channels, _user$project$Msg$StoreMsg, model.store);
		var channels = A2(
			_elm_lang$core$List$map,
			function (_p1) {
				var _p2 = _p1;
				return _p2._1;
			},
			_elm_lang$core$Dict$toList(model.channels));
		var channelsSub = A2(
			_saschatimme$elm_phoenix$Phoenix$connect,
			model.socket,
			A2(_elm_lang$core$Basics_ops['++'], channels, storeEntityChannels));
		var connect = _saschatimme$elm_phoenix$Phoenix$connect(model.socket);
		return channelsSub;
	};
	var _user$project$App$init = F2(
		function (flags, location) {
			var initialModel = A2(
				_user$project$Model$init,
				flags,
				_user$project$Routes$parseHash(location));
			var modelWithHome = _elm_lang$core$Native_Utils.update(
				initialModel,
				{
					channels: A3(
						_elm_lang$core$Dict$insert,
						'store:home',
						_user$project$App$storeHomeChannel('knewter'),
						initialModel.channels)
				});
			var _p3 = A2(
				_user$project$Update$handleRoute,
				_user$project$Routes$parseHash(location),
				modelWithHome);
			var model = _p3._0;
			var cmd = _p3._1;
			return {ctor: '_Tuple2', _0: model, _1: cmd};
		});

	var _user$project$Types_NavItem$NavItem = F2(
		function (a, b) {
			return {route: a, text: b};
		});

	var _user$project$View_Layouts_Drawer$viewNavItem = function (navItem) {
		return A2(
			_elm_lang$html$Html$li,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('pure-menu-item'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _user$project$Routes$href(navItem.route),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('pure-menu-link'),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(navItem.text),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};
	var _user$project$View_Layouts_Drawer$view = function (navItems) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('pure-menu pure-menu-vertical'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$ul,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('pure-menu-list'),
						_1: {ctor: '[]'}
					},
					A2(_elm_lang$core$List$map, _user$project$View_Layouts_Drawer$viewNavItem, navItems)),
				_1: {ctor: '[]'}
			});
	};

	var _user$project$View_Layouts_Navigation$logo = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('navigation-logo'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$img,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$alt('Firestorm logo'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$src('/images/firestorm-logo.png'),
						_1: {ctor: '[]'}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Firestorm'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
	var _user$project$View_Layouts_Navigation$view = A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('pure-menu pure-menu-horizontal navigation-menu'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$a,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('pure-menu-heading pure-menu-link navigation-logo-link'),
					_1: {
						ctor: '::',
						_0: _user$project$Routes$href(_user$project$Routes$HomeR),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _user$project$View_Layouts_Navigation$logo,
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});

	var _user$project$View_Layouts_App$drawerItems = {
		ctor: '::',
		_0: A2(_user$project$Types_NavItem$NavItem, _user$project$Routes$HomeR, 'Home'),
		_1: {ctor: '[]'}
	};
	var _user$project$View_Layouts_App$view = function (children) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('pure-container'),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-effect', 'pure-effect-slide'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$id('pure-toggle-right'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('pure-toggle'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-toggle', 'right'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$type_('checkbox'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$label,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('pure-toggle-label'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-toggle-label', 'right'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'for', 'pure-toggle-right'),
									_1: {ctor: '[]'}
								}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('pure-toggle-icon'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('pure-drawer'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-position', 'right'),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _user$project$View_Layouts_Drawer$view(_user$project$View_Layouts_App$drawerItems),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('pure-pusher-container'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('pure-pusher'),
											_1: {ctor: '[]'}
										},
										A2(
											_elm_lang$core$Basics_ops['++'],
											{
												ctor: '::',
												_0: _user$project$View_Layouts_Navigation$view,
												_1: {ctor: '[]'}
											},
											children)),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$label,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('pure-overlay'),
										_1: {
											ctor: '::',
											_0: A2(_elm_lang$html$Html_Attributes$attribute, 'data-overlay', 'right'),
											_1: {
												ctor: '::',
												_0: A2(_elm_lang$html$Html_Attributes$attribute, 'for', 'pure-toggle-right'),
												_1: {ctor: '[]'}
											}
										}
									},
									{ctor: '[]'}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	};

	var _user$project$View_Categories$viewThread = F3(
		function (store, category, thread) {
			var user = A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Types_User$new,
				A2(_elm_lang$core$Dict$get, thread.userId, store.users));
			return A2(
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('thread-list-item'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('details'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('summary'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _user$project$Routes$href(
												A2(
													_user$project$Routes$ThreadR,
													_user$project$Types_Category$finder(category),
													_user$project$Types_Thread$finder(thread))),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('title'),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(thread.title),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$href('#'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('user-name'),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													A2(_elm_lang$core$Basics_ops['++'], '@', user.username)),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _user$project$View_Categories$viewCategory = F2(
		function (store, _p0) {
			var _p1 = _p0;
			var _p2 = _p1._1;
			var getCategory = function (categoryId) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					_user$project$Types_Category$new,
					A2(_elm_lang$core$Dict$get, categoryId, store.categories));
			};
			var catChildren = _elm_lang$core$Dict$fromList(
				A2(
					_elm_lang$core$List$map,
					function (c) {
						return {ctor: '_Tuple2', _0: c.id, _1: c};
					},
					A2(_elm_lang$core$List$map, getCategory, _p2.childrenIds)));
			var getThread = function (threadId) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					_user$project$Types_Thread$new,
					A2(_elm_lang$core$Dict$get, threadId, store.threads));
			};
			var catThreads = A2(_elm_lang$core$List$map, getThread, _p2.threadIds);
			return A2(
				_elm_lang$html$Html$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h2,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('title'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$a,
								{
									ctor: '::',
									_0: _user$project$Routes$href(
										_user$project$Routes$CategoryR(
											_user$project$Types_Category$finder(_p2))),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(_p2.title),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ol,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('category-list'),
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$List$map,
								_user$project$View_Categories$viewCategory(store),
								_elm_lang$core$Dict$toList(catChildren))),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$ol,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('thread-list'),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$List$map,
									A2(_user$project$View_Categories$viewThread, store, _p2),
									catThreads)),
							_1: {ctor: '[]'}
						}
					}
				});
		});
	var _user$project$View_Categories$view = function (store) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('layout-content'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('page-content'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ol,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('category-list'),
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$List$map,
								_user$project$View_Categories$viewCategory(store),
								_elm_lang$core$Dict$toList(
									_user$project$Types_Category$roots(store.categories)))),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	};

	var _user$project$View_Categories_Show$threadListItem = F3(
		function (category, users, thread) {
			var user = A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Types_User$new,
				A2(_elm_lang$core$Dict$get, thread.userId, users));
			return A2(
				_elm_lang$html$Html$li,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('thread-list-item'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('details'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('summary'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _user$project$Routes$href(
												A2(
													_user$project$Routes$ThreadR,
													_user$project$Types_Category$finder(category),
													_user$project$Types_Thread$finder(thread))),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('title'),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(thread.title),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$href('#'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('user-name'),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(user.username),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _user$project$View_Categories_Show$threadsFor = F2(
		function (threads, category) {
			return A2(
				_elm_lang$core$List$map,
				function (_p0) {
					var _p1 = _p0;
					return _p1._1;
				},
				_elm_lang$core$Dict$toList(
					A2(
						_elm_lang$core$Dict$filter,
						F2(
							function (k, v) {
								return A2(_elm_lang$core$List$member, k, category.threadIds);
							}),
						threads)));
		});
	var _user$project$View_Categories_Show$view = F2(
		function (store, category) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('layout-content'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('category-header'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$h2,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _user$project$Routes$href(
												_user$project$Routes$CategoryR(
													_user$project$Types_Category$finder(category))),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(category.title),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('spacer'),
										_1: {ctor: '[]'}
									},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$ul,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('actions'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$li,
												{ctor: '[]'},
												{
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$a,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$class('pure-button'),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$href('#'),
																_1: {ctor: '[]'}
															}
														},
														{
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$i,
																{
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$class('fa fa-plus'),
																	_1: {ctor: '[]'}
																},
																{ctor: '[]'}),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html$text('New Category'),
																_1: {ctor: '[]'}
															}
														}),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$li,
													{ctor: '[]'},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$a,
															{
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$class('pure-button pure-button-primary'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$href('#'),
																	_1: {ctor: '[]'}
																}
															},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$i,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$class('fa fa-plus'),
																		_1: {ctor: '[]'}
																	},
																	{ctor: '[]'}),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html$text('New Thread'),
																	_1: {ctor: '[]'}
																}
															}),
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h3,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Threads'),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$ol,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('thread-list'),
									_1: {ctor: '[]'}
								},
								A2(
									_elm_lang$core$List$map,
									A2(_user$project$View_Categories_Show$threadListItem, category, store.users),
									A2(_user$project$View_Categories_Show$threadsFor, store.threads, category))),
							_1: {ctor: '[]'}
						}
					}
				});
		});

	var _user$project$View_Threads_Show$postsFor = F2(
		function (posts, thread) {
			return A2(
				_elm_lang$core$List$map,
				function (_p0) {
					var _p1 = _p0;
					return _p1._1;
				},
				_elm_lang$core$Dict$toList(
					A2(
						_elm_lang$core$Dict$filter,
						F2(
							function (k, v) {
								return A2(_elm_lang$core$List$member, k, thread.postIds);
							}),
						posts)));
		});
	var _user$project$View_Threads_Show$postListItem = F2(
		function (store, post) {
			var user = A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Types_User$new,
				A2(_user$project$Types_Store$findUser, store, post.userId));
			return A2(
				_elm_lang$html$Html$li,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('post-item'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$id(
									A2(
										_elm_lang$core$Basics_ops['++'],
										'post-',
										_elm_lang$core$Basics$toString(post.id))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('item-metadata'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$href('#'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(user.username),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$abbr,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(post.insertedAt),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('body'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_evancz$elm_markdown$Markdown$toHtml,
											{ctor: '[]'},
											post.body),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('post-item-actions'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$div,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('spacer'),
													_1: {ctor: '[]'}
												},
												{ctor: '[]'}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$ul,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$class('actions'),
														_1: {ctor: '[]'}
													},
													{
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$li,
															{ctor: '[]'},
															{
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$a,
																	{
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$href('#'),
																		_1: {ctor: '[]'}
																	},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$i,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$class('fa fa-link'),
																				_1: {ctor: '[]'}
																			},
																			{ctor: '[]'}),
																		_1: {ctor: '[]'}
																	}),
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: A2(
																_elm_lang$html$Html$li,
																{ctor: '[]'},
																{
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$a,
																		{
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$href('#'),
																			_1: {ctor: '[]'}
																		},
																		{
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$i,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$class('emoticon-faces'),
																					_1: {ctor: '[]'}
																				},
																				{ctor: '[]'}),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}),
															_1: {
																ctor: '::',
																_0: A2(
																	_elm_lang$html$Html$li,
																	{ctor: '[]'},
																	{
																		ctor: '::',
																		_0: A2(
																			_elm_lang$html$Html$a,
																			{
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$href('#'),
																				_1: {ctor: '[]'}
																			},
																			{
																				ctor: '::',
																				_0: A2(
																					_elm_lang$html$Html$i,
																					{
																						ctor: '::',
																						_0: _elm_lang$html$Html_Attributes$class('fa fa-quote-right'),
																						_1: {ctor: '[]'}
																					},
																					{ctor: '[]'}),
																				_1: {ctor: '[]'}
																			}),
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: A2(
																		_elm_lang$html$Html$li,
																		{ctor: '[]'},
																		{
																			ctor: '::',
																			_0: A2(
																				_elm_lang$html$Html$a,
																				{
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$href('#'),
																					_1: {ctor: '[]'}
																				},
																				{
																					ctor: '::',
																					_0: A2(
																						_elm_lang$html$Html$i,
																						{
																							ctor: '::',
																							_0: _elm_lang$html$Html_Attributes$class('fa fa-reply'),
																							_1: {ctor: '[]'}
																						},
																						{ctor: '[]'}),
																					_1: {ctor: '[]'}
																				}),
																			_1: {ctor: '[]'}
																		}),
																	_1: {ctor: '[]'}
																}
															}
														}
													}),
												_1: {ctor: '[]'}
											}
										}),
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				});
		});
	var _user$project$View_Threads_Show$view = F2(
		function (store, thread) {
			var user = A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Types_User$new,
				A2(_elm_lang$core$Dict$get, thread.userId, store.users));
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('layout-content'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('thread-header'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$h2,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(thread.title),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('item-metadata'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$href('#'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$class('username'),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													A2(_elm_lang$core$Basics_ops['++'], '@', user.username)),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$ol,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('post-list'),
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$List$map,
								_user$project$View_Threads_Show$postListItem(store),
								A2(_user$project$View_Threads_Show$postsFor, store.posts, thread))),
						_1: {ctor: '[]'}
					}
				});
		});

	var _user$project$View$getThreadId = F2(
		function (threadIdOrSlug, model) {
			var _p0 = _elm_lang$core$String$toInt(threadIdOrSlug);
			if (_p0.ctor === 'Ok') {
				return _p0._0;
			} else {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					-1,
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$map,
							function (_p1) {
								var _p2 = _p1;
								return _p2._0;
							},
							_elm_lang$core$Dict$toList(
								A2(
									_elm_lang$core$Dict$filter,
									F2(
										function (k, v) {
											return _elm_lang$core$Native_Utils.eq(v.slug, threadIdOrSlug);
										}),
									model.store.threads)))));
			}
		});
	var _user$project$View$getCategoryId = F2(
		function (categoryIdOrSlug, model) {
			var _p3 = _elm_lang$core$String$toInt(categoryIdOrSlug);
			if (_p3.ctor === 'Ok') {
				return _p3._0;
			} else {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					-1,
					_elm_lang$core$List$head(
						A2(
							_elm_lang$core$List$map,
							function (_p4) {
								var _p5 = _p4;
								return _p5._0;
							},
							_elm_lang$core$Dict$toList(
								A2(
									_elm_lang$core$Dict$filter,
									F2(
										function (k, v) {
											return _elm_lang$core$Native_Utils.eq(v.slug, categoryIdOrSlug);
										}),
									model.store.categories)))));
			}
		});
	var _user$project$View$page = function (model) {
		var findThread = _user$project$Types_Store$findThread(model.store);
		var findCategory = _user$project$Types_Store$findCategory(model.store);
		var _p6 = model.route;
		switch (_p6.ctor) {
			case 'HomeR':
				return _user$project$View_Categories$view(model.store);
			case 'CategoryR':
				var categoryId = A2(_user$project$View$getCategoryId, _p6._0, model);
				var _p7 = findCategory(categoryId);
				if (_p7.ctor === 'Just') {
					return A2(_user$project$View_Categories_Show$view, model.store, _p7._0);
				} else {
					return _elm_lang$html$Html$text('404');
				}
			case 'ThreadR':
				var threadId = A2(_user$project$View$getThreadId, _p6._1, model);
				var maybeThread = findThread(threadId);
				var categoryId = A2(_user$project$View$getCategoryId, _p6._0, model);
				var maybeCategory = findCategory(categoryId);
				var _p8 = {ctor: '_Tuple2', _0: maybeCategory, _1: maybeThread};
				if (((_p8.ctor === '_Tuple2') && (_p8._0.ctor === 'Just')) && (_p8._1.ctor === 'Just')) {
					return A2(_user$project$View_Threads_Show$view, model.store, _p8._1._0);
				} else {
					return _elm_lang$html$Html$text('404');
				}
			default:
				return _elm_lang$html$Html$text('404');
		}
	};
	var _user$project$View$view = function (model) {
		return _user$project$View_Layouts_App$view(
			{
				ctor: '::',
				_0: _user$project$View$page(model),
				_1: {ctor: '[]'}
			});
	};

	var _user$project$Main$parseRoute = function (_p0) {
		return _user$project$Msg$RouteChanged(
			_user$project$Routes$parseHash(_p0));
	};
	var _user$project$Main$main = A2(
		_elm_lang$navigation$Navigation$programWithFlags,
		_user$project$Main$parseRoute,
		{view: _user$project$View$view, init: _user$project$App$init, update: _user$project$Update$update, subscriptions: _user$project$App$subscriptions})(
		A2(
			_elm_lang$core$Json_Decode$andThen,
			function (apiBaseUrl) {
				return _elm_lang$core$Json_Decode$succeed(
					{apiBaseUrl: apiBaseUrl});
			},
			A2(_elm_lang$core$Json_Decode$field, 'apiBaseUrl', _elm_lang$core$Json_Decode$string)));

	var Elm = {};
	Elm['Main'] = Elm['Main'] || {};
	if (typeof _user$project$Main$main !== 'undefined') {
	    _user$project$Main$main(Elm['Main'], 'Main', undefined);
	}

	if (typeof define === "function" && define['amd'])
	{
	  define([], function() { return Elm; });
	  return;
	}

	if (typeof module === "object")
	{
	  module['exports'] = Elm;
	  return;
	}

	var globalElm = this['Elm'];
	if (typeof globalElm === "undefined")
	{
	  this['Elm'] = Elm;
	  return;
	}

	for (var publicModule in Elm)
	{
	  if (publicModule in globalElm)
	  {
	    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
	  }
	  globalElm[publicModule] = Elm[publicModule];
	}

	}).call(this);



/***/ }
/******/ ]);