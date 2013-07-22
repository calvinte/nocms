define(
  [
    'src/nocms/Resource',
    'src/nocms/Model',
    'src/nocms/View',
    'src/nocms/Controller',
    'lib/jQuery/jquery-2.0.3.js'
  ],
  function(Resource, Model, View, Controller, $) {
    var demo = new (Controller.extend({
      init: function() {
        var Controller = this;
        new Resource('src/demo/demo.hbs', function() {
          Controller.view = new View(this, 'body');
          Controller.render();
        }); 
        new Resource('src/demo/demo.md', function() {
          Controller.model = new Model(this);
          Controller.render();
        }); 
        this._super();
      },
      render: function() {
        if (!this.view || !this.model) return;
        this.view.render({data: this.model.compile()});
      },
    }))();
  }
);

