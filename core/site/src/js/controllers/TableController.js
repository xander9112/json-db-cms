var TableController = function ($scope, $state, JsonDB) {

	$scope.$parent.loading = true;
	$scope.notFound = false;
	$scope.tableName = $state.params.table;
	$scope.table = [];
	$scope.configs = [];

	function getTable () {
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
					key:   key,
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

		_.each($scope.table[ 0 ], function (value, key) {
			newTr.push({
				key:       value.key,
				value:     value.fieldType == 'Boolean' ? false : '',
				fieldType: value.fieldType
			})
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
