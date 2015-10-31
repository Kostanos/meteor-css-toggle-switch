Package.describe({
  name: 'kostanos:meteor-css-toggle-switch',
  summary: 'Simple add CSS toggle switch to meteor',
  version: '1.0.0',
  git: 'git@github.com:Kostanos/meteor-css-toggle-switch.git'
});

Package.onUse(function(api) {
  api.addFiles(['meteor-css-toggle-switch/dist/toggle-switch.css'], 'client');
});
