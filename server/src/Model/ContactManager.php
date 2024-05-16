<?php

namespace App\Model;

use PDO;

class ContactManager extends AbstractManager
{
    public const TABLE = 'contact';

    public function insert(array $datacontact)
    {
        $statement = $this->pdo->prepare("INSERT INTO " . static::TABLE .  "
        (firstname, lastname, email, message) VALUES (:firstname, :lastname, :email, :message)");
        $statement->bindValue('firstname', $datacontact['firstname'], PDO::PARAM_STR);
        $statement->bindValue('lastname', $datacontact['lastname'], PDO::PARAM_STR);
        $statement->bindValue('email', $datacontact['email'], PDO::PARAM_STR);
        $statement->bindValue('message', $datacontact['message'], PDO::PARAM_STR);
        $statement->execute();

        return (int)$this->pdo->lastInsertId();
    }

    public function lastContactMessage()
    {
        $query = "SELECT * FROM " . static::TABLE . " ORDER BY id DESC LIMIT 1 ";

        return $this->pdo->query($query)->fetch();
    }
}
