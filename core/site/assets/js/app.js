'use strict';

var JsonDB = function JsonDB($resource) {
	"use strict";

	return {
		tables: $resource('/admin/tables'),
		createTable: $resource('core/TableCreate.php'),
		table: $resource('core/Table.php'),
		saveTable: $resource('core/TableSave.php')
	};
};
'use strict';

var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.AddButton = function () {
	"use strict";

	return {
		replace: true,
		transclude: true,
		scope: {
			text: '@',
			action: '&'
		},
		template: '<button class="ui button" ng-click="action()">{{text}}</button>'
	};
};
'use strict';

var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.BreadCrumbs = function ($routeParams) {
	"use strict";

	return {
		replace: true,
		transclude: true,
		controller: function controller($scope) {
			var rootUrl = '#/';
			$scope.crumbs = [{ url: rootUrl, text: 'Home' }];
			var runningUrl = rootUrl;

			for (var param in $routeParams) {
				runningUrl += $routeParams[param];
				$scope.crumbs.push({ url: runningUrl, text: $routeParams[param] });
			}

			$scope.notLast = function (crumb) {
				return crumb !== _.last($scope.crumbs);
			};
		},
		template: '\n\t\t\t<div class="ui piled segment">\n\t\t\t\t<div class="ui breadcrumb">\n\t\t\t\t\t<span ng-repeat="crumb in crumbs">\n\t\t\t\t\t\t<a href="{{crumb.url}}" class="section" ng-show="notLast(crumb)">{{crumb.text}}</a>\n\t\t\t\t\t\t<div class="active section" ng-hide="notLast(crumb)">{{crumb.text}}</div>\n\t\t\t\t\t\t<i class="right angle icon divider" ng-show="notLast(crumb)"></i>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>'
	};
};
'use strict';

var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.DeleteButton = function () {
	"use strict";

	return {
		replace: true,
		transclude: true,
		scope: {
			text: '@',
			action: '&',
			comment: '='
		},
		template: '<button class="ui button" ng-click="action()"><i class="remove icon"></i> {{text}}</button>'
	};
};
"use strict";

var FieldTypes = FieldTypes || {};

var templates = function templates(modelName) {
	"use strict";
	console.log(modelName);
	return {
		Integer: "<input type=\"text\" ng-model=\"" + modelName + "\" />",
		Text: "<textarea ng-model=\"modelName\"></textarea>"

	};
};

FieldTypes.IntegerDir = function () {
	"use strict";

	return {
		// обязательно, для поддержки работы через элемент
		restrict: 'E',

		// заменить <photo> этим html
		template: '<div></div>',
		replace: true,
		transclude: true,
		scope: {
			type: '@',
			value: '@'
		},

		// наблюдение и манипулирование DOM
		link: function link($scope, element, attrs) {
			//console.log(attrs.type);

			$(element).append("<input type=\"text\" ng-model=\"value\" />");

			/*attrs.$observe('type', function (value) {
   	/!*element.append()*!/
   	//console.log(value);
   	//
   });*/

			/*// атрибуты именуются с применением «верблюжьей» нотации
    attrs.$observe('photoSrc', function (value) {
    element.find('img').attr('src', value)
    })*/
		}
	};
};
"use strict";

/*
var Tekpub = Tekpub || {};
Tekpub.Bootstrap = {};

Tekpub.Bootstrap.DeleteButton = function () {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		scope:      {
			text:    '@',
			action:  '&',
			comment: '='
		},
		template:   '<button class="ui button" ng-click="action()"><i class="remove icon"></i> {{text}}</button>'
	}
};

Tekpub.Bootstrap.AddButton = function () {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		scope:      {
			text:   '@',
			action: '&'
		},
		template:   '<button class="ui button" ng-click="action()">{{text}}</button>'
	}
};

Tekpub.Bootstrap.BreadCrumbs = function ($routeParams) {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		controller: function ($scope) {
			var rootUrl = '#/';
			$scope.crumbs = [{ url: rootUrl, text: 'Database' }];
			var runningUrl = rootUrl;

			for (var param in $routeParams) {
				runningUrl += $routeParams[param];
				$scope.crumbs.push({ url: runningUrl, text: $routeParams[param] })
			}

			$scope.notLast = function (crumb) {
				return crumb !== _.last($scope.crumbs);
			}
		},
		template:   `
			<div class="ui breadcrumb">
				<span ng-repeat="crumb in crumbs">
					<a href="{{crumb.url}}" class="section" ng-show="notLast(crumb)">{{crumb.text}}</a>
					<div class="active section" ng-hide="notLast(crumb)">{{crumb.text}}</div>
					<i class="right angle icon divider" ng-show="notLast(crumb)"></i>
				</span>
			</div>`
	}
};
*/
"use strict";

