// Jacob Opdahl & Savannah Farm
// Lab 3

angular.module('cougarApp', ['ui.bootstrap'])

    /*
     * This consists of code mildly modified from one of the tutorials done
     * for Angular. This is for the second column.
     */
    .controller('CougarController', ['$scope', function($scope){

        $scope.cougarItems = [
            {text:'Fit In!', done:false},
            {text:'Stand Out!', done:true}];

        $scope.alerts = [
            { type: 'danger', msg: 'Alerts appear here if you try to delete without a number!'}
        ];

        $scope.addCougar = function() {

            $scope.cougarItems.push({text: $scope.todoText, done: false});
            $scope.todoText = '';

        };

        /*
         * Added a remove button so we could take items off the list as well.
         */
        $scope.removeCougar = function() {
            if ($scope.index <= $scope.cougarItems.length && $scope.index > 0) {
                $scope.cougarItems.splice($scope.index - 1, 1);
            } else {
                if ($scope.alerts.length < 5) {
                    $scope.alerts.push({type: 'danger', msg: 'Must enter a valid number index.'});
                }
            }
            $scope.index = '';
        };

        /*
         * Used to remove alerts on the page.
         */
        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
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

    /*
     * This is the code straight from the tutorial done for Angular.
     * It is used for the first column with the To-do list.
     */
    .controller('TodoController', ['$scope', function($scope) {
        $scope.todos = [
            {text:'learn angular', done:false},
            {text:'build an angular app', done:true}];

        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }]);


