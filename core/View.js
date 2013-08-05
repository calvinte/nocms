define(
  [
    'lib/Class/Class',
    'lib/Handlebars/dist/handlebars',
    'lib/jQuery/jquery-2.0.3.js',
  ],
  function(Class, Handlebars) {
    return Class.extend({
      init: function(data, target) {
        this._views.push(this);
        this.setTemplate(data);
        this.target = target;
      },
      compile: function(data) {
        if (data) this.data = data;
        return this.template(this.data);
      },
      render: function(target, data) {
        $(target).html(this.compile(data));
      },
      setTemplate: function(data) {
        this.data = data;
        this.template = Handlebars.compile(this.data);
      },
      _views: [],
    });
  }
);

