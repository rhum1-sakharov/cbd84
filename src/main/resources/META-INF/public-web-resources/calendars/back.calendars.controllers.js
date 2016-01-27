angular.module('cbd.back.calendars.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'cbdUtilsModule' ])

.controller('AddCalendarModalInstanceCtrl', [ 'cbdUtils', '$scope', '$http', '$q', '$uibModalInstance', 'calendars', function(cbdUtils, $scope, $http, $q, $uibModalInstance, calendars) {

	$scope.calendar = {
		position : 1

	};

	/** ****************************** DatePicker AngularUI */
	$scope.today = function() {
		$scope.calendar.creationDate = new Date();
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
	$scope.addCalendarPDF = {
		error : 'pristine'
	};
	$scope.addCalendarExcel = {
		error : 'pristine'
	};

	$scope.$watch('addCalendarPDF', function(newVal, oldVal) {
		var mimetype = 'application/pdf';

		if (newVal.type) {

			if (mimetype != newVal.type) {
				newVal.error = 'Le fichier doit etre au format PDF';
			} else {
				newVal.error = '';

			}
		}
	});
	
	$scope.$watch('addCalendarExcel', function(newVal, oldVal) {
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

			return $http.post('calendars/add', $scope.calendar).then(function(response) {
				$scope.calendar = response.data;
				return response.data;
			});
		});

		var promise2 = promise1.then(function(response) {
			if ($scope.addCalendarPDF.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addCalendarPDF);

				//"/add/file/{imgExtension}/{id}"
				var url = 'calendars/add/file/pdf/' + $scope.calendar.id;
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
			if ($scope.addCalendarExcel.error === '') {
				var fd = new FormData();
				fd.append('file', $scope.addCalendarExcel);

				//"/add/file/{imgExtension}/{id}"
				var url = 'calendars/add/file/xls/' + $scope.calendar.id;
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
			calendars.push($scope.calendar);
			$uibModalInstance.close(calendars);
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

.controller('DeleteCalendarModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'calendar', function($scope, $http, $q, $uibModalInstance, calendar) {

	$scope.loading = false;
	$scope.calendar = calendar;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = 'calendars/delete/' + $scope.calendar.id ;
			return $http.get(url).then(function(response) {
				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(calendar);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			// $uibModalInstance.close(calendar);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
