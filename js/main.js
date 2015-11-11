(function () {
	var app = angular.modue('verifier', []);
	app.controller('verifierController', ['$http', function($http){
		var quoteVerifier = this;
		quoteVerifier.resultsBack = false;
		quoteVerifier.message = "";
		quoteVerifier.authenticity = "";

		quoteVerifier.showResults = function (data) {
			var cleanedData = JSON.parse(data);
			// TODO: Occupy display with data
			quoteVerifier.resultsBack = true;
		};
		quoteVerifier.checkQuote = function (author, quote) {
			$http.get('ourURL/api?author=' + author + '?quote=' + quote).success(function (data) {
				quoteVerifier.showResults(data);
			});
		};
	}]);
})(); // Preserve global scope with iife