import 'prismjs';
import {
  customAttribute,
  bindable
} from 'aurelia-templating';
import {
  DOM
} from 'aurelia-pal';
export declare class SyntaxHighlighter {
  static inject: any;
  code: any;
  constructor(element?: any);
  bind(): any;
  codeChanged(newValue?: any, oldValue?: any): any;
}