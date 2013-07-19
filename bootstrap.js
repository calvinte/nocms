var NoCMS = NoCMS || {};
(function() {
  var i, j, XHR;
  XHR = new XMLHttpRequest();
  XHR.addEventListener('load', function() {
    this.includes = JSON.parse(event.target.response);
    for (i in this.includes) {
      this.includes[i].JS   = this.includes[i].JS   || [];
      this.includes[i].Less = this.includes[i].Less || [];
      this.includes[i].Hbs  = this.includes[i].Hbs  || [];
      this.includes[i].Md   = this.includes[i].Md  || [];
      this.includes[i].JS.forEach(getAsyncJS);
      this.includes[i].Less.forEach(getAsyncLess);
      this.includes[i].Hbs.forEach(getAsyncHbs);
      this.includes[i].Md.forEach(getAsyncMd);
    }
  }.bind(this), false);
  XHR.open('get', 'includes.json', true);
  XHR.send();

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
    getAsyncFile(path, 'link', 'href', 'text/css', 'stylesheet/less');
  }
  function getAsyncHbs(path) {
    getAsyncFile(path, 'script', 'src', 'text/template');
  }
  function getAsyncMd(path) {
    getAsyncFile(path, 'script', 'src', 'text/markdown');
  }
}).call(NoCMS);

