var TableController = function ($scope, $routeParams, JsonDB) {
	$scope.tableName = $routeParams.table;

	var table = JsonDB.table.get({table: $scope.tableName}, function (data) {
		"use strict";

		var config = table.config;
		$scope.table = table.table;

		$scope.keys = [];

		_.each(config, function (value, key) {
			$scope.keys.push(key);
		});


		angular.element('.horizontal-scroll').niceScroll({
			cursorcolor: '#0c64d4',
			cursoropacitymin: 1,
			cursorwidth: 10,
			cursorborder: 'none',
			cursorborderradius: 0,
			cursorfixedheight: 90
		});

	});

	$scope.save = function () {
		"use strict";
		console.log($scope.table);
	};

	/*$scope.showSettings = function (event) {
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
	 key: value.key,
	 value: '',
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
	 value: value.value,
	 fieldType: value.fieldType
	 }
	 });

	 tableToServer.push(obj);
	 });

	 var table = new JsonDB.saveTable({
	 tableName: $scope.tableName,
	 data: tableToServer
	 });

	 table.$save(function (u, putResponseHeaders) {
	 if (u.success) {
	 alert('Успешно сохранено')
	 }
	 })
	 };*/
};
