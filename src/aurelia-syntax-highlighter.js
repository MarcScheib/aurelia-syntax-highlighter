import {SyntaxHighlighter} from './syntax-highlighter';

function configure(config) {
  config.globalResources(
    './syntax-highlighter'
  );
}

export {
  SyntaxHighlighter,
  configure
};
