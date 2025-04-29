<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'], // Permet toutes les méthodes HTTP (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => ['http://localhost:3000'], // Ton app React tourne sur ce port normalement

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Autorise tous les headers

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Mets sur true si tu utilises des cookies ou authentification
];