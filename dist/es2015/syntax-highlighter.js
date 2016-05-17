var _dec, _dec2, _class;

import { customAttribute, inject } from 'aurelia-framework';
import 'prismjs';

export let SyntaxHighlighter = (_dec = customAttribute('au-syntax'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class SyntaxHighlighter {
  constructor(element) {
    Prism.highlightElement(element);
  }
}) || _class) || _class);