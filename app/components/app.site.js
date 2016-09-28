(function(app, H) {
  app.AppSite =
    ng.core.Component({
      selector: 'site',
      templateUrl: '/app/views/site.html',
      providers: []
    })
    .Class({
      constructor: function() {
        this.mainBG = "/images/" + H.getrandombg();
        this.showNav = true;
        this.checkifguest();
      },
      checkifguest: function() {
        if (!H.getCookie("guest")) {
          this.showNav  = false;
          H.setCookie("guest", true);
          //window.location.pathname="welcome";
        }
      }
    });
})(window.app || (window.app = {}), window.H);
