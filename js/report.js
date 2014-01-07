var app = angular.module('cspViewer', []);

app.controller('ReportCtrl', function ($scope, $http) {
    $scope.violations = [];

    $http({
      method: 'GET',
      url: 'http://localhost:2600/csp'
    }).
    success(function (data, status, headers, config) {
      $scope.violations = data;
    }).
    error(function (data, status, headers, config) {
      $scope.alertMessage = 'Failed to connect to service.';
    });
  }
);
