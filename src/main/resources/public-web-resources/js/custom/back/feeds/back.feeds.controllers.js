angular.module('cbd.back.feeds.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'cbdUtilsModule' ])

.controller('AddFeedModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'feeds', function(cbdUtils, $scope, $http, $q, $uibModalInstance, feeds) {

	$scope.feed = {
		position : 1

	};

	/** ****************************** DatePicker AngularUI */
	$scope.status = {
		opened : false
	};


	$scope.open = function($event) {
		$scope.status.opened = true;
	};
	/** ****************************** */

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addFeedImage = {
		error : 'pristine'
	};
	$scope.feed.imagePosition = 'left';

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

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('feeds/add', $scope.feed).then(function(response) {
				$scope.feed = response.data;
				return response.data;
			});
		});

		var promise2 = promise1.then(function(response) {
			if ($scope.addFeedImage.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addFeedImage);

				var url = 'feeds/add/image/jpg/512/' + $scope.feed.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})
			} else
				return response;
		});

		var promiseEnd = promise2.then(function(result) {
			$scope.loading = false;

			// Refresh parent view with image
			if ($scope.addFeedImage.error === '') {
				$scope.feed.imageUrl = 'images/get/feeds/jpg/' + $scope.feed.id;
				$scope.feed.imageUrl = cbdUtils.refreshImgSrc($scope.feed.imageUrl);
			}

			feeds.push($scope.feed);
			$uibModalInstance.close(feeds);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText + ', ' + reason.data;

			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('UpdateFeedModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'feed', function(cbdUtils, $scope, $http, $q, $uibModalInstance, feed) {

	$scope.feed = feed;
	$scope.loading = false;
	$scope.serverError = '';	
	$scope.updateFeedImage = {
		error : 'pristine'
	};

	/** ****************************** DatePicker AngularUI */

	$scope.status = {
		opened : false
	};


	$scope.open = function($event) {
		$scope.status.opened = true;
	};
	/** ****************************** */

	// UPDATE IMAGE OF FEED
	$scope.$watch('updateFeedImage', function(newVal, oldVal) {
		var mimetype = 'image/jpeg';

		if (newVal.type) {
			$scope.loading = true;
			if (mimetype != newVal.type) {
				newVal.error = 'L\'image doit etre au format jpeg';

			} else {
				newVal.error = '';
				if ($scope.feed.imagePosition === null) {
					$scope.feed.imagePosition = 'left';
				}
				var promiseStart = $q.when('start');
				var promise1 = promiseStart.then(function(response) {

					var fd = new FormData();
					fd.append('file', newVal);
					var url = 'feeds/add/image/jpg/512/' + $scope.feed.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					// Refresh parent view with image
					if ($scope.updateFeedImage.error === '') {
						$scope.feed.imageUrl = 'images/get/feeds/jpg/' + $scope.feed.id;
						$scope.feed.imageUrl = cbdUtils.refreshImgSrc($scope.feed.imageUrl);
					}
					$scope.loading = false;
					$scope.serverError = '';
					return result;
				}, function(reason) {
					$scope.loading = false;
					$scope.serverErro = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
					return $q.reject(reason);
				});
			}
		}

	});

	// DELETE IMAGE OF FEED
	$scope.eraseImage = function() {
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(response) {
			return $http.get('feeds/delete/image/jpg/' + $scope.feed.id);
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.feed.imageUrl = null;
			$scope.updateFeedImage.name= null;
			$scope.feed.imagePosition = null;
			$scope.loading = false;
			$scope.serverError = '';
			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError  = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			return $q.reject(reason);
		});
	}

	// SUBMIT UPDATED FEED
	$scope.ok = function() {

		$scope.loading = true;		
		$scope.feed.creationDate = cbdUtils.formatDate2Ts($scope.feed.dayDate);
		
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('feeds/add', $scope.feed).then(function(response) {
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
			// $uibModalInstance.close($scope.feed);
			return $q.reject(reason);
		});

	};

	// DISMISS MODAL
	$scope.cancel = function() {
		// $uibModalInstance.close($scope.feed);
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
			// $uibModalInstance.close(feed);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
