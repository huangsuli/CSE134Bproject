var submitButton = document.querySelector("input[type=submit]");
submitButton.onclick = validation;

function validation() {
    //get form and keep in global scope
    contactForm = document.getElementById('contactForm');

    //boolean to pass for successful submission
    var errors = false;

    //regex vars
    var nameRegex = '^[a-zA-Z-]+$';
    var emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$';
    var phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    //input vars
    var name_first = document.getElementById('name_first');
    var name_last = document.getElementById('name_last');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var comment = document.getElementById('conComm');




    // if name is invalid
    if (!name_first.value || !name_first.value.match(nameRegex)) {
        errors = true;
        document.getElementById('err1').innerHTML = "ERROR -- Please fill out your first name";
    } else {
        document.getElementById('err1').innerHTML = "";
    }

    // if name is invalid
    if (!name_last.value || !name_last.value.match(nameRegex)) {
        errors = true;
        document.getElementById('err2').innerHTML = "ERROR -- Please fill out your last name";
    } else {
        document.getElementById('err2').innerHTML = "";
    }
    // if email is invalid
    if (!email.value || !email.value.match(emailRegex)) {
        errors = true;
        document.getElementById('err3').innerHTML = "ERROR -- Please fill out a valid email address";
    } else {
        document.getElementById('err3').innerHTML = "";
    }

    //if phone is invalid
    if (!phone.value || !phone.value.match(phoneRegex)) {
        errors = true;
        document.getElementById('err4').innerHTML = "ERROR -- Please fill out a valid phone number";
    } else {
        document.getElementById('err4').innerHTML = "";
    }

    if (!comment.value) {
        errors = true;
        document.getElementById('err5').innerHTML = "ERROR -- Please fill out your comment";
    } else {
        document.getElementById('err5').innerHTML = "";
    }

    // If there are errors
    if (errors) {
        //stop the form from submitting
        return false;
    }
}