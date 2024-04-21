<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Api extends CI_Controller {
    function __construct(){
        header('Access-Control-Allow-Origin: *');
        parent::__construct();
    }
    public function index(){
        echo "MartinaModas API";
    }
    public function categorias(){
        $this->load->model('m_site');
        $categorias=$this->m_site->get_categorias();
        echo json_encode($categorias);
    }
    public function productos($id_categoria){
        $this->load->model('m_site');
        $productos=$this->m_site->get_productos($id_categoria);
        echo json_encode($productos,JSON_NUMERIC_CHECK);
    }
    public function productos_mayor($id_categoria){
        $this->load->model('m_site');
        $productos=$this->m_site->get_productos_mayor($id_categoria);
        echo json_encode($productos,JSON_NUMERIC_CHECK);
    }
    public function producto($codigo){
        $this->load->model('m_site');
        $producto = $this->m_site->get_producto($codigo);
        echo json_encode($producto,JSON_NUMERIC_CHECK);
    }
    public function producto_mayor($codigo){
        $this->load->model('m_site');
        $producto = $this->m_site->get_producto_mayor($codigo);
        echo json_encode($producto,JSON_NUMERIC_CHECK);
    }
    public function rotativos(){
        $this->load->model('m_site');
        echo json_encode($this->m_site->get_slider());
    }
    public function juego(){
        $semilla = intval(date('Ymd'));
        mt_srand($semilla);
        $numero = mt_rand(0,999);
        echo str_pad($numero, 3, '0', STR_PAD_LEFT);
    }
    public function registrar_pago(){
        $this->load->model('m_site');
        
        $e=false;

        $nombre=trim($this->input->post('nombre'));
        if($nombre==''){
            $e=true;
            $error['nombre']='El nombre no puede estar en blanco';
        }

        $telefono=trim($this->input->post('telefono'));
        if($this->input->post('telefono')==''){
            $e=true;
            $error['telefono']='El telefono no puede estar en blanco';
        }else if(!is_numeric($this->input->post('telefono'))){
            $e=true;
            $error['telefono']='El telefono debe estar conformado solo por números';
        }else if(strlen($this->input->post('telefono'))<7){
            $e=true;
            $error['telefono']='El telefono debe estar conformado siete números';
        }

        $email=trim($this->input->post('email'));
        if($email==''){
            $e=true;
            $error['email']='El correo electrónico no puede estar en blanco';
        }else if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
            $e=true;
            $error['email']='Debe ingresar un correo electrónico válido';
        }

        $forma=$this->input->post('forma');

        if($forma=='Transferencia Bancaria'){
            $origen=$this->input->post('origen');
        }else{
            $origen="";
        }

        if($origen=='seleccionar'){
            $e=true;
            $error['origen']='Debe seleccionar un banco';
        }

        $banco=$this->input->post('banco');

        if($banco=='seleccionar'){
            $e=true;
            $error['banco']='Debe seleccionar un banco';
        }

        $numero=trim($this->input->post('numero'));


        $monto=trim($this->input->post('monto'));

        if($monto==''){
            $e=true;
            $error['monto']='El monto no puede estar en blanco';
        }

        $this->load->model('m_pago');

        if($e){
            http_response_code(400);
            echo json_encode($error);
        }else{
            if($this->m_pago->registrar_pago($nombre,$telefono,$email,$forma,$origen,$banco,$numero,$monto)>0){
                http_response_code(204);
            }else{
                http_response_code(500);
            }
        }
    }
    public function disponibilidad($id=""){
        if($id!=""){
            $disponibilidad = [];
            $this->load->model('m_site');
            $disponibilidad = $this->group_by('talla',$this->m_site->disponibilidad($id));
            echo json_encode($disponibilidad);
        }
    }
    public function testimonio(){
        date_default_timezone_set('America/Caracas');
        $this->load->model('m_site');
        echo json_encode($this->m_site->get_comentario());
    }
    public function testimonios(){
        $this->load->model('m_site');
        if($this->input->post('comentario')){
            $nombre = $this->input->post('nombre');
            $experiencia = $this->input->post('experiencia');
            $comentario = $this->input->post('comentario');
            
            $r = $this->m_site->guardar_comentario($nombre,$comentario,$experiencia,false);
            if($r){
                http_response_code(204);
            }else{
                http_response_code(400);
            }
        }else{
            $testimonios = $this->m_site->get_comentarios();
            echo json_encode($testimonios);
        }
    }
    public function promociones(){
        $this->load->model('m_site');
        if($this->input->post('email')){
            $email = trim($this->input->post('email'));
            if(filter_var($email,FILTER_VALIDATE_EMAIL)){
                try {
                    $this->m_site->registrar_email($email);
                    http_response_code(204);
                } catch (\Throwable $th) {
                    http_response_code(500);
                }
            }else{
                http_response_code(400);
            }
        }
    }
    public function club($codigo){
        if($codigo){
            $c = [];
            $url='http://lucymodas.ddns.net/martina/api/ext/club/' . $codigo;
            $c = file_get_contents($url);
            if($c != '0'){
                echo $c;
            }else{
                http_response_code(404);
            }
            
        }else{
            http_response_code(401);
        }
    }
    public function premios(){
        $this->load->model('m_site');
        $premios = $this->m_site->get_premios();
        echo json_encode($premios,JSON_NUMERIC_CHECK);
    }
    private function group_by($key, $data) {
        $result = array();
    
        foreach($data as $val) {
            if(array_key_exists($key, $val)){
                $result[$val[$key]][] = $val;
            }else{
                $result[""][] = $val;
            }
        }
    
        return $result;
    }
    //obtener incrementos pendientes
    public function checkIncreases(){
        
        $this->load->model('m_site');
        header('Content-Type: application/json; charset=utf-8');
        $increases = $this->m_site->getPendingSyncReferencesIncrements();
        echo json_encode($increases);
        die();

    }
    //marcar incrementos como sincronizados
    public function markDoneIncreases($id){
        $this->load->model('m_site');
        header('Content-Type: application/json; charset=utf-8');
        $this->m_site->updatePendingSyncReferencesIncrements($id);
        echo json_encode(array('success' => true, 'id' => $id));
        die();
    }
}