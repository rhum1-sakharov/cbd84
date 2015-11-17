angular.module('cbdFrontModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

.controller('FrontCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', '$filter', 'cbdUtils', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q, $filter, cbdUtils) {

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

.directive("calendar", function($timeout) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/calendar.html",
		link : function(scope, element, attrs) {
		}
	};
})

.directive("news", function($timeout, $q, $http, $filter) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/news.html",
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

			// scope.displayImg = function(id, creationDate, extension) {
			// return 'feeds/' + id + '/' + creationDate + '/image/' +
			// extension;
			// };
		}
	};
})

.directive("contacts", function($timeout) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/contacts.html",
		link : function(scope, element, attrs) {
		}
	};
})

.run(function($http) {
	// TODO call initControl method
});
