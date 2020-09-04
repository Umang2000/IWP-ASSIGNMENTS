function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validatePassword();
	result += valiadteGender();
	result += validateCB();
	result += validateList();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "Name should be at least three characters.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length < 6) 
		return "Password should be at least 6 characters.\n";
	
	if (password != retype) 
		return "Passwords do not match.\n";	
	return "";
}

function valiadteGender()
{
	var gender = document.getElementsByName("gender");
	if	((!gender[0].checked) && (!gender[1].checked))
		return "Please choose your Gender.\n";
	return "";
}

function validateCB(){
	var CB = document.getElementsByName("check")[0];
	if (!CB.checked)
		return "Please check the box for contribution.\n";
	return "";
}

function validateList(){
	if(document.form.movie.selectedIndex==0)
		return "Please select your favourite movie catagory\n";
	return "";
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Please accept the Terms of Service and Privacy Policy";	
	return "";
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}