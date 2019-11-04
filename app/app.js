'use strict';

angular
	.module('todoList', ['LocalStorageModule'])

	.controller('TodoController', function($scope, localStorageService) {
		if (localStorageService.get('todo-test')) {
			console.log(localStorageService.get('todo-test'));
			$scope.todo = localStorageService.get('todo-test');
		} else {
			$scope.todo = [];
		}
		$scope.$watch(
			function($scope) {
				return $scope.todo.map(function(obj) {
					return obj.description;
				});
			},
			function(newVal) {
				$scope.count++;
				$scope.msg = 'person name was changed' + $scope.count;
			},
			true
		);
		console.log($scope.todo);

		$scope.editorEnabled = false;

		$scope.enableEditor = function(key) {
			$scope.editorEnabled = true;
			console.log('========editable=============');
			console.log($scope.editableTitle);
			//$scope.editableTitle = $scope.todo[key].description;
		};

		$scope.disableEditor = function() {
			$scope.editorEnabled = false;
		};

		$scope.save = function(key) {
			console.log('==========when save===========');
			console.log($scope.editableTitle);

			$scope.disableEditor();
			$scope.ap;
		};

		$scope.addTodo = function() {
			$scope.todo.push($scope.newTodo);
			$scope.newTodo = {};
			localStorageService.set('todo-test', $scope.todo);
		};
		$scope.deleteTodo = function(key) {
			$scope.todo.splice(key, 1);
			//console.log('=====SPLICE========');
			localStorageService.set('todo-test', $scope.todo);
			console.log($scope.todo);
		};
	});
