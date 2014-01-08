var app = angular.module('cspViewer', ['ngRoute']);

// CONFIG ---------------------------------------------------------------------

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/app/partials/home.html',
      controller: 'ReportCtrl'
    });

    $routeProvider.when('/detail/:violationID', {
      templateUrl: '/app/partials/detail.html',
      controller: 'DetailController' // TODO - new controller (?)
    });
  }
]);

// SERVICES -------------------------------------------------------------------

app.factory('cspLogger', function ($http) {
  return {
    getLogs: function () {
      return $http.get('http://localhost:2600/csp').then(function (result) {
        return result.data;
      });
    }
  }
})

// CONTROLLERS ----------------------------------------------------------------

app.controller('ReportCtrl', function ($scope, cspLogger) {
  $scope.violations = [];

  cspLogger.getLogs().then(function (data) {
    $scope.violations = data;
  });
});

app.controller('DetailController', function ($scope, $routeParams) {
  $scope.violationID = $routeParams.violationID;
});
