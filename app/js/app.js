var app = angular.module('cspViewer', ['ngRoute', 'ngResource']);

// CONFIG ---------------------------------------------------------------------

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/app/partials/home.html',
      controller: 'ReportController'
    });

    $routeProvider.when('/detail/:violationID', {
      templateUrl: '/app/partials/detail.html',
      controller: 'DetailController'
    });
  }
]);

// SERVICES -------------------------------------------------------------------

app.factory('cspService', ['$resource',
  function ($resource) {
    return $resource('http://localhost:2600/csp');
  }
])

// CONTROLLERS ----------------------------------------------------------------

app.controller('ReportController', function ($scope, cspService) {
  cspService.query(function (response) {
    $scope.violations = response;
  });
});

app.controller('DetailController', function ($scope, $routeParams, cspService) {
  $scope.violationID = $routeParams.violationID;

  cspService.query(function (response) {
    $scope.violation = response[$scope.violationID];
  });
});
