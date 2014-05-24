'use strict';

angular.module('myApp', ['ngRoute', 'myApp.controllers', 'ui.ladda']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'main'
    });
    $routeProvider.otherwise({
        redirectTo: '/main'
    });
}]);