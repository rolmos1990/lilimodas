(function(){

    var app = angular.module('app',['ngRoute','preloader','rotativos','testimonios','zoom','api']);
    var apiUrl = 'api/';

    /*Rutas*/
    app.config(function($routeProvider){
        $routeProvider.
            when('/',{templateUrl:'html/inicio.html',controller:'inicioCtrl',controllerAs:'inicio'}).
            when('/testimonios',{templateUrl:'html/testimonios.html',controller:'testimoniosCtrl',controllerAs:'testimonios'}).
            when('/como-comprar',{templateUrl:'html/como-comprar.html'}).
            when('/club-martina',{templateUrl:'html/club-martina.html',controller:'clubCtrl',controllerAs:'club'}).
            when('/:categoria',{templateUrl:'html/categoria.html',controller:'categoriaCtrl',controllerAs:'categoria'}).
            when('/:categoria/:producto',{templateUrl:'html/producto.html',controller:'productoCtrl',controllerAs:'producto'}).
            otherwise({redirectTo:'/'});
    });

    app.controller('appCtrl', ['$http', '$location', '$scope', 'api', function($http, $location, $scope, api){
        var app = this;

        app.whatsapp = '91160461046';

        app.menu = {
            categorias: [],
            visible: false,
            cargar: function(){
                $http.get(apiUrl + 'categorias').success(function(data){
                    var c = [];
                    data.forEach(categoria => {
                        categoria.nombre_url = categoria.nombre.toLowerCase().replace(/[\W_]+/g,"-");
                        c.push(categoria);
                    });
                    app.menu.categorias = c;
                    $scope.$broadcast('categoriasCargadas');
                });
            },
            buscarCategoriaPorId: function(id){
                var categoria = this.categorias.find(cat => cat.id === id);
                return categoria;
            }
        };

        app.promociones = {
            email: '',
            registrar: function(){
                api.request({
                    url: 'promociones',
                    method: 'post',
                    data: {email: app.promociones.email},
                    success: function(){
                        M.toast({html: 'Su email ha sido registrado con éxito'});
                        app.promociones.email = '';
                    }
                });
            }
        }

        app.rutaActual = function(){
            return $location.path();
        };

        app.ultimaVista = '';

        app.menu.cargar();
    }]);

    app.controller('categoriaCtrl', ['$http', '$routeParams', '$location', '$scope', '$timeout', '$anchorScroll', function($http, $routeParams, $location, $scope, $timeout, $anchorScroll){
        var categoria = this;
        categoria.nombre_url = $routeParams.categoria;
        categoria.id = 0;
        categoria.productos = [];

        categoria.cargar = function(){
            var c = $scope.$parent.app.menu.categorias.find(cat => cat.nombre_url === categoria.nombre_url);
            if(c !== undefined){
                categoria.id = c.id;
                $http.get(apiUrl + 'productos/' + c.id).success(function(data){
                    categoria.productos = data;
                    if($scope.$parent.app.ultimaVista !== ''){
                        $timeout(function(){
                            var goTo = document.getElementById($scope.$parent.app.ultimaVista);
                            window.scrollTo(0,goTo.offsetTop - 170);
                            $scope.$parent.app.ultimaVista = '';
                        },100);
                    }
                });
            }
        };

        categoria.abrirProducto = function(codigo){
            var ruta = categoria.nombre_url + '/' + codigo;
            $location.path(ruta);
        };

        $scope.$on('categoriasCargadas',function(){
            categoria.cargar();
        });
        
        categoria.cargar();

    }]);

    app.controller('productoCtrl', ['$http', '$routeParams', '$scope', '$location', function($http, $routeParams, $scope, $location){
        var producto = this;
        producto.nombreUrlCategoria = $routeParams.categoria;
        producto.codigo = $routeParams.producto;
        producto.categoria = {};
        producto.data = {};
        producto.imagen = 0;
        producto.cargandoDisponibilidad = false;
        producto.gusta = false;

        producto.cargar = function(){
            var mayor = producto.nombreCategoria == 'mayor' ? 1 : 0;
            producto.categoria = $scope.$parent.app.menu.categorias.find(cat => cat.nombre_url === producto.nombreUrlCategoria);
            console.log(producto.categoria);
            $http.get(apiUrl + 'producto/' + producto.codigo + '/' + mayor).success(function(data){
                producto.data = data;
                producto.data.imagen = [0,0,0];
                var img = parseInt(data.imagenes);
                if(img >= 4){
                    producto.data.imagen[2] = 1;
                    img = img - 4;
                    producto.imagen = 3;
                }
                if(img >= 2){
                    producto.data.imagen[1] = 1;
                    img = img - 2;
                    producto.imagen = 2;
                }
                if(img >= 1){
                    producto.data.imagen[0] = 1;
                    producto.imagen = 1;
                }

                producto.cargarDisponibilidad();
            });
        };

        producto.cargarDisponibilidad = function(){
            var id = producto.codigo;
            producto.data.disponibilidad = [];
            producto.cargandoDisponibilidad = true;
            $http.get(apiUrl + 'disponibilidad/' + producto.codigo).success(function(data){
                producto.cargandoDisponibilidad = false;
                producto.data.disponibilidad = data;
            }).error(function(status,data){
                producto.data.disponibilidad = null;
            });
        };

        producto.gustar = function(gusta){
            producto.gusta = gusta;
        };

        producto.regresar = function(){
            $scope.$parent.app.ultimaVista = producto.codigo;
            $location.path(producto.nombreUrlCategoria);
        }
        
        producto.cargar();

    }]);

    app.controller('inicioCtrl', ['$http', '$scope', '$location', function($http, $scope, $location){
        var inicio = this;
        inicio.categorias = [];
        inicio.rotativos = [];

        inicio.cargar = function(){
            inicio.categorias = $scope.$parent.app.menu.categorias;
            $http.get(apiUrl + 'rotativos').success(function(data){
                inicio.rotativos = data;
            });
        };

        inicio.abrirCategoria = function(categoria){
            $location.path(categoria);
        };

        $scope.$on('categoriasCargadas',function(){
            inicio.cargar();
        });
        
        inicio.cargar();
    }]);
    
    app.controller('testimoniosCtrl', ['$http','api', function($http,api){
        var testimonios = this;
        testimonios.lista = [
            [],[],[]
        ];
        testimonios.nuevo = {
            nombre: '',
            experiencia: 5,
            comentario: ''
        };

        testimonios.cargar = function(){
            $http.get(apiUrl + 'testimonios').success(function(data){
                data.forEach(function(t,i){
                    var c = i % 3;
                    testimonios.lista[c].push(t);
                });
            });
        };

        testimonios.estrellas = function(exp){
            var e = [];
            for(var i = 0; i < exp; i++){
                e.push(i);
            }
            return e;
        };

        testimonios.enviar = function(){
            api.request({
                url: 'testimonios',
                method: 'post',
                data: testimonios.nuevo,
                success: function(){
                    M.toast({html: 'Su testimonio ha sido enviado con éxito'});
                    testimonios.nuevo = {
                        nombre: '',
                        experiencia: 5,
                        comentario: ''
                    };
                }
            });
            
        };
        
        testimonios.cargar();
    }]);

    app.controller('clubCtrl', ['$http', function($http){
        var club = this;
        club.codigo = '';
        club.miembro = null;

        club.consultar = function(){
            $http.get(apiUrl + 'club/' + club.codigo).success(function(data){
                club.miembro = data;
            });
        };
        
    }]);

})();
