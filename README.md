# meteor-css-toggle-switch
Add <a href="https://ghinda.net/css-toggle-switch/">CSS toggle switch</a> to meteor project

## Installation
```
meteor add kostanos:meteor-css-toggle-switch
```

## Using
* Template:
```html
{{> cssToggleSwitch switchData}}
```

* Template helper
```js
switchData: function(){
  return {
    // Current value of object
    value: this.value,
    options: {
      // Required for proper Template work
      atts: {_id: this._id},
      // Optionals
      classLabel: "well",
      labelOn: TAPi18n.__('Available'),
      labelOff: TAPi18n.__('Not available'),
      label: TAPi18n.__('Availability'),
      onChanged: function(val, obj){
        Meteor.call('myMethodToUpdate', obj.atts._id, val, function (error, result) {
          // Error handeling
        });
      }
  }};
}
```

* Change default (global) settings
```js
  CSSToggleSwitch.classLabel = "well";
  CSSToggleSwitch.atts = {/*checked: "checked"*/};
  CSSToggleSwitch.label = "Switch";
  CSSToggleSwitch.labelOff = "Off";
  CSSToggleSwitch.labelOn = "On";
  CSSToggleSwitch.classButton = "btn-default;
```