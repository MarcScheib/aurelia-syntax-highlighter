# aurelia-syntax-highlighter

[![Build Status](https://travis-ci.org/MarcScheib/aurelia-syntax-highlighter.svg?branch=master)](https://travis-ci.org/MarcScheib/aurelia-syntax-highlighter) 
[![Coverage Status](https://coveralls.io/repos/github/MarcScheib/aurelia-syntax-highlighter/badge.svg?branch=master)](https://coveralls.io/github/MarcScheib/aurelia-syntax-highlighter?branch=master)
[![Dependency Status](https://img.shields.io/david/MarcScheib/aurelia-syntax-highlighter.svg)](https://david-dm.org/MarcScheib/aurelia-syntax-highlighter)
[![devDependency Status](https://img.shields.io/david/dev/MarcScheib/aurelia-syntax-highlighter.svg)](https://david-dm.org/MarcScheib/aurelia-syntax-highlighter?type=dev)
[![npm Version](https://img.shields.io/npm/v/aurelia-syntax-highlighter.svg)](https://www.npmjs.com/package/aurelia-syntax-highlighter)

**aurelia-syntax-highlighter** is a custom attribute for [Aurelia](http://www.aurelia.io/) to highlight code blocks using PrismJS.

## Documentation

### Installation

The plugin installation happens via JSPM. Go to your project and verify npm (```npm install```) and jspm (```jspm install```) installation was already executed.

Now, you can install the syntax highlighter plugin via the following command:

```
jspm install aurelia-syntax-highlighter
```

The command will add the plugin source code to your _jspm_packages_ directory as well as a mapping into your _config.js_ which looks similar to the following:

```
"aurelia-syntax-highlighter": "github:MarcScheib/aurelia-syntax-highlighter@x.y.z"
```

You can also add a specific branch to your application if you are looking for technical previews by executing the following command:

```
jspm install aurelia-syntax-highlighter=github:MarcScheib/aurelia-syntax-highlighter@master
```

This will add the current _master_ branch instead of the latest tagged version.

### Plugin Configuration in your Application

During the bootstrapping of the Aurelia Framework, you can include the syntax highlighter plugin by simply adding it to the list of loaded plugins:

```javascript
export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    ...
    .plugin('aurelia-syntax-highlighter'); // Add this line to load the plugin

  aurelia.start().then(a => a.setRoot('app', document.body));
}
```

In addition, you need to include a CSS file for syntax highlighting. You can go with your own one or use provided ones by Prism. E.g., include the following line in your ```index.html```:

```html
<link rel="stylesheet" href="jspm_packages/github/PrismJS/prism@1.5.0/themes/prism.css">
```

### Usage

You can now use the plugin to highlight your syntax. Simply add the ```au-syntax``` attribute to your ```<code>```, e.g.:

```html
<pre><code class="language-css" au-syntax>
.splash {
  text-align: center;
  margin: 10% 0 0 0;
  box-sizing: border-box;
}</code></pre>
```

It is also possible to bind dynamic values to the custom attribute, e.g. to the input of a textarea:

```html
<pre><code class="language-css" au-syntax.bind="code"></code></pre>
```

This automatically updates the content of `<code>` to highlighted syntax of the value of `code` binding.

## Dependencies

Aurelia dependencies:

* [aurelia-pal](https://github.com/aurelia/pal)
* [aurelia-templating](https://github.com/aurelia/templating)

External dependencies:

* [Prism](https://github.com/PrismJS/prism)

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
