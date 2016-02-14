angular.module('cbdUtilsModule', []).factory(
		'cbdUtils',
		[
				'$log',
				'$location',
				'$rootScope',
				'$timeout',
				'$filter',
				function($log, $location, $rootScope, $timeout, $filter) {

					return {

						selectMenu : function(idMenu, objMenu) {

							objMenu = idMenu;
						},

						isMenuSelected : function(idMenu, objMenu) {
							if (idMenu === objMenu) {
								return true;
							} else {
								return false;
							}
						},

						formatTs2Date : function(timestamp) {
							return $filter('date')(timestamp, 'dd/MM/yyyy');
						},

						formatDate2Ts : function(date) {
							if (date != '') {
								var from = date.split('/');
								return new Date(from[2], from[1] - 1, from[0]);
							}
							return date;
						},

						formatTs2HHmm : function(timestamp) {
							var date = new Date(timestamp);
							var h = date.getHours();
							if (h < 10) {
								h = '0' + date.getHours();
							}
							var m = date.getMinutes()
							if (m < 10) {
								m = '0' + date.getMinutes();
							}
							return h + ':' + m;
						},
						
						formatHHmm2Ts : function(hhmm) {
							var from = hhmm.split(':');
							var h = parseInt(from[0]);
							var m = parseInt(from[1]);
							return new Date(1970,1,1,h,m);
						},

						random : function() {
							return Math.random() * (1000000 - 1) + 1;
						},

						refreshImgSrc : function(imgSrcUrl) {
							return imgSrcUrl + "?cb=" + Math.random()
									* (1000000 - 1) + 1;
						},

						removeObjectById : function(arr, idObj) {
							for ( var i in arr) {
								if (arr[i].id === idObj) {
									arr.splice(i, 1);
								}
							}
						}
					};

				} ])

.directive("frenchDateValidator", function() {
	return {
		require : 'ngModel',
		restrict : 'A',
		link : function(scope, element, attrs, ngModel) {
			ngModel.$validators.frenchDate = function(value) {
				return !value || /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.test(value);
			};
		}
	};
})

.directive('fileModel', [ '$parse', function($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var getter = $parse(attrs.fileModel);
			var setter = getter.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					setter(scope, element[0].files[0]);
				});
			});
		}
	};
} ]);
