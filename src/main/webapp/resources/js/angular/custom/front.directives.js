angular.module('cbd.front.directives', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])



.directive("calendar", function($timeout) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/front/calendar.html",
		link : function(scope, element, attrs) {
		}
	};
})

.directive("news", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/front/news.html",
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
		templateUrl : "resources/js/angular/custom/partials/front/partners.html",
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

.directive("contacts", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/front/contacts.html",
		link : function(scope, element, attrs) {
			
			scope.contacts = [];
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('contacts').then(function(response) {
					scope.contacts = response.data;
					return response.data;
				});
			});	
		}
	};
})

.directive("assos", function($timeout, $q, $http, $filter, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/front/assos.html",
		link : function(scope, element, attrs) {
			
			scope.assos = [];
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('assos').then(function(response) {
					scope.assos = response.data;
					return response.data;
				});
			});	
		}
	};
})
;
