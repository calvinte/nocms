define('text', ['lib/require-text/text'], function(text) { return text });
define(function(require) {
  var i,
      includes = JSON.parse(require('text!includes.json'))
      modules = Object.keys(includes);

  // Iterate over modules found in includes.
  (function initiateModule(moduleName) {
    var moduleIncludes = Array.prototype.concat(
      includes[moduleName].js   || [],
      includes[moduleName].less || [],
      includes[moduleName].hbs  || [],
      includes[moduleName].md   || []
    );
    define(moduleName, moduleIncludes, function() {
      var deps = {}, i;
      for (i = 0; i < moduleIncludes.length; i++) {
        deps[moduleIncludes[i]] = arguments[i]
      }
      return deps;
    });
    if (includes[moduleName].main) require([includes[moduleName].main]);
    if (modules[++i]) initiateModule(modules[i]);
  })(modules[i = 0]);
});

