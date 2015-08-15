var app = angular.module('myDirectives', []);

app.directive('pendingDir', function($q){
	return {
		restrict: 'AE',
		scope: {
			request: '&',
		},
		link: function(scope, elem, attrs) {
			console.log(scope, elem, attrs)
			var spinnerIcon = angular.element('<i class="fa fa-spinner"></i>');  //'i' = icon;
			spinnerIcon.hide();
			elem.after(spinnerIcon);

			var invokeRequest = function() {
				var deferred = $q.defer();
				deferred.resolve(scope.request()); //scope.request is on line 7 above;

				return deferred.promise;
			}

			elem.on('click', function() {
				elem.hide();
				spinnerIcon.show();
				invokeRequest().then(function() {
					elem.show();
					spinnerIcon.hide();
				})

			})
		}
	}
});

app.directive('nofifyDir', function() {
   return {
      restrict: 'AE',
      scope: {
         title: '=',
			body: '=',
			icon: '='
      },
      link: function(scope, elem, attrs) {
         var Notification = window.Notification || window.mozNotification || window.webkitNotification;
      	Notification.requestPermission(function (permission) {
      				//console.log(permission);
      	});
			elem.click(function() {
				var notification = new Notification(scope.title, {
					body: scope.body,
					icon: scope.icon
				});
			});
      }
   }
});
