import {bootstrap} from 'aurelia-bootstrapper';
import {Aurelia} from 'aurelia-framework';
import {StageComponent} from 'aurelia-testing';
import 'prismjs';
import {SyntaxHighlighter} from '../../src/syntax-highlighter';

describe('SyntaxHighlighter', () => {
  let component;

  beforeEach(() => {
    component = StageComponent
      .withResources('src/syntax-highlighter')
      .inView(`<code class="language-css" au-syntax>.splash {
  text-align: center;
  margin: 10% 0 0 0;
  box-sizing: border-box;
}</code>`)
      .boundTo({});
  });

  afterEach(() => {
    component.dispose();
  });

  it('highlights the given syntax', done => {
    spyOn(Prism, 'highlightElement');
    component.create(bootstrap)
      .then(() => {
        expect(Prism.highlightElement).toHaveBeenCalled();
      })
      .then(done);
  });
});
