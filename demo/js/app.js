'use strict';

angular.module('myApp', ['ngRoute', 'myApp.controllers', 'ui.ladda']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'partials/partial1.html',
        controller: 'MyCtrl1'
    });
    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}]);