angular.module(
		'cbd.front.config',
		[ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule',
				'ui.router', 'ui.grid','ui.grid.resizeColumns', 'ui.grid.pagination' ])

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
				templateUrl : "resources/partials/front/news.html",
				controller : function($scope, $q, $http, cbdUtils) {
					$scope.feeds = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('feeds').then(function(response) {
							$scope.feeds = response.data;
							return response.data;
						});
					});

					$scope.formatInfoFeed = function(author, ts) {

						return author + ", le " + cbdUtils.formatTs2Date(ts);
					};
				}
			},
			"partners" : {
				templateUrl : "resources/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		},

	}).state('calendars', {
		url : "/calendars",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/calendars.html",
				controller : function($scope, $q, $http, cbdUtils, uiGridConstants, i18nService) {
					$scope.calendars = [];

					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('calendars').then(function(response) {
							$scope.calendars = response.data;
							return response.data;
						});
					});
					$scope.events = [];
					
					  i18nService.setCurrentLang('fr');
					$scope.gridEventOptions = {
							
						    paginationPageSizes: [25, 50, 100],
						    paginationPageSize: 25,
						columnDefs : [ {
							field : 'creationDate',
							sort : {
								direction : uiGridConstants.DESC,
								priority : 1
							},
							cellFilter: "date:\"EEE dd MMM yyyy HH'h'mm\"",
							displayName: "Date",
							width:180
						},{
							field : 'category',
							displayName: "Categorie",
							width:120,
					        cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
					            if (grid.getCellValue(row,col) === 'PROPAGANDE') {
					              return 'calendar-PROPAGANDE';
					            }  
					            else if (grid.getCellValue(row,col) === 'TIR') {
						              return 'calendar-TIR';
						            }  
					            else if (grid.getCellValue(row,col) === 'LOISIRS') {
						              return 'calendar-LOISIRS';
						            }  
					            else if (grid.getCellValue(row,col) === 'OFFICIEL') {
						              return 'calendar-OFFICIEL';
						            }  
					            else if (grid.getCellValue(row,col) === 'NATIONAL') {
						              return 'calendar-NATIONAL';
						            }  
					            else if (grid.getCellValue(row,col) === 'FEMININES') {
						              return 'calendar-FEMININES';
						            }  
					            else if (grid.getCellValue(row,col) === 'PROMOTION') {
						              return 'calendar-PROMOTION';
						            }  
					            else if (grid.getCellValue(row,col) === 'INVITATION') {
						              return 'calendar-INVITATION';
						            }  
					            else if (grid.getCellValue(row,col) === 'VETERANS') {
						              return 'calendar-VETERANS';
						            }  
					        }
						},
						{
							field : 'club',
							displayName: "Club",
							 minWidth: 130
						},{
							field : 'number',
							displayName: "Nb",
							maxWidth:70
						},{
							field : 'type',
							displayName: "Type",
							minWidth:80
						},{
							field : 'division',
							displayName: "Division",
							minWidth:80
						},{
							field : 'mode',
							displayName: "Mode",
							minWidth:60
						},{
							field : 'nature',
							displayName: "Nature",
							minWidth:150
						},{
							field : 'place',
							displayName: "Lieu",
							 minWidth: 150
						} ]
					};
					var promise2 = promise1.then(function(response) {
						return $http.get('events').then(function(response) {
							$scope.events = response.data;
							$scope.gridEventOptions.data = response.data;
							return response.data;
						});
					});

				}
			},
			"partners" : {
				templateUrl : "resources/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('results', {
		url : "/results",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/results.html",
				controller : function($scope, $q, $http, cbdUtils) {
					$scope.results = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('results').then(function(response) {
							$scope.results = response.data;
							return response.data;
						});
					});

					$scope.formatInfoResult = function(author, ts) {

						return author + ", le " + cbdUtils.formatTs2Date(ts);
					};
				}
			},
			"partners" : {
				templateUrl : "resources/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('assos', {
		url : "/assos",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/assos.html",
				controller : function($scope, $q, $http) {
					$scope.assos = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('assos').then(function(response) {
							$scope.assos = response.data;
							return response.data;
						});
					});
				}
			},
			"partners" : {
				templateUrl : "resources/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	}).state('contacts', {
		url : "/contacts",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/contacts.html",
				controller : function($scope, $q, $http) {
					$scope.contacts = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('contacts').then(function(response) {
							$scope.contacts = response.data;
							return response.data;
						});
					});
				}
			},
			"partners" : {
				templateUrl : "resources/partials/front/partners.html",
				controller : function($scope, $q, $http) {
					$scope.partners = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('partners').then(function(response) {
							$scope.partners = response.data;
							return response.data;
						});
					});
				}
			}
		}

	});
});
;
