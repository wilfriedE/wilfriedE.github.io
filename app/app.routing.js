(function(app) {
  var routes = [
    {
      path: '',
      component: app.AppIntroduction,
    },
    {
      path: 'welcome',
      component: app.AppWelcome,
    },
    {
      path: 'introduction',
      component: app.AppIntroduction,
    },
    {
      path: 'portfolio',
      component: app.AppPortfolio,
    },
    {
      path: 'experience',
      component: app.AppExperience,
    },
    {
      path: 'playground',
      component: app.AppPlayground,
    },
    {
      path: 'social',
      component: app.AppSocial,
    },
    {
      path: '**',
      component: app.AppIntroduction
    }
  ];
  app.AppRouting = ng.router.RouterModule.forRoot(routes);
})(window.app || (window.app = {}));
