var App = angular.module('Application', [ 'ngResource', 'ngRoute', 'tabs' ], function ($httpProvider) {

	/*$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	 $httpProvider.defaults.transformRequest = [
	 function (data) {
	 var param = function (obj) {
	 var query = '';
	 var name, value, fullSubName, subValue, innerObj, i;

	 for (name in obj) {
	 value = obj[name];

	 if (value instanceof Array) {
	 for (i = 0; i < value.length; ++i) {
	 subValue = value[i];
	 fullSubName = name + '[' + i + ']';
	 innerObj = {};
	 innerObj[fullSubName] = subValue;
	 query += param(innerObj) + '&';
	 }
	 }
	 else if (value instanceof Object) {
	 for (var subName in value) {
	 if (value.hasOwnProperty(subName) && subName !== '$$hashKey') {
	 subValue = value[subName];
	 fullSubName = name + '[' + subName + ']';
	 innerObj = {};
	 innerObj[fullSubName] = subValue;
	 query += param(innerObj) + '&';
	 }
	 }
	 }
	 else {
	 query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
	 }
	 }

	 return query.length ? query.substr(0, query.length - 1) : query;
	 };

	 return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	 }
	 ];*/
});

App.config(Router);

App.config(function ($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
});

App.controller('MainController', MainController);
App.controller('TablesController', TablesController);
App.controller('TableController', TableController);
App.factory("JsonDB", JsonDB);

App.directive('breadcrumbs', Components.Semantic.BreadCrumbs);

App.directive('deleteButton', Components.Semantic.DeleteButton);
App.directive('repeatDone', function () {
	return function (scope, element, attrs) {
		if (scope.$last) { // all are rendered
			scope.$eval(attrs.repeatDone);
		}
	}
});

App.directive('integerDir', FieldTypes.IntegerDir);
App.directive('stringDir', FieldTypes.StringDir);
App.directive('booleanDir', FieldTypes.BooleanDir);
App.directive('urlDir', FieldTypes.UrlDir);
App.directive('textDir', FieldTypes.TextDir);
App.directive('dateDir', FieldTypes.DateDir);

App.directive('fieldTypes', FieldTypes.FieldTypes);

App.directive('addButton', Components.Semantic.AddButton);
