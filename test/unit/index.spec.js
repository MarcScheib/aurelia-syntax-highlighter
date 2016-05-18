import {configure} from '../../src/index';

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
