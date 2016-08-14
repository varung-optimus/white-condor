// Sub-application/main Level State
app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('app.test', {
      params: {
        token: {
          value: ''
        },
        hiddenParam: 'YES'
      },
      url: '/test',
      templateUrl: 'js/main/templates/test.tpl.html',
      controller: 'TestCtrl',
      controllerAs: 'test'
    });
}]);