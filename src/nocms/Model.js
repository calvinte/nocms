var NoCMS = NoCMS || {};
define(function() {
  NoCMS._models = [];
  NoCMS.Model = Class.extend({
    init: function(markdownResource) {
      NoCMS._models.push(this);
      this.setMarkdown(markdownResource);
    },
    compile: function() {
      return markdown.renderJsonML(this.JsonML);
    },
    setMarkdown: function(markdownResource) {
      this.markdownResource = markdownResource;
      this.JsonML = markdown.toHTMLTree(markdownResource.data);
    },
  });
  return NoCMS.Model;
});

