"use strict";

var _interopRequireDefault = require("/Users/artemlipovoy/PhpstormProjects/6tamp.ui/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRouterDom = require("react-router-dom");

var _react = _interopRequireDefault(require("react"));

var _reactTransitionGroup = require("react-transition-group");

var _this = void 0,
    _jsxFileName = "/Users/artemlipovoy/PhpstormProjects/6tamp.ui/src/components/FadingRoute/index.js";

var FadingRoute = function FadingRoute(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, Object.assign({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 30
    }
  }), function (_ref) {
    var match = _ref.match;
    return /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
      "in": match != null,
      timeout: 300,
      classNames: "page",
      unmountOnExit: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 19
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "page",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, props.children));
  });
};

var _default = FadingRoute;
exports["default"] = _default;