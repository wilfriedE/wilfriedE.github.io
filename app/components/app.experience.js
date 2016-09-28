(function(app) {
  app.AppExperience =
    ng.core.Component({
      selector: 'experience',
      templateUrl: '/app/views/experience.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
