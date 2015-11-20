angular.module('cbdAdminFeedsModule', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

.directive("adminFeeds", function($timeout, $q, $http, $filter, $sce,cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/admin-feeds.html",
		link : function(scope, element, attrs) {

			scope.feeds = [];
			scope.feedSelected = {};
			scope.creationDate = "";
			scope.random = '1';
			scope.mode = "";
			scope.formatImageUrl = function(feed) {
				// console.log(feed.imageUrl);
				// feedSelected.imageUrl?random
				if (feed.imageUrl) {
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

			scope.addFeed = function() {
				scope.mode = 'add';
				scope.feedSelected = {};
				scope.feeds.push(scope.feedSelected);
			};

			scope.editFeed = function(feed) {
				scope.mode = 'update';
				scope.feedSelected = feed;
				scope.creationDate = cbdUtils.formatTs2Date(scope.feedSelected.creationDate);
				scope.fileValue = {
					notValidImage : false,
					type : 'image/jpeg',
					serverError : ''
				};
				console.log(scope.fileValue);
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

			scope.buttonSubmit = {
				disabled : false
			};

			scope.submit = {
				serverError : ''
			};

			scope.submitForm = function() {

				scope.buttonSubmit.disabled = true;
				var promiseStart = $q.when('start');
				var promise1 = promiseStart.then(function(value) {
					
					

					return $http.post('feeds/' + scope.mode, scope.feedSelected).then(function(response) {
						scope.feedSelected = response.data;
						return response.data;
					});
				});

				var promise2 = promise1.then(function(response) {
					if (scope.mode === 'add') {

						var fd = new FormData();
						fd.append('file', scope.fileValue);
						return $http.post('feeds/update/image/' + scope.feedSelected.id, fd, {
							transformRequest : angular.identity,
							headers : {
								'Content-Type' : undefined
							}
						})
					}
					return response.data;
				});

				var promiseEnd = promise2.then(function(result) {
					 $timeout(function() {
					scope.fileValue.serverError = '';
					scope.random = cbdUtils.random();
					//scope.formatImageUrl(feedSelected);
					//scope.feedSelected.imageUrl = 'feeds/' + scope.feedSelected.id + '/image/jpg';
					scope.buttonSubmit.disabled = false;},50);
					return result;
				}, function(reason) {

					scope.submit.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
					scope.buttonSubmit.disabled = false;
					return $q.reject(reason);
				});

			};

			scope.eraseImage = function(feed) {
				scope.buttonSubmit.disabled = true;
				promiseStart = $q.when('start');
				promise1 = promiseStart.then(function(value) {

					return $http.get('feeds/delete/image/' + scope.feedSelected.id).then(function(response) {
						scope.fileValue.serverError = '';
						scope.feedSelected.imageUrl = null;
						scope.buttonSubmit.disabled = false;
					}, function(reason) {

						scope.fileValue.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
						scope.buttonSubmit.disabled = false;
						return $q.reject(reason);
					});
				});

			};

			scope.updateImage = function() {
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
					scope.feedSelected.imageUrl = 'feeds/' + scope.feedSelected.id + '/image/jpg';
					scope.buttonSubmit.disabled = false;
					return response;
				}, function(reason) {

					scope.fileValue.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText + '.<br>Taille max autoris&#233; pour l\'image : 5 mo !';
					scope.buttonSubmit.disabled = false;
					return $q.reject(reason);
				});
			};

			scope.$watch('fileValue', function(newVal, oldVal) {
				var mimetype = 'image/jpeg';

				if (newVal) {

					if (mimetype != newVal.type) {
						newVal.notValidImage = true;

					} else if (newVal.name && scope.mode === 'update') {
						scope.buttonSubmit.disabled = true;
						newVal.notValidImage = false;
						var promiseStart = $q.when('start');
						var promise1 = promiseStart.then(function(value) {
							updateImage();
						});
					}
				}
			});
		}
	};
});
