var submitButton = document.querySelector("input[type=submit]");
submitButton.onclick = validation;

function validation() {
    // Get form and keep in global scope
    rateForm = document.getElementById('paForm');

    //boolean to pass for successful submission
    var errors = false;

    // If comment is empty
    if (!document.getElementById('paComm').value) {
        errors = true;
        document.getElementById('err1').innerHTML = "ERROR -- Please leave a comment about your session";
    } else {
        document.getElementById('err1').innerHTML = "";
    }

    //check if a star has been selected
    var isChecked = false;
    var starInput = rateForm.querySelectorAll('input[type=radio]');
    for (var i = 0; i < starInput.length; i++) {
        if (starInput[i].checked) {
            //look for the first checked star option
            isChecked = true;
            break;
        }
    }

    //if no star selection
    if (!isChecked) {
        errors = true;
        document.getElementById('err2').innerHTML = "ERROR -- Please leave a rating";
    } else {
        document.getElementById('err2').innerHTML = "";
    }

    // If there are errors
    if (errors) {
        // Stop the form from submitting
        return false;
    } else {
        alert("Your input has been submitted!");
        return true;
    }
}