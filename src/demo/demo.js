define(
  [
    'core/Model',
    'core/View',
    'core/Controller',
    'core/Route',
    'lib/Handlebars/dist/handlebars',
    'demo'
  ],
  function(Model, View, Controller, Route, Handlebars, demo) {
    var nav = new Model(demo['text!src/demo/nav/nav.md']).compile();
    Handlebars.registerPartial('navigation', demo['text!src/demo/nav/nav.hbs']);
    new Route('/', 'NoCMS Demo', new Controller({
        main: new Model(demo['text!src/demo/demo.md']).compile(),
        nav: nav,
      },
      new View(demo['text!src/demo/demo.hbs']),
      'body'
    ));
    new Route('/other', 'Other Page', new Controller(
      {nav: nav},
      new View(demo['text!src/demo/other.hbs']),
      'body'
    ));
    new Route('/contact', 'Contact Us', new Controller(
      {nav: nav},
      new View(demo['text!src/demo/contact.hbs']),
      'body'
    ));
  }
);

