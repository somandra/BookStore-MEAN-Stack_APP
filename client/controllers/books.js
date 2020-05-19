var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	$scope.getBooks = function () {
		$http.get('/api/book').success(function (response) {
			$scope.books = response;
		});
	}

	$scope.getBook = function () {
		var id = $routeParams.id;
		$http.get('/api/book/' + id).success(function (response) {
			$scope.book = response;
		});
	}

	$scope.addBook = function () {
		$http.post('/api/book/', $scope.book).success(function () {
			window.location.href = '#/loggedin';
		});
	}

	$scope.updateBook = function () {
		var id = $routeParams.id;
		$http.put('/api/book/' + id, $scope.book).success(function () {
			window.location.href = '#/loggedin';
		});
	}

	$scope.deleteBook = function (id) {
		$http.delete('/api/book/' + id).success(function () {
			window.location.href = '#/loggedin';
		});
	}

}]);