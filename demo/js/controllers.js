'use strict';

angular.module('myApp.controllers', []).controller('main', ['$scope', function($scope) {

    $scope.editor = function(el) {
        var e = ace.edit(el);
        e.setReadOnly(true);
        e.setShowPrintMargin(false);
        e.setTheme('ace/theme/monokai');
        return e;
    }

    jQuery('.html-editor').each(function(index) {
        $scope.editor(this).getSession().setMode('ace/mode/html');
    });

    jQuery('.javascript-editor').each(function(index) {
        $scope.editor(this).getSession().setMode('ace/mode/javascript');
    });

}]);
