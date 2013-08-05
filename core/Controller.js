define(
  [
    'lib/Class/Class',
  ],
  function(Class) {
    return Class.extend({
      init: function(data, view) {
        var Controller = this;
        this.data = data;
        this.view = view;
        this._controllers.push(this);
      },
      _controllers: [],
    });
  }
);

