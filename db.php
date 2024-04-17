<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "banking";

// $dbHost = "localhost";
// $dbUser = "bluerid3_bluerid3";
// $dbPass = "nmesoma5050";
// $dbName = "meshipst_online_banking";
// N1Pza&WP[uHN


$conn = mysqli_connect($dbHost, $dbUser, $dbPass, $dbName);

if (!$conn) {
     die("Database not connected");
}
