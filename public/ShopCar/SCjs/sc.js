app.controller("shopcar",function($scope,$http){
    console.log(111)
	$http({
    url:'http://127.0.0.1:3002/list1',
    method: 'get',            
    data: ''      
    	})
    .success(function(data1){     
    console.log(data1.goodsInfo[1098])  
        $scope.arr = data1.goodsInfo[1098]
        })
    .error(function(err){
        console.log("error");
    });
});