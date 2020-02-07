(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("antd"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "antd", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("antd"), require("prop-types")) : factory(root["react"], root["antd"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(13);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(14);

var assertThisInitialized = __webpack_require__(11);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(15);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(16);

var iterableToArray = __webpack_require__(17);

var nonIterableSpread = __webpack_require__(18);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(10);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(3);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(8);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(11);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// CONCATENATED MODULE: ./createContext.js


var _React$createContext = external_react_default.a.createContext(),
    ProviderState = _React$createContext.Provider,
    ConsumerState = _React$createContext.Consumer;


// CONCATENATED MODULE: ./SelectComponent/index.js







var Option = external_antd_["Select"].Option;

var SelectComponent_SelectComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(SelectComponent, _React$Component);

  function SelectComponent() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, SelectComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(SelectComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      optionList: _this.props.option || []
    };
    return _this;
  }

  createClass_default()(SelectComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var api = this.props.api;

      if (api) {
        api().then(function (res) {
          return _this2.setState({
            optionList: res
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          placeholder = _this$props.placeholder,
          optionField = _this$props.optionField,
          optionConfig = _this$props.optionConfig; // 有默认传来的 chang事件，和 value值

      var optionList = this.state.optionList;

      if (optionField) {
        // 从组建传进来 optionList 字段
        optionList = optionConfig[optionField];
      }

      return external_react_default.a.createElement(external_antd_["Select"], {
        value: value,
        placeholder: placeholder,
        onChange: onChange
      }, optionList.map(function (_ref) {
        var key = _ref.key,
            label = _ref.label;
        return external_react_default.a.createElement(Option, {
          key: key
        }, label);
      }));
    }
  }]);

  return SelectComponent;
}(external_react_default.a.Component);

/* harmony default export */ var SelectComponent_0 = (SelectComponent_SelectComponent);
// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(9);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./InputComponent/index.js










var InputComponent_InputComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(InputComponent, _React$Component);

  function InputComponent() {
    classCallCheck_default()(this, InputComponent);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(InputComponent).apply(this, arguments));
  }

  createClass_default()(InputComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          optionConfig = _this$props.optionConfig,
          other = objectWithoutProperties_default()(_this$props, ["optionConfig"]);

      return external_react_default.a.createElement(external_antd_["Input"], extends_default()({
        className: "back-page-search-input"
      }, other));
    }
  }]);

  return InputComponent;
}(external_react_default.a.Component);

/* harmony default export */ var InputComponent_0 = (InputComponent_InputComponent);
// CONCATENATED MODULE: ./DatePickerComponent/index.js









var DatePickerComponent_DatePickerComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(DatePickerComponent, _React$Component);

  function DatePickerComponent() {
    classCallCheck_default()(this, DatePickerComponent);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(DatePickerComponent).apply(this, arguments));
  }

  createClass_default()(DatePickerComponent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["DatePicker"], extends_default()({
        className: "back-page-search-date-picker"
      }, this.props));
    }
  }]);

  return DatePickerComponent;
}(external_react_default.a.Component);

/* harmony default export */ var DatePickerComponent_0 = (DatePickerComponent_DatePickerComponent);
// CONCATENATED MODULE: ./RangePickerComponent/index.js








var RangePicker = external_antd_["DatePicker"].RangePicker;

var RangePickerComponent_RangePickerComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(RangePickerComponent, _React$Component);

  function RangePickerComponent() {
    classCallCheck_default()(this, RangePickerComponent);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(RangePickerComponent).apply(this, arguments));
  }

  createClass_default()(RangePickerComponent, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(RangePicker, extends_default()({
        style: {
          width: "386px"
        }
      }, this.props));
    }
  }]);

  return RangePickerComponent;
}(external_react_default.a.Component);

/* harmony default export */ var RangePickerComponent_0 = (RangePickerComponent_RangePickerComponent);
// CONCATENATED MODULE: ./getComponent.js






function getComponent(conponentStr) {
  switch (conponentStr) {
    case "input":
      return InputComponent_0;

    case "select":
      return SelectComponent_0;

    case "button":
      return external_antd_["Button"];

    case "datePicker":
      return DatePickerComponent_0;

    case "rangePicker":
      return RangePickerComponent_0;
  }
}


