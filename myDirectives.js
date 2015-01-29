var app = angular.module('pending', []);

app.directive('pendingDir', function(){
	return {
		restrict: 'A',
		scope: {
			request: '&',
		},
		link: function() {

		}
	}

};