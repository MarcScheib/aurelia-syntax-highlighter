'use strict';

System.register(['./syntax-highlighter'], function (_export, _context) {
  "use strict";

  var SyntaxHighlighter;


  function configure(config) {
    config.globalResources('./syntax-highlighter');
  }

  return {
    setters: [function (_syntaxHighlighter) {
      SyntaxHighlighter = _syntaxHighlighter.SyntaxHighlighter;
    }],
    execute: function () {
      _export('SyntaxHighlighter', SyntaxHighlighter);

      _export('configure', configure);
    }
  };
});