angular.module('cbd.back.feeds.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap' ])

.controller('AddFeedModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'feeds', function($scope, $http, $q, $uibModalInstance, feeds) {

	$scope.feed = {
		position : 1
	};

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addFeedImage = {
		error : 'pristine'

	};

	$scope.$watch('addFeedImage', function(newVal, oldVal) {
		var mimetype = 'image/jpeg';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'L\'image doit etre au format jpeg';
			} else {
				newVal.error = '';
			}
		}
	});

	$scope.ok = function() {

		if ($scope.addFeedImage.error === 'pristine') {
			$scope.addFeedImage.error = 'Une image doit etre selectionnee !';

		} else if ($scope.addFeedImage.error === '') {
			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {

				return $http.post('feeds/add', $scope.feed).then(function(response) {
					$scope.feed = response.data;
					return response.data;
				});
			});

			var promise2 = promise1.then(function(response) {
				var fd = new FormData();
				fd.append('file', $scope.addFeedImage);
				var url = 'images/add/feeds/jpg/256/' + $scope.feed.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})

			});

			var promiseEnd = promise2.then(function(result) {
				$scope.loading = false;
				feeds.push($scope.feed);
				$uibModalInstance.close(feeds);
				$scope.serverError = '';

				return result;
			}, function(reason) {
				$scope.loading = false;
				$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;

				return $q.reject(reason);
			});
		}

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('UpdateFeedModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'feed', function($scope, $http, $q, $uibModalInstance, feed) {

	$scope.feed = feed;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.updateFeedImage = {
		error : ''
	};

	$scope.$watch('updateFeedImage', function(newVal, oldVal) {
		var mimetype = 'image/jpeg';

		if (newVal.type) {
			$scope.loading = true;
			if (mimetype != newVal.type) {
				newVal.error = 'L\'image doit etre au format jpeg';

			} else {
				var promiseStart = $q.when('start');
				var promise1 = promiseStart.then(function(response) {

					var fd = new FormData();
					fd.append('file', newVal);
					var url = 'images/add/contacts/jpg/128/' + $scope.feed.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					var random = new Date().getTime();
					$scope.feed.photoUrl = $scope.feed.photoUrl + "?cb=" + random;
					$scope.loading = false;
					newVal.error = '';
					return result;
				}, function(reason) {
					$scope.loading = false;
					newVal.error = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
					return $q.reject(reason);
				});
			}
		}
	});

	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('feeds/update', $scope.feed).then(function(response) {
				$scope.feed = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.feed);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			//$uibModalInstance.close($scope.feed);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeleteFeedModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'feed', function($scope, $http, $q, $uibModalInstance, feed) {

	$scope.loading = false;
	$scope.feed = feed;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = 'feeds/delete/' + $scope.feed.id + '/jpg';
			return $http.get(url).then(function(response) {
				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(feed);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			//$uibModalInstance.close(feed);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
