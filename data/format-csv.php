<?php

$fh = fopen(__DIR__ . '/exchange-rates.csv', 'r');
$json = [];

while (!feof($fh)) {
    [ $date, $er ] = fgetcsv($fh, 1024);
    if ($date === null) {
        continue;
    }

    $json[] = [ 'date' => $date, 'rate' => $er ];
}

echo json_encode($json);