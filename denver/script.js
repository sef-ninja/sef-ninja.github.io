

var app = angular.module("app", []);
app.controller("HelloController", function($scope, $http) {
	$scope.message = "Denver Trip Plan";
    $http.get('denver/plan.json').success(function(data){
        $scope.days = data.days;
    }); 
});