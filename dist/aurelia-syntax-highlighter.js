import 'prism';
import {customAttribute,inject} from 'aurelia-framework';

@customAttribute('au-syntax')
@inject(Element)
export class SyntaxHighlighter {
  constructor(element) {
    Prism.highlightElement(element);
  }
}
