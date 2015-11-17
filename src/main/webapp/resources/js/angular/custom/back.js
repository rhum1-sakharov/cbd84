angular.module('cbdBackModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule'])

.controller('CbdBackCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', '$filter','cbdUtils', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q, $filter,cbdUtils) {

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
			
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('feeds').then(function(response) {
					scope.feeds = response.data;
					return response.data;
				});
			});

			scope.feedSelected = {};
			scope.editFeed = function(feed) {					
					scope.feedSelected = feed;				
			};

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

.run(function($http) {
	// TODO call initControl method
});
