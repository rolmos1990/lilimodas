(function(){

    var app = angular.module('preloader',[]);

    app.directive('preloader', ['$http', function ($http) {
        return {
            restrict: 'E',
            templateUrl: 'html/preloader.html',
            link: function (scope, element, attrs) {
                element.addClass('preloader-container');
                scope.isLoading = function () {
                    console.log($http.pendingRequests);
                    return $http.pendingRequests.length > 0;
                };
                scope.$watch(scope.isLoading, function (value) {
                    if (value) {
                        element.removeClass('ng-hide');
                    } else {
                        element.addClass('ng-hide');
                    }
                });
            }
        };
    }]);

})();