define(
  [
    'lib/Class/Class',
  ],
  function(Class) {
    return Class.extend({
      init: function(data, view, target) {
        this.data = data;
        this.view = view;
        this.target = target;
        this._controllers.push(this);
      },
      render: function(target) {
        this.target = target || this.target;
        this.view.render(this.target, this.data);
      },
      _controllers: [],
    });
  }
);

