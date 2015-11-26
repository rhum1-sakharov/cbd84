angular.module('cbd.back.contacts.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap' ])

.controller('AddContactModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'contacts', function($scope, $http, $q, $uibModalInstance, contacts) {

	$scope.contact = {
		position : 1
	};

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addContactImage = {
		error : 'pristine'

	};

	$scope.$watch('addContactImage', function(newVal, oldVal) {
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

		if ($scope.addContactImage.error === 'pristine') {
			$scope.addContactImage.error = 'Une image doit etre selectionnee !';

		} else if ($scope.addContactImage.error === '') {
			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {

				return $http.post('contacts/add', $scope.contact).then(function(response) {
					$scope.contact = response.data;
					return response.data;
				});
			});

			var promise2 = promise1.then(function(response) {
				var fd = new FormData();
				fd.append('file', $scope.addContactImage);
				
				var url = 'contacts/add/image/jpg/128/' + $scope.contact.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})

			});

			var promiseEnd = promise2.then(function(result) {
				$scope.loading = false;
				contacts.push($scope.contact);
				$uibModalInstance.close(contacts);
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

.controller('UpdateContactModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'contact', function($scope, $http, $q, $uibModalInstance, contact) {

	$scope.contact = contact;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.updateContactImage = {
		error : ''
	};

	$scope.$watch('updateContactImage', function(newVal, oldVal) {
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
					var url = 'contacts/add/image/jpg/128/' + $scope.contact.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				});

				var promiseEnd = promise1.then(function(result) {
					var random = new Date().getTime();
					$scope.contact.photoUrl = $scope.contact.photoUrl + "?cb=" + random;
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

			return $http.post('contacts/update', $scope.contact).then(function(response) {
				$scope.contact = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.contact);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close($scope.contact);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeleteContactModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'contact', function($scope, $http, $q, $uibModalInstance, contact) {

	$scope.loading = false;
	$scope.contact = contact;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = 'contacts/delete/' + $scope.contact.id + '/jpg';
			return $http.get(url).then(function(response) {

				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(contact);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close(contact);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
