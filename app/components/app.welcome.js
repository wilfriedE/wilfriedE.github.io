(function(app, H) {
  app.AppWelcome =
    ng.core.Component({
      selector: 'welcome',
      templateUrl: '/app/views/welcome.html'
    })
    .Class({
      constructor: function() {
        this.randomLogo = Math.floor(Math.random() * 5);
      },
      ngOnInit: function() {
        this.moveOnward();
      },
      moveOnward: function() {
        setTimeout(function() {
              window.location.pathname="";
              console.log("Here");
          }, 10000);
      }
    });
})(window.app || (window.app = {}), window.H);
