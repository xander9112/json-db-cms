var Router = function ($stateProvider, $urlRouterProvider, $locationProvider) {
	"use strict";
	let templateFolder = '/core/views';

	$urlRouterProvider.otherwise('admin');
	$locationProvider.html5Mode(true);
	$stateProvider
		.state('admin', {
			url:         '/admin',
			templateUrl: `${templateFolder}/MainPage.html`
		})
		.state('admin/tables', {
			url:         '/admin/tables',
			templateUrl: `${templateFolder}/Table/Tables.html`,
			controller:  'TablesController'
		})
		.state('admin/tables/:table', {
			url:         '/admin/tables/:table',
			templateUrl: `${templateFolder}/Table/Table.html`,
			controller:  'TableController'
		})
		.state('admin/tables/:table/config', {
			url:         '/admin/tables/:table/config',
			templateUrl: `${templateFolder}/Table/config.html`,
			controller:  'TableController'
		})
		.state('admin/tables/:table/create', {
			url:         '/admin/tables/:table/create',
			templateUrl: `${templateFolder}/Table/Create.html`,
			controller:  'TableController'
		})
		.state('ErrorPage', {
			templateUrl: `${templateFolder}/ErrorPage.html`
		})
		.state('admin/testPage', {
			url:         '/admin/testpage',
			templateUrl: `${templateFolder}/TestPage.html`,
			controller:  'TestController'
		})
		/*.otherwise({
		 templateUrl: `${templateFolder}/ErrorPage.html`
		 })*/;
};
