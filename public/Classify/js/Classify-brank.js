app.controller('Classify_brank',function($scope,$http){
	
	$scope.array = [];
	$http.get('http://127.0.0.1:3002/Classify-brank').success(function(b){
		$scope.array = b.ListContents[0].GroupInfo;
		$scope.letter1 = b.ListContents[0].PinYin
		console.log($scope.array)
	})
	
	
	$scope.array2 = [];
	$http.get('http://127.0.0.1:3002/Classify-brank').success(function(b){
		$scope.array2 = b.ListContents[1].GroupInfo;
		$scope.letter2 = b.ListContents[1].PinYin
		console.log($scope.array)
	})
	
	$scope.array3 = [];
	$http.get('http://127.0.0.1:3002/Classify-brank').success(function(b){
		$scope.array3 = b.ListContents[2].GroupInfo;
		$scope.letter3 = b.ListContents[2].PinYin
		console.log($scope.array)
	})
})
