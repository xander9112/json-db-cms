var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.DeleteButton = function () {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		scope:      {
			text:    '@',
			action:  '&',
			comment: '='
		},
		template:   '<button class="ui button" ng-click="action()"><i class="remove icon"></i> {{text}}</button>'
	}
};
