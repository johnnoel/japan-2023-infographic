<?php

use GuzzleHttp\Client;

require __DIR__ . '/../vendor/autoload.php';

$http = new Client([
    'base_uri' => 'https://archive-api.open-meteo.com/v1/',
    'read_timeout' => 5,
    'connect_timeout' => 5,
    'timeout' => 5,
]);

$fh = fopen(__DIR__ . '/temperatures.csv', 'r');
while (!feof($fh)) {
    [ $date, $longitude, $latitude ] = fgetcsv($fh, 1024);
    $qs = http_build_query([
        'latitude' => $latitude,
        'longitude' => $longitude,
        'start_date' => $date,
        'end_date' => $date,
        'daily' => 'temperature_2m_max,temperature_2m_min',
        'timezone' => 'Asia/Tokyo',
    ]);
    $resp = $http->get('archive?' . $qs);
    $json = json_decode((string)$resp->getBody());

    fputcsv(STDOUT, [ $date, $longitude, $latitude, $json->daily->temperature_2m_max[0], $json->daily->temperature_2m_min[0] ]);

    sleep(1);
}
