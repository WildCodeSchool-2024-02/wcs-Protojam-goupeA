<?php

namespace App\Model;

use PDO;

class ContactManager extends AbstractManager
{
    public const TABLE = 'contact';

    public function insert(array $datacontact)
    {
        $statement = $this->pdo->prepare("INSERT INTO " . static::TABLE .  "
        (lastname, firstname, email, message) VALUES (:lastname, :firstname, :email, :message)");
        $statement->bindValue('lastname', $datacontact['lastname'], PDO::PARAM_STR);
        $statement->bindValue('firstname', $datacontact['firstname'], PDO::PARAM_STR);
        $statement->bindValue('email', $datacontact['email'], PDO::PARAM_STR);
        $statement->bindValue('message', $datacontact['message'], PDO::PARAM_STR);
        $statement->execute();

        return (int)$this->pdo->lastInsertId();
    }

    public function contactMessage()
    {
        $query = "SELECT * FROM " . static::TABLE;

        return $this->pdo->query($query)->fetchAll();
    }
}
