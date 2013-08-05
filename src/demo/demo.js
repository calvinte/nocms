define(
  [
    'core/models/Markdown',
    'core/models/JSON',
    'core/View',
    'core/Controller',
    'core/Route',
    'lib/Handlebars/dist/handlebars',
    'demo'
  ],
  function(Markdown, JSON, View, Controller, Route, Handlebars, demo) {
    var nav = new Markdown(demo['text!src/demo/nav/nav.md']).compile();
    Handlebars.registerPartial('navigation', demo['text!src/demo/nav/nav.hbs']);
    new Route('/', 'NoCMS Demo', new Controller({
        main: new Markdown(demo['text!src/demo/demo.md']).compile(),
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
    new Route('/customers', 'List of Customers', new Controller(
      {
        customers: new JSON(demo['text!src/demo/customers.json']).compile(),
        nav: nav,
      },
      new View(demo['text!src/demo/customers.hbs']),
      'body'
    ));
  }
);

