(function () {
'use strict';

angular.module('restaurant')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('sign_up', {
      url: '/sign_up',
      templateUrl: 'src/sign_up.html',
      controller: 'SignUpController as signup'
    })
    .state('my_info', {
      url: '/my_info',
      templateUrl: 'src/my_info.html',
      controller: 'MyInfoController as myinfo'
    });
}

})();
