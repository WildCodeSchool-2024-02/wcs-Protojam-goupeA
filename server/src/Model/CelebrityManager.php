<?php

namespace App\Model;

use PDO;

class CelebrityManager extends AbstractManager
{
    public const TABLE = 'celebrity';

    /**
     * Insert new item in database
     */
    public function insert(array $celebrity): int
    {
        $statement = $this->pdo->prepare("INSERT INTO " . self::TABLE . " (`name`) VALUES (:name)");
        $statement->bindValue('name', $celebrity['name'], PDO::PARAM_STR);

        $statement->execute();
        return (int)$this->pdo->lastInsertId();
    }

    /**
     * Update item in database
     */
    public function update($celebrity): bool
    {
        $statement = $this->pdo->prepare("UPDATE " . self::TABLE . " SET `name` = :name WHERE id=:id");
        $statement->bindValue('id', $celebrity['id'], PDO::PARAM_INT);
        $statement->bindValue('name', $celebrity['name'], PDO::PARAM_STR);

        return $statement->execute();
    }
}