// EXTERNAL MODULE: ./Search/index.scss
var Search_0 = __webpack_require__(20);

// CONCATENATED MODULE: ./Search/index.js











var Search_Search =
/*#__PURE__*/
function (_PureComponent) {
  inherits_default()(Search, _PureComponent);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      fold: true // 折叠

    };

    _this.search = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          emit = _this$props.emit;
      var searchValue = form.getFieldsValue();
      emit("search", searchValue);
    };

    _this.getSearchValue = function () {
      var form = _this.props.form;
      return form.getFieldsValue();
    };

    _this.reset = function () {
      var _this$props2 = _this.props,
          form = _this$props2.form,
          emit = _this$props2.emit;
      form.resetFields();
      emit("reset");
    };

    _this.foldChange = function () {
      var fold = _this.state.fold;

      _this.setState({
        fold: !fold
      });
    };

    return _this;
  }

  createClass_default()(Search, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          form = _this$props3.form,
          optionConfig = _this$props3.optionConfig,
          foldtThreshold = _this$props3.searchFormConfig.foldtThreshold,
          config = _this$props3.config;
      var getFieldDecorator = form.getFieldDecorator;
      var fold = this.state.fold;
      var showFormItem;

      if (fold && config.length > foldtThreshold) {
        showFormItem = config.slice(0, foldtThreshold);
      } else {
        showFormItem = config;
      }

      return external_react_default.a.createElement("div", {
        className: "search-box"
      }, external_react_default.a.createElement(external_antd_["Form"], {
        className: "search-form",
        layout: "inline"
      }, showFormItem.map(function (_ref, i) {
        var Component = _ref.Component,
            label = _ref.label,
            name = _ref.name,
            defaultValue = _ref.defaultValue,
            orther = objectWithoutProperties_default()(_ref, ["Component", "label", "name", "defaultValue"]);

        return external_react_default.a.createElement(external_antd_["Form"].Item, {
          className: "search-item",
          key: i
        }, external_react_default.a.createElement("p", {
          className: "label"
        }, label), getFieldDecorator(name, {
          initialValue: defaultValue || undefined
        })(external_react_default.a.createElement(Component, extends_default()({
          optionConfig: optionConfig
        }, orther))));
      }), config.length > foldtThreshold && external_react_default.a.createElement(external_antd_["Form"].Item, {
        className: "search-item ase"
      }, external_react_default.a.createElement("div", {
        onClick: this.foldChange,
        className: "fold-box"
      }, fold ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", null, "\u5C55\u5F00"), "  ", external_react_default.a.createElement(external_antd_["Icon"], {
        type: "down"
      })) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", null, "\u6536\u8D77"), "  ", external_react_default.a.createElement(external_antd_["Icon"], {
        type: "up"
      })))), external_react_default.a.createElement(external_antd_["Form"].Item, {
        className: "search-item ase"
      }, external_react_default.a.createElement("div", {
        className: "btn-item"
      }, external_react_default.a.createElement("div", {
        className: "label-btn"
      }, "\xA0"), external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.search,
        type: "primary"
      }, "\u67E5\u8BE2")), external_react_default.a.createElement("div", {
        className: "btn-item"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.reset
      }, "\u91CD\u7F6E")))));
    }
  }]);

  return Search;
}(external_react_["PureComponent"]);

/* harmony default export */ var Search_1 = (external_antd_["Form"].create({
  name: 'Search'
})(Search_Search));
// EXTERNAL MODULE: ./Action/index.scss
var Action = __webpack_require__(22);

// CONCATENATED MODULE: ./Action/index.js




function Action_Action(_ref) {
  var config = _ref.config,
      emit = _ref.emit;
  return external_react_default.a.createElement("div", {
    className: "action-box"
  }, config.map(function (_ref2, i) {
    var actionFn = _ref2.actionFn,
        title = _ref2.title,
        type = _ref2.type;
    return external_react_default.a.createElement(external_antd_["Button"], {
      className: "action-btn",
      key: i,
      onClick: function onClick() {
        return emit(actionFn);
      },
      type: type
    }, title);
  }));
}

