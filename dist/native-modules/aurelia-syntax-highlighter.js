'use strict';

exports.__esModule = true;
exports.configure = exports.SyntaxHighlighter = undefined;

var _syntaxHighlighter = require('./syntax-highlighter');

function configure(config) {
  config.globalResources('./syntax-highlighter');
}

exports.SyntaxHighlighter = _syntaxHighlighter.SyntaxHighlighter;
exports.configure = configure;