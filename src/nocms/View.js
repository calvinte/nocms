define(
  [
    'lib/Class/Class',
    'lib/Handlebars/dist/handlebars'
  ],
  function(Class, Handlebars) {
    return Class.extend({
      init: function(templateResource, target) {
        this._views.push(this);
        this.setTemplate(templateResource);
        this.target = target;
      },
      compile: function() {
        return this.template(this.data);
      },
      render: function(data) {
        this.data = data;
        $(this.target).html(this.compile());
      },
      setTemplate: function(templateResource) {
        this.templateResource = templateResource;
        this.template = Handlebars.compile(this.templateResource.data);
      },
      _views: [],
    });
  }
);

