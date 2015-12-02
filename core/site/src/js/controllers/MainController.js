var MainController = function ($scope, $routeParams, JsonDB) {
	"use strict";

	$scope.loading = true;

	$scope.fieldTypes = [
		'Integer',
		'String',
		'Boolean',
		'Url',
		'Text',
		'Date'
	];

	var directives = {
		Integer: {
			template: '<integer-dir value="value"/>'
		},
		String:  {
			template: '<string-dir value="value"/>'

		},
		Boolean: {
			template: '<boolean-dir value="value"/>'
		},
		Url:     {
			template: '<url-dir value="value"/>'
		},
		Text:    {
			template: '<text-dir value="value"/>'
		},
		Date:    {
			template: '<date-dir value="value"/>'
		}
	};

	$scope.directives = directives;
};
