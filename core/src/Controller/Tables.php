<?php
namespace Controller;

use Component\JsonDB;
use Symfony\Component\Yaml\Yaml;
use Silicone\Route;
use Silicone\Controller;
use Entity\JsonTable;

class Tables extends Controller
{
    /**
     * @Route("/admin/tables")
     */

    public function tables()
    {

        if (0 === strpos($this->request->headers->get('Accept'), 'application/json')) {
            var_dump('fasfsa');
        } else {
//        $jsonDB = new JsonDB($this->app['jsonDBPath']);

            /* $array = Yaml::parse(file_get_contents($this->YamlDir() . 'table.yaml'));

             print Yaml::dump($array);*/

            /*if ($this->request->isMethod('POST')) {

                return;
            }*/

            return $this->render('index.twig', array(
                'name' => 'Таблицы'
            ));
        }
    }

    /**
     * @Route("/admin/tables/{table}")
     */
    public function table($table)
    {
        var_dump($table);
        return $this->render('index.twig', array(
            'name' => $table
        ));
    }
}
