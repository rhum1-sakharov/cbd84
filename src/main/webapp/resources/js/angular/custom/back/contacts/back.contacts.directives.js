angular.module('cbd.back.contacts.directives', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.bootstrap' ])

.directive("adminContacts", function($log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/back/contacts/admin-contacts.html",
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

			scope.openAddContact = function(size) {

				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/contacts/add-contacts.html',
					controller : 'AddContactModalInstanceCtrl',
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

			scope.openUpdateContact = function(size, selectedPartner) {
				scope.partner = selectedPartner;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/contacts/update-contacts.html',
					controller : 'UpdateContactModalInstanceCtrl',
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

			scope.openDeleteContact = function(size, selectedPartner) {
				scope.partner = selectedPartner;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/contacts/delete-contacts.html',
					controller : 'DeleteContactModalInstanceCtrl',
					size : size,
					resolve : {
						partner : function() {
							return scope.partner;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {

					var index = scope.partners.indexOf(selectedItem);
					scope.partners.splice(index, 1);

				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

		}
	};
});
