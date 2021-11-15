var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home.html'
    })
        .when('/food', {
            templateUrl: 'food.html'
        }).when('/add', {
            templateUrl: 'add.html'
        })
        .when('/about', {
            templateUrl: 'about.html'
        });
});
app.controller("myCtr", function ($scope, $http) {
    $http.get("layout.json").then(function (response) {
        $scope.ds = response.data;
    });
});
app.controller('myAbc',function($scope){
    $scope.addRow = function () {
        $scope.ds.push({ "id": $scope.id, "name": $scope.name, "price": $scope.price });
        alert("Add new food successfully");
    }
})
