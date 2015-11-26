<?php
namespace Controller;

use Silicone\Route;
use Silicone\Controller;

class Tables extends Controller
{
	/**
	 * @Route("/tables", name="tables")
	 */

	public function tables()
	{

		/*if ($this->request->isMethod('POST')) {

			return;
		}*/

		return $this->render('index.twig', array(
			'name' => 'Таблицы'
		));
	}

	public function tablesGet()
	{
		if ($this->request->isMethod('GET')) {
			echo "Tables";
			return;
		}
	}
}
