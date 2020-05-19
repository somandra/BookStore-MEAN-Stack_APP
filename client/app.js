var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

	$routeProvider.when('/', {
		controller: 'BooksController',
		templateUrl: 'views/books.html'
		})
		.when('/book', {
			controller: 'BooksController',
			templateUrl: 'views/books.html'
		})
		.when('/book/details/:id', {
			controller: 'BooksController',
			templateUrl: 'views/book_details.html'
		})
		.when('/book/add', {
			controller: 'BooksController',
			templateUrl: 'views/add_book.html'
		})
		.when('/book/edit/:id', {
			controller: 'BooksController',
			templateUrl: 'views/edit_book.html'
		})
		.when('/genre', {
			controller: 'GenresController',
			templateUrl: 'views/genres.html'
		})
		.when('/genre/add', {
			controller: 'GenresController',
			templateUrl: 'views/add_genre.html'
		})
		.when('/auth/login',{
			controller: '',
			templateUrl: 'views/login.html'
		})
		.when('/loggedin', {
			controller: 'BooksController',
			templateUrl: 'views/book_login.html'
		})
		.when('/auth/register',{
			controller: '',
			templateUrl: 'views/register.html'			
		})
		.otherwise({
			redirectTo: '/'
		});
});
