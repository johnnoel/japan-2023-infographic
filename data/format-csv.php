<?php

$fh = fopen(__DIR__ . '/photo-sizes.csv', 'r');
$json = [];

while (!feof($fh)) {
    [ $date, $size ] = fgetcsv($fh, 1024);
    if ($date === null) {
        continue;
    }

    $json[] = [ 'date' => $date, 'size' => intval(str_replace(',', '', $size)) ];
}

echo json_encode($json);