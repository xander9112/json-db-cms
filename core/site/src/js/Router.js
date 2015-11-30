var Router = function ($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider
		.when('/admin', {
			templateUrl: 'core/views/MainPage.html'
		})
		.when('/admin/tables', {
			templateUrl: 'core/views/Table/Tables.html',
			controller: 'TablesController'
		})
		.when('/admin/tables/:table', {
			templateUrl: 'views/Table/Table.html',
			controller: 'TableController'
		})
		.when('/admin/tables/:table/config', {
			templateUrl: 'views/Table/config.html',
			controller: 'TableController'
		})
		.otherwise({
			templateUrl: 'core/views/ErrorPage.html'
		});

	$locationProvider.html5Mode(true);
};
