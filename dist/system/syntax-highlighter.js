'use strict';

System.register(['aurelia-framework', 'prismjs'], function (_export, _context) {
  var customAttribute, inject, _dec, _dec2, _class, SyntaxHighlighter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_prismjs) {}],
    execute: function () {
      _export('SyntaxHighlighter', SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function SyntaxHighlighter(element) {
        _classCallCheck(this, SyntaxHighlighter);

        Prism.highlightElement(element);
      }) || _class) || _class));

      _export('SyntaxHighlighter', SyntaxHighlighter);
    }
  };
});