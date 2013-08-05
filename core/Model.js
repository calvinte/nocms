define(
  [
    'lib/Class/Class',
  ],
  function(Class) {
    return Class.extend({
      init: function(data) {
        this.data = data;
        this._models.push(this);
      },
      compile: function() {
        return this.data;
      },
      _models: [],
    });
  }
);

