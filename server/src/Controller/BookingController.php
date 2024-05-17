<?php

namespace App\Controller;

use App\Model\BookingManager;
use App\Model\CelebrityManager;
use Symfony\Component\HttpClient\HttpClient;

class BookingController extends AbstractAPIController
{
    public function insert(int $id): string
    {
        $celebrityManager = new CelebrityManager();
        $celebrity = $celebrityManager->selectOneById($id);

        $bookingManager = new BookingManager();
        $dates = $bookingManager->selectBooked($id);

        $client = HttpClient::create();
        $response = $client->request(
            'GET',
            'https://echappee-celebrement-fantasque.netlify.app'
        );

        $content = $response->getContent();
        $content = $response->toArray();

        if (!empty($content)) {
            $userId = $_SESSION['user_id'];
            $dateStart = $content['start_date'];
            $dateEnd = $content['end_date'];
            $celebrity = trim($content['celebrity_id']);


            $bookingManager->insert($dateStart, $dateEnd, $celebrity, $userId);
            $bookingManager->insertService($bookingManager->insert($dateStart, $dateEnd, $celebrity, $userId));
            header('Location: /show?id=' . $id);
        }
        return json_encode(['celebrity' => $celebrity, 'dates' => $dates,]);
    }

    public function booking(): string
    {
        $bookingManager = new BookingManager();
        $bookings = $bookingManager->getAllReservation();

        return json_encode(['bookings' => $bookings]);
    }
}
