angular.module('cbd.back.assos.directives', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.bootstrap' ])

.directive("adminAssos", function($log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/back/assos/admin-assos.html",
		link : function(scope, element, attrs) {

			scope.assos = [];
			scope.asso = {};

			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('assos').then(function(response) {
					scope.assos = response.data;
					return response.data;
				});
			});

			scope.animationsEnabled = true;

			scope.openAddAsso = function(size) {

				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/assos/add-assos.html',
					controller : 'AddAssoModalInstanceCtrl',
					size : size,
					resolve : {
						assos : function() {
							return scope.assos;
						}
					}
				});

				modalInstance.result.then(function(assos) {
					scope.assos = assos;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			scope.openUpdateAsso = function(size, selectedAsso) {
				scope.asso = selectedAsso;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/assos/update-assos.html',
					controller : 'UpdateAssoModalInstanceCtrl',
					size : size,
					resolve : {
						asso : function() {
							return scope.asso;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {
					scope.contact = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			scope.openDeleteAsso = function(size, selectedAsso) {
				scope.asso = selectedAsso;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/assos/delete-assos.html',
					controller : 'DeleteAssoModalInstanceCtrl',
					size : size,
					resolve : {
						asso : function() {
							return scope.asso;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {

					var index = scope.assos.indexOf(selectedItem);
					scope.assos.splice(index, 1);

				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

		}
	};
});
