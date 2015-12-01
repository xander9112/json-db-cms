var JsonDB = function ($resource) {
	"use strict";

	return {
		tables:      $resource('/admin/tables'),
		createTable: $resource('/admin/tables'),
		table:       $resource('/admin/tables/:table'),
		saveTable:   $resource('/admin/tables')
	}
};
