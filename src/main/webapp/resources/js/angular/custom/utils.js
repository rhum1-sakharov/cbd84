angular.module('cbdUtilsModule', [])
.factory('cbdUtils', [ '$log', '$location', '$rootScope', '$timeout', '$filter', function($log, $location, $rootScope, $timeout,$filter) {

  

    return {
    	
    	selectMenu : function(idMenu, objMenu) {

    		objMenu= idMenu;
    	},

    	isMenuSelected : function(idMenu, objMenu) {
    		if (idMenu === objMenu) {
    			return true;
    		} else {
    			return false;
    		}
    	},
    	
    	formatTs2Date : function(timestamp ){
    		return $filter('date')(timestamp, 'dd/MM/yyyy');
    	},
    	
    	formatDate2Ts : function(date ){
    		if(date != ''){
    			var from = date.split('/');
    			return new Date(from[2], from[1] - 1, from[0]);	
    		}
    		return date;
    	}
    };

} ]);
