'use strict';

var JsonDB = function JsonDB($resource) {
	"use strict";

	return {
		tables: $resource('/admin/tables'),
		createTable: $resource('/admin/tables'),
		table: $resource('/admin/tables/:table'),
		saveTable: $resource('/admin/tables')
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

FieldTypes.FieldTypes = function ($compile) {
	var link = function postLink(scope, iElement, iAttrs) {
		var directive = scope.$eval(iAttrs.directive);
		scope.value = iAttrs.value;

		/*angular.element(iElement).parent().append(directive.template)
  angular.element(iElement).index();*/

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

	var template = "\n\n\t<div class=\"six wide field\">\n\t\t\t\t<label>{{col.key}}</label>\n\t\t\t\t<input type=\"text\" ng-model=\"col.value\" placeholder=\"...\">\n\t\t\t</div>\n\t\t";
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.StringDir = function () {
	"use strict";

	var template = "\n\t\t<div class=\"six wide field\">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type=\"text\" ng-model=\"col.value\" placeholder=\"...\">\n\t\t</div>\n\t\t\t";
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.BooleanDir = function () {
	"use strict";

	var template = "\n\t\t\t<div class=\"six wide field\">\n\t\t\t\t<div class=\"ui toggle checkbox\">\n\t\t\t\t\t<label>{{col.key}}</label>\n\t\t\t\t\t<input type=\"checkbox\" ng-model=\"col.value\" tabindex=\"0\" class=\"hidden\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
	return {
		replace: true,
		restrict: 'E',
		template: template,
		link: function link(scope, iElement, iAttrs) {
			$('.ui.checkbox').checkbox();

			angular.element(iElement).find('input').on('change', function () {
				scope.col.value = $(this).prop('checked');
			});
		}
	};
};

FieldTypes.UrlDir = function () {
	"use strict";

	var template = "\n\t\t<div class=\"six wide field\">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type=\"text\" ng-model=\"col.value\" placeholder=\"...\">\n\t\t</div>\n\t\t\t";
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.TextDir = function () {
	"use strict";

	var template = "\n\t\t\t<div class=\"six wide field\">\n\t\t\t\t<label>{{col.key}}</label>\n\t\t\t\t<textarea rows=\"4\" ng-model=\"col.value\"></textarea>\n\t\t\t</div>\n\t";
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.DateDir = function () {
	"use strict";

	var template = "\n\t\t<div class=\"six wide field\">\n\t\t\t<label>{{col.key}}</label>\n\t\t\t<input type=\"text\" ng-model=\"col.value\" placeholder=\"...\">\n\t\t</div>\n\t\t\t";
	return {
		replace: true,
		restrict: 'E',
		template: template
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
'use strict';

var MainController = function MainController($scope, $routeParams, JsonDB) {
	"use strict";

	var directives = {
		Integer: {
			template: '<integer-dir value="value"/>'
		},
		String: {
			template: '<string-dir value="value"/>'

		},
		Boolean: {
			template: '<boolean-dir value="value"/>'
		},
		Url: {
			template: '<url-dir value="value"/>'
		},
		Text: {
			template: '<text-dir value="value"/>'
		},
		Date: {
			template: '<date-dir value="value"/>'
		}
	};

	/*var directives = [
  {
  template: '<integer-dir data="data"/>',
  data: {
  value: 'qwerty'
  }
  }, {
  template: '<directive-two data="data"/>',
  data: {
  message: true
  }
  }, {
  template: '<directive-thr data="data"/>',
  data: {
  message: 126
  }
  }
  ];*/
	$scope.directives = directives;
};
'use strict';

var TableController = function TableController($scope, $routeParams, JsonDB) {
	$scope.tableName = $routeParams.table;

	$scope.fieldTypes = ['Integer', 'String', 'Boolean', 'Url', 'Text', 'Date'];

	var table = JsonDB.table.get({ table: $scope.tableName }, function (data) {
		"use strict";

		$scope.table = table.table;

		$scope.configs = [];

		_.each(table.config, function (value, key) {
			$scope.configs.push({
				key: key,
				value: value
			});
		});

		/*angular.element('.horizontal-scroll').niceScroll({
   cursorcolor:        '#0c64d4',
   cursoropacitymin:   1,
   cursorwidth:        10,
   cursorborder:       'none',
   cursorborderradius: 0,
   cursorfixedheight:  90
   });*/

		$scope.initTab = function () {
			angular.element('.menu .item').tab();
		};
	});

	$scope.save = function () {
		"use strict";
		console.log($scope.table);
	};

	$scope.saveConfig = function (event) {
		"use strict";

		event.preventDefault();
		console.log($scope.configs);
		return false;
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

var TablesController = function TablesController($scope, $routeParams, JsonDB) {

	$scope.tables = JsonDB.tables.query();
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
		templateUrl: '/core/views/MainPage.html'
	}).when('/admin/tables', {
		templateUrl: '/core/views/Table/Tables.html',
		controller: 'TablesController'
	}).when('/admin/tables/:table', {
		templateUrl: '/core/views/Table/Table.html',
		controller: 'TableController'
	}).when('/admin/tables/:table/config', {
		templateUrl: '/core/views/Table/config.html',
		controller: 'TableController'
	}).when('/admin/tables/:table/create', {
		templateUrl: '/core/views/Table/Create.html',
		controller: 'TableController'
	}).otherwise({
		templateUrl: '/core/views/ErrorPage.html'
	});

	$locationProvider.html5Mode(true);
};
'use strict';

var App = angular.module('Application', ['ngResource', 'ngRoute'], function ($httpProvider) {

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
		if (scope.$last) {
			// all are rendered
			scope.$eval(attrs.repeatDone);
		}
	};
});

App.directive('integerDir', FieldTypes.IntegerDir);
App.directive('stringDir', FieldTypes.StringDir);
App.directive('booleanDir', FieldTypes.BooleanDir);
App.directive('urlDir', FieldTypes.UrlDir);
App.directive('textDir', FieldTypes.TextDir);
App.directive('dateDir', FieldTypes.DateDir);

App.directive('fieldTypes', FieldTypes.FieldTypes);

App.directive('addButton', Components.Semantic.AddButton);
//# sourceMappingURL=app.js.map
