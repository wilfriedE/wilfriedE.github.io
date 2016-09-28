(function(app) {
  app.AppPortfolio =
    ng.core.Component({
      selector: 'portfolio',
      templateUrl: '/app/views/portfolio.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
