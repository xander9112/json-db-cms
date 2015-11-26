var TableController = function ($scope, $routeParams, JsonDB) {
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
						key:       key,
						value:     object.value,
						fieldType: object.fieldType
					}
				);
			});

			$scope.table.push($scope.array);
		});

		$scope.keys = $scope.table[0];
	});

	$scope.showSettings = function (event) {
		"use strict";
		event.preventDefault();

		$('.ui.modal')
			.modal('show')
		;
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
				key:       value.key,
				value:     '',
				fieldType: value.fieldType
			})
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
	};
};
