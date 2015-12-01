var MainController = function ($scope, $routeParams, JsonDB) {
	"use strict";

	var directives = {
		Integer: {
			template: '<integer-dir value="value"/>'
		},
		String: {
			template: '<string-dir value="value"/>'

		},
		Boolean: {
			template: '<boolean-dir value="value"/>'
		},
		Url: {
			template: '<url-dir value="value"/>'
		},
		Text: {
			template: '<text-dir value="value"/>'
		},
		Date: {
			template: '<date-dir value="value"/>'
		}
	};

	/*var directives = [
	 {
	 template: '<integer-dir data="data"/>',
	 data: {
	 value: 'qwerty'
	 }
	 }, {
	 template: '<directive-two data="data"/>',
	 data: {
	 message: true
	 }
	 }, {
	 template: '<directive-thr data="data"/>',
	 data: {
	 message: 126
	 }
	 }
	 ];*/
	$scope.directives = directives;
};
