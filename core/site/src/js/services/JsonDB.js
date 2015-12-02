var JsonDB = function ($resource) {
	"use strict";

	return {
		tables:            $resource('/admin/tables'),
		createTable:       $resource('/admin/tables'),
		table:             $resource('/admin/tables/:table'),
		updateTableConfig: $resource('/admin/tables/:table/saveconfig'),
		saveTable:         $resource('/admin/tables')
	}
};
