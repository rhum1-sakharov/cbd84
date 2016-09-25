angular.module('cbd.back.partners.controllers', [  'ngSanitize', 'ngResource', 'ui.bootstrap' ])

.controller('AddPartnerModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'partners', function($scope, $http, $q, $uibModalInstance, partners) {

	$scope.partner = {
		title : '',
		imageUrl : '',
		position : 1,
		urlLink : ''
	};

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addPartnerImage = {
		error : 'pristine'
		
	};

	$scope.$watch('addPartnerImage', function(newVal, oldVal) {
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

		if($scope.addPartnerImage.error === 'pristine'){
			$scope.addPartnerImage.error = 'Une image doit etre selectionnee !';
			
		}else if ($scope.addPartnerImage.error === ''  ) {
			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {

				return $http.post('/cbd84/partners/add', $scope.partner).then(function(response) {
					$scope.partner = response.data;
					return response.data;
				});
			});

			var promise2 = promise1.then(function(response) {
				var fd = new FormData();
				fd.append('file', $scope.addPartnerImage);
				
				var url = '/cbd84/partners/add/image/jpg/512/' + $scope.partner.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})

			});

			var promiseEnd = promise2.then(function(result) {
				$scope.loading = false;
				partners.push($scope.partner);
				$uibModalInstance.close(partners);
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

.controller('UpdatePartnerModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'partner', function($scope, $http, $q, $uibModalInstance, partner) {

	$scope.partner = partner;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.updatePartnerImage = {
		error : ''
	};

	$scope.$watch('updatePartnerImage', function(newVal, oldVal) {
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
					var url = '/cbd84/partners/add/image/jpg/512/' + $scope.partner.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					var random = new Date().getTime();
					$scope.partner.imageUrl = $scope.partner.imageUrl + "?cb=" + random;
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

			return $http.post('/cbd84/partners/update', $scope.partner).then(function(response) {
				$scope.partner = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.partner);
			$scope.serverError = '';
			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close($scope.partner);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeletePartnerModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'partner', function($scope, $http, $q, $uibModalInstance, partner) {

	$scope.loading = false;
	$scope.partner = partner;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = '/cbd84/partners/delete/' + $scope.partner.id + '/jpg';
			return $http.get(url).then(function(response) {

				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(partner);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close(partner);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
