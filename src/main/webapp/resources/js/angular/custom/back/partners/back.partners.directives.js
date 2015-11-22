angular.module('cbd.back.partners.directives', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule','ui.bootstrap'  ])

.directive("adminPartners", function($log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/back/partners/admin-partners.html",
		link : function(scope, element, attrs) {

			scope.partners = [];
			scope.partner = {};
		
			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('partners').then(function(response) {
					scope.partners = response.data;
					return response.data;
				});
			});

			scope.animationsEnabled = true;

			scope.openAddPartner = function(size) {

				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/partners/add-partners.html',
					controller : 'AddPartnerModalInstanceCtrl',
					size : size,
					resolve : {
						partners : function() {
							return scope.partners;
						}
					}
				});

				modalInstance.result.then(function(partners) {
					scope.partners = partners;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};	
			
			scope.openUpdatePartner = function(size, selectedPartner) {
				scope.partner = selectedPartner;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/partners/update-partners.html',
					controller : 'UpdatePartnerModalInstanceCtrl',
					size : size,
					resolve : {
						partner : function() {
							return scope.partner;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {
					scope.partner = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

		}
	};
});
