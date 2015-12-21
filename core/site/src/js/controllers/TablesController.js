var TablesController = function ($scope, JsonDB, $state) {


	$scope.redirectTo = function (event, url) {
		"use strict";
		$state.go(`admin/tables/:table`, {
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
	}
};
