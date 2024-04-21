(function(){

    var app = angular.module('carousel',[]);

    app.directive('carousel', ['$interval', function ($interval) {
        return {
            restrict: 'E',
            scope: {
                producto: '='
            },
            template: '<div class="carousel"></div>',
            link: function (scope, element, attrs) {
                var carousel = $(element).children('.carousel').first();
                scope.producto.imagen.forEach(function(imagen, index, array) {
                    if(imagen*1 > 0){
                        var a = $('<a>').addClass('carousel-item').attr('href','#');
                        var img = $('<img>').attr('src','http://www.lucymodas.com/catalogo/'+ scope.producto.id_categoria + '/' + scope.producto.codigo + '_' + (index+1) + '_400.jpg');
                        a.append(img);
                        carousel.append(a);
                    }
                });
                carousel.carousel();
            }
        };
    }]);

})();