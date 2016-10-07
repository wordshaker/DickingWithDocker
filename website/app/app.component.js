(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
        </div>
      </nav>
      <section style="text-align:center">

      </section>
       `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));