var app = angular.module('verifier', [ ]);
app.controller('verifierController',  function($scope, $http){
	$scope.resultsBack = false;
	$scope.showLoading = false;
	$scope.quoteObj = {};
	$scope.message = "";
	$scope.authenticity = "";
	$scope.wikiUrl="";

	// Used for background coloring
	$scope.success = false;
	$scope.info = false;
	$scope.warning = false;
	$scope.danger = false;

	$scope.pickBackground = function (authenticity) {
		if (authenticity === "True") {
			$scope.success = true;
			$scope.info = $scope.warning = $scope.danger = false;
		}
		else if (authenticity === "Unable to be determined") {
			$scope.info = true;
			$scope.success = $scope.warning = $scope.danger = false;
		}
		else if (authenticity === "Most likely false") {
			$scope.warning = true;
			$scope.info = $scope.success = $scope.danger = false;
		}
		else {
			$scope.danger = true;
			$scope.info = $scope.warning = $scope.success = false;
		}
	};


	$scope.showResults = function (data) {
		//var cleanedData = JSON.parse(data);
		if (data.error !== 'true') {
			$scope.pickBackground(data.authenticity);
			$scope.message = data.message;
			$scope.authenticity = data.authenticity;
			$scope.resultsBack = true;
			$scope.wikiUrl = data.link;
			console.log($scope.wikiUrl);
		}
		else {
			console.log("else");
		}
	};
	$scope.checkQuote = function (quoteObj) {
		$scope.showLoading = true;
		var quote = quoteObj.quote;
		var author = quoteObj.author;
		console.log('https://quoteverifier.herokuapp.com/api?author=' + author + '&quote=' + quote);
		$http.get('https://quoteverifier.herokuapp.com/api?author=' + author + '&quote=' + quote).success(function (data) {
			$scope.showLoading = false;
			$scope.showResults(data);
		}).error(function () {console.log("error catched");});
	};
});
