
app.controller('Classify',function($scope,$http){
	//个护美妆
	$scope.arr = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr = a.ListContents[0].GroupInfo;
		$scope.title1 = a.ListContents[0].PinYin;
		console.log($scope.arr)
		
	})
	
	//餐厨日用
	$scope.arr2 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr2 = a.ListContents[1].GroupInfo;
		$scope.title2 = a.ListContents[1].PinYin;
//		console.log($scope.arr)
		
	})
	
	//食品保健
	$scope.arr3 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr3 = a.ListContents[2].GroupInfo;
		$scope.title3 = a.ListContents[2].PinYin;
//		console.log($scope.arr)
		
	})
	
	//服装配饰
	$scope.arr4 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr4 = a.ListContents[3].GroupInfo;
		$scope.title4 = a.ListContents[3].PinYin;
//		console.log($scope.arr)
		
	})
			
	//布艺家纺
	$scope.arr5 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr5 = a.ListContents[4].GroupInfo;
		$scope.title5 = a.ListContents[4].PinYin;
//		console.log($scope.arr)
		
	})
	
	//家电数码
	$scope.arr6 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr6 = a.ListContents[5].GroupInfo;
		$scope.title6 = a.ListContents[5].PinYin;
//		console.log($scope.arr)
		
	})
	
	//母婴呵护
	$scope.arr7 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr7 = a.ListContents[6].GroupInfo;
		$scope.title7 = a.ListContents[6].PinYin;
//		console.log($scope.arr)
		
	})
	
	//更多分类
	$scope.arr8 = [];
	$http.get('http://127.0.0.1:3002/Calssify').success(function(a){		
		$scope.arr8 = a.ListContents[7].GroupInfo;
		$scope.title8 = a.ListContents[7].PinYin;
//		console.log($scope.arr)
		
	})
	
	
})
