import {customAttribute, bindable} from 'aurelia-templating';
import {DOM} from 'aurelia-pal';
import 'prismjs';

@customAttribute('au-syntax')
export class SyntaxHighlighter {
  static inject = [Element];

  @bindable({primaryProperty: true}) code;

  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.code !== undefined && this.code.length > 0) {
      clearNodeChildren(this.element);
      this.element.appendChild(DOM.createTextNode(this.code));
    }

    Prism.highlightElement(this.element);
  }

  codeChanged(newValue, oldValue) {
    clearNodeChildren(this.element);
    this.element.appendChild(DOM.createTextNode(newValue));
    Prism.highlightElement(this.element);
  }
}

function clearNodeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
