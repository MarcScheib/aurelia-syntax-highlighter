import 'prismjs';
import {customAttribute} from 'aurelia-templating';

@customAttribute('au-syntax')
export class SyntaxHighlighter {
  static inject = [Element];

  constructor(element) {
    this.element = element;
  }

  bind() {
    Prism.highlightElement(this.element);
  }
}
