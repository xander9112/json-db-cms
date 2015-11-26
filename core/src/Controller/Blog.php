<?php
namespace Controller;

use Silicone\Route;
use Silicone\Controller;

class Blog extends Controller
{
	/**
	 * @Route("/blog/{post}")
	 */
	public function post($post)
	{
		return $this->render('post.twig');
	}

	public function post41()
	{
		return $this->render('post41.twig');
	}
}
