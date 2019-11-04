'use strict';

angular
	.module('myApp', ['LocalStorageModule'])

	.controller('TodoController', [
		'$scope',
		function(input, localStorageService) {
			$scope.todo = [];
		}
	]);
