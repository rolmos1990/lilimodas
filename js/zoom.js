(function(){

    var app = angular.module('zoom',[]);

    app.directive('drift', [function () {
        return {
            restrict: 'A',
            scope: {
                
            },
            link: function (scope, element, attrs) {
                var container = document.getElementById('zoom-container');
                console.log(container);
                new Drift(document.getElementById('zoom-img'), {
                    inlinePane: true
                });
            }
        };
    }]);

})();