/* harmony default export */ var Action_0 = (Action_Action);
// EXTERNAL MODULE: ../node_modules/_@babel_runtime@7.8.4@@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(12);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./TableComponent/index.scss
var TableComponent = __webpack_require__(23);

// CONCATENATED MODULE: ./TableComponent/index.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // 渲染操作菜单

function getActionEle(_ref) {
  var emit = _ref.emit,
      record = _ref.record,
      title = _ref.title,
      text = _ref.text,
      render = _ref.render,
      actionFn = _ref.actionFn,
      tableColumnsProps = _ref.tableColumnsProps,
      extraConfigField = _ref.extraConfigField,
      isDisabled = _ref.isDisabled;
  var disabled = isDisabled && isDisabled({
    text: text,
    record: record,
    tableColumnsProps: tableColumnsProps
  });
  return render ? external_react_default.a.createElement("span", {
    className: "table-action"
  }, render({
    text: text,
    record: record,
    tableColumnsProps: tableColumnsProps,
    emit: emit
  })) : external_react_default.a.createElement("span", {
    onClick: function onClick() {
      return !disabled && emit(actionFn, _objectSpread({}, record, {}, extraConfigField));
    },
    className: "table-action ".concat(disabled ? "disabled" : "")
  }, title);
}

function actionMenu(_ref2) {
  var arr = _ref2.arr,
      record = _ref2.record,
      text = _ref2.text,
      tableColumnsProps = _ref2.tableColumnsProps,
      emit = _ref2.emit;
  return external_react_default.a.createElement(external_antd_["Menu"], null, arr.map(function (_ref3) {
    var title = _ref3.title,
        key = _ref3.key,
        render = _ref3.render,
        actionFn = _ref3.actionFn,
        isDisabled = _ref3.isDisabled,
        extraConfigField = objectWithoutProperties_default()(_ref3, ["title", "key", "render", "actionFn", "isDisabled"]);

    return external_react_default.a.createElement(external_antd_["Menu"].Item, {
      key: key
    }, getActionEle({
      emit: emit,
      record: record,
      title: title,
      text: text,
      render: render,
      actionFn: actionFn,
      tableColumnsProps: tableColumnsProps,
      extraConfigField: extraConfigField,
      isDisabled: isDisabled
    }));
  }));
}

