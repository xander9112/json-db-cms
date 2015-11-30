var JsonDB = function ($resource) {
	"use strict";

	return {
		tables:      $resource('/admin/tables'),
		createTable: $resource('core/TableCreate.php'),
		table:       $resource('core/Table.php'),
		saveTable:   $resource('core/TableSave.php')
	}
};
