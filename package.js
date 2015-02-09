Package.describe({
  name: 'ostrio:jsextensions',
  version: '0.0.4',
  summary: 'Useful JavaScript Objects Extensions',
  git: 'https://github.com/VeliovGroup/JavaScript-Objects-Extensions-for-Meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('extensions/date.js', ['client', 'server']);
  api.addFiles('extensions/math.js', ['client', 'server']);
  api.addFiles('extensions/object.js', ['client', 'server']);
  api.addFiles('extensions/regexp.js', ['client', 'server']);
  api.addFiles('extensions/string.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('extensions/date.js', ['client', 'server']);
  api.addFiles('extensions/math.js', ['client', 'server']);
  api.addFiles('extensions/object.js', ['client', 'server']);
  api.addFiles('extensions/regexp.js', ['client', 'server']);
  api.addFiles('extensions/string.js', ['client', 'server']);
  api.addFiles('ostrio:jsextensions-tests.js', ['client', 'server']);
});
