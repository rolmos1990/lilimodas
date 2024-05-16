(function(){

    var app = angular.module('rotativos',[]);

    app.directive('rotativos', ['$interval', function ($interval) {
        return {
            restrict: 'E',
            scope: {
                items: '='
            },
            link: function (scope, element, attrs) {
                var slider = $('<div>').addClass('rotativos');
                var scale = '';
                if(window.innerWidth <= 1200){
                    scale = 'scale/1200_';
                }
                if(window.innerWidth <= 992){
                    scale = 'scale/992_';
                }
                if(window.innerWidth <= 600){
                    scale = 'scale/600_';
                }

                scope.items.forEach(r => {
                    slider.append('<a class="rotativo" href="#/' + r.enlace + '"><img src="https://martinamodas.com/catalogo/slider/' + scale + r.nombre + '"></a>');
                });
                
                $(element).append(slider);

                var i = 0;
                var j = 0;
                $interval(function(){
                    if(slider.children('.rotativo').length > 1){
                        var alto = slider.children('.rotativo').eq(0).height();

                        if(i<slider.children('.rotativo').length-1){
                            j = i + 1;
                        }else{
                            j = 0;
                        }
                        var actual = slider.children('.rotativo').eq(j);
                        var siguiente = slider.children('.rotativo').eq(i);

                        actual.css('margin-top',(alto * -1));
                        actual.show();
                        actual.animate({'margin-top': 0},1000);
                        siguiente.animate({'margin-top': alto},1000);

                        i = j;
                    }
                },7000);
                
            }
        };
    }]);

})();
