define(
  [
    'lib/Class/Class.js',
    'lib/markdown/lib/markdown.js',
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

