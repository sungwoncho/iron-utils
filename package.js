Package.describe({
  name: 'sungwoncho:iron-utils',
  version: '0.0.1',
  summary: 'Utilities for Iron Router for both client and server',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('iron:router@1.0.9');

  api.addFiles([
    'iron-utils.js'
  ], ['client']);

  api.export('CurrentRoute');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sungwoncho:iron-utils');
  api.addFiles('iron-utils-tests.js');
});
