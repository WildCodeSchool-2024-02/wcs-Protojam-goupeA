<?php

namespace App\Model;

use PDO;

class JourneyManager extends AbstractManager
{
    public const TABLE = 'journey';

    /**
     * Insert new item in database
     */
    public function insert(array $journey): int
    {
        $statement = $this->pdo->prepare("INSERT INTO " . self::TABLE . " (`name`) VALUES (:name)");
        $statement->bindValue('name', $journey['name'], PDO::PARAM_STR);

        $statement->execute();
        return (int)$this->pdo->lastInsertId();
    }

    /**
     * Update item in database
     */
    public function update($journey): bool
    {
        $statement = $this->pdo->prepare("UPDATE " . self::TABLE . " SET `name` = :name WHERE id=:id");
        $statement->bindValue('id', $journey['id'], PDO::PARAM_INT);
        $statement->bindValue('name', $journey['name'], PDO::PARAM_STR);

        return $statement->execute();
    }

    public function getJourneyByCelebrities(int $id)
    {
        $query = "SELECT journey.id, journey.name, celebrity.id, celebrity.name FROM celebrity
         LEFT JOIN " . self::TABLE . " ON celebrity.journey_id = journey.id WHERE journey.id = :id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue(':id', $id);
        $statement->execute();
        return $statement->fetchAll();
    }
}
