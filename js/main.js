(function () {
	var app = angular.module('verifier', []);
	app.controller('verifierController', ['$http', function($http){
		var verifierCtrl = this;
		verifierCtrl.resultsBack = false;
		verifierCtrl.quote;
		verifierCtrl.author;
		verifierCtrl.message = "";
		verifierCtrl.authenticity = "";

		verifierCtrl.showResults = function (data) {
			var cleanedData = JSON.parse(data);
			if (cleanedData.error != true) {
				verifierCtrl.resultsBack = true;
				verifierCtrl.message = cleanedData.message;
				verifierCtrl.authenticity = cleanedData.authenticity;
			}
		};
		verifierCtrl.checkQuote = function (author, quote) {
			console.log("run");
			/*$http.get('ourURL/api?author=' + author + '?quote=' + quote).success(function (data) {
				verifierCtrl.showResults(data);
			});*/
			verifierCtrl.showResults(JSON.stringify({
				"error": "null",
				"authorName": "Douglas_Adams",
				"quote": "when you're a student or whatever,",
				"authenticity": "True",
				"message": "We found this quote listed on the Wikiquote page for the given author"
			}));
		};
	}]);
})(); // Preserve global scope with iife