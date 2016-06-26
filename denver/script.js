
var plan = null;
var app = angular.module("app", []);
app.controller("HelloController", function($scope, $http) {
	$scope.message = "initial value";
    $http.get('plan.json').success(function(data){
        plan = data;  
        $scope.message = plan.days[0].name;
    }); 
});