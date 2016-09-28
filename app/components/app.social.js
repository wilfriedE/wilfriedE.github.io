(function(app) {
  app.AppSocial =
    ng.core.Component({
      selector: 'social',
      templateUrl: '/app/views/social.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
