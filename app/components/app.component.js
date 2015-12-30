(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'wilfried',
      templateUrl: '/app/views/wilfried.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));