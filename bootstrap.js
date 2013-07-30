define('text', ['lib/require-text/text'], function(text) { return text });
define('css', ['lib/require-css/css'], function(css) { return css });
define('less', ['lib/require-less/less'], function(less) { return less });
define(function(require) {
  var i,
      includes = JSON.parse(require('text!includes.json'))
      modules = Object.keys(includes);

  // Iterate over modules found in includes.
  (function initiateModule(moduleName) {
    var j,
        keys = Object.keys(includes[moduleName]);
        moduleIncludes = [];
    for (j = 0; j < keys.length; j++) {
      moduleIncludes = moduleIncludes.concat(includes[moduleName][keys[j]]);
    }
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

