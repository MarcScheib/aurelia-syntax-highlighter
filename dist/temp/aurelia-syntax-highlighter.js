'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SyntaxHighlighter = undefined;

var _dec, _class, _class2, _temp;

require('prismjs');

var _aureliaTemplating = require('aurelia-templating');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SyntaxHighlighter = exports.SyntaxHighlighter = (_dec = (0, _aureliaTemplating.customAttribute)('au-syntax'), _dec(_class = (_temp = _class2 = function () {
  function SyntaxHighlighter(element) {
    _classCallCheck(this, SyntaxHighlighter);

    this.element = element;
  }

  SyntaxHighlighter.prototype.bind = function bind() {
    Prism.highlightElement(this.element);
  };

  return SyntaxHighlighter;
}(), _class2.inject = [Element], _temp)) || _class);