var _dec, _class, _class2, _temp;



import { customAttribute } from 'aurelia-templating';
import 'prismjs';

export var SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec(_class = (_temp = _class2 = function () {
  function SyntaxHighlighter(element) {
    

    this.element = element;
  }

  SyntaxHighlighter.prototype.bind = function bind() {
    Prism.highlightElement(this.element);
  };

  return SyntaxHighlighter;
}(), _class2.inject = [Element], _temp)) || _class);