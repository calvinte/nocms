define(
  [
    'lib/Class/Class',
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