function TableComponent_TableComponent(_ref4) {
  var tableColumnsProps = _ref4.tableColumnsProps,
      emit = _ref4.emit,
      _ref4$config = _ref4.config,
      _ref4$config$actionCo = _ref4$config.actionColumns,
      actionColumns = _ref4$config$actionCo === void 0 ? [] : _ref4$config$actionCo,
      _ref4$config$actionPr = _ref4$config.actionProps;
  _ref4$config$actionPr = _ref4$config$actionPr === void 0 ? {} : _ref4$config$actionPr;

  var _ref4$config$actionPr2 = _ref4$config$actionPr.max,
      actionMax = _ref4$config$actionPr2 === void 0 ? 4 : _ref4$config$actionPr2,
      _ref4$config$actionPr3 = _ref4$config$actionPr.moreText,
      moreText = _ref4$config$actionPr3 === void 0 ? "更多" : _ref4$config$actionPr3,
      tableActionProps = objectWithoutProperties_default()(_ref4$config$actionPr, ["max", "moreText"]),
      columns = _ref4$config.columns,
      _ref4$config$pageSize = _ref4$config.pageSize,
      pageSize = _ref4$config$pageSize === void 0 ? 10 : _ref4$config$pageSize,
      tableProps = objectWithoutProperties_default()(_ref4$config, ["actionColumns", "actionProps", "columns", "pageSize"]);

  // isShow 函数 过滤掉不显示action
  var actionColumnsFilter = function actionColumnsFilter(record) {
    return actionColumns.filter(function (_ref5) {
      var _ref5$isShow = _ref5.isShow,
          isShow = _ref5$isShow === void 0 ? function () {
        return true;
      } : _ref5$isShow,
          title = _ref5.title;
      return isShow({
        text: title,
        record: record,
        tableColumnsProps: tableColumnsProps
      });
    });
  };

  columns = [].concat(toConsumableArray_default()(columns.map(function (item) {
    if (item.render) return _objectSpread({}, item, {
      render: function render(text, record) {
        return item.render({
          text: text,
          record: record,
          emit: emit,
          tableColumnsProps: tableColumnsProps
        });
      }
    });
    return item;
  })), toConsumableArray_default()(actionColumns.length > 0 ? [_objectSpread({
    title: '操作',
    key: 'action',
    render: function render(text, record) {
      var calactionColumns = actionColumnsFilter(record);
      var len = calactionColumns.length;
      var normalColumns = calactionColumns.slice(0, actionMax - 1);
      var downColumns = calactionColumns.slice(actionMax - 1);
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, normalColumns.map(function (_ref6, i, arr) {
        var title = _ref6.title,
            key = _ref6.key,
            render = _ref6.render,
            actionFn = _ref6.actionFn,
            isDisabled = _ref6.isDisabled,
            extraConfigField = objectWithoutProperties_default()(_ref6, ["title", "key", "render", "actionFn", "isDisabled"]);

        return external_react_default.a.createElement("span", {
          key: key
        }, getActionEle({
          emit: emit,
          record: record,
          title: title,
          text: text,
          render: render,
          actionFn: actionFn,
          tableColumnsProps: tableColumnsProps,
          isDisabled: isDisabled,
          extraConfigField: extraConfigField
        }), arr.length - 1 !== i && external_react_default.a.createElement(external_antd_["Divider"], {
          type: "vertical"
        }));
      }), len >= actionMax ? len === actionMax ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Divider"], {
        type: "vertical"
      }), calactionColumns.slice(-1).map(function (_ref7) {
        var title = _ref7.title,
            key = _ref7.key,
            render = _ref7.render,
            actionFn = _ref7.actionFn,
            isDisabled = _ref7.isDisabled,
            extraConfigField = objectWithoutProperties_default()(_ref7, ["title", "key", "render", "actionFn", "isDisabled"]);

        return external_react_default.a.createElement("span", {
          key: key
        }, getActionEle({
          emit: emit,
          record: record,
          title: title,
          text: text,
          render: render,
          actionFn: actionFn,
          tableColumnsProps: tableColumnsProps,
          isDisabled: isDisabled,
          extraConfigField: extraConfigField
        }));
      })) : external_react_default.a.createElement(external_antd_["Dropdown"], {
        overlay: actionMenu({
          arr: downColumns,
          record: record,
          text: text,
          tableColumnsProps: tableColumnsProps,
          emit: emit
        })
      }, external_react_default.a.createElement("span", {
        className: "table-action"
      }, external_react_default.a.createElement(external_antd_["Divider"], {
        type: "vertical"
      }), external_react_default.a.createElement("span", null, moreText), external_react_default.a.createElement(external_antd_["Icon"], {
        type: "down"
      }))) : "");
    }
  }, tableActionProps)] : []));
  return external_react_default.a.createElement(ConsumerState, null, function (value) {
    return external_react_default.a.createElement(external_antd_["Table"], extends_default()({
      onChange: function onChange(info) {
        return emit("tablePageChange", info);
      },
      columns: columns
    }, tableProps, {
      pagination: {
        total: value.total,
        pageSize: pageSize,
        current: value.currentPage,
        showTotal: function showTotal(total) {
          return "\u5171".concat(total, "\u6761");
        }
      },
      dataSource: value.tableDataList,
      loading: value.tableLoading
    }));
  });
}

/* harmony default export */ var TableComponent_0 = (TableComponent_TableComponent);
// EXTERNAL MODULE: ./DetailModal/index.scss
var DetailModal = __webpack_require__(24);

// CONCATENATED MODULE: ./DetailModal/index.js




function DetailModal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DetailModal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DetailModal_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DetailModal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // detailData record

function getValueComponent(_ref) {
  var detailData = _ref.detailData,
      type = _ref.type,
      field = _ref.field,
      render = _ref.render,
      other = objectWithoutProperties_default()(_ref, ["detailData", "type", "field", "render"]);

  switch (type) {
    case "text":
      return external_react_default.a.createElement("span", {
        className: "detail-value"
      }, render ? render({
        text: detailData[field],
        record: detailData
      }) : detailData[field]);

    case "img":
      return external_react_default.a.createElement("span", null, external_react_default.a.createElement("img", {
        style: {
          maxWidth: "100%"
        },
        src: detailData[field],
        alt: ""
      }));

    case "table":
      return render ? render({
        text: detailData[field],
        record: detailData
      }) : external_react_default.a.createElement(external_antd_["Table"], extends_default()({
        dataSource: detailData[field]
      }, other));
  }
}

