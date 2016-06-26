angular.module('app-front', [   'cbd.front.config','angular.filter'])
    .config(function($compileProvider){
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|app):/);
    })
;