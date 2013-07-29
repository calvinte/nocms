define(
  [
    'src/nocms/Controller',
    'src/nocms/Model',
    'src/nocms/View',
    'lib/Handlebars/dist/handlebars',
    'demo'
  ],
  function(Controller, Model, View, Handlebars, demo) {
    var data = {
      main: new Model(demo['text!src/demo/demo.md']),
      nav: new Model(demo['text!src/demo/nav/nav.md']),
    }
    var view = new View(demo['text!src/demo/demo.hbs']);
    var controller = new Controller(data, view);
    Handlebars.registerPartial('navigation', demo['text!src/demo/nav/nav.hbs']);
    (function() {
      this.view.target = 'body';
      this.view.render({
        main: this.data.main.compile(),
        nav: this.data.nav.compile(),
      });
      console.log(this.view.data.nav);
    }).call(controller);
  }
);

