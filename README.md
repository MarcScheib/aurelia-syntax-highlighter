# aurelia-syntax-highlighter

[![Build Status](https://travis-ci.org/MarcScheib/aurelia-syntax-highlighter.svg?branch=master)](https://travis-ci.org/MarcScheib/aurelia-syntax-highlighter) 
[![Coverage Status](https://coveralls.io/repos/MarcScheib/aurelia-syntax-highlighter/badge.svg?branch=master&service=github)](https://coveralls.io/github/MarcScheib/aurelia-syntax-highlighter?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/MarcScheib/aurelia-syntax-highlighter.svg)](https://david-dm.org/MarcScheib/aurelia-syntax-highlighter#info=devDependencies)
[![npm Version](https://img.shields.io/npm/v/aurelia-syntax-highlighter.svg)](https://www.npmjs.com/package/aurelia-syntax-highlighter)

**aurelia-syntax-highlighter** is a custom attribute for [Aurelia](http://www.aurelia.io/) to highlight code blocks using PrismJS.

## Documentation

TBD

## Dependencies

This plugin has no external library dependencies.

## Used By

This library is an optional plugin and can be used by any framework.

## Platform Support

This library can be used in the **browser**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
4. Ensure that you have Chrome installed. Karma runs the test suite in Chrome.

5. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running The Sample

To run the sample code using this plugin proceed with these additional steps:

1. Go to the `sample` directory and install dependencies using `jspm`:

  ```shell
  cd sample
  jspm install
  ```
2. Go back to the root of the project and use gulp to serve the sample project:

  ```shell
  cd ..
  gulp watch
  ```
