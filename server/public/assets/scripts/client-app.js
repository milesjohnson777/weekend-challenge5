var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
    when('/Add', {
        templateUrl: 'views/routes/add.html',
        controller: "AddController"
    }).
    when('/Home', {
        templateUrl: '/views/routes/home.html'
    }).
    when('/View', {
        templateUrl: '/views/routes/view.html',
        controller: 'ShowController'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);
