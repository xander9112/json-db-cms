var FieldTypes = FieldTypes || {};

FieldTypes.FieldTypes = function ($compile) {
	var link = function postLink (scope, iElement, iAttrs) {
		var directive = scope.$eval(iAttrs.directive);
		scope.value = iAttrs.value;

		/*angular.element(iElement).parent().append(directive.template)
		angular.element(iElement).index();*/

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

	<div class="six wide field">
				<label>{{col.key}}</label>
				<input type="text" ng-model="col.value" placeholder="...">
			</div>
		`;
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.StringDir = function () {
	"use strict";

	var template = `
		<div class="six wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.BooleanDir = function () {
	"use strict";

	var template = `
			<div class="six wide field">
				<div class="ui toggle checkbox">
					<label>{{col.key}}</label>
					<input type="checkbox" ng-model="col.value" tabindex="0" class="hidden">
				</div>
			</div>
		`;
	return {
		replace: true,
		restrict: 'E',
		template: template,
		link:     function (scope, iElement, iAttrs) {
			$('.ui.checkbox').checkbox();

			angular.element(iElement).find('input').on('change', function () {
				scope.col.value = $(this).prop('checked');
			});
		}
	};
};

FieldTypes.UrlDir = function () {
	"use strict";

	var template = `
		<div class="six wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.TextDir = function () {
	"use strict";

	var template = `
			<div class="six wide field">
				<label>{{col.key}}</label>
				<textarea rows="4" ng-model="col.value"></textarea>
			</div>
	`;
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};

FieldTypes.DateDir = function () {
	"use strict";

	var template = `
		<div class="six wide field">
			<label>{{col.key}}</label>
			<input type="text" ng-model="col.value" placeholder="...">
		</div>
			`;
	return {
		replace: true,
		restrict: 'E',
		template: template
	};
};