var MainController = function MainController($scope, $routeParams, JsonDB) {
	"use strict";
};
"use strict";

var TableController = function TableController($scope, $routeParams, JsonDB) {
	$scope.tableName = $routeParams.table;

	var table = JsonDB.table.query({ tableName: $scope.tableName }, true, function (data) {
		"use strict";
		$scope.data = data;
		$scope.table = [];
		$scope.keyLength = _.size(data[0]) + 1;

		_.each($scope.data, function (key, value, index) {
			var obj = {};
			var array = [];
			$scope.array = [];
			//$scope.table.push([]);

			_.each(key, function (object, key) {
				$scope.array.push({
					key: key,
					value: object.value,
					fieldType: object.fieldType
				});
			});

			$scope.table.push($scope.array);
		});

		$scope.keys = $scope.table[0];
	});

	$scope.showSettings = function (event) {
		"use strict";
		event.preventDefault();

		$('.ui.modal').modal('show');
	};

	$scope.removeItem = function (event, tr) {
		"use strict";

		event.preventDefault();
		$scope.table.splice($scope.table.indexOf(tr), 1);
	};

	$scope.addItem = function (event, tr) {
		"use strict";
		event.preventDefault();
		var newTr = [];

		_.each($scope.table[0], function (value, key) {
			newTr.push({
				key: value.key,
				value: '',
				fieldType: value.fieldType
			});
		});

		$scope.table.push(newTr);
	};

	$scope.saveTable = function (event) {
		"use strict";
		event.preventDefault();

		var tableToServer = [];

		_.each($scope.table, function (value, key, index) {
			var obj = {};

			_.each(value, function (value, key) {
				obj[value.key] = {
					value: value.value,
					fieldType: value.fieldType
				};
			});

			tableToServer.push(obj);
		});

		var table = new JsonDB.saveTable({
			tableName: $scope.tableName,
			data: tableToServer
		});

		table.$save(function (u, putResponseHeaders) {
			if (u.success) {
				alert('Успешно сохранено');
			}
		});
	};
};
"use strict";

var TablesController = function TablesController($scope, $routeParams, JsonDB) {

	$scope.tables = JsonDB.tables.get({}, true);

	$scope.addTable = function () {
		"use strict";
		var newTableName = $scope.newTableName;

		var newDb = new JsonDB.createTable({ createTable: newTableName });
		newDb.$save();

		$scope.tables.push(newTableName);
	};

	$scope.removeTable = function (db) {
		"use strict";

		//if (confirm('Delete!?')) {
		$scope.items.splice($scope.items.indexOf(db), 1);
		//}
	};
};
'use strict';

var Router = function Router($routeProvider, $locationProvider) {
	"use strict";
	$routeProvider.when('/admin', {
		templateUrl: 'core/views/MainPage.html'
	}).when('/admin/tables', {
		templateUrl: 'core/views/Table/Tables.html',
		controller: 'TablesController'
	}).when('/admin/tables/:table', {
		templateUrl: 'views/Table/Table.html',
		controller: 'TableController'
	}).when('/admin/tables/:table/config', {
		templateUrl: 'views/Table/config.html',
		controller: 'TableController'
	}).otherwise({
		templateUrl: 'core/views/ErrorPage.html'
	});

	$locationProvider.html5Mode(true);
};
'use strict';

var App = angular.module('Application', ['ngResource', 'ngRoute'], function ($httpProvider) {
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.transformRequest = [function (data) {
		var param = function param(obj) {
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
				} else if (value instanceof Object) {
					for (var subName in value) {
						if (value.hasOwnProperty(subName) && subName !== '$$hashKey') {
							subValue = value[subName];
							fullSubName = name + '[' + subName + ']';
							innerObj = {};
							innerObj[fullSubName] = subValue;
							query += param(innerObj) + '&';
						}
					}
				} else {
					query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
				}
			}

			return query.length ? query.substr(0, query.length - 1) : query;
		};

		return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
	}];
});

App.config(Router);
App.controller('MainController', MainController);
App.controller('TablesController', TablesController);
App.controller('TableController', TableController);
App.factory("JsonDB", JsonDB);

App.directive('breadcrumbs', Components.Semantic.BreadCrumbs);

App.directive('deleteButton', Components.Semantic.DeleteButton);

App.directive('inputField', FieldTypes.IntegerDir);

App.directive('addButton', Components.Semantic.AddButton);
//# sourceMappingURL=app.js.map
