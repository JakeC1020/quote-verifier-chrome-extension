var app = angular.module('verifier', [ ]);
app.controller('verifierController',  function($scope, $http){
	$scope.resultsBack = false;
	$scope.quoteObj = {};
	$scope.message = "";
	$scope.authenticity = "";

	$scope.showResults = function (data) {
		//var cleanedData = JSON.parse(data);
		if (data.error != 'true') {
			console.log("No Error");
			console.log(data);
			$scope.resultsBack = true;
			$scope.message = data.message;
			$scope.authenticity = data.authenticity;
			console.log($scope.message + " " + $scope.authenticity);
		}
		else {
			console.log("else");
		}
	};
	$scope.checkQuote = function (quoteObj) {
		var quote = quoteObj.quote;
		var author = quoteObj.author;
		console.log("run");
		console.log('https://quoteverifier.herokuapp.com/api?author=' + author + '&quote=' + quote);
		$http.get('https://quoteverifier.herokuapp.com/api?author=' + author + '&quote=' + quote).success(function (data) {
			$scope.showResults(data);
		}).error(function () {console.log("error catched");});
	};
});
