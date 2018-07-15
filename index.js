(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("react-countdown", ["React"], factory);
	else if(typeof exports === 'object')
		exports["react-countdown"] = factory(require("react"));
	else
		root["react-countdown"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_Component) {
    _inherits(Countdown, _Component);

    function Countdown(props) {
        _classCallCheck(this, Countdown);

        var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));

        _this.oneMinute = 60;
        _this.oneHour = 60 * _this.oneMinute;
        _this.oneDay = 24 * _this.oneHour;

        _this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            countdown: '00:00:00'
        };

        _this.getTime = _this.getTime.bind(_this);
        _this.getCountDown = _this.getCountDown.bind(_this);
        return _this;
    }

    _createClass(Countdown, [{
        key: 'addDigit',
        value: function addDigit(number) {
            return number >= 10 ? number : '0' + number;
        }
    }, {
        key: 'getTime',
        value: function getTime(finalDate) {
            var interval = setInterval(function () {
                var deltaSeconds = (new Date(finalDate) - new Date()) / 1000;

                if (deltaSeconds > 0) {
                    this.setState({
                        hours: Math.floor(deltaSeconds / this.oneHour),
                        minutes: Math.floor(deltaSeconds % this.oneDay % this.oneHour / this.oneMinute),
                        seconds: Math.floor(deltaSeconds % this.oneDay % this.oneHour % this.oneMinute),
                        countdown: this.addDigit(hours) + ':' + this.addDigit(minutes) + ':' + this.addDigit(seconds)
                    });
                } else {
                    clearInterval(interval);
                }
            }, 1);
        }
    }, {
        key: 'getCountDown',
        value: function getCountDown() {
            return this.state.countdown;
        }
    }, {
        key: 'render',
        value: function render() {
            var finalDate = this.props.finalDate;


            this.getTime(finalDate);
            return _react2.default.createElement(
                'div',
                null,
                this.getCountDown()
            );
        }
    }]);

    return Countdown;
}(_react.Component);

exports.default = Countdown;

/***/ })
/******/ ]);
});