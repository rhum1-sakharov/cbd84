angular.module('cbd.back.config', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.router' ])

.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/actus");
	//
	// Now set up the states
	$stateProvider.state('actus', {
		url : "/actus",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/back/feeds/admin-feeds.html",
				controller : function($scope, $q, $http, cbdUtils,$uibModal) {
					$scope.feeds = [];
					$scope.feed = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('feeds').then(function(response) {
							$scope.feeds = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddFeed = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/feeds/add-feeds.html',
							controller : 'AddFeedModalInstanceCtrl',
							size : size,
							resolve : {
								feeds : function() {
									return $scope.feeds;
								}
							}
						});

						modalInstance.result.then(function(feeds) {
							$scope.feeds = feeds;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdateFeed = function(size, selectedFeed) {
						$scope.feed = selectedFeed;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/feeds/update-feeds.html',
							controller : 'UpdateFeedModalInstanceCtrl',
							size : size,
							resolve : {
								feed : function() {
									return $scope.feed;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.feed = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openDeleteFeed = function(size, selectedFeed) {
						$scope.feed = selectedFeed;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/feeds/delete-feeds.html',
							controller : 'DeleteFeedModalInstanceCtrl',
							size : size,
							resolve : {
								feed : function() {
									return $scope.feed;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.feeds.indexOf(selectedItem);
							$scope.feeds.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

				}
			}
		},

	}).state('calendar', {
		url : "/calendar",
		views : {
			"main" : {
				template : ""
			}
		}

	}).state('results', {
		url : "/results",
		views : {
			"main" : {
				template : ""
			}
		}

	}).state('assos', {
		url : "/assos",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/back/assos/admin-assos.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.assos = [];
					$scope.asso = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('assos').then(function(response) {
							$scope.assos = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddAsso = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/assos/add-assos.html',
							controller : 'AddAssoModalInstanceCtrl',
							size : size,
							resolve : {
								assos : function() {
									return $scope.assos;
								}
							}
						});

						modalInstance.result.then(function(assos) {
							$scope.assos = assos;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdateAsso = function(size, selectedAsso) {
						$scope.asso = selectedAsso;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/assos/update-assos.html',
							controller : 'UpdateAssoModalInstanceCtrl',
							size : size,
							resolve : {
								asso : function() {
									return $scope.asso;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.contact = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openDeleteAsso = function(size, selectedAsso) {
						$scope.asso = selectedAsso;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/assos/delete-assos.html',
							controller : 'DeleteAssoModalInstanceCtrl',
							size : size,
							resolve : {
								asso : function() {
									return $scope.asso;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.assos.indexOf(selectedItem);
							$scope.assos.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
				}
			}
		}

	}).state('contacts', {
		url : "/contacts",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/back/contacts/admin-contacts.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.contacts = [];
					$scope.contact = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('contacts').then(function(response) {
							$scope.contacts = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddContact = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/contacts/add-contacts.html',
							controller : 'AddContactModalInstanceCtrl',
							size : size,
							resolve : {
								contacts : function() {
									return $scope.contacts;
								}
							}
						});

						modalInstance.result.then(function(contacts) {
							$scope.contacts = contacts;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdateContact = function(size, selectedContact) {
						$scope.contact = selectedContact;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/contacts/update-contacts.html',
							controller : 'UpdateContactModalInstanceCtrl',
							size : size,
							resolve : {
								contact : function() {
									return $scope.contact;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.contact = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openDeleteContact = function(size, selectedContact) {
						$scope.contact = selectedContact;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/contacts/delete-contacts.html',
							controller : 'DeleteContactModalInstanceCtrl',
							size : size,
							resolve : {
								contact : function() {
									return $scope.contact;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.contacts.indexOf(selectedItem);
							$scope.contacts.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

				}
			}
		}

	})

	.state('partners', {
		url : "/partners",
		views : {
			"main" : {
				templateUrl : "resources/js/angular/custom/partials/back/partners/admin-partners.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.partners = [];
					$scope.partner = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddPartner = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/partners/add-partners.html',
							controller : 'AddPartnerModalInstanceCtrl',
							size : size,
							resolve : {
								partners : function() {
									return $scope.partners;
								}
							}
						});

						modalInstance.result.then(function(partners) {
							$scope.partners = partners;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdatePartner = function(size, selectedPartner) {
						$scope.partner = selectedPartner;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/partners/update-partners.html',
							controller : 'UpdatePartnerModalInstanceCtrl',
							size : size,
							resolve : {
								partner : function() {
									return $scope.partner;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.partner = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openDeletePartner = function(size, selectedPartner) {
						$scope.partner = selectedPartner;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : 'resources/js/angular/custom/partials/back/partners/delete-partners.html',
							controller : 'DeletePartnerModalInstanceCtrl',
							size : size,
							resolve : {
								partner : function() {
									return $scope.partner;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.partners.indexOf(selectedItem);
							$scope.partners.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
				}
			}
		}

	});
});
;
