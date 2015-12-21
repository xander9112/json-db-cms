'use strict';

var JsonDB = function JsonDB($resource) {
	"use strict";

	return {
		tables: $resource('/admin/tables'),
		createTable: $resource('/admin/tables'),
		table: $resource('/admin/tables/:table'),
		updateTableConfig: $resource('/admin/tables/:table/saveconfig'),
		saveTable: $resource('/admin/tables')
	};
};
'use strict';

var FieldTypes = FieldTypes || {};
var colWidth = 'sixteen';

FieldTypes.FieldTypes = function ($compile) {
	var link = function postLink(scope, iElement, iAttrs) {

		var directive = scope.$eval(iAttrs.directive);

		scope.value = iAttrs.value;

		iElement.html(directive.template);
		$compile(iElement.contents())(scope);
	};
	return {
		replace: true,
		link: link
	};
};

FieldTypes.IntegerDir = function () {
	"use strict";

	var template = '\n\n\t<div class="' + colWidth + ' wide field">\n\t\t\t\t<label>{{col.key}}</label>\n\t\t\t\t<input type="text" ng-model="col.value" placeholder="...">\n\t\t\t</div>\n\t\t';
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.StringDir = function () {
	"use strict";

	var template = '\n\t\t<div class="' + colWidth + ' wide field">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type="text" ng-model="col.value" placeholder="...">\n\t\t</div>\n\t\t\t';
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.BooleanDir = function () {
	"use strict";

	var template = '\n\t\t\t<md-checkbox ng-model="col.value" aria-label="{{col.key}}">\n\t\t\t\t{{col.key}}\n\t\t\t</md-checkbox>\n\t\t';
	return {
		replace: true,
		restrict: 'E',
		template: template,
		scope: '@',
		link: function link(scope) {
			console.log(scope);
		}
	};
};

FieldTypes.UrlDir = function () {
	"use strict";

	var template = '\n\t\t<div class="' + colWidth + ' wide field">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type="text" ng-model="col.value" placeholder="...">\n\t\t</div>\n\t\t\t';
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.TextDir = function () {
	"use strict";

	var template = '\n\t\t\t<div class="' + colWidth + ' wide field">\n\t\t\t\t<label>{{col.key}}</label>\n\t\t\t\t<textarea rows="4" ng-model="col.value"></textarea>\n\t\t\t</div>\n\t';
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.DateDir = function () {
	"use strict";

	var template = '\n\t\t<div class="' + colWidth + ' wide field">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type="text" ng-model="col.value" placeholder="...">\n\t\t</div>\n\t\t\t';
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};
"use strict";

var repeatDone = function repeatDone() {
	return function (scope, element, attrs) {
		if (scope.$last) {
			// all are rendered
			scope.$eval(attrs.repeatDone);
		}
	};
};
"use strict";

var MainController = function MainController($scope, $mdSidenav, JsonDB) {
	"use strict";

	$scope.toggleRight = function () {
		$mdSidenav('left').toggle();
	};

	$scope.menu = {};
	$scope.menu.pages = [{
		"state": "admin", "discription": "Главная"
	}, {
		"state": "admin/tables", "discription": "Таблицы"
	}, {
		"state": "admin/testPage", "discription": "Тестовая страница"
	}];

	$scope.close = function () {
		$mdSidenav('left').close();
	};

	$scope.fieldTypes = ['Integer', 'String', 'Boolean', 'Url', 'Text', 'Date'];

	var directives = {
		Integer: {
			template: '<md-input-container class="md-block"><label>[[col.key]]</label><input ng-model="col.value" min="0" type="number"></md-input-container>'
		},
		String: {
			template: '<md-input-container class="md-block"><label>[[col.key]]</label><input ng-model="col.value" type="text"></md-input-container>'

		},
		Boolean: {
			template: '<md-input-container class="md-block"><md-switch ng-model="col.value" aria-label="[[col.key]]">[[col.key]]</md-switch></md-input-container>'
		},
		Url: {
			template: '<md-input-container class="md-block"><url-dir value="value"/></md-input-container>'
		},
		Text: {
			template: '<md-input-container class="md-block"><label>[[ col.key ]]</label><textarea ng-model="col.value" columns="1" md-maxlength="1500" rows="5"></textarea></md-input-container>'
		},
		Date: {
			template: '<md-datepicker ng-model="col.value" md-placeholder="Выберите дату"></md-datepicker>'
		}
	};

	$scope.directives = directives;
};
"use strict";

var TableController = function TableController($scope, $state, JsonDB) {

	$scope.$parent.loading = true;
	$scope.notFound = false;
	$scope.tableName = $state.params.table;
	$scope.table = [];
	$scope.configs = [];

	function getTable() {
		"use strict";

		var table = JsonDB.table;

		table.get({ table: $scope.tableName }, function (data) {
			"use strict";

			if (data.notFound) {
				$scope.notFound = data.notFound;
			}

			$scope.table = data.table;

			angular.forEach($scope.table, function (value, key) {
				angular.forEach(value, function (value, key) {
					if (value.fieldType === 'Date') {
						value.value = new Date(Date.parse(value.value));
					}
				});
			});

			_.each(data.config, function (value, key) {
				$scope.configs.push({
					key: key,
					value: value
				});
			});
		});
	}

	getTable();

	$scope.save = function () {
		"use strict";
		console.log($scope.table);
	};

	$scope.saveConfig = function (event) {
		"use strict";

		event.preventDefault();

		angular.forEach($scope.configs, function (value) {
			console.log(value.key);
		});

		/*let config = new JsonDB.updateTableConfig({
   table: $scope.tableName
   });
  		 console.log(config.$save());*/

		/*config.$update(function (u, putResponseHeaders) {
   console.log(u);
   });*/

		//getTable();

		//window.location.reload();
	};

	$scope.addItem = function (event, tr) {
		"use strict";
		event.preventDefault();
		var newTr = [];

		_.each($scope.table[0], function (value, key) {
			newTr.push({
				key: value.key,
				value: value.fieldType == 'Boolean' ? false : '',
				fieldType: value.fieldType
			});
		});

		$scope.table.push(newTr);
	};

	$scope.removeRow = function (event, row) {
		"use strict";

		event.preventDefault();
		$scope.table.splice($scope.table.indexOf(row), 1);

		$scope.initTab();
	};

	$scope.showSettings = function (event) {
		"use strict";
		event.preventDefault();

		angular.element('.js-settings').modal('show');
	};

	$scope.removeRowConfig = function (event, tr) {
		"use strict";

		event.preventDefault();
		$scope.configs.splice($scope.configs.indexOf(tr), 1);
	};

	$scope.addRowConfig = function (event, tr) {
		"use strict";

		event.preventDefault();
		$scope.configs.push({
			key: '',
			value: 'String'
		});
	};

	/*$scope.removeItem = function (event, tr) {
  "use strict";
 
  event.preventDefault();
  $scope.table.splice($scope.table.indexOf(tr), 1);
  };
 
  $scope.saveTable = function (event) {
  "use strict";
  event.preventDefault();
 
  var tableToServer = [];
 
  _.each($scope.table, function (value, key, index) {
  var obj = {};
 
  _.each(value, function (value, key) {
  obj[value.key] = {
  value:     value.value,
  fieldType: value.fieldType
  }
  });
 
  tableToServer.push(obj);
  });
 
  var table = new JsonDB.saveTable({
  tableName: $scope.tableName,
  data:      tableToServer
  });
 
  table.$save(function (u, putResponseHeaders) {
  if (u.success) {
  alert('Успешно сохранено')
  }
  })
  };*/
};
"use strict";

var TablesController = function TablesController($scope, JsonDB, $state) {

	$scope.redirectTo = function (event, url) {
		"use strict";
		$state.go("admin/tables/:table", {
			table: url
		});
	};

	$scope.tables = JsonDB.tables.query({}, true, function () {
		"use strict";
		$scope.$parent.loading = false;
	});

	$scope.newTableNameError = false;

	$scope.newTableName = '';

	$scope.addTable = function (event) {
		"use strict";
		event.preventDefault();

		var newTableName = $scope.newTableName;

		if (newTableName === '') {
			$scope.newTableNameError = true;
		} else {
			$scope.newTableNameError = false;
		}

		if (!$scope.newTableNameError) {
			/*var newDb = new JsonDB.createTable({ createTable: newTableName });
    newDb.$save();*/
			$scope.tables.push(newTableName);
			$scope.newTableName = '';
		}
	};

	$scope.removeTable = function (db) {
		"use strict";

		//if (confirm('Delete!?')) {
		$scope.items.splice($scope.items.indexOf(db), 1);
		//}
	};
};
"use strict";

var TestController = function TestController($scope, JsonDB, $state, cfpLoadingBar) {
	var folderName = '/core/data/images';

	$scope.tiles = buildGridModel({
		icon: "",
		title: "Svg-",
		background: ""
	});
	function buildGridModel(tileTmpl) {
		var it,
		    results = [];
		for (var j = 0; j < 24; j++) {
			it = angular.extend({}, tileTmpl);
			it.icon = folderName + "/1(" + (it.icon + (j + 1)) + ").jpg";
			it.title = it.title + (j + 1);
			it.span = { row: 1, col: 1 };
			switch (j + 1) {
				case 1:
					it.background = "red";
					it.span.row = it.span.col = 2;
					break;
				case 2:
					it.background = "green";
					break;
				case 3:
					it.background = "darkBlue";
					break;
				case 4:
					it.background = "blue";
					it.span.col = 2;
					break;
				case 5:
					it.background = "yellow";
					it.span.row = it.span.col = 2;
					break;
				case 6:
					it.background = "pink";
					break;
				case 7:
					it.background = "darkBlue";
					break;
				case 8:
					it.background = "purple";
					break;
				case 9:
					it.background = "deepBlue";
					break;
				case 10:
					it.background = "lightPurple";
					break;
				case 11:
					it.background = "yellow";
					break;
			}
			results.push(it);
		}
		return results;
	}
};
'use strict';

var Router = function Router($stateProvider, $urlRouterProvider, $locationProvider) {
	"use strict";
	var templateFolder = '/core/views';

	$urlRouterProvider.otherwise('admin');
	$locationProvider.html5Mode(true);
	$stateProvider.state('admin', {
		url: '/admin',
		templateUrl: templateFolder + '/MainPage.html'
	}).state('admin/tables', {
		url: '/admin/tables',
		templateUrl: templateFolder + '/Table/Tables.html',
		controller: 'TablesController'
	}).state('admin/tables/:table', {
		url: '/admin/tables/:table',
		templateUrl: templateFolder + '/Table/Table.html',
		controller: 'TableController'
	}).state('admin/tables/:table/config', {
		url: '/admin/tables/:table/config',
		templateUrl: templateFolder + '/Table/config.html',
		controller: 'TableController'
	}).state('admin/tables/:table/create', {
		url: '/admin/tables/:table/create',
		templateUrl: templateFolder + '/Table/Create.html',
		controller: 'TableController'
	}).state('ErrorPage', {
		templateUrl: templateFolder + '/ErrorPage.html'
	}).state('admin/testPage', {
		url: '/admin/testpage',
		templateUrl: templateFolder + '/TestPage.html',
		controller: 'TestController'
	});
};

/*.otherwise({
 templateUrl: `${templateFolder}/ErrorPage.html`
 })*/
'use strict';

var Dependencies = ['ngResource', 'ui.router', 'ngStorage', 'ngMaterial', 'chieffancypants.loadingBar'];

var interpolateProvider = function interpolateProvider($interpolateProvider) {
	"use strict";

	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
};

var LocalStorageKeyPrefix = function LocalStorageKeyPrefix($localStorageProvider, $sessionStorageProvider) {
	"use strict";

	$localStorageProvider.setKeyPrefix('HB_');
	$sessionStorageProvider.setKeyPrefix('HB_');
};

var StripTrailingSlashes = function StripTrailingSlashes($resourceProvider) {
	"use strict";

	// Don't strip trailing slashes from calculated URLs
	//console.log($resourceProvider);
	$resourceProvider.defaults.stripTrailingSlashes = false;
};

var mdThemingProvider = function mdThemingProvider($mdThemingProvider) {
	"use strict";

	$mdThemingProvider.theme('indigo').primaryPalette('blue-grey').accentPalette('blue');
};

var iconConfig = function iconConfig($mdIconProvider) {
	"use strict";
	var svgFolder = '/core/site/assets/svg-icons';

	$mdIconProvider.iconSet('navigation:menu', svgFolder + '/navigation/ic_menu_24px.svg', 24).iconSet('image:gridOn', svgFolder + '/image/ic_grid_on_24px.svg', 24).defaultIconSet(svgFolder + '/core-icons.svg', 24);
};

var httpMethodInterceptor = function httpMethodInterceptor(httpMethodInterceptorProvider) {
	httpMethodInterceptorProvider.whitelistLocalRequests();
};
'use strict';

var App = angular.module('Application', Dependencies, function ($httpProvider) {
	"use strict";
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
	$httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
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

App.config(LocalStorageKeyPrefix);
App.config(StripTrailingSlashes);
App.config(interpolateProvider);
App.config(mdThemingProvider);
App.config(iconConfig);
//App.config(httpMethodInterceptor);
App.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.spinnerTemplate = '<div class="g-page-loader"><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>';
}]);
App.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
	cfpLoadingBarProvider.includeSpinner = true;
}]);
App.factory("JsonDB", JsonDB);

App.controller('MainController', MainController);
App.controller('TablesController', TablesController);
App.controller('TableController', TableController);
App.controller('TestController', TestController);

App.directive('integerDir', FieldTypes.IntegerDir);
App.directive('stringDir', FieldTypes.StringDir);
App.directive('booleanDir', FieldTypes.BooleanDir);
App.directive('urlDir', FieldTypes.UrlDir);
App.directive('textDir', FieldTypes.TextDir);
App.directive('dateDir', FieldTypes.DateDir);

App.directive('fieldTypes', FieldTypes.FieldTypes);

//App.factory("$DB", DBFactory);

App.directive('repeatDone', repeatDone);
//# sourceMappingURL=app.js.map
