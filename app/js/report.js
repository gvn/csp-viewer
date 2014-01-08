var app = angular.module('cspViewer', []);

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
