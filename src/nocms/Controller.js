var NoCMS = NoCMS || {};
define(['./model', './view'], function(Model, View) {
  NoCMS._controllers = [];
  NoCMS.Controller = Class.extend({
    init: function() {
      NoCMS._controllers.push(this);
    },
  });
  return NoCMS.Contriller;
});

