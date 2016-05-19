import {StageComponent} from 'aurelia-testing';
import 'prismjs';
import {SyntaxHighlighter} from '../../src/syntax-highlighter';

describe('SyntaxHighlighter', () => {
  var component;

  beforeEach(() => {
    component = StageComponent
      .withResources('src/syntax-highlighter')
      .inView(`<pre><code class="language-css" au-syntax>.splash {
  text-align: center;
  margin: 10% 0 0 0;
  box-sizing: border-box;
}</code></pre>`);
  });

  afterEach(() => {
    component.dispose();
  });

  it('highlights the given syntax', done => {
    spyOn(Prism, 'highlightElement');
    component.create()
      .then(() => {
        expect(Prism.highlightElement).toHaveBeenCalled();
      })
      .then(done);
  });
});
