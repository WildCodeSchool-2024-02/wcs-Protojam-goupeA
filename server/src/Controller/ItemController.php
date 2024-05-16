<?php

namespace App\Controller;

use App\Model\ItemManager;

class ItemController extends AbstractAPIController
{
    /**
     * List items
     */
    public function index(): string
    {
        $itemManager = new ItemManager();
        $items = $itemManager->selectAll('title');

        return json_encode(['items' => $items]);
    }

    public function show(int $id): string
    {
        $itemManager = new ItemManager();
        $item = $itemManager->selectOneById($id);

        return json_encode(['item' => $item]);
    }
}
