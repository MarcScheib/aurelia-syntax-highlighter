'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaSyntaxHighlighter = require('./aurelia-syntax-highlighter');

Object.keys(_aureliaSyntaxHighlighter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaSyntaxHighlighter[key];
    }
  });
});