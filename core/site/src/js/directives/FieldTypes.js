var FieldTypes = FieldTypes || {};

FieldTypes.IntegerDir = function () {
	"use strict";

	var template = `
			<div class="ui input">
				<input type="text" ng-model="col.value" placeholder="Search...">
			</div>
		`;
	return {
		restrict: 'E',
		replace: true,
		template: template,
		/*scope: {
			'value': '='
		}*/
	};
};

FieldTypes.StringDir = function () {
	"use strict";

	var template = `
		<div class="ui input">
			<input type="text" ng-model="col.value" placeholder="">
		</div>
			`;
	return {
		restrict: 'E',
		template: template,
		/*scope: {
			'colr': '='
		},*/
		link: function (scope) {
		}
	};
};

FieldTypes.BooleanDir = function () {
	"use strict";

	var template = `
	<div class="ui form">
		<div class="inline field">
			<div class="ui toggle checkbox">
				<input type="checkbox" ng-model="col.value" tabindex="0" class="hidden">
				<label></label>
			</div>
		</div>
	</div>`;
	return {
		restrict: 'E',
		template: template,
		/*scope: {
			'value': '='
		},*/
		link: function (scope, iElement, iAttrs) {
			$('.ui.checkbox')
				.checkbox()
			;
		}
	};
};

FieldTypes.UrlDir = function () {
	"use strict";

	var template = `
		<div class="ui input">
			<input type="text" ng-model="col.value" placeholder="">
		</div>
			`;
	return {
		restrict: 'E',
		template: template,
		/*scope: {
			'value': '='
		}*/
	};
};

FieldTypes.TextDir = function () {
	"use strict";

	var template = `
		<div class="ui form">
			<div class="inline field">
				<label>Short Text</label>
				<textarea rows="2" ng-model="col.value"></textarea>
			</div>
		</div>
	`;
	return {
		restrict: 'E',
		template: template,
		/*scope: {
			'value': '='
		}*/
	};
};

FieldTypes.DateDir = function () {
	"use strict";

	var template = `
		<div class="ui input">
			<input type="text" ng-model="col.value" placeholder="">
		</div>
			`;
	return {
		restrict: 'E',
		template: template,
		/*scope: {
			'value': '='
		}*/
	};
};
