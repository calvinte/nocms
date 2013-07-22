var NoCMS = NoCMS || {};
(function() {
  var i, j, XHR;

  XHR = new XMLHttpRequest();
  XHR.addEventListener('load', function() {
    var i;
    this.includes = JSON.parse(event.target.response);
    for (i in this.includes) {
      this.includes[i].js   = this.includes[i].js   || [];
      this.includes[i].less = this.includes[i].less || [];
      this.includes[i].hbs  = this.includes[i].hbs  || [];
      this.includes[i].md   = this.includes[i].md  || [];
      this.includes[i].js.forEach(getAsyncJS);
      this.includes[i].less.forEach(getAsyncLess);
      this.includes[i].hbs.forEach(getAsyncHbs);
      this.includes[i].md.forEach(getAsyncMd);
    }
  }.bind(this), false);
  XHR.open('get', 'includes.json', true);
  XHR.send();

  function getAsyncFile(path, tag, pathAttribute, type, rel) {
    var element, head = document.getElementsByTagName('head')[0];
    element = document.createElement(tag);
    element[pathAttribute] = path;
    if (type) element.type = type;
    if (rel) element.rel = rel;
    head.appendChild(element);
  }
  function getAsyncJS(path) {
    getAsyncFile(path, 'script', 'src');
  }
  function getAsyncLess(path) {
    getAsyncFile(path, 'link', 'href', 'text/css', 'stylesheet/less');
  }
  function getAsyncHbs(path) {
    getAsyncFile(path, 'script', 'src', 'text/template');
  }
  function getAsyncMd(path) {
    getAsyncFile(path, 'script', 'src', 'text/markdown');
  }
}).call(NoCMS);

