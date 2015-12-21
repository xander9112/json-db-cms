var FieldTypes = FieldTypes || {};
var colWidth = 'sixteen';

FieldTypes.FieldTypes = function ($compile) {
	var link = function postLink (scope, iElement, iAttrs) {

		var directive = scope.$eval(iAttrs.directive);

		scope.value = iAttrs.value;

		iElement.html(directive.template);
		$compile(iElement.contents())(scope);
	};
	return {
		replace: true,
		link:    link
	};
};

FieldTypes.IntegerDir = function () {
	"use strict";

	var template = `

	<div class="${colWidth} wide field">
				<label>{{col.key}}</label>
				<input type="text" ng-model="col.value" placeholder="...">
			</div>
		`;
	return {
		replace:  true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.StringDir = function () {
	"use strict";

	var template = `
		<div class="${colWidth} wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace:  true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.BooleanDir = function () {
	"use strict";

	var template = `
			<md-checkbox ng-model="col.value" aria-label="{{col.key}}">
				{{col.key}}
			</md-checkbox>
		`;
	return {
		replace:  true,
		restrict: 'E',
		template: template,
		scope:    '@',
		link:     function (scope) {
			console.log(scope);
		}
	};
};

FieldTypes.UrlDir = function () {
	"use strict";

	var template = `
		<div class="${colWidth} wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace:  true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.TextDir = function () {
	"use strict";

	var template = `
			<div class="${colWidth} wide field">
				<label>{{col.key}}</label>
				<textarea rows="4" ng-model="col.value"></textarea>
			</div>
	`;
	return {
		replace:  true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.DateDir = function () {
	"use strict";

	var template = `
		<div class="${colWidth} wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace:  true,
		restrict: 'E',
		template: template
	};
};
