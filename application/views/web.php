<!DOCTYPE html>
<html ng-app="app" lang="es">
    <head>
        <meta charset="UTF-8" />
        <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="css/style.css?20191028"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/drift-basic.css"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="css/fontello/css/fontello.css"  media="screen,projection"/>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/icon">
        <link rel="icon" href="/img/favicon.ico" type="image/icon">

        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-148983184-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-148983184-1');
        </script>

        <?php if($facebook_pixel){ ?>
        <!-- Facebook Pixel Code -->
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2992249707468247'); 
        fbq('track', 'PageView');
        </script>
        <noscript>
        <img height="1" width="1" 
        src="https://www.facebook.com/tr?id=2992249707468247&ev=PageView
        &noscript=1"/>
        </noscript>
        <!-- End Facebook Pixel Code -->
        <?php } ?>
        
        <?php if($zendesk_chat){ ?>
        <!-- Start of  Zendesk Widget script -->
        <!-- End of  Zendesk Widget script -->
        <?php } ?>
    </head>

    <body ng-controller="appCtrl as app" ng-click="app.menu.visible = false">
        <div class="navbar-fixed">
            <div class="topbar hide-on-small-only">
                <div class="container">
                    <div class="left">
                        <a href="#/" class="inicio"><i class="material-icons">home</i> Inicio</a>
                        <span><img src="img/bandera.png" /> Buenos Aires - Argentina</span>
                    </div>
                    <div class="right hide-on-med-and-down">
                        <a href="https://facebook.com/lilicardenasmodas" target="_blank"><img src="img/fb.png" />Lili Cardenas Modas</a>
                        <a href="https://instagram.com/lilicardenasmodasargentina" target="_blank"><img src="img/in.png" />LiliCardenasModasArgentina</a>
                        <a href="http://api.whatsapp.com/send?phone=541162545651" target="_blank"><img src="img/wa.png" />+541162545651</a>
                    </div>
                </div>
            </div>
            <div class="topbar hide-on-med-and-up">
                <div class="left">
                    <span><img src="img/bandera.png" /> Buenos Aires - Argentina</span>
                </div>
            </div>
            <nav ng-class="{'menu-visible': app.menu.visible}">
                <div class="container">
                    <div class="nav-wrapper">
                        <a data-target="mobile-menu" class="sidenav-trigger">
                            <i class="material-icons">menu</i> Menú
                        </a>

                        <a href="#/" class="brand-logo center">
                            <img src="img/logo_blanco2.png" alt="logo_blanco">
                        </a>

                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li>
                                <a href="" ng-click="$event.stopPropagation(); app.menu.visible = !app.menu.visible">
                                    <i class="material-icons">menu</i> Menú
                                </a>
                            </li>
                        </ul>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <a href="#/club-martina">
                                    <i class="material-icons">credit_card</i> Puntos
                                </a>
                            </li>
                            <li>
                                <a href="#/como-comprar">
                                    <i class="material-icons">help_outline</i> Cómo comprar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="menu oculto hide-on-med-and-down" ng-show="app.menu.visible">
                <div class="container">
                    <div class="menu-item" ng-repeat="c in app.menu.categorias track by $index" style="width: auto; padding: 5px 10px;">
                        <a href="#/{{ c.nombre_url }}" ng-class="{'active': app.rutaActual() == '/' + c.nombre_url}">
                            <img ng-src="http://martinamodas.com/catalogo/{{ c.id }}/config/icono.png">
                            <span>{{ c.nombre }}</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="menu tradicional hide-on-med-and-down" ng-hide="app.menu.visible">
                <div class="container">
                    <div class="menu-item" ng-repeat="c in app.menu.categorias track by $index" style="width: auto; padding: 5px 10px;">
                        <a href="#/{{ c.nombre_url }}" ng-class="{'active': app.rutaActual() == '/' + c.nombre_url}">
                            <span>{{ c.nombre }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <ul class="sidenav" id="mobile-menu">
            <li ng-repeat="c in app.menu.categorias">
                <a href="#/{{ c.nombre_url }}" class="waves-effect waves-light">
                    <img ng-src="http://martinamodas.com/catalogo/{{ c.id }}/config/icono.png">{{ c.nombre }}
                </a>
            </li>
            <li>
                <a href="#/como-comprar" class="waves-effect waves-light">
                    <i class="material-icons" style="margin: 0 12px; color: #fff;">help_outline</i> CÓMO COMPRAR
                </a>
            </li>
            <li>
                <a href="#/club-martina" class="waves-effect waves-light">
                    <i class="material-icons" style="margin: 0 12px; color: #fff;">credit_card</i> PUNTOS
                </a>
            </li>
        </ul>

        <div class="view" ng-view></div>

        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l4 m6 s12 redes">
                        <h5 class="white-text">Redes sociales</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="https://facebook.com/martinamodasarg" target="_blank"><img src="img/fb.png" />Lili Cardenas Modas</a></li>
                            <li><a class="grey-text text-lighten-3" href="https://instagram.com/martinamodasarg" target="_blank"><img src="img/in.png" />LiliCardenasModasArgentina</a></li>
                            <li><a class="grey-text text-lighten-3" href="http://api.whatsapp.com/send?phone=541162545651" target="_blank"><img src="img/wa.png" />541162545651</a></li>
                        </ul>
                    </div>
                    <div class="col l4 m6 s12 testimonios">
                        <h5 class="white-text">Dejá tu testimonio</h5>
                        <a class="waves-effect waves-light btn grey" href="#/testimonios"><i class="material-icons left">people</i> Testimonios</a>
                    </div>
                    <div class="col l4 s12 promociones">
                        <h5 class="white-text">Promociones</h5>
                        <form name="formPromociones">
                            <div class="row">
                                <div class="input-field col s10">
                                    <i class="material-icons prefix">mail</i>
                                    <input id="icon_prefix" type="email" ng-model="app.promociones.email" required="required" novalidate="novalidate">
                                    <label for="icon_prefix">E-mail</label>
                                </div>
                                <div class="col s2">
                                    <button type="button" class="btn btn-flat" ng-click="app.promociones.registrar()" ng-disabled="formPromociones.$invalid">
                                        <i class="material-icons">send</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                © 2024 Lili Cardenas Modas
                </div>
            </div>
        </footer>
        <testimonios class="hide-on-small-only"></testimonios>
        <div class="sticky left hide-on-small-only">
            <a class="waves-effect waves-light btn grey" href="#/testimonios"><i class="material-icons left">people</i> Testimonios</a>
        </div>
        <!--JavaScript at end of body for optimized loading-->
        <script type="text/javascript" src="js/lib/jquery.min.js"></script>
        <script type="text/javascript" src="js/lib/Drift.js"></script>
        <script type="text/javascript" src="js/lib/materialize.min.js"></script>
        <script type="text/javascript" src="js/lib/angular.min.js"></script>
        <script type="text/javascript" src="js/lib/angular-route.min.js"></script>
        <script type="text/javascript" src="js/preloader.js"></script>
        <script type="text/javascript" src="js/rotativos.js"></script>
        <script type="text/javascript" src="js/testimonios.js"></script>
        <script type="text/javascript" src="js/zoom.js"></script>
        <script type="text/javascript" src="js/api.js"></script>
        <script type="text/javascript" src="js/app.js?20200108"></script>

        <script>
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);

            $('.sidenav')
            .sidenav()
            .on('click tap', 'li a', () => {
                $('.sidenav').sidenav('close');
            });

        });
        </script>
    </body>
</html>
