var TableController = function ($scope, $routeParams, JsonDB) {
	$scope.tableName = $routeParams.table;

	$scope.fieldTypes = [
		'Integer',
		'String',
		'Boolean',
		'Url',
		'Text',
		'Date'
	];

	var table = JsonDB.table.get({ table: $scope.tableName }, function (data) {
		"use strict";

		$scope.table = table.table;

		$scope.configs = [];

		_.each(table.config, function (value, key) {
			$scope.configs.push({
				key:   key,
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
		}
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
				key:       value.key,
				value:     value.fieldType == 'Boolean' ? false : '',
				fieldType: value.fieldType
			})
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
			key:   '',
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
