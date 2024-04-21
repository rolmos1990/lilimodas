<html ng-app="app">
    <head><meta http-equiv="Content-Type" content="text/html; charset=utf8">
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
        <title>LiliCardenasModas - Administración</title>
        <link rel="stylesheet" href="css/admin/estilo.css">
        <link rel="stylesheet" href="css/ngDialog.css">
        <link rel="stylesheet" href="css/ngDialog-theme-default.css">
        <link rel="stylesheet" href="css/jquery-ui.min.css">
        <link rel="stylesheet" href="css/angular-date-picker-polyfill-basic.css">
        
        <script type="text/javascript" src="js/lib/jquery-1.11.3.min.js"></script>
        <script type="text/javascript" src="js/lib/jquery-ui.min.js"></script>
        <script type="text/javascript" src="js/lib/angular.min.js"></script>
        <script type="text/javascript" src="js/lib/angular-route.min.js"></script>
        <script type="text/javascript" src="js/lib/ng-file-upload-all.min.js"></script>
        <script type="text/javascript" src="js/lib/ngDialog.js"></script>
        <script type="text/javascript" src="js/lib/sortable.js"></script>
        <script type="text/javascript" src="js/lib/modernizr-latest.js"></script>
        <script type="text/javascript" src="js/lib/moment.js"></script>
        <script type="text/javascript" src="js/lib/angular-date-picker-polyfill.min.js"></script>
        <script type="text/javascript" src="js/lib/line-chart.js"></script>
        <script type="text/javascript" src="js/lib/d3.js"></script>
        <script type="text/javascript" src="js/admin/helpers.js"></script>
        <script type="text/javascript" src="js/admin/filtros.js"></script>
        <script type="text/javascript" src="js/admin/app.js?20191118"></script>
        
    </head>
    <body ng-controller="adminController as app">
        <header>
            <div id="logo">
                <img src="img/admin/logo.png">
            </div><!--
            --><div id="secciones" ng-hide="app.rutaActiva('login')">
                <nav>
                    <span ng-click="app.ir('categorias')" ng-class="{'activo': app.rutaActiva('categoria') || app.rutaActiva('producto') }">Productos</span>
                    <span ng-click="app.ir('rotativo-principal')" ng-class="{'activo': app.rutaActiva('rotativo-principal')}">Rotativo</span>
                    <!--<span ng-click="app.ir('rotativo-secundario')" ng-class="{'activo': app.rutaActiva('rotativo-secundario')}">Rotativo Secundario</span>-->
                    <!-- <span ng-click="app.ir('novedades')" ng-class="{'activo': app.rutaActiva('novedades')}">Novedades</span> -->
                    <span ng-click="app.ir('comentarios')" ng-class="{'activo': app.rutaActiva('comentarios')}">Comentarios</span>
                    <!-- <span ng-click="app.ir('movil')" ng-class="{'activo': app.rutaActiva('movil')}">Móvil</span> -->
                    <span ng-click="app.ir('login')">Salir</span>
                </nav>
            </div>
        </header>
        <main ng-view></main>
    <footer>
        
    </footer>
    </body>
</html>
