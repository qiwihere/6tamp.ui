"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("./styles");

var _reactGridSystem = require("react-grid-system");

var _react = _interopRequireDefault(require("react"));

var _this = void 0,
    _jsxFileName = "/Users/artemlipovoy/PhpstormProjects/6tamp.ui/src/components/ui/PageHeader.js";

var PageHeader = function PageHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_reactGridSystem.Row, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledPageHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, children));
};

var _default = PageHeader;
exports["default"] = _default;