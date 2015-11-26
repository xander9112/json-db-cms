var Components = Components || {};
Components.Semantic = Components.Semantic || {};

Components.Semantic.BreadCrumbs = function ($routeParams) {
	"use strict";

	return {
		replace:    true,
		transclude: true,
		controller: function ($scope) {
			var rootUrl = '#/';
			$scope.crumbs = [{ url: rootUrl, text: 'Home' }];
			var runningUrl = rootUrl;

			for (var param in $routeParams) {
				runningUrl += $routeParams[param];
				$scope.crumbs.push({ url: runningUrl, text: $routeParams[param] })
			}

			$scope.notLast = function (crumb) {
				return crumb !== _.last($scope.crumbs);
			}
		},
		template:   `
			<div class="ui piled segment">
				<div class="ui breadcrumb">
					<span ng-repeat="crumb in crumbs">
						<a href="{{crumb.url}}" class="section" ng-show="notLast(crumb)">{{crumb.text}}</a>
						<div class="active section" ng-hide="notLast(crumb)">{{crumb.text}}</div>
						<i class="right angle icon divider" ng-show="notLast(crumb)"></i>
					</span>
				</div>
			</div>`
	}
};
