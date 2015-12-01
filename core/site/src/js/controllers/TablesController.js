var TablesController = function ($scope, $routeParams, JsonDB) {

	$scope.tables = JsonDB.tables.query();
	$scope.addTable = function () {
		"use strict";
		var newTableName = $scope.newTableName;

		var newDb = new JsonDB.createTable({createTable: newTableName});
		newDb.$save();

		$scope.tables.push(newTableName);
	};

	$scope.removeTable = function (db) {
		"use strict";

		//if (confirm('Delete!?')) {
		$scope.items.splice($scope.items.indexOf(db), 1);
		//}
	}
};
