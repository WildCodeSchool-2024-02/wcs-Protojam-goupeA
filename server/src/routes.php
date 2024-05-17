<?php

// list of accessible routes of your application, add every new route here
// key : route to match
// values : 1. controller name
//          2. method name
//          3. (optional) array of query string keys to send as parameter to the method
// e.g route '/item/edit?id=1' will execute $itemController->edit(1)
return [
    '' => ['HomeController', 'index',],
    'journey' => ['JourneyController', 'index',],
    'journey/edit' => ['JourneyController', 'edit', ['id']],
    'journey/show' => ['JourneyController', 'show', ['id']],
    'journey/show/book' => ['BookingController', 'insert', ['id']],
    'bookings' => ['BookingController', 'booking',],
    'register' => ['UserController', 'register',],
    'login' => ['UserController', 'login',],
    'logout' => ['UserController', 'logout',],
    'contact' => ['ContactController', 'add'],
    'user/delete' => ['UserController' , 'delete', ['id']],
    'celebrity' => ['CelebrityController', 'index',],
    'celebrity/show' => ['CelebrityController', 'show', ['id']],
    'contact/show' => ['ContactController', 'show'],
    'users' => ['UserController' , 'users'],
];
