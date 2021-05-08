"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/artemlipovoy/PhpstormProjects/6tamp.ui/src/components/ui/Button.js";

var Button = function Button(props) {
  if (props.type === "link") {
    if (props.to.includes('http')) return /*#__PURE__*/_react["default"].createElement(_styles.StyledA, Object.assign({}, props, {
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 20
      }
    }), props.children);
    return /*#__PURE__*/_react["default"].createElement(_styles.StyledButtonLink, Object.assign({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }
    }), props.children);
  }

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledButton, Object.assign({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }), props.children);
};

Button.propTypes = {
  appearance: _propTypes["default"].oneOf(Object.keys(_styles.colors)),
  type: _propTypes["default"].string
};
var _default = Button;
exports["default"] = _default;