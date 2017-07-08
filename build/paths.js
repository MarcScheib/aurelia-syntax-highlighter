var path = require('path');
var fs = require('fs');

// hide warning //
var emitter = require('events');
emitter.defaultMaxListeners = 20;

var appRoot = 'src/';
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

var paths = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  output: 'dist/',
  doc:'./doc',
  tests: 'test/**/*.js',
  packageName: pkg.name,
  useTypeScriptForDTS: false,
  importsToAdd: [],
  sort: true
};

paths.ignore = ['index.js'];
paths.files = [
  'syntax-highlighter.js'
].map(function(file){
  return paths.root + file;
});

paths.sample = 'sample';

module.exports = paths;
