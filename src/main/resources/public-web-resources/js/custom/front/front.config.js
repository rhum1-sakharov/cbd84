angular.module(
		'cbd.front.config',
		[ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule',
				'ui.router', 'ui.grid','ui.grid.resizeColumns', 'ui.grid.pagination','ui.grid.exporter' ])

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

	}).state('events', {
		url : "/events",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/events.html",
				controller : function($scope, $q, $http, cbdUtils, uiGridConstants, i18nService, $filter) {
					
					var promiseStart = $q.when('start');
					
					$scope.events = [];
					
					i18nService.setCurrentLang('fr');
					$scope.gridEventOptions = {
						    onRegisterApi: function(gridApi){ 
						        $scope.gridApi = gridApi;
						      },
							enableFiltering : true,
						    paginationPageSizes: [25, 50, 100],
						    paginationPageSize: 25,
						    exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
						    exporterPdfOrientation: 'landscape',
						    exporterPdfPageSize: 'LETTER',
						    exporterPdfMaxGridWidth: 600,
						    exporterFieldCallback: function( grid, row, col, input ) {
						        if( col.name === 'creationDate' ){
						        	return $filter('date')(new Date(input), "EEE dd MMM yyyy HH'h'mm");					        	
						        } else {
						          return input;
						        }
						      },
						columnDefs : [ {
							field : 'creationDate',
							sort : {
								direction : uiGridConstants.ASC,
								priority : 1
							},
							cellFilter: "date:\"EEE dd MMM yyyy HH'h'mm\"",
							filterCellFiltered:true,
							displayName: "Date",
							width:180
						},{
							field : 'category',
							displayName: "Categorie",
							width:120,
							filter: {						         
						          type: uiGridConstants.filter.SELECT,
						          selectOptions: [ { value: 'PROPAGANDE', label: 'PROPAGANDE' }, { value: 'TIR', label: 'TIR' }, { value: 'LOISIRS', label: 'LOISIRS'}, { value: 'OFFICIEL', label: 'OFFICIEL' }, { value: 'NATIONAL', label: 'NATIONAL' } , { value: 'FEMININES', label: 'FEMININES' } , { value: 'PROMOTION', label: 'PROMOTION' } , { value: 'INVITATION', label: 'INVITATION' } , { value: 'VETERANS', label: 'VETERANS' } ]
						        },
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
							 minWidth: 100
						},{
							field : 'number',
							displayName: "Nb",
							maxWidth:70,
							enableFiltering: false
						},{
							field : 'type',
							displayName: "Type",
							minWidth:60, 
							filter: {						         
						          type: uiGridConstants.filter.SELECT,
						          selectOptions: [ { value: 'S', label: 'S' }, { value: 'D', label: 'D' }, { value: 'T', label: 'T'}, { value: 'Q', label: 'Q' } ]
						        }
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
					
					$scope.export_row_type ='all';
					$scope.exportPDF = function(){					
					     $scope.gridApi.exporter.pdfExport( $scope.export_row_type, 'visible' );						  
					 };
					
					var promise1 = promiseStart.then(function(response) {
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

	}).state('rankings', {
		url : "/rankings",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/rankings.html",
				controller : function($scope, $q, $http, cbdUtils, uiGridConstants, i18nService, $filter) {
					
					var promiseStart = $q.when('start');			
					$scope.rankings = [];
					$scope.totalPoints = 0;
					
					i18nService.setCurrentLang('fr');
					$scope.gridRankingOptions = {
						    onRegisterApi: function(gridApi){ 
						        $scope.gridApi = gridApi;
						      },
							enableFiltering : true,
						    paginationPageSizes: [25, 50, 100],
						    paginationPageSize: 25,	 
						    exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
						    exporterPdfOrientation: 'landscape',
						    exporterPdfPageSize: 'LETTER',
						    exporterPdfMaxGridWidth: 600,						   					   
						columnDefs : [ {
							field : 'nom',
							displayName: "Nom",
							width:120
						},
						{
							field : 'prenom',
							displayName: "Pr\u00e9nom",
							 minWidth: 120
						},
						{
							field : 'licence',
							displayName: "N\u00b0 licence",
							 minWidth: 90
						},		
						{
							field : 'instance',
							displayName: "Club",
							 minWidth: 180
						},				
						{
							field : 'pointCumulActuel',
							displayName: "Points",
							 minWidth: 80,
							 type : 'number', 
							 sort : {
									direction : uiGridConstants.DESC,
									priority : 1
								}
						},
						{
							field : 'typeLicence',
							displayName: "Licence",
							minWidth: 80,
							cellFilter : 'typeLicenceFilter'
						},
								//{
//							field : 'ranking',
//							displayName : 'Ranking',
//							cellTemplate : ' <span stars="{{row.entity.pointCumul}}" twenty-five="{{grid.appScope.percentiles.twentyFive}}" seventy-five="{{grid.appScope.percentiles.seventyFive}}" median="{{grid.appScope.percentiles.median}}"></span>'
//						} 
								]
					};				
				
					$scope.export_row_type ='all';
					$scope.exportPDF = function(){					
					     $scope.gridApi.exporter.pdfExport( $scope.export_row_type, 'visible' );						  
					 };
					 
//					 $scope.arrPointCumul = [];
//					 $scope.percentiles = {
//							 median : 0,
//							 seventyFive : 0,
//							 twentyFive : 0
//					 };
					
					var promise1 = promiseStart.then(function(response) {
						return $http.get('rankings').then(function(response) {
							$scope.rankings = response.data;						
							
							
//							for(var i in $scope.rankings){
//								var rank = $scope.rankings[i];
//								$scope.totalPoints += rank.pointCumul;
//								 $scope.arrPointCumul[i] = rank.pointCumul;
//							}
//							
//							 $scope.arrPointCumul.sort(function(a,b){
//								 return a -b;
//							 });						
//							 
//							 $scope.percentiles.median= $scope.arrPointCumul[parseInt($scope.rankings.length * 0.5 )];
//							 $scope.percentiles.twentyFive = $scope.arrPointCumul[parseInt($scope.rankings.length * 0.25)];
//							 $scope.percentiles.seventyFive = $scope.arrPointCumul[parseInt($scope.rankings.length * 0.75)];		
							 
							 $scope.gridRankingOptions.data = response.data;
														
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

	}).state('cbdfiles', {
		url : "/cbdfiles",
		views : {
			"main" : {
				templateUrl : "resources/partials/front/cbdfiles.html",
				controller : function($scope, $q, $http, cbdUtils) {
					$scope.cbdfiles = [];
					var promiseStart = $q.when('start');
					var promise1 = promiseStart.then(function(value) {
						return $http.get('cbdfiles').then(function(response) {
							$scope.cbdfiles = response.data;
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
}).filter('typeLicenceFilter',function(){
	
	return function(value){
		var val = value.toUpperCase();
		if(val=== 'Licence comp\u00e9tition adulte'.toUpperCase()){
			return 'COMPETITION';
		}else if(val === 'Licence comp\u00e9tition jeune'.toUpperCase()){
			return 'COMPETITION JEUNE';
		}else if(val === 'Licence loisir jeune'.toUpperCase()){
			return 'LOISIR JEUNE';
		}else if(val === 'Licence loisir adulte'.toUpperCase()){
			return 'LOISIR';
		}else if(val === 'Licence promotion adulte'.toUpperCase()){
			return 'PROMO';
		}else if(val === 'Licence promotion jeune'.toUpperCase()){
			return 'PROMO JEUNE';
		}
		return value;
	};	
	
});
//	.directive('stars', function() {
//
//    return function(scope, element, attr) {
//
//        var nb, max;
//
//        function draw() {
//            var html = '';
//            for (var i = 0 ; i < nb ; i++) {
//                html += '<img src="resources/images/star.png"/>';
//            }           
//            element.html(html);
//        }       
//
//        scope.$watch(attr.stars, function (value) {
//        	
//        	var val = parseInt(attr.stars);
//        	console.log(val);
//        	var median = parseInt(attr.median);
//        	var t = parseInt(attr.twentyFive);
//        	var s =parseInt(attr.seventyFive);
//          	console.log(s);
//            if( val > s ){
//            	nb = 4;
//            }else if( val >median ){
//            	nb = 3;
//            }else if( val > t ){
//            	nb = 2;
//            }            	else{
//            		nb = 1;
//            	}
//            console.log(nb);
//            draw();
//        });
//
//    };
//
//});

