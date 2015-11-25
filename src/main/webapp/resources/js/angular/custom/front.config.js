angular.module('cbd.front.config', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.router' ])

.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/actus");
	//
	// Now set up the states
	$stateProvider.state('actus', {
		url : "/actus",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/front/news.html",
				controller : function($scope, $q, $http, cbdUtils) {
					$scope.feeds = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('feeds').then(function(response) {
							$scope.feeds = response.data;
							return response.data;
						});
					});
					
					$scope.formatInfoFeed = function(author, ts) {

						return author + ", le " + cbdUtils.formatTs2Date(ts);
					};
				}
			},
			"partners" : {
				templateUrl : "resources/js/angular/custom/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		},

	}).state('calendar', {
		url : "/calendar",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/front/calendar.html"
			},
			"partners" : {
				templateUrl : "resources/js/angular/custom/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('results', {
		url : "/results",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/front/results.html"
			},
			"partners" : {
				templateUrl : "resources/js/angular/custom/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('assos', {
		url : "/assos",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/front/assos.html",
				controller : function($scope, $q, $http) {
					$scope.assos = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('assos').then(function(response) {
							$scope.assos = response.data;
							return response.data;
						});
					});
				}
			},
			"partners" : {
				templateUrl : "resources/js/angular/custom/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('contacts', {
		url : "/contacts",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/front/contacts.html",
				controller : function($scope, $q, $http) {
					$scope.contacts = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('contacts').then(function(response) {
							$scope.contacts = response.data;
							return response.data;
						});
					});
				}
			},
			"partners" : {
				templateUrl : "resources/js/angular/custom/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	});
});
;
