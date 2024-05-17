<?php

namespace App\Controller;

use App\Model\ContactManager;
use Symfony\Component\HttpClient\HttpClient;

class ContactController extends AbstractAPIController
{
    public function add()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            // clean $_POST data
            $datacontact = array_map('trim', $_POST);
            $datacontact = array_map('htmlentities', $datacontact);
            // TODO validations (length, format...)

            // if validation is ok, insert and redirection
            $contactManager = new ContactManager();
            $contact = $contactManager->insert($datacontact);

            $client = HttpClient::create();
            $response = $client->request(
                'POST',
                'https://echappee-celebrement-fantasque.netlify.app/contact'
            );

            $content = $response->getContent();
            $content = $response->toArray();

            return json_encode(['contact' => $contact, 'content' => $content]);
        }
    }

    public function show()
    {
        $contactManager = new ContactManager();
        $contact = $contactManager->contactMessage();

        return json_encode(['contact' => $contact]);
    }
}
