angular
		.module('cbd.back.controllers',
				[ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

		.controller(
				'CbdBackCtrl',
				[
						'$resource',
						'$rootScope',
						'$timeout',
						'$compile',
						'$scope',
						'$http',
						'$log',
						'$window',
						'$sce',
						'$q',
						'$filter',
						'cbdUtils',
						function($resource, $rootScope, $timeout, $compile,
								$scope, $http, $log, $window, $sce, $q,
								$filter, cbdUtils) {

							$scope.tinymceOptions = {
								trusted : true,
								inline : false,
								plugins : 'advlist autolink link image lists charmap print preview'
							};

							$scope.menu = {
								id : 3
							};

							$scope.selectMenu = function(idMenu) {
								$scope.menu.id = idMenu;
								// cbdUtils.selectMenu(idMenu, $scope.menu.id)
							};

							$scope.isMenuSelected = function(idMenu) {
								return (idMenu === $scope.menu.id);
								// return cbdUtils.isMenuSelected(idMenu,
								// $scope.menu.id);
							};

						} ]).directive(
				'datetimepicker',
				function($timeout, $filter) {

					return {
						require : 'ngModel',
						link : function(scope, elm, attrs, ctrl) {

							ctrl.$parsers.push(function(value) {
								console.log(value);
								ctrl.$setViewValue(value);
								ctrl.$render();

								// formats the value for ng-model when input
								// value is
								// changed
								return value;
							});

							ctrl.$formatters.unshift(function(modelValue) {

								return $filter('date')
										(modelValue, 'dd/MM/yyyy');
							});
						}
					};
				}).directive('dateInput', function(dateFilter) {
			return {
				require : 'ngModel',
				template : '<input type="date"></input>',
				replace : true,
				link : function(scope, elm, attrs, ngModelCtrl) {
					ngModelCtrl.$formatters.unshift(function(modelValue) {

						return $filter('date')(modelValue, 'dd/MM/yyyy');
					});

					ngModelCtrl.$parsers.unshift(function(viewValue) {
						console.log(viewValue);
						ngModelCtrl.$setViewValue(viewValue);
						ngModelCtrl.$render();
						return new Date(viewValue);
					});
				},
			};
		}).directive('datePickering', function($timeout, $filter) {
			return {
				restrict : 'A',
				require : 'ngModel',
				link : function(scope, element, attrs, ctrl) {			

					element.datepicker({
						// defaultDate : new Date(),
						dateFormat : 'dd/mm/yy',
						onSelect : function(date) {

							$timeout(function() {
								ctrl.$setViewValue(date);
							}, 50);
						}
					});
				}
			}
		})

		.directive(
				'dateTiming',
				function($timeout, $filter) {

					var HHMM_REGEXP = /^[0-9][0-9]:[0-9][0-9]$/;

					return {
						restrict : 'A',
						require : 'ngModel',
						link : function(scope, element, attrs, ctrl) {

							ctrl.$parsers.unshift(function(viewValue) {

								if (HHMM_REGEXP.test(viewValue)) {
									// it is valid
									ctrl.$setValidity('text', true);
									
									return viewValue;
								} else {
									// it is invalid, return undefined (no model
									// update)
									ctrl.$setValidity('text', false);
									return undefined;
								}

							});

						}
					}
				})

		.run(function($http) {
			// TODO call initControl method
		});
