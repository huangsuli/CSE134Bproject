var submitButton = document.querySelector("input[type=submit]");
submitButton.onclick = validation;

function validation() {
    //get form and keep in global scope
    rateForm = document.getElementById('docForm');

    //boolean to pass for successful submission
    var errors = false;

    // If diagnosis is empty
    if (!document.getElementById('docDiag').value) {
        errors = true;
        document.getElementById('err1').innerHTML = "ERROR -- Please make a diagnosis";
    } else {
        document.getElementById('err1').innerHTML = "";
    }

    //check for radio inputs
    var recChecked = false;
    var starChecked = false;
    var radInput = document.querySelectorAll('input[type=radio]');
    //check for rec
    for (var i = 0; i < 2; i++) {
        if (radInput[i].checked) {
            //makes sure something is checked
            recChecked = true;
            break;
        }
    }
    //check for rating
    for (var i = 2; i < radInput.length; i++) {
        if (radInput[i].checked) {
            //makes sure something is checked
            starChecked = true;
            break;
        }
    }

    if (!recChecked) {
        errors = true;
        document.getElementById('err3').innerHTML = "ERROR -- Please decide whether an in-person visit is necessary";
    } else {
        document.getElementById('err3').innerHTML = "";
    }

    if (!starChecked) {
        errors = true;
        document.getElementById('err4').innerHTML = "ERROR -- Please leave a rating";
    } else {
        document.getElementById('err4').innerHTML = "";
    }


    // If there are errors
    if (errors) {
        //stop the form from submitting
        return false;
    } else {
        alert("Your input has been submitted!");
        return true;
    }
}