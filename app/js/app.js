var app = angular.module('cspViewer', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/app/partials/home.html',
      controller: 'ReportCtrl'
    });

    $routeProvider.when('/detail', {
      templateUrl: '/app/partials/detail.html',
      controller: 'DetailController' // TODO - new controller (?)
    });
  }
]);

app.factory('cspLogger', function ($http) {
  return {
    getLogs: function () {
      return $http.get('http://localhost:2600/csp').then(function (result) {
        return result.data;
      });
    }
  }
})

app.controller('ReportCtrl', function ($scope, cspLogger) {
  $scope.violations = [];

  cspLogger.getLogs().then(function (data) {
    $scope.violations = data;
  });
});

app.controller('DetailController', function ($scope, cspLogger) {
  console.log('DetailController init');
});
