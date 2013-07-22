define(
  [
    'lib/Class/Class',
    'lib/markdown/lib/markdown',
  ],
  function(Class) {
    return Class.extend({
      init: function(markdownResource) {
        this._models.push(this);
        this.setMarkdown(markdownResource);
      },
      compile: function() {
        return markdown.renderJsonML(this.JsonML);
      },
      setMarkdown: function(markdownResource) {
        this.markdownResource = markdownResource;
        this.JsonML = markdown.toHTMLTree(markdownResource.data);
      },
      _models: [],
    });
  }
);

