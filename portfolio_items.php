<?php

	ini_set('display_errors', '1');
	ini_set('display_startup_errors', '1');
	error_reporting(E_ALL);	

	require('../dbinfo/dbcred_portfolio.php');
	require('database_handler.php');

	$db = new DatabaseHandler();

	// read
	// if GET
	if($_SERVER['REQUEST_METHOD'] === 'GET'){
		$items = $db->getAllItems();
		foreach ($items as $key => $value) {
			$id = $value["project_id"];
			$links = $db->getLinksForItem($id);
			$items[$key]["links"] = $links;
		}
		$response = json_encode($items);
		header("Access-Control-Allow-Origin: *");
		header('Content-Type: application/json');
		echo $response;
	}

	// update
	// if POST

	// create
	// if PUT

	// destroy
	// if DELETE

?>