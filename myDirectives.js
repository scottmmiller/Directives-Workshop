var app = angular.module('directiveWorkshop', []);

app.directive('pendingDir', function(){
	return {
		restrict: 'AE',
		scope: {
			request: '&',
		},
		link: function(scope, elem, attrs) {
			console.log(scope, elem, attrs)
		}
	}

});