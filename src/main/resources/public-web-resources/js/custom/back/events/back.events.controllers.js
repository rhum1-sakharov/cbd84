angular.module('cbd.back.events.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'cbdUtilsModule'  ])

.controller('AddEventModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'events', function($scope, $http, $q, $uibModalInstance, events) {

	$scope.event = {
			creationDate : new Date() 
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

	$scope.ok = function() {
		
			$scope.event.creationDate.setHours($scope.event.hour.getHours(), $scope.event.hour.getMinutes(), 0, 0);
	
			$scope.loading = true;
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {

				return $http.post('events/add', $scope.event).then(function(response) {
					$scope.event = response.data;
					return response.data;
				});
			});			

			var promiseEnd = promise1.then(function(result) {
				$scope.loading = false;
				events.push($scope.event);
				$uibModalInstance.close(events);
				$scope.serverError = '';

				return result;
			}, function(reason) {
				$scope.loading = false;
				$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;

				return $q.reject(reason);
			});
	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('UpdateEventModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'event','cbdUtils', function($scope, $http, $q, $uibModalInstance, event,cbdUtils) {

	$scope.event = event;
	$scope.loading = false;
	$scope.serverError = '';
	$scope.updateEventImage = {
		error : ''
	};


	/** ****************************** DatePicker AngularUI */
	$scope.status = {
		opened : false
	};


	$scope.open = function($event) {
		$scope.status.opened = true;
	};
	/** ****************************** */
	
	$scope.ok = function() {
		var hourDate=	cbdUtils.formatHHmm2Ts($scope.event.hour);
		var dayDate = cbdUtils.formatDate2Ts($scope.event.date);
		dayDate.setHours(hourDate.getHours(), hourDate.getMinutes(), 0, 0);
		$scope.event.creationDate = dayDate;
		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			return $http.post('events/update', $scope.event).then(function(response) {
				$scope.event = response.data;
				return response.data;
			});
		});
		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close($scope.event);
			$scope.serverError = '';
			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close($scope.event);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ])

.controller('DeleteEventModalInstanceCtrl', [ '$scope', '$http', '$q', '$uibModalInstance', 'event', function($scope, $http, $q, $uibModalInstance, event) {

	$scope.loading = false;
	$scope.event = event;
	$scope.ok = function() {

		$scope.loading = true;
		var promiseStart = $q.when('start');
		var promise1 = promiseStart.then(function(value) {

			var url = 'events/delete/' + $scope.event.id ;
			return $http.get(url).then(function(response) {

				return response.data;
			});
		});

		var promiseEnd = promise1.then(function(result) {
			$scope.loading = false;
			$uibModalInstance.close(event);
			$scope.serverError = '';

			return result;
		}, function(reason) {
			$scope.loading = false;
			$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText;
			$uibModalInstance.close(event);
			return $q.reject(reason);
		});

	};

	$scope.cancel = function() {
		$uibModalInstance.dismiss('cancel');
	};

} ]);
