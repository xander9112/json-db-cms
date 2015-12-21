const Dependencies = [
	'ngResource',
	'ui.router',
	'ngStorage',
	'ngMaterial',
	'chieffancypants.loadingBar'
];

const interpolateProvider = function ($interpolateProvider) {
	"use strict";

	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
};

const LocalStorageKeyPrefix = function ($localStorageProvider, $sessionStorageProvider) {
	"use strict";

	$localStorageProvider.setKeyPrefix('HB_');
	$sessionStorageProvider.setKeyPrefix('HB_');
};

const StripTrailingSlashes = function ($resourceProvider) {
	"use strict";

	// Don't strip trailing slashes from calculated URLs
	//console.log($resourceProvider);
	$resourceProvider.defaults.stripTrailingSlashes = false;
};

const mdThemingProvider = function ($mdThemingProvider) {
	"use strict";

	$mdThemingProvider.theme('indigo')
		.primaryPalette('blue-grey')
		.accentPalette('blue');
};

const iconConfig = function ($mdIconProvider) {
	"use strict";
	let svgFolder = '/core/site/assets/svg-icons';

	$mdIconProvider
		.iconSet('navigation:menu', `${svgFolder}/navigation/ic_menu_24px.svg`, 24)
		.iconSet('image:gridOn', `${svgFolder}/image/ic_grid_on_24px.svg`, 24)
		.defaultIconSet(`${svgFolder}/core-icons.svg`, 24);
};

const httpMethodInterceptor = function (httpMethodInterceptorProvider) {
	httpMethodInterceptorProvider.whitelistLocalRequests();
};
