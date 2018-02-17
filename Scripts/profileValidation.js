function verifyEditFields() {
  hideAllEditFields();

  var error = false;
  var first_name = document.getElementById("user_first").value;
  var last_name = document.getElementById("user_last").value;

  var email = document.getElementById("user_email").value;
  var email_conf = document.getElementById("user_email_conf").value;

  var old_password = document.getElementById("user_old_pass").value;
  var password = document.getElementById("user_new_pass").value;
  var password_conf = document.getElementById("user_new_pass_conf").value;

  var location = document.getElementById("input_city").value;
  var year = document.getElementById("input_year").value;

  if(hasNumber(first_name)){
    inputNotValid("firstname_error", "first name");
    error = true;
  }
  else if(first_name == "") {
    inputEmpty("firstname_error");
    error = true;
  }

  if(hasNumber(last_name)){
    inputNotValid("lastname_error", "last name");
    error = true;
  }
  else if(first_name == "") {
    inputEmpty("lastname_error");
    error = true;
  }
  
  if(!email.includes("@") || !email.includes(".")) {
  	inputNotValid("email_error", "email");
    error = true;
  }
  else if(email == "") {
  	inputEmpty("email_error");
    error = true;
  }
  else if(email != email_conf) {
  	confDifferent("email_conf_error", "email");
  	error = true;
  }
  
  if(old_password == ""){
    inputEmpty("old_password_error");
    error = true;
  }
  else if(password != password_conf) {
  	confDifferent("new_password_conf_error", "password");
  	error = true;
  }
  
  if(hasNumber(location)){
    inputNotValid("location_error", "location");
    error = true;
  }
  else if(location == ""){
  	inputEmpty("location_error");
  	error = true;
  }

  if(!isNumber(year) || parseInt(year) > 2018 || parseInt(year) < 1900 ) {
  	inputNotValid("year_error", "year");
  	error = true;
  }

  return !error;
}

function verifyRequestFields(){
  hideAllRequestFields() 
  var error = false;
  var describe = document.getElementById("symptoms_input").value;
  if(describe == "") {
  	inputNotValid("describe_error", "description");
  	error = true;
  }
  
  var time = document.getElementById("input_date").value;
  if(time == "") {
  	inputNotValid("time_error", "time");
  	error = true;
  }

  return !error;
}

function hideAllRequestFields() {
  document.getElementById("describe_error").innerHTML = "";
  document.getElementById("time_error").innerHTML = "";	
}

function hideAllEditFields(){
  document.getElementById("firstname_error").innerHTML = "";
  document.getElementById("lastname_error").innerHTML = "";

  document.getElementById("email_error").innerHTML = "";
  document.getElementById("email_conf_error").innerHTML = "";

  document.getElementById("old_password_error").innerHTML = "";
  document.getElementById("new_password_conf_error").innerHTML = "";

  document.getElementById("location_error").innerHTML = "";
  document.getElementById("year_error").innerHTML = "";
}

function inputNotValid(error_span, value) {
  	document.getElementById(error_span).innerHTML = "Please Input a valid " + value + ".<br/>";
}

function inputEmpty(error_span){
  	document.getElementById(error_span).innerHTML = "Please Input a value.<br/>";
}

function confDifferent(error_span, value) {
  	document.getElementById(error_span).innerHTML = "Please Input a same " + value + ".<br/>";
}

function hasNumber(string) {
  return /\d/.test(string);
}

function isNumber(string) {
  return /^\d+$/.test(string);
}
