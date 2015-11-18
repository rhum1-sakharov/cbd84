angular.module('cbdBackModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

.controller('CbdBackCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', '$filter', 'cbdUtils', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q, $filter, cbdUtils) {

	$scope.menu = {
		id : 1
	};

	$scope.selectMenu = function(idMenu) {
		cbdUtils.selectMenu(idMenu, $scope.menu.id)
	};

	$scope.isMenuSelected = function(idMenu) {
		return cbdUtils.isMenuSelected(idMenu, $scope.menu.id);
	};

} ])

.directive("adminFeeds", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/admin-feeds.html",
		link : function(scope, element, attrs) {

			scope.feeds = [];
			scope.feedSelected = {};
			scope.creationDate = "";

			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('feeds').then(function(response) {
					scope.feeds = response.data;
					return response.data;
				});
			});

			scope.editFeed = function(feed) {
				scope.feedSelected = feed;
				scope.creationDate = cbdUtils.formatTs2Date(scope.feedSelected.creationDate);

			};

			scope.formatDate = function(ts) {
				return cbdUtils.formatTs2Date(ts);
			};

			scope.$watch('creationDate', function(newVal, oldVal) {
				scope.feedSelected.creationDate = cbdUtils.formatDate2Ts(newVal);			
			});

		}
	};
})

.directive("adminFeedsUpdate", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/admin-feeds-update.html",
		link : function(scope, element, attrs) {

		}
	};
})

.directive("frenchDateValidator", function () {
    return {
        require : 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ngModel) {
            ngModel.$validators.frenchDate = function(value) {
                return !value || /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(value);
            };
        }
    };
})

.directive('datePicker', function($timeout, $filter) {
	return {
		restrict : 'A',
		require : 'ngModel',
		link : function(scope, element, attrs, ctrl) {

			element.datepicker({
				defaultDate : new Date(),
				dateFormat : 'dd/mm/yy',
				onSelect : function(date) {

					$timeout(function() {
						ctrl.$setViewValue(date);
					});
				}
			});
		}
	}
})

.run(function($http) {
	// TODO call initControl method
});
