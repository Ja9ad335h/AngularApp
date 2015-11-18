
var app = angular.module('app', []);

app.directive('hello', [function () {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with templatedasd
    template: '<span><br>Hello</span>'
  }
}]);
app.factory('vm', ['$http', function($http){
    return {
        todos: $http.get('js/data.json'),
        errorHandler: function(res) { console.log(res) }
    }
}]);
app.controller('TodoController', ['$scope', 'vm', function ($scope, vm) {
    vm.todos.then(function(res) {
        $scope.todos = res.data;
    }, vm.errorHandler);
}]);