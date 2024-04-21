(function(){

    var app = angular.module('testimonios',[]);

    var api = 'api/';

    app.directive('testimonios', ['$interval','$http', function ($interval,$http) {
        return {
            restrict: 'E',
            templateUrl: 'html/barra-testimonios.html',
            controller: function(){
                testimonios = this;
                testimonios.data = {};
                
                $interval(function(){
                    $http.get(api + 'testimonio').success(function(data){
                        testimonios.data = data;
                    });
                },5000);
                
            },
            controllerAs: 'testimonios'
        };
    }]);

})();