define(
  [
    'core/Model',
    'lib/markdown/lib/markdown',
  ],
  function(Model) {
    return Model.extend({
      init: function(data) {
        this._super.apply(this, arguments);
        this.JsonML = markdown.toHTMLTree(this.data);
      },
      compile: function() {
        return markdown.renderJsonML(this.JsonML);
      },
    });
  }
);


