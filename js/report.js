function ReportCtrl($scope, $http) {

  $scope.total = 3;
  $scope.violations = [];

  $http({
    method: 'GET',
    url: 'http://localhost:2600/csp'
  }).
  success(function (data, status, headers, config) {
    $scope.violations = data;
  }).
  error(function (data, status, headers, config) {
  });

}