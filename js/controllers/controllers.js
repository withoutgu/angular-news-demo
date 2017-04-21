;
(function(){
    var controllers = angular.module('controllers',[]);
    controllers.controller('indexCtrl',['$scope','$window',function($scope,$window){
        $scope.item = 0;
//        console.log($window.innerHeight)
		//根据窗口高度改变wcontent组件的高度
        $scope.contentHeight = $window.innerHeight - 106;
//        console.log($contentHeight)
        $scope.active = function(n){
            $scope.item = n;
        }
    }]);
    //详情页控制器
    controllers.controller('detailCtrl',['$scope','$http','$location','$state',function($scope,$http,$location,$state){
//      $scope.title = '';
        console.log($location.search().title);
        //根据title返回对应的新闻
        $scope.detailTitle =  encodeURI($location.search().title);
        console.log($scope.detailTitle);
        $http({
        	url:'http://route.showapi.com/109-35?title='+$scope.detailTitle,
        	method:"GET",
        	params:{
        		showapi_appid : 36176,
				showapi_sign : '63ebc481852a4a48b59b058238eeb818',
				needContent : 1
//				title : $scope.detailTitle
        	}
        }).then(function(data){
        	console.log(data);
        	$scope.newData = data.data.showapi_res_body.pagebean.contentlist[0];
        	$scope.detailImg = $scope.newData.imageurls[0].url;
        	console.log($scope.newData.allList[1].url)
        })
        
        //默认隐藏预览图片组件
		$scope.isShowGallery = false;
		$scope.showGallery = function(){
			$scope.isShowGallery = true;
		}
    }]);
    //推荐栏目
    controllers.controller('recommendCtrl',['$scope','$http',function($scope,$http){
		$scope.channelName = '体育';
		$scope.isShow = true;
    }]);
    //娱乐栏目
    controllers.controller('entertainCtrl',['$scope','$http',function($scope,$http){
        $scope.channelName = '娱乐';
        $scope.isShow = false;
    }]);
    //社会栏目
    controllers.controller('societyCtrl',['$scope','$http',function($scope,$http){
        $scope.channelName = '社会';
        $scope.isShow = true;
        $scope.imgurl = 'images/logo.png';
    }]);
    //军事栏目
    controllers.controller('militaryCtrl',['$scope','$http',function($scope,$http){
        $scope.channelName = '军事';
        $scope.isShow = false;
    }]);
    //搜索框控制器
    controllers.controller('wsearch',['$scope',function($scope){
    	//搜索框
		$scope.isShowSearchBar = false;
		$scope.showSearchBar = function(){
			$scope.isShowSearchBar = true;
			$scope.searchName = "";
		}
		
		//清空搜索框
		$scope.searchClear = function(){
			//$scope.isShowSearchBar = false;
			$scope.searchName = "";
		}
    }]);
    //新闻内容控制器
    controllers.controller('wcontent',['$scope','$http',function($scope,$http){
    	$scope.page = 1;
		$scope.news = [];
		//控制loading
		$scope.isLoading = false;
		$scope.loadMore = function(){
			//点击的时候出现加载中
			$scope.isLoading = true;
			$http({
				url:'http://route.showapi.com/109-35',
				method:'GET',
				params:{
					showapi_appid : 36176,
					showapi_sign : '63ebc481852a4a48b59b058238eeb818',
					maxResult : 20,
					page : $scope.page,
					channelName:$scope.channelName
				}
			}).then(function(data){
				$scope.isLoading = false;
				$scope.page++;
				$scope.news = $scope.news.concat(data.data.showapi_res_body.pagebean.contentlist);
				console.log(data.data.showapi_res_body.pagebean.currentPage);
			})
		}
		$scope.loadMore();
    }]);
    //轮播图控制器
    controllers.controller('wswiper',['$scope','$http',function($scope,$http){
//  	$scope.imgurl = 'images/timg.jpg';
    	$scope.newsimg = [];
    	$http({
				url:'http://route.showapi.com/109-35',
				method:'GET',
				params:{
					showapi_appid : 36176,
					showapi_sign : '63ebc481852a4a48b59b058238eeb818',
					maxResult : 4,
					channelName:$scope.channelName
				}
			}).then(function(data){
				$scope.newsimg = $scope.newsimg.concat(data.data.showapi_res_body.pagebean.contentlist);
				console.log($scope.newsimg[2].title)
				$scope.imgurl1 = $scope.newsimg[0].imageurls[0].url;
				$scope.imgurl2 = $scope.newsimg[1].imageurls[0].url;
				$scope.imgurl3 = $scope.newsimg[2].imageurls[0].url;
				$scope.imgurl4 = $scope.newsimg[3].imageurls[0].url;
				$scope.imgTitle1 = $scope.newsimg[0].title;
				$scope.imgTitle2 = $scope.newsimg[1].title;
				$scope.imgTitle3 = $scope.newsimg[2].title;
				$scope.imgTitle4 = $scope.newsimg[3].title;
			})
    }])
})();