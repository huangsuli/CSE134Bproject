//boolean to pass for successful submission
var errors = false;

//regex vars
var nameRegex = '^[a-zA-Z-]+$';
var emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
//valid only if 1990 - 2018
var yearRegex = /^(19[0-9]\d|200\d|201[0-8])$/;

function gen_validate() {
    //input vars
    var user_first = document.getElementById('user_first');
    var user_last = document.getElementById('user_last');
    var user_email = document.getElementById('user_email');
    var user_email_conf = document.getElementById('user_pass_conf');
    var user_pass = document.getElementById('user_email');
    var user_pass_conf = document.getElementById('user_pass_conf');
    var input_city = document.getElementById('input_city');
    var states = document.getElementById('states');
    var bd_day = document.getElementById('bd_day');
    var bd_month = document.getElementById('bd_month');
    var bd_year = document.getElementById('input_year');
    var gender = document.getElementById('gender');

    //validity checks
    var validFirst = true;
    var validLast = true;
    var validCity = true
    var validYear = true;
    if (!user_first.value) {
        errors = true;
        validFirst = false;
        document.getElementById('fn').innerHTML = "ERROR -- Please fill out your first name";
    }

    if (user_first.value && !user_first.value.match(nameRegex)) {
        errors = true;
        validFirst = false;
        document.getElementById('fn').innerHTML = "ERROR -- Names cannot contain numbers";
    }

    if (validFirst) {
        document.getElementById('fn').innerHTML = "";
    }

    // if name is invalid or empty
    if (!user_last.value) {
        errors = true;
        validLast = false;
        document.getElementById('ln').innerHTML = "ERROR -- Please fill out your last name";
    }

    if (user_last.value && !user_last.value.match(nameRegex)) {
        errors = true;
        validLast = false;
        document.getElementById('ln').innerHTML = "ERROR -- Names cannot contain numbers";
    }

    if (validLast) {
        document.getElementById('ln').innerHTML = "";
    }
    // if email is invalid or empty
    if (!user_email.value || !user_email.value.match(emailRegex)) {
        errors = true;
        document.getElementById('em').innerHTML = "ERROR -- Please fill out a valid email address";
    } else {
        document.getElementById('em').innerHTML = "";
    }

    //if email retype doesn't match
    if (!user_email.value.match(user_email_conf)) {
        errors = true;
        document.getElementById('cem').innerHTML = "ERROR -- Email confirmation does not match";
    } else {
        document.getElementById('cem').innerHTML = "";
    }

    //if password is empty
    if (!user_pass.value) {
        errors = true;
        document.getElementById('pw').innerHTML = "ERROR -- Please fill out your desired password";
    } else {
        document.getElementById('pw').innerHTML = "";
    }
    //if password retype doesn't match
    if (!user_pass.value.match(user_pass_conf.value)) {
        errors = true;
        document.getElementById('cpw').innerHTML = "ERROR -- Password confirmation does not match";
    } else {
        document.getElementById('cpw').innerHTML = "";
    }

    //if city is empty
    if (!input_city.value) {
        errors = true;
        validCity = false;
        document.getElementById('ct').innerHTML = "ERROR -- Please fill out the city";
    }

    //if city is invalid
    if (input_city.value && !input_city.value.match(nameRegex)) {
        errors = true;
        validCity = false;
        document.getElementById('ct').innerHTML = "ERROR -- Cities cannot contain numbers";
    }

    if (validCity) {
        document.getElementById('ct').innerHTML = "";
    }
    //if state is empty
    if (!states.value) {
        errors = true;
        document.getElementById('st').innerHTML = "ERROR -- Please select the state";
    } else {
        document.getElementById('st').innerHTML = "";
    }
    //if month is empty
    if (!bd_month.value) {
        errors = true;
        document.getElementById('bdm').innerHTML = "ERROR -- Please select your birth month";
    } else {
        document.getElementById('bdm').innerHTML = "";
    }
    //if day is empty
    if (!bd_day.value) {
        errors = true;
        document.getElementById('bdd').innerHTML = "ERROR -- Please select your birth day";
    } else {
        document.getElementById('bdd').innerHTML = "";
    }
    //if year is empty
    if (!bd_year.value) {
        errors = true;
        validYear = false;
        document.getElementById('bdy').innerHTML = "ERROR -- Please input your birth year";
    }
    //if year is invalid
    if (bd_year.value && !bd_year.value.match(yearRegex)) {
        errors = true;
        validYear = false;
        document.getElementById('bdy').innerHTML = "ERROR -- Please input year in valid numeric format";
    }
    if (validYear) {
        document.getElementById('bdy').innerHTML = "";
    }

    //check if a gender has been selected
    var isChecked = false;
    var genInput = document.querySelectorAll('input[type=radio]');
    for (var i = 0; i < genInput.length; i++) {
        if (genInput[i].checked) {
            //look for the first checked gender option
            isChecked = true;
            break;
        }
    }

    //if no gender selection
    if (!isChecked) {
        errors = true;
        document.getElementById('gen').innerHTML = "ERROR -- Please select your gender";
    } else {
        document.getElementById('gen').innerHTML = "";
    }
    //if there are errors
    if (errors) {
        //stop the form from submitting
        return false;
    } else {
        return true;
    }
}

//to call only on the doctor's page
function doc_validate() {
    //get the file element
    var file = document.getElementById('file');
    //check if value is empty
    if (!file.value) {
        errors = true;
        document.getElementById('dc').innerHTML = "ERROR -- Please upload doctor certifications";
    } else {
        document.getElementById('ct').innerHTML = "";
    }
    if (errors) {
        //stop the form from submitting
        return false;
    } else {
        return true;
    }
}

//function to clear form
function clear_form() {
    //set all values to empty
    document.getElementById("user_first").value = "";
    document.getElementById("user_last").value = "";
    document.getElementById("location").value = "";
    document.getElementById("states").value = "";
    document.getElementById("bd_month").value = "";
    document.getElementById("bd_day").value = "";
    document.getElementById("bd_year").value = "";

    document.getElementById("user_email").value = "";
    document.getElementById("user_email_conf").value = "";
    document.getElementById("user_pass").value = "";
    document.getElementById("user_pass_conf").value = "";
}

//to call only on doctor's page
function clear_doc() {
    //set file to empty
    document.getElementById("file").value = "";
}