<?php
/* (c) Anton Medvedev <anton@elfet.ru>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Silicone;

use Silicone\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class Controller
{
	/**
	 * @var Application
	 */
	protected $app;

	/**
	 * @var Request
	 */
	protected $request;

	public function __construct(Application $app)
	{
		$this->app = $app;
		$this->request = $app['request'];
		/*echo "<pre>";
		var_dump($this->request->attributes);
		echo "</pre>";
		die;*/
	}

	/**
	 * Render to response twig views.
	 *
	 * @param          $view
	 * @param array    $parameters
	 * @param Response $response
	 *
	 * @return Response
	 */
	protected function render($view, array $parameters = array(), Response $response = null)
	{
		return $this->app->render($view, $parameters, $response);
	}
}
