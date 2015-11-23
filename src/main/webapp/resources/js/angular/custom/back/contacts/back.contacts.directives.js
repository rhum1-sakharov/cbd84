angular.module('cbd.back.contacts.directives', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.bootstrap' ])

.directive("adminContacts", function($log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
	return {
		restrict : 'E',
		templateUrl : "resources/js/angular/custom/partials/back/contacts/admin-contacts.html",
		link : function(scope, element, attrs) {

			scope.contacts = [];
			scope.contact = {};

			var promiseStart = $q.when('start');
			var promise1 = promiseStart.then(function(value) {
				return $http.get('contacts').then(function(response) {
					scope.contacts = response.data;
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
						contacts : function() {
							return scope.contacts;
						}
					}
				});

				modalInstance.result.then(function(contacts) {
					scope.contacts = contacts;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			scope.openUpdateContact = function(size, selectedContact) {
				scope.contact = selectedContact;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/contacts/update-contacts.html',
					controller : 'UpdateContactModalInstanceCtrl',
					size : size,
					resolve : {
						contact : function() {
							return scope.contact;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {
					scope.contact = selectedItem;
				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

			scope.openDeleteContact = function(size, selectedContact) {
				scope.contact = selectedContact;
				var modalInstance = $uibModal.open({
					animation : scope.animationsEnabled,
					templateUrl : 'resources/js/angular/custom/partials/back/contacts/delete-contacts.html',
					controller : 'DeleteContactModalInstanceCtrl',
					size : size,
					resolve : {
						contact : function() {
							return scope.contact;
						}
					}
				});

				modalInstance.result.then(function(selectedItem) {

					var index = scope.contacts.indexOf(selectedItem);
					scope.contacts.splice(index, 1);

				}, function() {
					$log.info('Modal dismissed at: ' + new Date());
				});
			};

		}
	};
});
