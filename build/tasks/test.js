var gulp = require('gulp');
var coveralls = require('gulp-coveralls');
var karma = require('karma');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new karma.Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  }, function(e) {
    done(e === 0 ? null : 'karma exited with status ' + e);
  }).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new karma.Server({
    configFile: __dirname + '/../../karma.conf.js'
  }, function(e) {
    done();
  }).start();
});

/**
 * Run test once with code coverage and exit
 */
gulp.task('cover', function (done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true,
    reporters: ['coverage'],
    preprocessors: {
      'test/**/*.js': ['babel'],
      'src/**/*.js': ['babel', 'coverage']
    },
    coverageReporter: {
      type: 'html',
      dir: 'build/reports/coverage'
    }
  }, done).start();
});

/**
 * Report coverage to coveralls
 */
gulp.task('coveralls', ['cover'], function (done) {
  gulp.src('build/reports/coverage/lcov/report-lcovonly.txt')
    .pipe(coveralls());
});
