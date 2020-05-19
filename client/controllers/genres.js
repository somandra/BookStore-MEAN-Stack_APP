myApp = angular.module('myApp');

myApp.controller('GenresController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	$scope.getGenres = function () {
		$http.get('/api/genre').success(function (response) {
			$scope.genres = response;
		});
	}

	$scope.getGenre = function () {
		var id = $routeParams.id;
		$http.get('/api/genre' + id).success(function (response) {
			$scope.genre = response;
		});
	}

	$scope.addGenre = function () {
		$http.post('/api/genre', $scope.genre).success(function () {
			window.location.href = '#/genre';
		});
	}

	$scope.updateGenre = function () {
		var id = $routeParams.id;
		$http.put('/api/genre/' + id, $scope.genre).success(function () {
			window.location.href = '#/genre';
		});
	}

	$scope.deleteGenre = function (id) {
		$http.delete('/api/genre/' + id).success(function () {
			window.location.href = '#/genre/';
		});
	}

}]);