function DetailModal_DetailModal(_ref2) {
  var visible = _ref2.visible,
      onClose = _ref2.onClose,
      detailData = _ref2.detailData,
      _ref2$config = _ref2.config,
      _ref2$config$list = _ref2$config.list,
      list = _ref2$config$list === void 0 ? [] : _ref2$config$list,
      _ref2$config$width = _ref2$config.width,
      width = _ref2$config$width === void 0 ? 600 : _ref2$config$width,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "详情" : _ref2$title;
  return external_react_default.a.createElement(external_antd_["Drawer"], {
    title: title,
    visible: visible,
    onClose: onClose,
    width: width
  }, list.filter(function (_ref3) {
    var _ref3$isShow = _ref3.isShow,
        isShow = _ref3$isShow === void 0 ? function () {
      return true;
    } : _ref3$isShow,
        field = _ref3.field;
    return isShow({
      text: detailData[field],
      record: detailData
    });
  }).map(function (_ref4) {
    var label = _ref4.label,
        field = _ref4.field,
        type = _ref4.type,
        render = _ref4.render,
        other = objectWithoutProperties_default()(_ref4, ["label", "field", "type", "render"]);

    return external_react_default.a.createElement("div", {
      key: label + field,
      className: "detail-item"
    }, external_react_default.a.createElement("span", {
      className: "detail-lable"
    }, label), getValueComponent(DetailModal_objectSpread({
      detailData: detailData,
      type: type,
      field: field,
      render: render
    }, other)));
  }));
}

/* harmony default export */ var DetailModal_0 = (DetailModal_DetailModal);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(7);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./ConfigComponent.js









function ConfigComponent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ConfigComponent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ConfigComponent_ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ConfigComponent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











function noop() {}

var ConfigComponent_confirm = external_antd_["Modal"].confirm;

