Package.describe({
  name: 'sungwoncho:iron-utils',
  version: '0.1.0',
  summary: 'convenient client side utilities for Iron Router',
  git: 'https://github.com/sungwoncho/iron-utils',
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
  api.use('iron:router@1.0.9');
  api.use('sungwoncho:iron-utils');
  api.addFiles([
    'tests/support.js',
    'tests/current_route_tests.js',
  ], ['client']);
});
