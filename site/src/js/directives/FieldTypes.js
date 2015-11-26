var FieldTypes = FieldTypes || {};

var templates = function (modelName) {
	"use strict";
	console.log(modelName);
	return {
		Integer: `<input type="text" ng-model="${modelName}" />`,
		Text:    `<textarea ng-model="modelName"></textarea>`

	}

};

FieldTypes.IntegerDir = function () {
	"use strict";

	return {
		// обязательно, для поддержки работы через элемент
		restrict: 'E',

		// заменить <photo> этим html
		template:   '<div></div>',
		replace:    true,
		transclude: true,
		scope:      {
			type:  '@',
			value: '@'
		},

		// наблюдение и манипулирование DOM
		link: function ($scope, element, attrs) {
			//console.log(attrs.type);

			$(element).append(`<input type="text" ng-model="value" />`);

			/*attrs.$observe('type', function (value) {
				/!*element.append()*!/
				//console.log(value);
				//
			});*/

			/*// атрибуты именуются с применением «верблюжьей» нотации
			 attrs.$observe('photoSrc', function (value) {
			 element.find('img').attr('src', value)
			 })*/
		}
	}
}
;
