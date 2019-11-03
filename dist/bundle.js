/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.js */ \"./assets/js/log.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ \"./config.js\");\n// npm init\n// npm install --save-dev webpack\n// ./node_modules/.bin/webpack assets/js/app.js --output dist/bundle.js --mode development\n// ./node_modules/.bin/webpack assets/js/app.js --output dist/bundle.js --mode development --watch\n// const log = require('./log.js')\n// log('Salut')\n// ./node_modules/.bin/webpack à remplacer dans package.json\n // import config from '../../config.json';\n\n // import $ from 'jquery'; //(npm installed)\n\nvar importJqueryToggle = false;\ndocument.getElementById('button').addEventListener('click', function () {\n  // jQuery needs to be loaded only here for performance purposes\n  // We need to use lazyloading\n  __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! jquery */ \"./node_modules/jquery/dist/jquery.js\", 7)).then(function (jquery) {\n    if (!importJqueryToggle) {\n      var $ = jquery.default;\n      $('body').append(\"<p id=\\\"FirstAddedElement\\\">jQuery loaded successfully via <b>Webpack</b></p>\");\n      $('body').css('background-color', 'lightblue');\n      importJqueryToggle = !importJqueryToggle;\n    }\n  });\n});\nvar _ref = [1, 2, 3, 4],\n    c = _ref[0],\n    d = _ref[2];\nObject(_log_js__WEBPACK_IMPORTED_MODULE_0__[\"log\"])('Let\\'s console.log WEBPACK !!!');\nObject(_log_js__WEBPACK_IMPORTED_MODULE_0__[\"log2\"])('Let\\'s double console.log WEBPACK');\nObject(_log_js__WEBPACK_IMPORTED_MODULE_0__[\"log\"])(d);\nObject(_log_js__WEBPACK_IMPORTED_MODULE_0__[\"log\"])(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); // TRI CHECKING POSSIBLE DEPUIS V2 (webpack ne gère que les imports effectifs, sinon non;)\n// il suffit d'ajouter --optimize-minimize//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcz9kMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5wbSBpbml0XG4vLyBucG0gaW5zdGFsbCAtLXNhdmUtZGV2IHdlYnBhY2tcbi8vIC4vbm9kZV9tb2R1bGVzLy5iaW4vd2VicGFjayBhc3NldHMvanMvYXBwLmpzIC0tb3V0cHV0IGRpc3QvYnVuZGxlLmpzIC0tbW9kZSBkZXZlbG9wbWVudFxuLy8gLi9ub2RlX21vZHVsZXMvLmJpbi93ZWJwYWNrIGFzc2V0cy9qcy9hcHAuanMgLS1vdXRwdXQgZGlzdC9idW5kbGUuanMgLS1tb2RlIGRldmVsb3BtZW50IC0td2F0Y2hcbi8vIGNvbnN0IGxvZyA9IHJlcXVpcmUoJy4vbG9nLmpzJylcbi8vIGxvZygnU2FsdXQnKVxuLy8gLi9ub2RlX21vZHVsZXMvLmJpbi93ZWJwYWNrIMOgIHJlbXBsYWNlciBkYW5zIHBhY2thZ2UuanNvblxuaW1wb3J0IHsgbG9nLCBsb2cyIH0gZnJvbSAnLi9sb2cuanMnOyAvLyBpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy5qc29uJztcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcnOyAvLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknOyAvLyhucG0gaW5zdGFsbGVkKVxuXG52YXIgaW1wb3J0SnF1ZXJ5VG9nZ2xlID0gZmFsc2U7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGpRdWVyeSBuZWVkcyB0byBiZSBsb2FkZWQgb25seSBoZXJlIGZvciBwZXJmb3JtYW5jZSBwdXJwb3Nlc1xuICAvLyBXZSBuZWVkIHRvIHVzZSBsYXp5bG9hZGluZ1xuICBpbXBvcnQoJ2pxdWVyeScpLnRoZW4oZnVuY3Rpb24gKGpxdWVyeSkge1xuICAgIGlmICghaW1wb3J0SnF1ZXJ5VG9nZ2xlKSB7XG4gICAgICB2YXIgJCA9IGpxdWVyeS5kZWZhdWx0O1xuICAgICAgJCgnYm9keScpLmFwcGVuZChcIjxwIGlkPVxcXCJGaXJzdEFkZGVkRWxlbWVudFxcXCI+alF1ZXJ5IGxvYWRlZCBzdWNjZXNzZnVsbHkgdmlhIDxiPldlYnBhY2s8L2I+PC9wPlwiKTtcbiAgICAgICQoJ2JvZHknKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnbGlnaHRibHVlJyk7XG4gICAgICBpbXBvcnRKcXVlcnlUb2dnbGUgPSAhaW1wb3J0SnF1ZXJ5VG9nZ2xlO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBfcmVmID0gWzEsIDIsIDMsIDRdLFxuICAgIGMgPSBfcmVmWzBdLFxuICAgIGQgPSBfcmVmWzJdO1xubG9nKCdMZXRcXCdzIGNvbnNvbGUubG9nIFdFQlBBQ0sgISEhJyk7XG5sb2cyKCdMZXRcXCdzIGRvdWJsZSBjb25zb2xlLmxvZyBXRUJQQUNLJyk7XG5sb2coZCk7XG5sb2coY29uZmlnKTsgLy8gVFJJIENIRUNLSU5HIFBPU1NJQkxFIERFUFVJUyBWMiAod2VicGFjayBuZSBnw6hyZSBxdWUgbGVzIGltcG9ydHMgZWZmZWN0aWZzLCBzaW5vbiBub247KVxuLy8gaWwgc3VmZml0IGQnYWpvdXRlciAtLW9wdGltaXplLW1pbmltaXplIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/js/log.js":
/*!**************************!*\
  !*** ./assets/js/log.js ***!
  \**************************/
/*! exports provided: log, log2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log\", function() { return log; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"log2\", function() { return log2; });\n// export default function(value){\n//     console.log(value)\n// }\n// import log from './log.js'\nvar log = function log(value) {\n  console.log(value);\n};\nvar log2 = function log2(value) {\n  console.log(value + 'X1');\n  console.log(value + 'X2');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbG9nLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvZy5qcz9kZTY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlKXtcbi8vICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbi8vIH1cbi8vIGltcG9ydCBsb2cgZnJvbSAnLi9sb2cuanMnXG5leHBvcnQgdmFyIGxvZyA9IGZ1bmN0aW9uIGxvZyh2YWx1ZSkge1xuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG59O1xuZXhwb3J0IHZhciBsb2cyID0gZnVuY3Rpb24gbG9nMih2YWx1ZSkge1xuICBjb25zb2xlLmxvZyh2YWx1ZSArICdYMScpO1xuICBjb25zb2xlLmxvZyh2YWx1ZSArICdYMicpO1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/log.js\n");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  cache: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/ZmE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNhY2hlOiB0cnVlXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ })

/******/ });