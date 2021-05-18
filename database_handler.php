<?php

class DatabaseHandler {

	protected $db;
	
	function __construct()
	{
		$this->db = $this->dbConnect();
	}

	private function dbConnect() {

		try {
			$db = new PDO('mysql:host=localhost;dbname=n8blake', DB_USERNAME, DB_PASSWORD);
			$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $db;
		} catch (PDOException $e) {
			//echo $e->getMessage();
			return $e->getMessage();
		}

	}

	public function getAllItems(){

		$sql = "SELECT `project_id`, `name`, `description` FROM `portfolio_items` ";
		//$sql = "SELECT * FROM users";

		$result = $this->db->query($sql);
		$data = $result->fetchAll(PDO::FETCH_ASSOC);

		if ($data) {
			return $data;
		} 
		return false;
	}

	public function getLinksForItem($itemID){
		$sql = "SELECT `type`, `url`, `description` FROM `links` WHERE `portfolio_item_id`=" . $this->db->quote($itemID);

		$result = $this->db->query($sql);
		$data = $result->fetchAll(PDO::FETCH_ASSOC);

		if ($data) {
			return $data;
		} 
		return false;
	}

	public function emailUsed($email){
		$sql = "SELECT * FROM `users` WHERE `email` =". $this->db->quote($email);
		$result = $this->db->query($sql);
		$data = $result->fetch(PDO::FETCH_ASSOC);
		if($data){
			return count($data) > 0;
		}
		return false;
	}

	public function new($email, $password){
		$email = $this->db->quote($email);
		$h = password_hash($password, PASSWORD_DEFAULT);
		$hash = $this->db->quote($h);
		$sql = "INSERT INTO `users`(`email`, `hash`) VALUES (". $email . "," . $hash .")";

		try {
			return $this->db->query($sql);
		} catch (PDOException $e) {
			return $e->getMessage();
		}
	}

	// update password for email
	public function update($email, $password){
		$email = $this->db->quote($email);
		$h = password_hash($password, PASSWORD_DEFAULT);
		$hash = $this->db->quote($h);
		$sql = "UPDATE `users` SET `hash`=" . $hash . " WHERE `email`=" .$email;

		try {
			return $this->db->query($sql);
		} catch (PDOException $e) {
			return $e->getMessage();
		}
	}

	// delete account
	public function delete($email){
		$sql = "DELETE FROM `users` WHERE `email`=" . $this->db->quote($email);
		try {
			return $this->db->query($sql);
		} catch (PDOException $e) {
			return $e->getMessage();
		}
	}
}

?>