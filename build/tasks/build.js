var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var through2 = require('through2');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var rename = require('gulp-rename');
var tools = require('aurelia-tools');
var ts = require('gulp-typescript');
var gutil = require('gulp-util');
var gulpIgnore = require('gulp-ignore');
var merge = require('merge2');

var jsName = paths.packageName + '.js';
var compileToModules = ['es2015', 'commonjs', 'amd', 'system', 'native-modules'];

function cleanGeneratedCode() {
  return through2.obj(function(file, enc, callback) {
    file.contents = new Buffer(tools.cleanGeneratedCode(file.contents.toString('utf8')));
    this.push(file);
    return callback();
  });
}

function removeDTSPlugin(options) {
  var found = options.plugins.find(function(x){
    return x instanceof Array;
  });

  var index = options.plugins.indexOf(found);
  options.plugins.splice(index, 1);
  return options;
}

gulp.task('build-index', function() {
  var importsToAdd = paths.importsToAdd.slice();

  var src = gulp.src(paths.files);

  if (paths.sort) {
    src = src.pipe(tools.sortFiles());
  }

  if (paths.ignore) {
    paths.ignore.forEach(function(filename){
      src = src.pipe(gulpIgnore.exclude(filename));
    });
  }

  return src.pipe(through2.obj(function(file, enc, callback) {
    file.contents = new Buffer(tools.extractImports(file.contents.toString('utf8'), importsToAdd));
    this.push(file);
    return callback();
  }))
    .pipe(concat(jsName))
    .pipe(insert.transform(function(contents) {
      return tools.createImportBlock(importsToAdd) + contents;
    }))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-es2015-temp', function () {
  return gulp.src(paths.output + jsName)
    .pipe(to5(assign({}, compilerOptions.commonjs())))
    .pipe(gulp.dest(paths.output + 'temp'));
});

function gulpFileFromString(filename, string) {
  var src = require('stream').Readable({ objectMode: true });
  src._read = function() {
    this.push(new gutil.File({ cwd: paths.appRoot, base: paths.output, path: filename, contents: new Buffer(string) }))
    this.push(null)
  };
  return src;
}

function srcForBabel() {
  return merge(
    gulp.src(paths.source),
    gulpFileFromString(paths.output + 'index.js', "export * from './" + paths.packageName + "';")
  );
}

compileToModules.forEach(function(moduleType){
  gulp.task('build-babel-' + moduleType, function () {
    return srcForBabel()
      .pipe(to5(assign({}, removeDTSPlugin(compilerOptions[moduleType]()))))
      .pipe(cleanGeneratedCode())
      .pipe(gulp.dest(paths.output + moduleType));
  });
});

gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    'build-index',
    'build-es2015-temp',
    compileToModules
      .map(function(moduleType) { return 'build-babel-' + moduleType })
      .concat(paths.useTypeScriptForDTS ? ['build-dts'] : []),
    callback
  );
});
