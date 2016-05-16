'use strict';

System.register(['aurelia-framework', 'prism'], function (_export, _context) {
  var customAttribute, _dec, _class, SyntaxHighlighter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_prism) {}],
    execute: function () {
      _export('SyntaxHighlighter', SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec(_class = function SyntaxHighlighter() {
        _classCallCheck(this, SyntaxHighlighter);

        console.log("oha");
      }) || _class));

      _export('SyntaxHighlighter', SyntaxHighlighter);
    }
  };
});