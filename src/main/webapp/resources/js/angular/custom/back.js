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
			scope.random = '1';
			scope.formatImageUrl = function(feed) {
				// feedSelected.imageUrl?random
				if(feed.imageUrl){
					return feed.imageUrl + '?' + scope.random;	
				}
				
				return '';
				
			};

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
				scope.fileValue = {
					notValidImage : false,
					type : 'image/jpeg',
					serverError : ''
				};
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

			scope.submitForm = function() {
			};

			

			scope.$watch('fileValue', function(newVal, oldVal) {
				var mimetype = 'image/jpeg';

				if (newVal) {

					if (mimetype != newVal.type) {
						newVal.notValidImage = true;

					} else if (newVal.name) {
						newVal.notValidImage = false;
						var promiseStart = $q.when('start');
						var promise1 = promiseStart.then(function(value) {
							var fd = new FormData();
							fd.append('file', scope.fileValue);
							return $http.post('feeds/update/image/' + scope.feedSelected.id, fd, {
								transformRequest : angular.identity,
								headers : {
									'Content-Type' : undefined
								}
							}).then(function(response) {
								scope.fileValue.serverError = '';
								scope.random = cbdUtils.random();
							}, function(reason) {

								scope.fileValue.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText + '.<br>Taille max autoris&#233; pour l\'image : 5 mo !';
								return $q.reject(reason);
							});
						});

					}
				}
			});
		}
	};
})

.directive('fileModel', [ '$parse', function($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var getter = $parse(attrs.fileModel);
			var setter = getter.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					setter(scope, element[0].files[0]);
				});
			});
		}
	};
} ])

.directive("frenchDateValidator", function() {
	return {
		require : 'ngModel',
		restrict : 'A',
		link : function(scope, element, attrs, ngModel) {
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
