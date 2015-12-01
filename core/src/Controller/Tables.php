<?php
namespace Controller;

use Component\JsonDB;
use Symfony\Component\Yaml\Yaml;
use Silicone\Route;
use Silicone\Controller;
use Entity\JsonTable;
use Symfony\Component\HttpFoundation\Response;

class Tables extends Controller
{
    /**
     * @Route("/admin/tables")
     */

    public function tables()
    {

        if (0 === strpos($this->request->headers->get('Accept'), 'application/json')) {
            $scanned_directory = array_diff(scandir($this->app['jsonDBPath']), array('..', '.'));

            $tables = array();

            foreach ($scanned_directory as $table) {
                $tables[] = substr($table, 0, -5);
            }

            return new Response(json_encode($tables));
//            return json_encode($tables);
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
        $tableConfig = Yaml::parse(file_get_contents($this->YamlDir() . $table . '.yaml'));

        if (0 === strpos($this->request->headers->get('Accept'), 'application/json')) {


            $table = array(
                0 =>
                    array(
                        '_id' => '565d729e3801060ebe31dbe2',
                        'index' => 0,
                        'isActive' => false,
                        'picture' => 'http://placehold.it/32x32',
                        'age' => 24,
                        'eyeColor' => 'green',
                        'firstName' => 'Barbra',
                        'lastName' => 'Spears',
                        'company' => 'DATAGENE',
                        'email' => 'barbra.spears@datagene.us',
                        'phone' => '+7 (817) 598-2892',
                        'address' => '935 Lawrence Avenue, Groveville, American Samoa, 6034',
                        'about' => 'Ut magna id eiusmod dolore mollit laboris non ullamco cillum officia reprehenderit consectetur excepteur proident. Incididunt aliquip minim irure culpa incididunt quis officia duis aute amet dolore. Ut aliqua incididunt ea laboris veniam ea. Eiusmod anim exercitation pariatur ut ut ipsum est aliqua elit et amet quis.',
                        'registered' => 'Friday, June 6, 2014 10:02 PM',
                        'latitude' => '16.686268',
                        'longitude' => '-100.655304',
                    ),
                1 =>
                    array(
                        '_id' => '565d729f1c1f621d9c409f57',
                        'index' => 1,
                        'isActive' => true,
                        'picture' => 'http://placehold.it/32x32',
                        'age' => 26,
                        'eyeColor' => 'blue',
                        'firstName' => 'Aurora',
                        'lastName' => 'Henderson',
                        'company' => 'DIGINETIC',
                        'email' => 'aurora.henderson@diginetic.net',
                        'phone' => '+7 (876) 456-2834',
                        'address' => '218 Matthews Place, Blackgum, Utah, 8026',
                        'about' => 'Exercitation mollit eiusmod cillum exercitation exercitation dolore et eu aute. Eiusmod voluptate deserunt quis cillum duis elit. In enim ex dolor nulla velit laborum id exercitation aliqua irure irure laboris duis ex.',
                        'registered' => 'Friday, September 11, 2015 3:04 AM',
                        'latitude' => '-75.21896',
                        'longitude' => '-15.050445',
                    ),
                2 =>
                    array(
                        '_id' => '565d729f8cbfdbf248a6c3a6',
                        'index' => 2,
                        'isActive' => true,
                        'picture' => 'http://placehold.it/32x32',
                        'age' => 35,
                        'eyeColor' => 'brown',
                        'firstName' => 'Marylou',
                        'lastName' => 'Mcpherson',
                        'company' => 'POSHOME',
                        'email' => 'marylou.mcpherson@poshome.info',
                        'phone' => '+7 (987) 486-3328',
                        'address' => '193 Louis Place, Elliston, Virginia, 761',
                        'about' => 'Nulla aute pariatur ad laboris ut id magna tempor id pariatur ex. Pariatur est laboris veniam eu magna in qui aliquip exercitation consequat dolore anim et. Lorem Lorem qui qui consequat duis.',
                        'registered' => 'Tuesday, December 9, 2014 11:58 PM',
                        'latitude' => '-19.312187',
                        'longitude' => '-4.198874',
                    ),
                3 =>
                    array(
                        '_id' => '565d729f1411147be4910dcd',
                        'index' => 3,
                        'isActive' => true,
                        'picture' => 'http://placehold.it/32x32',
                        'age' => 38,
                        'eyeColor' => 'blue',
                        'firstName' => 'Harriett',
                        'lastName' => 'Odom',
                        'company' => 'KYAGORO',
                        'email' => 'harriett.odom@kyagoro.io',
                        'phone' => '+7 (924) 401-2698',
                        'address' => '127 Seabring Street, Fairhaven, Massachusetts, 3389',
                        'about' => 'Magna aliqua occaecat aute commodo duis. Anim sit amet labore exercitation non. Et id quis et velit. Nostrud elit commodo cupidatat dolore sint ullamco non. Ut duis ipsum est eu do. Eu consectetur cupidatat fugiat nisi eu enim eu proident dolor ipsum anim. Culpa laboris anim proident do dolore aliquip magna.',
                        'registered' => 'Friday, July 25, 2014 9:32 PM',
                        'latitude' => '-86.270859',
                        'longitude' => '-119.790806',
                    ),
                4 =>
                    array(
                        '_id' => '565d729f6ed300da6c64ccb5',
                        'index' => 4,
                        'isActive' => false,
                        'picture' => 'http://placehold.it/32x32',
                        'age' => 24,
                        'eyeColor' => 'blue',
                        'firstName' => 'Hilda',
                        'lastName' => 'Coleman',
                        'company' => 'ZIZZLE',
                        'email' => 'hilda.coleman@zizzle.com',
                        'phone' => '+7 (954) 435-2476',
                        'address' => '881 Bartlett Place, Dale, Puerto Rico, 6305',
                        'about' => 'Tempor tempor veniam consequat do irure qui velit. Sit nulla aute duis elit ipsum do proident occaecat eu pariatur consequat ex aliqua. Eu aliquip laborum magna amet consectetur exercitation consectetur nisi exercitation do dolor quis nulla tempor. Pariatur minim reprehenderit veniam et.',
                        'registered' => 'Sunday, May 24, 2015 1:59 AM',
                        'latitude' => '30.735341',
                        'longitude' => '-34.204931',
                    ),
            );
//        print Yaml::dump($tableConfig);
            $newTable = array();

            foreach ($table as $row) {
                $arr = array();
                foreach ($row as $key => $value) {
                    $arr[] = array(
                        'key' => $key,
                        'value' => $value,
                        'fieldType' => $tableConfig[$key],
                    );
                }

                $newTable[] = $arr;
            }

            /*echo "<pre>";
            var_dump(json_encode($newTable));
            echo "</pre>";*/
            return new Response(json_encode(array(
                'table' => $newTable,
                'config' => $tableConfig,
            )));
        }


        return $this->render('index.twig', array(
            'name' => $table
        ));
    }
}
