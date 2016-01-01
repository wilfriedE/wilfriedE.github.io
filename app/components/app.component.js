(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'wilfried',
      templateUrl: '/app/views/wilfried.html'
    })
    .Class({
      constructor: function() {
      	this.timer = 5;
      }
    });
})(window.app || (window.app = {}));