<?php

namespace App\Controller;

use Symfony\Component\HttpClient\HttpClient;

class HomeController extends AbstractAPIController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $client = HttpClient::create();
        $response = $client->request(
            'GET',
            'https://echappee-celebrement-fantasque.netlify.app/'
        );

        return json_encode($response);
        // return $this->twig->render('Home/index.html.twig');
    }
}
