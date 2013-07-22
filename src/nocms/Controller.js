define(
  [
    'lib/Class/Class.js',
    'src/nocms/Model',
    'src/nocms/View',
  ],
  function(Class, Model, View) {
    return Class.extend({
      init: function() {
        this._controllers.push(this);
      },
      _controllers: [],
    });
  }
);

