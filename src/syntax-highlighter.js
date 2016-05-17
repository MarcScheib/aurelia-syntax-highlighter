import {customAttribute, inject} from 'aurelia-framework';
import 'prismjs';

@customAttribute('au-syntax')
@inject(Element)
export class SyntaxHighlighter {
  constructor(element) {
    this.element = element;
  }

  bind() {
    Prism.highlightElement(this.element);
  }
}