var ConfigComponent_ConfigComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ConfigComponent, _React$Component);

  function ConfigComponent(_props) {
    var _this;

    classCallCheck_default()(this, ConfigComponent);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ConfigComponent).call(this, _props));

    _this.renderConfig = function (resultConfig) {
      var _resultConfig$search = resultConfig.search,
          search = _resultConfig$search === void 0 ? [] : _resultConfig$search,
          _resultConfig$action = resultConfig.action,
          action = _resultConfig$action === void 0 ? [] : _resultConfig$action,
          table = resultConfig.table,
          detail = resultConfig.detail;
      _this.searchConfig = search.map(function (_ref) {
        var type = _ref.type,
            props = _ref.props;
        return ConfigComponent_objectSpread({
          Component: getComponent(type)
        }, props);
      });
      _this.actionConfig = action.map(function (_ref2) {
        var type = _ref2.type,
            props = _ref2.props;
        return ConfigComponent_objectSpread({
          Component: getComponent(type)
        }, props);
      });
      _this.tableConfig = table;
      _this.detail = detail;
    };

    _this.state = {
      tableLoading: true,
      total: 0,
      currentPage: 1,
      tableDataList: [],
      isShowDetailModal: false,
      detailData: {}
    };

    _this.updateConfig = function () {
      var _this$props;

      _this.renderConfig((_this$props = _this.props).config.apply(_this$props, arguments));

      _this.forceUpdate();
    };

    _this.getTableData = function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref3$page = _ref3.page,
          page = _ref3$page === void 0 ? 1 : _ref3$page,
          other = objectWithoutProperties_default()(_ref3, ["page"]);

      var searchValue = _this.getSearchValue();

      var fetchFn = _this.props.tableConfig.fetchFn;
      if (!fetchFn) return;
      var tableLoading = _this.state.tableLoading;

      if (!tableLoading) {
        // 减少页面更新
        _this.setState({
          tableLoading: true
        });
      }

      fetchFn(ConfigComponent_objectSpread({
        page: page
      }, searchValue, {}, _this.props.extraFetchProps, {}, other)).then(function (_ref4) {
        var data = _ref4.data,
            total = _ref4.total;

        _this.setState({
          tableDataList: data,
          total: total,
          tableLoading: false,
          currentPage: page // 放在此处更新 page ，减少页面渲染次数

        }); // 每次table数据返回，调用用户声明的此函数


        _this.props.tableReturn({
          data: data,
          total: total
        });
      }); // .finally(() => this.setState({ tableLoading: false })); 减少页面更新
    };

    _this.refreshTable = function () {
      var _this2;

      (_this2 = _this).getTableData.apply(_this2, arguments);
    };

    _this.refreshCurrentPageTable = function () {
      var page = _this.state.currentPage;

      _this.getTableData({
        page: page
      });
    };

    _this.getSearchValue = function () {
      var searchValue = {};

      if (_this.form) {
        searchValue = _this.form.getSearchValue();
      }

      return searchValue;
    };

    _this.search = function (searchValue) {
      _this.props.onSearch(searchValue); // 执行用户调用的 onSearch 事件


      _this.getTableData({
        page: 1
      });
    };

    _this.reset = function () {
      var onReset = _this.props.onReset;

      if (onReset) {
        onReset();
      } else {
        _this.refreshTable();
      }
    };

    _this.tablePageChange = function (_ref5) {
      var page = _ref5.current;

      _this.getTableData({
        page: page
      });
    };

    _this.delete = function (data) {
      var _this$props2 = _this.props,
          deleteRecordFn = _this$props2.tableConfig.deleteRecordFn,
          extraDeleteProps = _this$props2.extraDeleteProps;
      var confirmTitleField = data.confirmTitleField;

      var me = assertThisInitialized_default()(_this);

      ConfigComponent_confirm({
        title: "\u786E\u8BA4\u5220\u9664 ".concat(confirmTitleField ? data[confirmTitleField] : ""),
        content: "",
        onOk: function onOk() {
          deleteRecordFn({
            record: data,
            extraDeleteProps: extraDeleteProps
          }).then(function () {
            external_antd_["message"].success("删除成功"); // 判断 不是第一页，且 这页只有一个了，请求上一页的数据

            var _me$state = me.state,
                currentPage = _me$state.currentPage,
                tableDataList = _me$state.tableDataList;
            var isUpdatePrePageData = currentPage !== 1 && tableDataList.length === 1;

            if (isUpdatePrePageData) {
              me.getTableData({
                page: currentPage - 1
              });
            } else {
              me.refreshCurrentPageTable();
            }
          }).catch(external_antd_["message"].error);
        },
        onCancel: function onCancel() {},
        okText: "确认",
        cancelText: "取消"
      });
    };

    _this.tableDetail = function (record) {
      _this.setState({
        isShowDetailModal: true,
        detailData: record
      });
    };

    _this.closeDetailModal = function () {
      return _this.setState({
        isShowDetailModal: false
      });
    };

    _this.handleEmit = function (actionFn, data) {
      if (actionFn.includes("emit")) {
        _this.props.actionEmit(actionFn.split("-")[1], data);
      } else {
        _this[actionFn](data);
      }
    };

    var _resultConfig; // config 是函数类型，就调用函数，获取返回值


    if (Object.prototype.toString.call(_this.props.config) === "[object Function]") {
      _resultConfig = _this.props.config();
    } else {
      // 不是函数，直接取值
      _resultConfig = _this.props.config;
    }

    _this.renderConfig(_resultConfig);

    return _this;
  } // 从 config提取各模块所需配置数据


  createClass_default()(ConfigComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refreshTable();
    } // 更新config 供用户调用 data 为用户传递的数据，再传到config函数

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          isShowDetailModal = _this$state.isShowDetailModal,
          detailData = _this$state.detailData;
      var _this$props3 = this.props,
          optionConfig = _this$props3.optionConfig,
          tableColumnsProps = _this$props3.tableColumnsProps,
          searchFormConfig = _this$props3.searchFormConfig;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, this.searchConfig.length > 0 && external_react_default.a.createElement(Search_1, {
        searchFormConfig: searchFormConfig,
        optionConfig: optionConfig,
        wrappedComponentRef: function wrappedComponentRef(form) {
          return _this3.form = form;
        },
        emit: this.handleEmit,
        config: this.searchConfig
      }), this.actionConfig.length > 0 && external_react_default.a.createElement(Action_0, {
        emit: this.handleEmit,
        config: this.actionConfig
      }), this.tableConfig && external_react_default.a.createElement(ProviderState, {
        value: this.state
      }, external_react_default.a.createElement(TableComponent_0, {
        emit: this.handleEmit,
        config: this.tableConfig,
        tableColumnsProps: tableColumnsProps
      })), this.detail && external_react_default.a.createElement(DetailModal_0, {
        visible: isShowDetailModal,
        onClose: this.closeDetailModal,
        config: this.detail,
        detailData: detailData
      }));
    }
  }]);

  return ConfigComponent;
}(external_react_default.a.Component);

