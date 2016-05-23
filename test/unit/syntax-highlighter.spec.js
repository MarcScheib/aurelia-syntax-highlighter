import {bootstrap} from 'aurelia-bootstrapper';
import {View} from 'aurelia-templating';
import {Aurelia} from 'aurelia-framework';
import 'prismjs';
import {SyntaxHighlighter} from '../../src/syntax-highlighter';

class ComponentTester {
  bind;
  dispose;
  element;
  configure = aurelia => aurelia.use.standardConfiguration();
  _html;
  _resources = [];
  _rootView;

  bootstrap(configure) {
    this.configure = configure;
  }

  withResources(resources) {
    this._resources = resources;
    return this;
  }

  inView(html) {
    this._html = html;
    return this;
  }

  create() {
    return bootstrap(aurelia => {
      return Promise.resolve(this.configure(aurelia)).then(() => {
        aurelia.use.globalResources(this._resources);
        return aurelia.start().then(a => {
          let host = document.createElement('div');
          host.innerHTML = this._html;
          document.body.appendChild(host);
          aurelia.enhance({}, host);
          this._rootView = aurelia.root;
          this.element = host.firstElementChild;
          this.dispose = () => host.parentNode.removeChild(host);
          return new Promise(resolve => setTimeout(() => resolve(), 0));
        });
      });
    });
  }
}

describe('SyntaxHighlighter', () => {
  var component;

  beforeEach(() => {
    component = new ComponentTester()
      .withResources('src/syntax-highlighter')
      .inView(`<code class="language-css" au-syntax>.splash {
  text-align: center;
  margin: 10% 0 0 0;
  box-sizing: border-box;
}</code>`);
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
