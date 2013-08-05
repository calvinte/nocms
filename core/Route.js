define(
  [
    'lib/Class/Class',
  ],
  function(Class) {
    return Class.extend({
      init: function(path, controller) {
        this.path = path;
        this.controller = controller;
        this.activate();
        window.addEventListener('hashchange', this.activate.bind(this));
      },
      activate: function() {
        if (this.isActive()) this.controller.render();
      },
      isActive: function() {
        return this.path === this.currentPath();
      },
      currentPath: function() {
        return window.location.href.split('#!')[1] || '/';
      },
  });
});

