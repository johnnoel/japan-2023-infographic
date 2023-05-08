<?php

$fh = fopen(__DIR__ . '/photos.csv', 'r');
$json = [];

while (!feof($fh)) {
    [ $date, $photos ] = fgetcsv($fh, 1024);
    if ($date === null) {
        continue;
    }

    $json[] = [ 'date' => $date, 'photos' => intval($photos) ];
}

echo json_encode($json);