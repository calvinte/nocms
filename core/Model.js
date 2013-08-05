define(
  [
    'lib/Class/Class',
    'lib/markdown/lib/markdown',
  ],
  function(Class) {
    return Class.extend({
      init: function(data) {
        this._models.push(this);
        this.setMarkdown(data);
      },
      compile: function() {
        return markdown.renderJsonML(this.JsonML);
      },
      setMarkdown: function(data) {
        this.data = data;
        this.JsonML = markdown.toHTMLTree(this.data);
      },
      _models: [],
    });
  }
);

