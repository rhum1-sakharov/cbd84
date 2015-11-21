angular.module('cbdFrontModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

.controller('FrontCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', '$filter', 'cbdUtils', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q, $filter, cbdUtils) {

	$scope.menu = {
		id : 1
	};

	$scope.selectMenu = function(idMenu) {
		$scope.menu.id = idMenu;
		// cbdUtils.selectMenu(idMenu, $scope.menu.id)
	};

	$scope.isMenuSelected = function(idMenu) {
		return (idMenu === $scope.menu.id);
		// return cbdUtils.isMenuSelected(idMenu, $scope.menu.id);
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

.directive("news", function($timeout, $q, $http, $filter, cbdUtils) {
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

			scope.formatInfoFeed = function(author, ts) {

				return author + ", le " + cbdUtils.formatTs2Date(ts);
			};

			// scope.displayImg = function(id, creationDate, extension) {
			// return 'feeds/' + id + '/' + creationDate + '/image/' +
			// extension;
			// };
		}
	};
})

.directive("partners", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/partners.html",
		link : function(scope, element, attrs) {

			scope.partners = [];
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('partners').then(function(response) {
					scope.partners = response.data;
					return response.data;
				});
			});			
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
