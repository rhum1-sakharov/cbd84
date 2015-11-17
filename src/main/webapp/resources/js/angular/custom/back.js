angular.module('cbdBackModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

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

.directive("admin-news", function($timeout, $q, $http, $filter) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/admin-news.html",
		link : function(scope, element, attrs) {

			scope.feeds = [];
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('feeds').then(function(response) {
					scope.feeds = response.data;
					return response.data;
				});
			});

			scope.formatInfoFeed = function(author, date) {

				var dateFeed = $filter('date')(date, 'dd/MM/yyyy');
				return author + ", le " + dateFeed;
			};

		}
	};
})

.run(function($http) {
	// TODO call initControl method
});
