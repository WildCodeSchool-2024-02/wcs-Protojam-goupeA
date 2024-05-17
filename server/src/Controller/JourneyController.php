<?php

namespace App\Controller;

use App\Model\JourneyManager;
use Symfony\Component\HttpClient\HttpClient;

class JourneyController extends AbstractAPIController
{
    public function index(): string
    {
        $journeyManager = new JourneyManager();
        $journeys = $journeyManager->selectAll();

        return json_encode(['journeys' => $journeys]);
    }

    public function show(int $id): string
    {
        $journeyManager = new JourneyManager();
        $journey = $journeyManager->selectOneById($id);

        return json_encode(['journey' => $journey]);
    }

    public function showJourneyCelebrities(int $id): string
    {
        $journeyManager = new JourneyManager();
        $journey = $journeyManager->getJourneyByCelebrities($id);

        return json_encode(['journey' => $journey]);
    }

    public function edit(int $id)
    {
        $journeyManager = new JourneyManager();
        $journey = $journeyManager->selectOneById($id);

        $client = HttpClient::create();
        $response = $client->request(
            'GET',
            'https://echappee-celebrement-fantasque.netlify.app/'
        );

        $content = $response->getContent();
        $content = $response->toArray();

        if (!empty($content)) {
            // clean $_POST data
            $journey = array_map('trim', $content);

            // TODO validations (length, format...)

            // if validation is ok, update and redirection
            if ($journeyManager->update($journey)) {
                header('Location: /journey');
            };
            // we are redirecting so we don't want any content rendered
            return null;
        }
        return json_encode(['journey' => $journey]);
    }
}
