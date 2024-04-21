<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Web extends CI_Controller {
    public function index(){
        header("Cache-Control: max-age=86400");
        $tab = isset($_GET["tab"]);
        $data = array(
            "facebook_pixel" => true,
            "zendesk_chat" => true
        );
        $this->load->view('web',$data);
    }
}