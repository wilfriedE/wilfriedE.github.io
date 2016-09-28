(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule, ng.router.RouterModule, app.AppRouting  ],
      declarations: [ app.AppSite, app.AppWelcome, app.AppIntroduction, app.AppPortfolio, app.AppExperience, app.AppPlayground, app.AppSocial, app.AppNavbar],
      bootstrap: [ app.AppSite ]
    })
    .Class({
      constructor: function() {}
    });
  
})(window.app || (window.app = {}));
