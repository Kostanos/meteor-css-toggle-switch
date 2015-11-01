Package.describe({
  name: 'kostanos:meteor-css-toggle-switch',
  summary: 'Simple add CSS toggle switch to meteor',
  version: '1.1.0',
  git: 'https://github.com/Kostanos/meteor-css-toggle-switch.git'
});

Package.onUse(function(api) {
  api.use('templating');
  api.use('blaze');
  api.use('underscore');

  api.addFiles(['css-toggle-switch/dist/toggle-switch.css', 'css_toggle_switch.html', 'css_toggle_switch.js'], 'client');
  api.export('CSSToggleSwitch');
});
