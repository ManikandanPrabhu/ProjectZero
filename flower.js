'use strict';

var myApp = angular.module('MyApp', []);

 myApp.controller('MyCtrl', function($scope, $http) {
 $scope.title = "FLOWERS";
 $scope.images = [{
        src1: 'images/s1.jpg',
        src2: 'images/s2.jpg',
        src3: 'images/s3.jpg',
    }];

 });