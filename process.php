<?php
$name = $_POST["nameNew"];
$email= $_POST["emailNew"];
$reason = $_POST["reasonNew"];
$detail = $_POST["detailNew"];
$filename;

if($reason == "Complain"){
	$filename = "Text Files/complaints.txt";
} else if($reason == "Question"){
	$filename = "Text Files/questions.txt";
} else if($reason == "Suggestion"){
	$filename = "Text Files/suggestions.txt";
} else if($reason == "Compliment"){
	$filename = "Text Files/compliments.txt";
} else {
	$filename = "Text Files/others.txt";
}

$data = "\nName: " . $name . "\nEmail: " . $email . "\nDetails: " . $detail . "\n";

file_put_contents($filename,$data,FILE_APPEND);
?>