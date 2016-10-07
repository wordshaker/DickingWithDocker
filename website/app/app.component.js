(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: `
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
        </div>
      </nav>
      <section style="text-align:center; margin-top:10%;">
          <h1>Type</h1>
          <img src="./images/konami.png" class="konami">
          <br>
          <img src="./images/troll.png" class="troll">
      </section>
       `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));