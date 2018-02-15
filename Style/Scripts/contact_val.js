var submitButton = document.querySelector("input[type=submit]");
submitButton.onclick = validation;

function validation() {
    //get form and keep in global scope
    contactForm = document.getElementById('contactForm');

    //boolean to pass for successful submission
    var errors = false;

    // If diagnosis is empty
    if (!document.getElementById('docDiag').value) {
        errors = true;
        document.getElementById('err1').innerHTML = "ERROR -- Please fill out first name";
    }

    if (!document.getElementById('docComm').value) {
        errors = true;
        document.getElementById('err2').innerHTML = "ERROR -- Please fill out last name";
    }

    // If there are errors
    if (errors) {
        //stop the form from submitting
        return false;
    }
}