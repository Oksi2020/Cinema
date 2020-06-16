/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/Observer.js":
/*!*********************************!*\
  !*** ./application/Observer.js ***!
  \*********************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable() {\n  var observers = [];\n\n  this.sendMessage = function (msg) {\n    observers.map(function (obs) {\n      obs.notify(msg);\n    });\n  };\n\n  this.addObserver = function (observer) {\n    observers.push(observer);\n  };\n}\nfunction Observer(behavior) {\n  // Делаем функцию, что бы через callback можно\n  // было использовать различные функции внутри\n  this.notify = function (msg) {\n    behavior(msg);\n  };\n}\n\n//# sourceURL=webpack:///./application/Observer.js?");

/***/ }),

/***/ "./application/choosePlace.js":
/*!************************************!*\
  !*** ./application/choosePlace.js ***!
  \************************************/
/*! exports provided: choosePlace, cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"choosePlace\", function() { return choosePlace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cart\", function() { return cart; });\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/Observer.js\");\n/* harmony import */ var _generateHall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateHall */ \"./application/generateHall.js\");\n\n\nvar cart = [];\n\nvar choosePlace = function choosePlace() {\n  var addBtn = document.querySelector('.addToCart');\n  var observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n  var newTicket;\n  var sum = 0;\n  var placeObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (elem) {\n    cart.push(elem);\n    console.log(cart);\n    renderRequest(elem);\n  });\n  var changeSum = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (elem) {\n    addBtn.value = \"\\u0414\\u043E\\u0434\\u0430\\u0442\\u0438 \\u0434\\u043E \\u043A\\u043E\\u0448\\u0438\\u043A\\u0430 \".concat(sum, \" \\u0433\\u0440\\u043D\");\n  });\n  var deleteTicket = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (elem) {\n    var ticketNodes = document.querySelectorAll('.delTicket');\n    ticketNodes.forEach(function (item) {\n      item.addEventListener('click', del);\n    });\n  });\n  observable.addObserver(placeObs);\n  observable.addObserver(changeSum);\n  observable.addObserver(deleteTicket);\n  var places = document.querySelectorAll('.place');\n  places.forEach(function (item) {\n    item.addEventListener('click', function () {\n      newTicket = _generateHall__WEBPACK_IMPORTED_MODULE_1__[\"hallScheme\"].find(function (elem) {\n        return elem.places.find(function (place) {\n          return Number(place.number) === Number(item.id) && Number(place.row) === Number(item.parentElement.id);\n        });\n      }).places.find(function (place) {\n        return Number(place.number) === Number(item.id) && Number(place.row) === Number(item.parentElement.id);\n      });\n\n      if (!newTicket['active']) {\n        item.classList.add('active');\n        sum += newTicket['price'];\n        item.innerHTML = item.id;\n        observable.sendMessage(newTicket);\n        newTicket['active'] = true;\n      }\n    });\n  });\n\n  var renderRequest = function renderRequest(elem) {\n    var cart = document.querySelector('.cart');\n    var ticket = document.createElement('div');\n    ticket.id = elem.row;\n    ticket.innerHTML = \"\".concat(elem.number, \" \\u043C\\u0435\\u0441\\u0442\\u043E \").concat(elem.row, \" \\u0440\\u044F\\u0434 \").concat(elem.price, \" \\u0433\\u0440\\u043D <input type=\\\"button\\\" value=\\\"&times\\\" class=\\\"delTicket\\\">\");\n    ticket.className = \"ticket \".concat(elem.number);\n    cart.insertAdjacentElement('afterbegin', ticket);\n  };\n\n  var del = function del(e) {\n    var r = /\\d+/;\n    var makePass;\n    var elemForDel = e.target.parentElement;\n\n    for (var i = 0; i < cart.length; i++) {\n      if (Number(elemForDel.id) === cart[i].row && Number(elemForDel.className.match(r)[0]) === cart[i].number) {\n        makePass = cart[i];\n        cart.splice(i, 1);\n      }\n    }\n\n    var delTick = _generateHall__WEBPACK_IMPORTED_MODULE_1__[\"hallScheme\"].find(function (elem) {\n      return elem.places.find(function (elem) {\n        return elem === makePass;\n      });\n    }).places.find(function (place) {\n      return place === makePass;\n    });\n    delTick.active = false;\n    elemForDel.parentElement.removeChild(elemForDel);\n    console.log(delTick);\n  };\n};\n\n\n\n//# sourceURL=webpack:///./application/choosePlace.js?");

/***/ }),

/***/ "./application/generateHall.js":
/*!*************************************!*\
  !*** ./application/generateHall.js ***!
  \*************************************/
/*! exports provided: generateHall, hallScheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHall\", function() { return generateHall; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hallScheme\", function() { return hallScheme; });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar hall = document.querySelector('.hall');\nvar hallScheme = [];\n\nvar generateHall = function generateHall(config, sum) {\n  if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(config) == \"object\") {\n    hallScheme = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(config);\n\n    for (var i = 0; i < config.length; i++) {\n      var row = document.createElement('div');\n      hallScheme[i].places = [];\n      row.className = \"row \".concat(config[i]['type'] ? config[i]['type'] : '');\n      row.id = i + 1;\n      hall.appendChild(row);\n\n      for (var j = 0; j < config[i]['count']; j++) {\n        row.innerHTML += \"<div class='place' id =\\\"\".concat(j + 1, \"\\\"></div>\");\n        hallScheme[i].places.push({\n          'row': i + 1,\n          'number': j + 1,\n          'availability': true,\n          'active': false,\n          'price': sum\n        });\n      }\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack:///./application/generateHall.js?");

/***/ }),

/***/ "./application/hallConfig.json":
/*!*************************************!*\
  !*** ./application/hallConfig.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":\\\"eco\\\",\\\"count\\\":12},{\\\"type\\\":\\\"eco\\\",\\\"count\\\":12},{\\\"type\\\":\\\"eco\\\",\\\"count\\\":12},{\\\"type\\\":\\\"eco\\\",\\\"count\\\":12},{\\\"type\\\":\\\"eco\\\",\\\"count\\\":12},{\\\"count\\\":20},{\\\"count\\\":20},{\\\"count\\\":20},{\\\"type\\\":\\\"premium\\\",\\\"count\\\":23},{\\\"type\\\":\\\"premium\\\",\\\"count\\\":23}]\");\n\n//# sourceURL=webpack:///./application/hallConfig.json?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return arrayLikeToArray(arr);\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_generateHall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application/generateHall */ \"./application/generateHall.js\");\n/* harmony import */ var _application_choosePlace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../application/choosePlace */ \"./application/choosePlace.js\");\n/* harmony import */ var _application_hallConfig_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application/hallConfig.json */ \"./application/hallConfig.json\");\nvar _application_hallConfig_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../application/hallConfig.json */ \"./application/hallConfig.json\", 1);\n\n\n\nvar hall = document.querySelector('.hall');\nwindow.addEventListener('DOMContentLoaded', function () {\n  Object(_application_generateHall__WEBPACK_IMPORTED_MODULE_0__[\"generateHall\"])(_application_hallConfig_json__WEBPACK_IMPORTED_MODULE_2__, 50);\n  Object(_application_choosePlace__WEBPACK_IMPORTED_MODULE_1__[\"choosePlace\"])();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });