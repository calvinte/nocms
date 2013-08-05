define(
  [
    'core/Model',
  ],
  function(Model) {
    return Model.extend({
      init: function(data) {
        this._super.apply(this, arguments);
        this.json = this.parse(this.data);
      },
      parse: JSON.parse,
      compile: function() {
        return this.json;
      },
    });
  }
);

