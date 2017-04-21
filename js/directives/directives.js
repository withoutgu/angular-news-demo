;
(function(){
    var directives = angular.module('directives',[]);
    directives.directive('wheader',function(){
        return {
            templateUrl:'directive/wheader.html'
        }
    });
    directives.directive('wcontent',function(){
        return {
            templateUrl:'directive/wcontent.html',
            controller:'wcontent'
        }
    });
    directives.directive('wfooter',function(){
        return {
            templateUrl:'directive/wfooter.html'
        }
    });
    directives.directive('wswiper',function(){
    	return {
    		templateUrl:'directive/wswiper.html',
    		link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			},
			controller:'wswiper'
    	}
    });
    directives.directive('wlist',function(){
    	return {
    		templateUrl:'directive/wlist.html'
    	}
    });
    directives.directive('wdetail',function(){
    	return {
    		templateUrl:'directive/wdetail.html'
    	}
    });
    directives.directive('wsearch',function(){
    	return {
    		templateUrl:'directive/wsearch.html',
    		controller:'wsearch'
    	}
    });
    directives.directive('wloading',function(){
    	return {
    		templateUrl:'directive/wloading.html'
    	}
    });
    directives.directive('wlookimg',function(){
    	return {
    		templateUrl:'directive/wlookimg.html'
    	}
    })
})();