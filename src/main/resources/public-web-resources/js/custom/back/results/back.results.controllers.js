angular.module('cbd.back.results.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'cbdUtilsModule' ])

.controller('AddResultModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'results', function(cbdUtils, $scope, $http, $q, $uibModalInstance, results) {

	$scope.result = {
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
	$scope.addResultImage = {
		error : 'pristine'
	};
	$scope.result.imagePosition = 'left';

	$scope.$watch('addResultImage', function(newVal, oldVal) {
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

			return $http.post('results/add', $scope.result).then(function(response) {
				$scope.result = response.data;
				return response.data;
			});
		});

		var promise2 = promise1.then(function(response) {
			if ($scope.addResultImage.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addResultImage);

				var url = 'results/add/image/jpg/512/' + $scope.result.id;
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
			if ($scope.addResultImage.error === '') {
				$scope.result.imageUrl = 'images/get/feeds/jpg/' + $scope.result.id;
				$scope.result.imageUrl = cbdUtils.refreshImgSrc($scope.result.imageUrl);
			}

			results.push($scope.result);
			$uibModalInstance.close(results);
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

.controller('UpdateResultModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'result', function(cbdUtils, $scope, $http, $q, $uibModalInstance, result) {

	$scope.result = result;
	$scope.loading = false;
	$scope.serverError = '';	
	$scope.updateResultImage = {
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
	$scope.$watch('updateResultImage', function(newVal, oldVal) {
		var mimetype = 'image/jpeg';

		if (newVal.type) {
			$scope.loading = true;
			if (mimetype != newVal.type) {
				newVal.error = 'L\'image doit etre au format jpeg';

			} else {
				newVal.error = '';
				if ($scope.result.imagePosition === null) {
					$scope.result.imagePosition = 'left';
				}
				var promiseStart = $q.when('start');
				var promise1 = promiseStart.then(function(response) {

					var fd = new FormData();
					fd.append('file', newVal);
					var url = 'results/add/image/jpg/512/' + $scope.result.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					// Refresh parent view with image
					if ($scope.updateResultImage.error === '') {
						$scope.result.imageUrl = 'images/get/feeds/jpg/' + $scope.result.id;
						$scope.result.imageUrl = cbdUtils.refreshImgSrc($scope.result.imageUrl);
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
			return $http.get('results/delete/image/jpg/' + $scope.result.id);
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.result.imageUrl = null;
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
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('results/add', $scope.result).then(function(response) {
				$scope.result = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.result);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			// $uibModalInstance.close($scope.result);
			return $q.reject(reason);
		});

	};

	// DISMISS MODAL
	$scope.cancel = function() {
		// $uibModalInstance.close($scope.result);
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeleteResultModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'result', function($scope, $http, $q, $uibModalInstance, result) {

	$scope.loading = false;
	$scope.result = result;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = 'results/delete/' + $scope.result.id + '/jpg';
			return $http.get(url).then(function(response) {
				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(response) {
			$scope.loading = false;
			$uibModalInstance.close(result);
			$scope.serverError = '';

			return response;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			// $uibModalInstance.close(result);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
