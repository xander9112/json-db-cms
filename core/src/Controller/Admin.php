<?php
namespace Controller;

use Silicone\Route;
use Silicone\Controller;

class Admin extends Controller
{
    /**
     * @Route("/admin")
     */
    public function index()
    {
        return $this->render('index.twig', array(
            'name' => 'Главная'
        ));
    }
}
