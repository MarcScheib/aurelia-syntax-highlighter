import {customAttribute, inject} from 'aurelia-framework';
import 'prismjs';

@customAttribute('au-syntax')
@inject(Element)
export class SyntaxHighlighter {
  constructor(element) {
    Prism.highlightElement(element);
  }
}
