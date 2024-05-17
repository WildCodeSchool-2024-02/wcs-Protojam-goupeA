<?php

namespace App\Model;

use PDO;

class BookingManager extends AbstractManager
{
    public const TABLE = 'booking';

    public function selectBooked(int $id): array
    {
        $query = "SELECT DATE(start_date) AS start_date, DATE(end_date) AS end_date FROM " . static::TABLE . "
        WHERE isBooked = 1 AND journey_id = :journey_id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':journey_id', $id, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll();
    }

    public function insert($startDate, $endDate, $celebrity, $userId): string
    {
        $query = "INSERT INTO " . static::TABLE . " (start_date, end_date, celebrity_id, user_id, isBooked) VALUES
        (:start_date, :end_date, :celebrity_id, :user_id, 1)";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':user_id', $userId);
        $statement->bindValue(':celebrity_id', $celebrity, PDO::PARAM_INT);
        $statement->bindValue(':start_date', $startDate);
        $statement->bindValue(':end_date', $endDate);
        $statement->execute();
        return $this->pdo->lastInsertId();
    }

    public function insertservice(string $id): string
    {
        $query = "INSERT INTO service (booking_id, option1, option2, option3, option4) 
                VALUES (:booking_id, 0, 0, 0, 0)";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':booking_id', $id, PDO::PARAM_INT);
        $statement->execute();
        return $this->pdo->lastInsertId();
    }

    public function getReservationById(int $id)
    {
        $query = "SELECT booking.id, u.firstname, u.lastname, celebrity.name,
        booking.start_date, booking.end_date,
        DATE_FORMAT(booking.start_date, '%d %M %Y') AS start,
        DATE_FORMAT(booking.end_date, '%d %M %Y') AS end FROM " . static::TABLE .
        " JOIN user AS u ON u.id = booking.user_id
        JOIN celebrity ON celebrity.id = booking.celebrity_id WHERE u.id = :id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':id', $id);
        $statement->execute();
        return $statement->fetchAll();
    }

    public function getAllReservation()
    {
        $query = "SELECT booking.id, u.firstname, u.lastname, c.name,
        DATE_FORMAT(booking.start_date, '%d %M %Y') AS start,
        DATE_FORMAT(booking.end_date, '%d %M %Y') AS end FROM " . static::TABLE .
        " JOIN user AS u ON u.id = booking.user_id
        JOIN celebrity AS c ON c.id = booking.celebrity_id";
        $statement = $this->pdo->prepare($query);
        $statement->execute();
        return $statement->fetchAll();
    }

    public function delete(int $id): void
    {
        $statement = $this->pdo->prepare("DELETE FROM " . static::TABLE . " WHERE id=:id");
        $statement->bindValue('id', $id, \PDO::PARAM_INT);
        $statement->execute();
    }

    public function getReservationByItsId(int $id)
    {
        $query = "SELECT * FROM " . static::TABLE . " WHERE id = :id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetch();
    }

    public function editReservation($startDate, $endDate, $id)
    {
        $query = "UPDATE " . static::TABLE . " SET start_date = :start_date, end_date = :end_date WHERE id = :id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':id', $id, PDO::PARAM_INT);
        $statement->bindValue(':start_date', $startDate);
        $statement->bindValue(':end_date', $endDate);
        $statement->execute();
    }
}
