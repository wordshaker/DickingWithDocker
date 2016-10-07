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
          <img src="./images/konami.png" style="padding-top: 40px; height: 80px;">
          <br>
          <img src="./images/troll.png" style="padding-top: 30px">
      </section>
       `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));