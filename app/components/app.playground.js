(function(app) {
  app.AppPlayground =
    ng.core.Component({
      selector: 'playground',
      templateUrl: '/app/views/playground.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
