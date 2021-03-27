angular.module('cbd.back.config', [  'ngSanitize', 'ngResource', 'cbdUtilsModule', 'ui.router', 'ui.bootstrap', 'cbdUtilsModule' ])

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
				templateUrl : "/resources/partials/back/feeds/admin-feeds.html",
				controller : function($scope, $q, $http, cbdUtils, $uibModal, $log) {
					$scope.feeds = [];
					$scope.feed = {};

					$scope.formatTs2Date = function(ts) {
						return cbdUtils.formatTs2Date(ts);
					};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/feeds').then(function(response) {
							$scope.feeds = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddFeed = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/feeds/add-feeds.html',
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
						$scope.feed.dayDate = cbdUtils.formatTs2Date($scope.feed.creationDate);
					
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/feeds/update-feeds.html',
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
							templateUrl : '/resources/partials/back/feeds/delete-feeds.html',
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

	}).state('cbdfiles', {
		url : "/cbdfiles",
		views : {
			"main" : {

				templateUrl : "/resources/partials/back/cbdfiles/admin-cbdfiles.html",
				controller : function($scope, $q, $http, cbdUtils, $uibModal, $log) {
					$scope.cbdfiles = [];
					$scope.cbdfile = {};

					

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/cbdfiles').then(function(response) {
							$scope.cbdfiles = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddCbdFile = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/cbdfiles/add-cbdfiles.html',
							controller : 'AddCbdFileModalInstanceCtrl',
							size : size,
							resolve : {
								cbdfiles : function() {
									return $scope.cbdfiles;
								}
							}
						});

						modalInstance.result.then(function(cbdfiles) {
							$scope.cbdfiles = cbdfiles;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
					
					$scope.openUpdateCbdFile = function(size, selectedCbdFile) {
						$scope.cbdfile = selectedCbdFile;						
						$scope.cbdfile.dayDate = cbdUtils.formatTs2Date($scope.cbdfile.creationDate);
					
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/cbdfiles/update-cbdfiles.html',
							controller : 'UpdateCbdFileModalInstanceCtrl',
							size : size,
							resolve : {
								cbdfile : function() {
									return $scope.cbdfile;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.cbdfile = selectedItem;							
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};


					$scope.openDeleteCbdFile = function(size, selectedCbdFile) {
						$scope.cbdfile = selectedCbdFile;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/cbdfiles/delete-cbdfiles.html',
							controller : 'DeleteCbdFileModalInstanceCtrl',
							size : size,
							resolve : {
								cbdfile : function() {
									return $scope.cbdfile;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.cbdfiles.indexOf(selectedItem);
							$scope.cbdfiles.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
				}
			}
		}

	}).state('events', {
		url : "/events",
		views : {
			"main" : {

				templateUrl : "/resources/partials/back/events/admin-events.html",
				controller : function($scope, $q, $http, cbdUtils, $uibModal, $log, uibDateParser, cbdUtils) {
					$scope.events = [];
					$scope.event = {};			

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/events').then(function(response) {
							$scope.events = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddEvent = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/events/add-events.html',
							controller : 'AddEventModalInstanceCtrl',
							size : size,
							resolve : {
								events : function() {
									return $scope.events;
								}
							}
						});

						modalInstance.result.then(function(events) {
							$scope.events = events;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdateEvent = function(size, selectedEvent) {
						$scope.event = selectedEvent;
						$scope.event.date = cbdUtils.formatTs2Date($scope.event.creationDate);
						$scope.event.hour = cbdUtils.formatTs2HHmm($scope.event.creationDate);
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/events/update-events.html',
							controller : 'UpdateEventModalInstanceCtrl',
							size : size,
							resolve : {
								event : function() {
									return $scope.event;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.event = selectedItem;							
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
					
					$scope.openDeleteEvent = function(size, selectedEvent) {
						$scope.event = selectedEvent;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/events/delete-events.html',
							controller : 'DeleteEventModalInstanceCtrl',
							size : size,
							resolve : {
								event : function() {
									return $scope.event;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.events.indexOf(selectedItem);
							$scope.events.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};
				}
			}
		}

	}).state('results', {
		url : "/results",
		views : {
			"main" : {
				templateUrl : "/resources/partials/back/results/admin-results.html",
				controller : function($scope, $q, $http, cbdUtils, $uibModal, $log) {
					$scope.results = [];
					$scope.result = {};

					$scope.formatTs2Date = function(ts) {
						return cbdUtils.formatTs2Date(ts);
					};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/results').then(function(response) {
							$scope.results = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddResult = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/results/add-results.html',
							controller : 'AddResultModalInstanceCtrl',
							size : size,
							resolve : {
								results : function() {
									return $scope.results;
								}
							}
						});

						modalInstance.result.then(function(results) {
							$scope.results = results;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openUpdateResult = function(size, selectedResult) {
						$scope.result = selectedResult;
						$scope.result.dayDate = cbdUtils.formatTs2Date($scope.result.creationDate);
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/results/update-results.html',
							controller : 'UpdateResultModalInstanceCtrl',
							size : size,
							resolve : {
								result : function() {
									return $scope.result;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {
							$scope.result = selectedItem;
						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

					$scope.openDeleteResult = function(size, selectedResult) {
						$scope.result = selectedResult;
						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/results/delete-results.html',
							controller : 'DeleteResultModalInstanceCtrl',
							size : size,
							resolve : {
								result : function() {
									return $scope.result;
								}
							}
						});

						modalInstance.result.then(function(selectedItem) {

							var index = $scope.results.indexOf(selectedItem);
							$scope.results.splice(index, 1);

						}, function() {
							$log.info('Modal dismissed at: ' + new Date());
						});
					};

				}
			}
		}

	}).state('assos', {
		url : "/assos",
		views : {
			"main" : {
				templateUrl : "/resources/partials/back/assos/admin-assos.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.assos = [];
					$scope.asso = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/assos').then(function(response) {
							$scope.assos = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddAsso = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/assos/add-assos.html',
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
							templateUrl : '/resources/partials/back/assos/update-assos.html',
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
							templateUrl : '/resources/partials/back/assos/delete-assos.html',
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

	}).state('rankings', {
		url : "/rankings",
		views : {
			"main" : {
				templateUrl : "/resources/partials/back/rankings/admin-rankings.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
										
					$scope.$watch('addRankingXml', function(newVal, oldVal) {
						var mimetype = 'text/xml';

						if (newVal && newVal.type) {

							if (mimetype != newVal.type) {
								newVal.error = 'Le fichier doit etre au format XML';
							} else {
								newVal.error = '';
							}
						}
					});
					
					$scope.ok = function() {

						$scope.loading = true;
						var promiseStart = $q.when('start');
						var promise1 = promiseStart.then(function(value) {

							if ($scope.addRankingXml.error === '') {
								var fd = new FormData();
								fd.append('file', $scope.addRankingXml);
								
								var url = '/rankings/add/xml';
								return $http.post(url, fd, {
									transformRequest : angular.identity,
									headers : {
										'Content-Type' : undefined
									}
								})
							} else
								return response;
						});						
						
						var promiseEnd = promise1.then(function(result) {
							$scope.loading = false;						
							$scope.serverError = '';
							$scope.serverMessage = 'Les classements sont d&#233;sormais &#224; jour.';

							return result;
						}, function(reason) {
							$scope.loading = false;
							$scope.serverError = 'HTTP ERROR : ' + reason.status + ', ' + reason.statusText + ', ' + reason.data;

							return $q.reject(reason);
						});

				};
			}
		}}

	}).state('contacts', {
		url : "/contacts",
		views : {
			"main" : {
				templateUrl : "/resources/partials/back/contacts/admin-contacts.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.contacts = [];
					$scope.contact = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/contacts').then(function(response) {
							$scope.contacts = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddContact = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/contacts/add-contacts.html',
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
							templateUrl : '/resources/partials/back/contacts/update-contacts.html',
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
							templateUrl : '/resources/partials/back/contacts/delete-contacts.html',
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
				templateUrl : "/resources/partials/back/partners/admin-partners.html",
				controller : function($scope, $log, $uibModal, $timeout, $q, $http, $filter, $sce, cbdUtils) {
					$scope.partners = [];
					$scope.partner = {};

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('/partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});

					$scope.animationsEnabled = true;

					$scope.openAddPartner = function(size) {

						var modalInstance = $uibModal.open({
							animation : $scope.animationsEnabled,
							templateUrl : '/resources/partials/back/partners/add-partners.html',
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
							templateUrl : '/resources/partials/back/partners/update-partners.html',
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
							templateUrl : '/resources/partials/back/partners/delete-partners.html',
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

