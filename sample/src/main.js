export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-syntax-highlighter');

  aurelia.start().then(a => a.setRoot('src/app'));
}
