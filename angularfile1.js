angular.module('cougarApp', [])
    .controller('CougarController', ['Scope', function($scope){

        $scope.cougarItems = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.addCougar = function() {
            $scope.cougarItems.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.cougarItems, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.cougarItems;
            $scope.cougarItems = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.cougarItems.push(todo);
            });
        };

    }])