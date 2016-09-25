angular.module('cbd.back.cbdfiles.controllers', [  'ngSanitize', 'ngResource', 'ui.bootstrap', 'cbdUtilsModule' ])

.controller('AddCbdFileModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'cbdfiles', function(cbdUtils, $scope, $http, $q, $uibModalInstance, cbdfiles) {

	$scope.cbdfile = {
		position : 1
	};

	/** ****************************** DatePicker AngularUI */
	$scope.today = function() {
		$scope.cbdfile.creationDate = new Date();
	};

	$scope.status = {
		opened : false
	};
	$scope.today();

	$scope.open = function($event) {
		$scope.status.opened = true;
	};
	/** ****************************** */

	$scope.loading = false;
	$scope.serverError = '';
	$scope.addCbdFilePDF = {
		error : 'pristine'
	};
	$scope.addCbdFileExcel = {
		error : 'pristine'
	};

	$scope.$watch('addCbdFilePDF', function(newVal, oldVal) {
		var mimetype = 'application/pdf';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'Le fichier doit etre au format PDF';
			} else {
				newVal.error = '';

			}
		}
	});
	
	$scope.$watch('addCbdFileExcel', function(newVal, oldVal) {
		var mimetype = 'application/vnd.ms-excel';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'Le fichier doit etre au format xls';
			} else {
				newVal.error = '';

			}
		}
	});

	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('/cbd84/cbdfiles/add', $scope.cbdfile).then(function(response) {
				$scope.cbdfile = response.data;
				return response.data;
			});
		});

		var promise2 = promise1.then(function(response) {
			if ($scope.addCbdFilePDF.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addCbdFilePDF);

				//"/add/file/{imgExtension}/{id}"
				var url = '/cbd84/cbdfiles/add/file/pdf/' + $scope.cbdfile.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})
			} else
				return response;
		});
		
		var promise3 = promise2.then(function(response) {
			if ($scope.addCbdFileExcel.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addCbdFileExcel);

				//"/add/file/{imgExtension}/{id}"
				var url = '/cbd84/cbdfiles/add/file/xls/' + $scope.cbdfile.id;
				return $http.post(url, fd, {
					transformRequest : angular.identity,
					headers : {
						'Content-Type' : undefined
					}
				})
			} else
				return response;
		});

		var promiseEnd = promise3.then(function(result) {
			$scope.loading = false;
			cbdfiles.push($scope.cbdfile);
			$uibModalInstance.close(cbdfiles);
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

} ]).controller('UpdateCbdFileModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'cbdfile', function($scope, $http, $q, $uibModalInstance, cbdfile) {

	$scope.cbdfile = cbdfile;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.addCbdFilePDF = {
		error : 'pristine'
	};
	$scope.addCbdFileExcel = {
		error : 'pristine'
	};

	$scope.$watch('addCbdFilePDF', function(newVal, oldVal) {
		var mimetype = 'application/pdf';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'Le fichier doit etre au format PDF';
			} else {
				newVal.error = '';

			}
		}
	});
	
	$scope.$watch('addCbdFileExcel', function(newVal, oldVal) {
		var mimetype = 'application/vnd.ms-excel';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'Le fichier doit etre au format xls';
			} else {
				newVal.error = '';

			}
		}
	});
	
	$scope.ok = function() {

			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
	
				return $http.post('/cbd84/cbdfiles/update', $scope.cbdfile).then(function(response) {
					$scope.cbdfile = response.data;
					return response.data;
				});
			});
	
			var promise2 = promise1.then(function(response) {
				if ($scope.addCbdFilePDF.error === '') {
					var fd = new FormData();
					fd.append('file', $scope.addCbdFilePDF);
	
					//"/add/file/{imgExtension}/{id}"
					var url = '/cbd84/cbdfiles/add/file/pdf/' + $scope.cbdfile.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				} else
					return response;
			});
			
			var promise3 = promise2.then(function(response) {
				if ($scope.addCbdFileExcel.error === '') {
					var fd = new FormData();
					fd.append('file', $scope.addCbdFileExcel);
	
					//"/add/file/{imgExtension}/{id}"
					var url = '/cbd84/cbdfiles/add/file/xls/' + $scope.cbdfile.id;
					return $http.post(url, fd, {
						transformRequest : angular.identity,
						headers : {
							'Content-Type' : undefined
						}
					})
				} else
					return response;
			});
	
			var promiseEnd = promise3.then(function(result) {
				$scope.loading = false;				
				$uibModalInstance.close($scope.cbdfile);
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
	
}]).controller('DeleteCbdFileModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'cbdfile', function($scope, $http, $q, $uibModalInstance, cbdfile) {

	$scope.loading = false;
	$scope.cbdfile = cbdfile;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = '/cbd84/cbdfiles/delete/' + $scope.cbdfile.id ;
			return $http.get(url).then(function(response) {
				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(cbdfile);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			// $uibModalInstance.close(cbdfile);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