ConfigComponent_ConfigComponent.propTypes = {
  config: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.func]),
  tableConfig: external_prop_types_default.a.object,
  onSearch: external_prop_types_default.a.func,
  onReset: external_prop_types_default.a.func,
  actionEmit: external_prop_types_default.a.func,
  extraFetchProps: external_prop_types_default.a.object,
  optionConfig: external_prop_types_default.a.object,
  extraDeleteProps: external_prop_types_default.a.object,
  tableColumnsProps: external_prop_types_default.a.object,
  searchFormConfig: external_prop_types_default.a.object,
  tableReturn: external_prop_types_default.a.func
};
ConfigComponent_ConfigComponent.defaultProps = {
  config: {},
  tableConfig: {},
  onSearch: noop,
  // onReset: noop,
  actionEmit: noop,
  extraFetchProps: {},
  // 需要额外给表格请求的字段
  optionConfig: {},
  // 获取option list数据 拿配置的optionField作为属性 optionConfig:{[optionField]: []}
  searchFormConfig: {
    // 搜索表单设置 展开
    foldtThreshold: 3 // 展开阈值

  },
  tableReturn: noop // 每次table请求完数据，调用此函数返回数据

};
/* harmony default export */ var ConfigComponent_0 = (ConfigComponent_ConfigComponent);
/**
 * 向上传递：
 * 编辑
 * 新增
 */
// CONCATENATED MODULE: ./RenderComponent.js






var RenderComponent_RenderComponent =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(RenderComponent, _React$Component);

  function RenderComponent() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, RenderComponent);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(RenderComponent)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    _this.state = {
      isShowModal: false,
      // 添加和编辑的弹窗
      isEdit: false,
      editData: {}
    };

    _this.updateConfig = function () {
      var _this$tableComponent;

      // args 数组形式
      (_this$tableComponent = _this.tableComponent).updateConfig.apply(_this$tableComponent, arguments);
    };

    _this.actionEmit = function (type, data) {
      _this[type](data);
    };

    _this.add = function () {
      _this.setState({
        isShowModal: true,
        isEdit: false
      });
    };

    _this.hideModal = function () {
      _this.setState({
        isShowModal: false
      });
    };

    _this.tableEdit = function (record) {
      _this.setState({
        isShowModal: true,
        isEdit: true,
        editData: record
      });
    };

    _this.updateTable = function () {
      _this.hideModal();

      var isEdit = _this.state.isEdit;

      if (isEdit) {
        // 编辑刷新当前页
        _this.tableComponent.refreshCurrentPageTable();
      } else {
        // 新增刷新第一页
        _this.tableComponent.refreshTable();
      }
    };

    _this.refreshTable = function () {
      var _this$tableComponent2;

      (_this$tableComponent2 = _this.tableComponent).refreshTable.apply(_this$tableComponent2, arguments);
    };

    return _this;
  }

  return RenderComponent;
}(external_react_default.a.Component);

/* harmony default export */ var RenderComponent_0 = (RenderComponent_RenderComponent);
// CONCATENATED MODULE: ./index.js
/* concated harmony reexport ConfigComponent */__webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent_0; });
/* concated harmony reexport RenderComponent */__webpack_require__.d(__webpack_exports__, "RenderComponent", function() { return RenderComponent_0; });




/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map