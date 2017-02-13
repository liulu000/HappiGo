app.controller('C_beauty',function($scope,$http){
	console.log(1)
	$scope.arr = [];
	$http.get('http://127.0.0.1:3002/C_beauty').success(function(c){
		$scope.arr = c.combine;
		console.log($scope.arr)
	})
})
