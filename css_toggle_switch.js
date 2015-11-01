CSSToggleSwitch = {
  classLabel: "well",
  atts: {/*checked: "checked"*/},
  label: "Switch",
  labelOff: "Off",
  labelOn: "On",
  classButton: "btn-default"
};

Template.cssToggleSwitch.onCreated(function(){
  var instance = this;
  this.value = new ReactiveVar;
  if (this.data === undefined){
    this.switchOptions = _.clone(CSSToggleSwitch);
    this.value.set(false);
  }else{
    if (this.data instanceof Object && this.data.options !== undefined){
      this.switchOptions = _.defaults(this.data.options, CSSToggleSwitch);
      if (this.data.value !== undefined) this.value.set(this.data.value)
    } else {
      this.switchOptions = _.clone(CSSToggleSwitch);
      this.value.set(this.data)
    }
  }
  instance.autorun(function(){
    if (instance.value.get()){
      instance.switchOptions.atts.checked = "checked";
    } else if ('checked' in instance.switchOptions.atts) {
      delete instance.switchOptions.atts.checked;
    }
  });
});
Template.cssToggleSwitch.helpers({
  switchOptions: function(){return Template.instance().switchOptions;}
});
Template.cssToggleSwitch.events({
  'change input': function (e) {
    var value = e.target.checked;
    if (this.onChanged && typeof this.onChanged == 'function'){
      this.onChanged(value, this);
    }
    Template.instance().value.set(value);
  }
});