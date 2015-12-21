var MainController = function ($scope, $mdSidenav, JsonDB) {
	"use strict";

	$scope.toggleRight = function () {
		$mdSidenav('left').toggle();
	};

	$scope.menu = {};
	$scope.menu.pages = [
		{
			"state": "admin", "discription": "Главная"
		}, {
			"state": "admin/tables", "discription": "Таблицы"
		}, {
			"state": "admin/testPage", "discription": "Тестовая страница"
		}

	];

	$scope.close = function () {
		$mdSidenav('left').close();
	};

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
			template: '<md-input-container class="md-block"><label>[[col.key]]</label><input ng-model="col.value" min="0" type="number"></md-input-container>'
		},
		String:  {
			template: '<md-input-container class="md-block"><label>[[col.key]]</label><input ng-model="col.value" type="text"></md-input-container>'

		},
		Boolean: {
			template: '<md-input-container class="md-block"><md-switch ng-model="col.value" aria-label="[[col.key]]">[[col.key]]</md-switch></md-input-container>'
		},
		Url:     {
			template: '<md-input-container class="md-block"><url-dir value="value"/></md-input-container>'
		},
		Text:    {
			template: '<md-input-container class="md-block"><label>[[ col.key ]]</label><textarea ng-model="col.value" columns="1" md-maxlength="1500" rows="5"></textarea></md-input-container>'
		},
		Date:    {
			template: '<md-datepicker ng-model="col.value" md-placeholder="Выберите дату"></md-datepicker>'
		}
	};

	$scope.directives = directives;
};
