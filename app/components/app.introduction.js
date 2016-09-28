(function(app) {
  app.AppIntroduction =
    ng.core.Component({
      selector: 'introduction',
      templateUrl: '/app/views/introduction.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
