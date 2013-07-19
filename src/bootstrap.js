var NoCMS = NoCMS || {};
(function() {
  var i, j;
  function getAsyncFile(path, tag, pathAttribute, type, rel) {
    var element, head = document.getElementsByTagName('head')[0];
    element = document.createElement(tag);
    element.async = true;
    element[pathAttribute] = path;
    if (type) element.type = type;
    if (rel) element.rel = rel;
    head.appendChild(element);
  }
  function getAsyncJS(path) {
    getAsyncFile(path, 'script', 'src');
  }
  function getAsyncLess(path) {
    getAsyncFile(path, 'style', 'link', 'text/css', 'stylesheet');
  }
  function getAsyncHbs(path) {
    getAsyncFile(path, 'script', 'src', 'text/template');
  }
  for (i in this.includes) {
    this.includes[i].JS   = this.includes[i].JS   || [];
    this.includes[i].Less = this.includes[i].Less || [];
    this.includes[i].Hbs  = this.includes[i].Hbs  || [];
    this.includes[i].JS.forEach(getAsyncJS);
    this.includes[i].Less.forEach(getAsyncLess);
    this.includes[i].Hbs.forEach(getAsyncHbs);
  }
}).call(NoCMS);

