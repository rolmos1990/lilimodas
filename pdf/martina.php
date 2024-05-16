<?php
$id_categoria = $_GET['categoria'];
$json = file_get_contents('http://martinamodas.com/api/productos/' . $id_categoria);
$productos = json_decode($json);
?>
<html>
	<head>
		<meta charset="UTF-8">
		<!-- Compiled and minified CSS -->
		<link rel="stylesheet" href="../css/style.css">

		<!-- Compiled and minified JavaScript -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

		<style>
		body{
			width: 780px;
			margin: auto;
		}
		.card-image{
			position: relative;
		}
		.mini {
			position: absolute;
			left: 0;
			bottom: 58px;
		}
		.mini img{
			width: 150px;
		}
		@media print {
			.row{
				page-break-before: always;
			}
		}
		.col{
			margin: 2px 0;
		}
		</style>
				
	</head>
	<body>
		<div class="row">
		<?php foreach($productos as $i => $p){ ?>
			
			
			<!-- <div class="col s4 offset-s<?=($i % 2) + 1;?>"> -->
			<div class="col s6">
				<div class="card producto-lista-pdf-nuevo">
					<div class="card-image">
						<img src="../catalogo/<?=$p->id_categoria;?>/<?=$p->codigo;?>_1_238.jpg">
						<div class="marca-agua"><?=$p->codigo;?></div>
						<div class="mini">
							<img src="../catalogo/<?=$p->id_categoria;?>/<?=$p->codigo;?>_2_67.jpg">
						</div>
						<?php if($p->promocion){ ?>
							<div class="estrella">
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABF1BMVEUAAADflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgDflgBDc353AAAAXHRSTlMAAQIDBgcICQoMDQ4REhQVFhcZGh0eIyYnKjAyMzU2Nzg/RUZLT1dYWVtdYWJjeHmAgoyOkZKUlZeam52eoKKlpqiqrbq8vsDFx8jV19na3N7g4uTm6e3v8ff7/RHvmV8AAAFYSURBVBgZxcFpQwFRGAXgc4eQklatSjtJtO/aaVfazfn/vyONMSnvretLPQ/+zUA/WrO1iZYEySBasUim0QL1Qr4omEuwKgFzF6w6h7E+OnphapWOFRgK0NUGMym6kjCinuh6UjAxRs8oTBTpKcBADxt0Q8sXisbiM5lc/p4N7vK5zEw81hXywTO5kN0uPPJXD4Xt7MIkgEiZxsqdqApc0tBFGxzWIY0cWHCpZRrIKXxK8VdJfJGw+SN7At8MvPIHr/1o0lGi1m0HBP4iNQp+iKxdinYs6OQpyEPvhIITaKkKBRUFnShFUehMUzQFnXWK1qDzTNEzNMLUaIdsnJ632dk3euKQZVm3EQACm6xbguyGNVcxOGJXrLmGyE9HZU7BpeYrdPghGeKHvRAahPb5YRCSDMnSML4ZLpFchOSMdtpCEytt8xQCi0dhiMLHtNAsMgKtkQj+zjuAoBmQ4MP9ZgAAAABJRU5ErkJggg==" />
							</div>
						<?php } ?>

						<div class="card-description">
							<div class="row">
								<div class="col s5 codigo">
									<img src="./codigo.png" alt="">
									<b><?=$p->codigo;?></b>
								</div>
								<div class="col s7 talla">
									<img src="./talla.png" alt="">
									<?php
									/* if($p->talla_unica*1){
										echo '<h4>TALLE UNICO</h4>';
									} */

									$tallas = explode(" ",$p->tallas);
									foreach($tallas as $t){ ?>
										<span><?=$t;?></span>
									<?php } ?>
								</div>
								<div class="col s5 precio">
									<img src="./precio.png" alt="">
									<b><?=number_format($p->precio_descuento,2,',','.');?></b>
								</div>
								<div class="col s7 material">
									<img src="./material.png" alt="">
									<span><?=$p->tela;?></span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<?php 
			if($i % 4 == 3){
				echo '<div style="page-break-after: always;"></div>';
			}
			?>
		<?php } ?>
		</div>
	</body>
</html>
<script>
/*window.print();
window.onfocus=function(){ window.close();};*/
</script>
