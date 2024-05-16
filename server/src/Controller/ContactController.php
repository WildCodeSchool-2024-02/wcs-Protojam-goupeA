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

            return json_encode($contact);
        }

        return $this->twig->render('Contact/contact.html.twig');
    }
    public function show()
    {
        $contactManager = new ContactManager();
        $contact = $contactManager->lastContactMessage();

        return json_encode(['contact' => $contact]);
    }
}
