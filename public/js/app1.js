var app = angular.module('myapp',['ngRoute']);
app.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/',{templateUrl:'Home/home.html',controller:'homeController'})
	.when('/Classify',{templateUrl:'Classify/Classify.html',controller:'Classify'})
	.when('/Classify_brank',{templateUrl:'Classify/Classify-brank.html',controller:'Classify_brank'})
	.when('/C_beauty',{templateUrl:'Classify/C_beauty.html',controller:'C_beauty'})
	
	
		
	.otherwise({redirectTo:"/"});
}]);
app.controller('tab',function($scope){
//	console.log(buyarr.length)
//	$scope.count = buyarr;
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