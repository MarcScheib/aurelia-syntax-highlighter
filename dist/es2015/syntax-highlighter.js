var _dec, _class, _class2, _temp;

import { customAttribute } from 'aurelia-templating';
import 'prismjs';

export let SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec(_class = (_temp = _class2 = class SyntaxHighlighter {

  constructor(element) {
    this.element = element;
  }

  bind() {
    Prism.highlightElement(this.element);
  }
}, _class2.inject = [Element], _temp)) || _class);