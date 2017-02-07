import {configure} from '../../src/aurelia-syntax-highlighter';

describe('the syntax highlighter configure routine', () => {
  it('should globalize the syntax attribute', () => {
    let config = {
      resources: [],
      globalResources: function(res) {
        this.resources.push(res);
      }
    };

    configure(config);

    expect(config.resources).toContain('./syntax-highlighter');
  });
});
