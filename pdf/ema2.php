<?php
$id_categoria = $_GET['categoria'];
$json = file_get_contents('http://www.emamodas.com/api/productos/' . $id_categoria);
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
			width: 670px;
			margin: auto;
		}
		.card-image{
			position: relative;
		}
		.mini {
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.mini img{
			width: 150px;
		}
		@media print {
			.row{
				padding-top: 20px;
				page-break-after: always;
			}
		}
		</style>
				
	</head>
	<body>
		<?php foreach($productos as $i => $p){ ?>
			<?php 
			if(($i % 4) >= 2){
				$border = "top";
			}else{
				$border = "bottom";
			}
			if($i % 4 == 0){
				echo '<div class="row">';
			}
			?>
			
			<!-- <div class="col s4 offset-s<?=($i % 2) + 1;?>"> -->
			<div class="col s6" style="padding-<?=$border;?>: 0px;">
				<div class="card producto-lista-pdf">
					<div class="card-image">
						<img src="//emamodas.com/catalogo/<?=$p->id_categoria;?>/<?=$p->codigo;?>_1_238.jpg?<?=strtotime("now");?>">
						<div class="marca-agua"><?=$p->codigo;?></div>
						<div class="mini">
							<img src="//emamodas.com/catalogo/<?=$p->id_categoria;?>/<?=$p->codigo;?>_2_67.jpg?<?=strtotime("now");?>">
						</div>
					</div>
					<div class="card-content">
						<span class="card-title codigo">
							<label><?=$p->tipo;?></label>
							<b><?=$p->codigo;?></b>
						</span>
						<!-- <div class="precio">
							<cite>$ <?=number_format($p->precio,2,',','.');?></cite>
							<b>$ <?=number_format($p->precio_descuento,2,',','.');?></b>
						</div> -->
						<div class="material"><?=$p->tela;?></div>
						<div class="tallas">
							<?php
							if($p->talla_unica*1){
								echo '<div class="material">TALLE UNICO, Sirve Para:</div>';
							}else{
								echo '<div class="material">&nbsp;</div>';
							}
							$tallas = explode(" ",$p->tallas);
							foreach($tallas as $t){
								echo '<div class="chip">' . $t . '</div>';
							}
							?>
						</div>
					</div>
				</div>
			</div>
		<?php 
			if($i % 4 == 3){
				echo '</div>';
			}
		}
		?>
	</body>
</html>
<script>
/*window.print();
window.onfocus=function(){ window.close();};*/
</script>