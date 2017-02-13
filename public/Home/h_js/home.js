app.controller("homeController",function($scope,$http){
	$scope.homeBtn = function(){
		console.log("搜索！");
	}
	
	//获取数据
		$scope.arr1=[];
		$scope.arr2=[];
		$scope.arr3=[];
		$scope.arr4=[];
		$scope.arr5=[];
		$scope.arr6=[];
		$scope.arr7=[];
		$http({
			url:"http://127.0.0.1:3002/list",
			method:"get",
			data:"",
			
		}).success(function(data){
		    $scope.arr1=data.goodsInfo[1098];
			console.log(data.goodsInfo[1098]);
//			var arr1 = $scope.arr1.concat(data.goodsInfo[1099],data.goodsInfo[1100],data.goodsInfo[1101],data.goodsInfo[1102],data.goodsInfo[1103],data.goodsInfo[1124]);
//			$scope.arr1 = arr1
//			console.log($scope.arr1);
			$scope.arr2=data.goodsInfo[1099];
			console.log(data.goodsInfo[1099]);
			$scope.arr3=data.goodsInfo[1100];
			console.log(data.goodsInfo[1100]);
			$scope.arr4=data.goodsInfo[1101];
			console.log(data.goodsInfo[1101]);
			$scope.arr5=data.goodsInfo[1102];
			console.log(data.goodsInfo[1102]);
			$scope.arr6=data.goodsInfo[1103];
			console.log(data.goodsInfo[1103]);
			$scope.arr7=data.goodsInfo[1124];
			console.log(data.goodsInfo[1124]);
			
		})
		
});
