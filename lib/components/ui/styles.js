"use strict";

var _interopRequireDefault = require("/Users/artemlipovoy/PhpstormProjects/6tamp.ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPageDescription = exports.StyledPageHeader = exports.StyledButtonLink = exports.StyledButton = exports.StyledErr = exports.StyledTextInput = exports.colors = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("/Users/artemlipovoy/PhpstormProjects/6tamp.ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactGridSystem = require("react-grid-system");

var _reactRouterDom = require("react-router-dom");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var colors = {
  normal: {
    text: "#535353",
    background: "#FFFFFF",
    border: "#535353"
  },
  normal_inverse: {
    text: "#FFFFFF",
    background: "#535353",
    border: "#FFFFFF"
  },
  normal_disabled: {
    text: "#FFFFFF",
    background: "#D2D2D2",
    border: "#D2D2D2"
  },
  primary: {
    text: "#FFFFFF",
    background: "#A342EF",
    border: "#A342EF"
  },
  primary_inverse: {
    text: "#A342EF",
    background: "#FFFFFF",
    border: "#A342EF"
  },
  primary_disabled: {
    text: "#FFFFFF",
    background: "#D2D2D2",
    border: "#D2D2D2"
  },
  flat: {
    text: "#535353",
    background: "#ffffff",
    border: "#ffffff"
  },
  flat_inverse: {
    text: "#535353",
    background: "#ffffff",
    border: "#ffffff"
  },
  flat_disabled: {
    text: "#898989",
    background: "#ffffff",
    border: "#ffffff"
  }
};
exports.colors = colors;

var StyledTextInput = _styledComponents["default"].input(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 14px;\n  line-height: 17px;\n  font-weight: 400;\n  color: #535353;\n  padding: 14px 10px;\n  border: 1px solid #B4B4B4;\n  border-radius: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 20px;\n  outline: none;\n  \n  ::placeholder{\n    color: #979797;\n  }\n"])));

exports.StyledTextInput = StyledTextInput;

var StyledErr = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    display: block;\n    color: #D80202;\n    font-size: 14px;\n    line-height: 21px;\n"])));

exports.StyledErr = StyledErr;
var StyledButtonCss = (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: 500;\n  margin: 10px 0;\n  text-align: center;\n  box-sizing: border-box;\n  width: 100%;\n  outline: none;\n  border-radius: 12px;\n  padding: 15px;\n  \n  color: ", ";\n  background: ", ";\n  border: 1px solid ", ";\n  \n  :hover{\n      color: ", ";\n      background: ", ";\n      border: 1px solid ", ";\n  }\n  :disabled{\n      color: ", ";\n      background: ", ";\n      border: 1px solid ", ";\n  }\n"])), function (state) {
  var _state$appearance;

  return colors[(_state$appearance = state.appearance) !== null && _state$appearance !== void 0 ? _state$appearance : "normal"].text;
}, function (state) {
  var _state$appearance2;

  return colors[(_state$appearance2 = state.appearance) !== null && _state$appearance2 !== void 0 ? _state$appearance2 : "normal"].background;
}, function (state) {
  var _state$appearance3;

  return colors[(_state$appearance3 = state.appearance) !== null && _state$appearance3 !== void 0 ? _state$appearance3 : "normal"].border;
}, function (state) {
  var _state$appearance4;

  return colors[((_state$appearance4 = state.appearance) !== null && _state$appearance4 !== void 0 ? _state$appearance4 : "normal") + "_inverse"].text;
}, function (state) {
  var _state$appearance5;

  return colors[((_state$appearance5 = state.appearance) !== null && _state$appearance5 !== void 0 ? _state$appearance5 : "normal") + "_inverse"].background;
}, function (state) {
  var _state$appearance6;

  return colors[((_state$appearance6 = state.appearance) !== null && _state$appearance6 !== void 0 ? _state$appearance6 : "normal") + "_inverse"].border;
}, function (state) {
  var _state$appearance7;

  return colors[((_state$appearance7 = state.appearance) !== null && _state$appearance7 !== void 0 ? _state$appearance7 : "normal") + "_disabled"].text;
}, function (state) {
  var _state$appearance8;

  return colors[((_state$appearance8 = state.appearance) !== null && _state$appearance8 !== void 0 ? _state$appearance8 : "normal") + "_disabled"].background;
}, function (state) {
  var _state$appearance9;

  return colors[((_state$appearance9 = state.appearance) !== null && _state$appearance9 !== void 0 ? _state$appearance9 : "normal") + "_disabled"].border;
});

var StyledButton = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["", ""])), StyledButtonCss);

exports.StyledButton = StyledButton;
var StyledButtonLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    ", ";\n    text-decoration: none;\n    display: block;\n    \n    ", "\n"])), StyledButtonCss, function (state) {
  var _state$appearance10, _state$appearance11, _state$appearance12;

  return state.disabled ? "\n        color: ".concat(colors[((_state$appearance10 = state.appearance) !== null && _state$appearance10 !== void 0 ? _state$appearance10 : "normal") + "_disabled"].text, ";\n        background: ").concat(colors[((_state$appearance11 = state.appearance) !== null && _state$appearance11 !== void 0 ? _state$appearance11 : "normal") + "_disabled"].background, ";\n        border: 1px solid ").concat(colors[((_state$appearance12 = state.appearance) !== null && _state$appearance12 !== void 0 ? _state$appearance12 : "normal") + "_disabled"].border, ";\n    ") : null;
});
exports.StyledButtonLink = StyledButtonLink;
var StyledPageHeader = (0, _styledComponents["default"])(_reactGridSystem.Col)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 22px;\n  line-height: 33px;\n  font-weight: 500;\n  color: ", ";\n  margin-bottom: 20px;\n  padding: 0!important;\n"])), colors.normal.text);
exports.StyledPageHeader = StyledPageHeader;
var StyledPageDescription = (0, _styledComponents["default"])(_reactGridSystem.Col)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: 400;\n  color: ", ";\n  margin-bottom: 40px;\n  padding: 0!important;\n"])), colors.normal.text);
exports.StyledPageDescription = StyledPageDescription;