'use strict';

System.register(['aurelia-templating', 'prismjs'], function (_export, _context) {
  "use strict";

  var customAttribute, _dec, _class, _class2, _temp, SyntaxHighlighter;

  

  return {
    setters: [function (_aureliaTemplating) {
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_prismjs) {}],
    execute: function () {
      _export('SyntaxHighlighter', SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec(_class = (_temp = _class2 = function () {
        function SyntaxHighlighter(element) {
          

          this.element = element;
        }

        SyntaxHighlighter.prototype.bind = function bind() {
          Prism.highlightElement(this.element);
        };

        return SyntaxHighlighter;
      }(), _class2.inject = [Element], _temp)) || _class));

      _export('SyntaxHighlighter', SyntaxHighlighter);
    }
  };
});