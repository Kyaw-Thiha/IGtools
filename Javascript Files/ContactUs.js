"use strict";
/**/
function validate(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var reason = document.querySelector('input[name="reason"]:checked');
	var detail = document.getElementById("detail").value;
	var nameError = document.getElementById("nameError");
	var emailError = document.getElementById("emailError");
	var reasonError = document.getElementById("reasonError");
	var detailError = document.getElementById("detailError");
	var correct = true;
	var alphabetRegex = /^[a-zA-Z]+$/;
	var alphanumericRegex = /\W/g;
	var emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
	nameError.innerHTML = "";
	emailError.innerHTML = "";
	reasonError.innerHTML = "";
	detailError.innerHTML = "";
	
	if (name.trim() != ""){
		if (name.length > 100){
			correct = false;
			nameError.innerHTML = "Your name is too long. Only maximum of 100 characters are allowed";
		} else if (alphabetRegex.test(name) == false){
			correct = false;
			nameError.innerHTML = "Please enter only letters and spaces.";
		} else {
			name = name.replace(alphanumericRegex," ");
		}
	} else {
		name = "Not entered";
	}
	
	if (email.trim() != ""){
		if (email.length > 100){
			correct = false;
			emailError.innerHTML = "Your email is too long. Only maximum of 100 characters are allowed";
		} else if (emailRegex.test(email) ==  false){
			correct = false;
			emailError.innerHTML = "Please make sure your email is in correct format";
		} 
	} else {
		email = "Not entered";
	}

	if (reason === null){
		correct = false;
		reasonError.innerHTML = "Please choose your reason of contacting with us.";
	} else {
		reason = reason.value;
	}

	if (detail.trim() == ""){
		correct = false;
		detailError.innerHTML = "Please write some details regarding why you are contacting with us."; 
	} else if(detail.length > 6000){
		correct = false; 
		detailError.innerHTML = "Your message is too long. It must be less than 6000 characters.";
	} else {
		detail = detail.replace(alphanumericRegex," ");
	}
	
	if (correct){
		var dataString = "nameNew=" + name + "&emailNew=" + email + "&reasonNew=" + reason + "&detailNew=" + detail;
		sendAjax(dataString);
	}
}

function thankYou(){
	var contactUs = document.getElementsByClassName("ContactUs")[0];
	var thankYou = document.getElementsByClassName("ThankYou")[0];
	
	contactUs.style.display = "none";
	thankYou.style.display = "block";
}

function sendAjax(dataSend){
	console.log(dataSend);
	$.ajax({
		type: "POST",
		url: "process.php",
		data: dataSend,
		cache: false,
		success: thankYou()
	});
}