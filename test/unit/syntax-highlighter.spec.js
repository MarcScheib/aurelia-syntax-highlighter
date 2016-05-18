import {StageComponent} from 'aurelia-testing';
import {SyntaxHighlighter} from '../../src/syntax-highlighter';

describe('SyntaxHighlighter', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('src/syntax-highlighter')
      .inView(`<pre><code class="language-css" au-syntax>
.splash {
  text-align: center;
  margin: 10% 0 0 0;
  box-sizing: border-box;
}</code></pre>`);
  });

  afterEach(() => {
    component.dispose();
  });
});
