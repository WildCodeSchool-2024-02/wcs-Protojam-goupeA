<?php

namespace App\Controller;

use App\Model\CelebrityManager;
use Symfony\Component\HttpClient\HttpClient;

class CelebrityController extends AbstractAPIController
{
    /**
     * List items
     */
    public function index(): string
    {
        $celebrityManager = new CelebrityManager();
        $celebrities = $celebrityManager->selectAll();

        return json_encode(['celebrities' => $celebrities]);
    }

    public function show(int $id): string
    {
        $celebrityManager = new CelebrityManager();
        $celebrity = $celebrityManager->selectOneById($id);

        return json_encode(['celebrity' => $celebrity]);
    }

    public function edit(int $id)
    {
        $celebrityManager = new CelebrityManager();
        $celebrity = $celebrityManager->selectOneById($id);

        $client = HttpClient::create();
        $response = $client->request(
            'GET',
            'https://echappee-celebrement-fantasque.netlify.app/'
        );

        $content = $response->getContent();
        $content = $response->toArray();

        if (!empty($content)) {
            // clean $_POST data
            $celebrity = array_map('trim', $content);

            // TODO validations (length, format...)

            // if validation is ok, update and redirection
            if ($celebrityManager->update($celebrity)) {
                header('Location: https://echappee-celebrement-fantasque.netlify.app/sejour');
            };
            // we are redirecting so we don't want any content rendered
            return null;
        }
        return json_encode(['celebrity' => $celebrity]);
    }
}
