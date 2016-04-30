<?php
    //function handler() { echo 'Internal server error!'; }
    //set_exception_handler('handler');

    define('ROOT', $_SERVER['DOCUMENT_ROOT']);

    $link = new PDO('mysql:host=localhost;dbname=jpietras', 'root', '');
    $link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>