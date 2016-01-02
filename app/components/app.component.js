(function(app) {

  app.AppComponent = ng.core
    .Component({
      selector: 'wilfried',
      templateUrl: '/app/views/wilfried.html',
      directives: [ng.common.NgSwitch, ng.common.NgSwitchWhen, ng.common.NgSwitchDefault, app.Terminal]
    })
    .Class({
      constructor: function() {
      	this.resource = window.location.pathname.split("/").splice(1);
      	this.startup();
      },
      getResource: function () {
      	return this.resource[0].toLowerCase();
      },
      startup: function() {
      	if (this.getResource() != "terminal") {
      		window.location.pathname = "/w/";
      	};
  		}
    });
})(window.app || (window.app = {}));