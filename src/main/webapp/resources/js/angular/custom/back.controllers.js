angular.module('cbd.back.controllers', [ 'ngAnimate', 'ngSanitize', 'ngResource', 'cbdUtilsModule' ])

.controller('CbdBackCtrl', [ '$resource', '$rootScope', '$timeout', '$compile', '$scope', '$http', '$log', '$window', '$sce', '$q', '$filter', 'cbdUtils', function($resource, $rootScope, $timeout, $compile, $scope, $http, $log, $window, $sce, $q, $filter, cbdUtils) {

	$scope.tinymceOptions= {
			trusted : true
	};
	
	$scope.menu = {
		id : 6
	};

	$scope.selectMenu = function(idMenu) {
		$scope.menu.id = idMenu;
		//cbdUtils.selectMenu(idMenu, $scope.menu.id)
	};

	$scope.isMenuSelected = function(idMenu) {
		return (idMenu === $scope.menu.id);
		//return cbdUtils.isMenuSelected(idMenu, $scope.menu.id);
	};

} ])

.run(function($http) {
	// TODO call initControl method
});
