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
    	
    	formatDate : function(date ){
    		return $filter('date')(date, 'dd/MM/yyyy');
    	}
    };

} ]);
