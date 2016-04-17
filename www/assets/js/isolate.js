var app = angular.module('choreApp', []);
console.log("in isolate js file");
app.directive("kid", function() {
  return {
    restrict: "E",
    scope: {},
    template: '<input type="text" ng-model="chore"> {{chore}}'
  };
});