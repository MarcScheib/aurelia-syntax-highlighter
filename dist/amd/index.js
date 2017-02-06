define(['exports', './aurelia-syntax-highlighter'], function (exports, _aureliaSyntaxHighlighter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaSyntaxHighlighter).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaSyntaxHighlighter[key];
      }
    });
  });
});