import {customAttribute, inject} from 'aurelia-framework';
import 'prism';

@customAttribute('au-syntax')
@inject(Element)
export class SyntaxHighlighter {
  constructor(element) {
    Prism.highlightElement(element);
  }
}
