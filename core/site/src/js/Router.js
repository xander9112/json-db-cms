var Router = function ($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider
		.when('/admin', {
			templateUrl: '/core/views/MainPage.html'
		})
		.when('/admin/tables', {
			templateUrl: '/core/views/Table/Tables.html',
			controller: 'TablesController'
		})
		.when('/admin/tables/:table', {
			templateUrl: '/core/views/Table/Table.html',
			controller: 'TableController'
		})
		.when('/admin/tables/:table/config', {
			templateUrl: '/core/views/Table/config.html',
			controller: 'TableController'
		})
		.when('/admin/tables/:table/create', {
			templateUrl: '/core/views/Table/Create.html',
			controller: 'TableController'
		})
		.otherwise({
			templateUrl: '/core/views/ErrorPage.html'
		});

	$locationProvider.html5Mode(true);
};
