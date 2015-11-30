var Router = function ($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider
		.when('/', {
			templateUrl: 'app/views/MainPage.html'
		})
		.when('/:tables', {
			templateUrl: 'app/views/Tables.html',
			controller:  'TablesController'
		}).when('/:tables/:table', {
			templateUrl: 'views/Table.html',
			controller:  'TableController'
		}).otherwise({
			templateUrl: 'views/ErrorPage.html'
		});

	$locationProvider.html5Mode(true);
};