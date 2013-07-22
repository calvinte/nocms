define(['src/nocms/Controller', 'lib/jQuery/jquery-2.0.3.js'], function() {
  var demo = new (NoCMS.Controller.extend({
    init: function() {
      var Controller = this;
      new NoCMS.Resource('src/demo/demo.hbs', function() {
        Controller.view = new NoCMS.View(this, 'body');
        Controller.render();
      }); 
      new NoCMS.Resource('src/demo/demo.md', function() {
        Controller.model = new NoCMS.Model(this);
        Controller.render();
      }); 
      this._super();
    },
    render: function() {
      if (!this.view || !this.model) return;
      this.view.render({data: this.model.compile()});
    },
  }))();
});

