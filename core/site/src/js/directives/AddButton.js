var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.AddButton = function () {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		scope:      {
			text:   '@',
			action: '&'
		},
		template:   '<button class="ui button" ng-click="action()">{{text}}</button>'
	}
};
