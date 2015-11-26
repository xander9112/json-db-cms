var JsonDB = function ($resource) {
	"use strict";

	return {
		tables:      $resource('/tables/get_tables'),
		createTable: $resource('core/TableCreate.php'),
		table:       $resource('core/Table.php'),
		saveTable:   $resource('core/TableSave.php')
	}
};
