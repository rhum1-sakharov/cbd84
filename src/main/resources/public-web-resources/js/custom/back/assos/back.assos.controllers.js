angular.module('cbd.back.assos.controllers', [  'ngSanitize', 'ngResource', 'ui.bootstrap' ])

.controller('AddAssoModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'assos', function($scope, $http, $q, $uibModalInstance, assos) {

	$scope.asso = {
		position : 1
	};

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addAssoImage = {
		error : 'pristine'

	};

	$scope.$watch('addAssoImage', function(newVal, oldVal) {
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

		if ($scope.addAssoImage.error === 'pristine') {
			$scope.addAssoImage.error = 'Une image doit etre selectionnee !';

		} else if ($scope.addAssoImage.error === '') {
			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {

				return $http.post('/assos/add', $scope.asso).then(function(response) {
					$scope.asso = response.data;
					return response.data;
				});
			});

			var promise2 = promise1.then(function(response) {
				var fd = new FormData();
				fd.append('file', $scope.addAssoImage);
				var url = '/assos/add/image/jpg/512/' + $scope.asso.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})

			});

			var promiseEnd = promise2.then(function(result) {
				$scope.loading = false;
				assos.push($scope.asso);
				$uibModalInstance.close(assos);
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

.controller('UpdateAssoModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'asso', function($scope, $http, $q, $uibModalInstance, asso) {

	$scope.asso = asso;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.updateAssoImage = {
		error : ''
	};

	$scope.$watch('updateAssoImage', function(newVal, oldVal) {
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
					var url = '/assos/add/image/jpg/512/' + $scope.asso.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					var random = new Date().getTime();
					$scope.asso.photoUrl = $scope.asso.photoUrl + "?cb=" + random;
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

			return $http.post('/assos/update', $scope.asso).then(function(response) {
				$scope.asso = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.asso);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			//$uibModalInstance.close($scope.asso);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeleteAssoModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'asso', function($scope, $http, $q, $uibModalInstance, asso) {

	$scope.loading = false;
	$scope.asso = asso;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = '/assosdelete/' + $scope.asso.id + '/jpg';
			return $http.get(url).then(function(response) {
				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(asso);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			//$uibModalInstance.close(asso);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
