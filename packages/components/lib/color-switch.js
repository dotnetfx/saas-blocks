"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorSwitch;

var _react = _interopRequireDefault(require("react"));

var _nativeBase = require("native-base");

function ColorSwitch() {
  var _useColorMode = (0, _nativeBase.useColorMode)(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/_react["default"].createElement(_nativeBase.Tooltip, {
    label: colorMode === "dark" ? "Enable light mode" : "Enable dark mode",
    placement: "bottom right",
    openDelay: 300,
    closeOnClick: false
  }, /*#__PURE__*/_react["default"].createElement(_nativeBase.IconButton, {
    position: "absolute",
    top: 12,
    right: 8,
    onPress: toggleColorMode,
    icon: colorMode === "dark" ? /*#__PURE__*/_react["default"].createElement(_nativeBase.SunIcon, {
      color: "primary.500"
    }) : /*#__PURE__*/_react["default"].createElement(_nativeBase.MoonIcon, {
      color: "primary.500"
    }),
    accessibilityLabel: "Color Mode Switch"
  }));
}