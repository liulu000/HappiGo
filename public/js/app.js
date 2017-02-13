var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{templateUrl:'Home/home.html',controller:'home'})
	.when('/shopcar',{templateUrl:'ShopCar/shopcar.html',controller:'shopcar'})
	.when('/mine',{templateUrl:'Mine/mine.html',controller:'mine'})		
}]);
app.controller('tab',function($scope){
	$routeProvider.when('/',{templateUrl:'Home/home.html',controller:'homeController'})
	.when('/market',{templateUrl:'html/market.html',controller:'market'})
	.when('/reservation',{templateUrl:'html/reservation.html',controller:'reservation'})
	.when('/shopcar',{templateUrl:'html/shopcar.html',controller:'shopcar'})
	.when('/mine',{templateUrl:'html/mine.html',controller:'mine'})		
	.otherwise({redirectTo:"/"});
}]);
app.controller('tab',function($scope){
	$scope.arr = [
	{
		cla:'footer-img1-1',
		href:'#/',
		title:'首页',
		index:0		
	},{
		cla:'footer-img2',
		href:'#/Classify',
		title:'分类',
		index:1
	},{
		cla:'footer-img4',
		href:'#/shopcar',
		title:'购物车',
		index:3
	},{
		cla:'footer-img5',
		href:'#/mine',
		title:'我的',
		index:4
	}
	];
	$scope.change = function (index) {
		href:'#/market',
		title:'分类',
		index:1
	},{
		cla:'footer-img3',
		href:'#/reservation',
		title:'购物车',
		index:2
	},{
		cla:'footer-img4',
		href:'#/shopcar',
		title:'我的',
		index:3
	}
	];
	$scope.click = function (index) {
		for (var i = 0; i < $scope.arr.length; i++) {
			$scope.arr[i].cla = 'footer-img' + (i+1)
		}
		$scope.arr[index].cla = $scope.arr[index].cla+ '-1';
	};
})