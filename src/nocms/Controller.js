var NoCMS = NoCMS || {};
NoCMS._controllers = [];
NoCMS.Controller = Class.extend({
  init: function() {
    NoCMS._controllers.push(this);
  },
});

