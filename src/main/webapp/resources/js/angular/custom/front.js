angular.module('frontModule', [ 'ngAnimate', 'ngSanitize', 'ngResource' ])

.controller('FrontCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q) {

	$scope.menu = {id : 1};
	
	$log.info($scope.menu.id);
	
	$scope.selectMenu = function(idMenu){
				
		$scope.menu.id = idMenu;
	};
	
	$scope.isMenuSelected = function (idMenu){
		if(idMenu === $scope.menu.id){
			return true;
		}else{
			return false;
		}
	};
	
} ])

.directive("calendar", function( $timeout) {
    return {
        restrict : 'E',
        templateUrl : "resources/js/angular/custom/partials/calendar.html",
        link : function(scope, element, attrs) {           
        }
    };
})

.directive("news", function( $timeout) {
    return {
        restrict : 'E',
        templateUrl : "resources/js/angular/custom/partials/news.html",
        link : function(scope, element, attrs) {           
        }
    };
})


.directive("contacts", function( $timeout) {
    return {
        restrict : 'E',
        templateUrl : "resources/js/angular/custom/partials/contacts.html",
        link : function(scope, element, attrs) {           
        }
    };
})


.run(function($http) {
	// TODO call initControl method
});
