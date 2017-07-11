import {bootstrap} from 'aurelia-bootstrapper';
import {Aurelia} from 'aurelia-framework';
import {StageComponent} from 'aurelia-testing';
import {DOM} from 'aurelia-pal';

import 'prismjs';
import {SyntaxHighlighter} from '../../src/syntax-highlighter';

describe('SyntaxHighlighter', () => {
  let component;
  let vm = {code: `var elem = () => {}`};

  beforeEach(() => {
    component = StageComponent
      .withResources('src/syntax-highlighter')
      .inView(`
<input id="code-input" value.bind="code">
<pre>
  <code id="code" class="language-javascript" au-syntax.bind="code" textcontent.bind="code"></code>
</pre>
`)
      .boundTo(vm);
  });

  afterEach(() => {
    component.dispose();
  });

  it('highlights the given syntax', done => {
    spyOn(Prism, 'highlightElement');
    component.create(bootstrap)
      .then(() => {
        const inputEl = DOM.getElementById('code-input');
        const codeEl = DOM.getElementById('code');
        expect(inputEl.value).toEqual(vm.code);
        expect(codeEl.innerText).toEqual(vm.code);
        expect(Prism.highlightElement).toHaveBeenCalled();
      })
      .then(done);
  });

  xit('highlights the given syntax on value change', done => {
    component.create(bootstrap)
      .then(() => {
        spyOn(Prism, 'highlightElement');

        const inputEl = DOM.getElementById('code-input');
        const codeEl = DOM.getElementById('code');

        expect(inputEl.value).toEqual(vm.code);
        expect(codeEl.innerText).toEqual(vm.code);

        const newCode = 'var elem = () => { return 1; }';

        inputEl.value = newCode;
        expect(inputEl.value).toEqual(newCode);
        inputEl.dispatchEvent(DOM.createCustomEvent('change'));
        expect(vm.code).toEqual(newCode);
        expect(codeEl.innerText).toEqual(newCode);
        expect(Prism.highlightElement).toHaveBeenCalled();
      })
      .then(done);
  });
});
