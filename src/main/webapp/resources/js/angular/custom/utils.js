angular.module('cbdUtilsModule', [])
.factory('cbdUtils', [ '$log', '$location', '$rootScope', '$timeout', function($log, $location, $rootScope, $timeout) {

  

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
    	}

    };

} ]);
