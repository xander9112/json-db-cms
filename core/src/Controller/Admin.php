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

    /**
     * @Route("/admin/testpage")
     */
    public function testpage()
    {
        return $this->render('index.twig', array(
            'name' => 'Главная'
        ));
    }
}
