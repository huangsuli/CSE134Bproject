
function clearForm(Signup) {
	document.getElementsById("user_first").value = "";
    document.getElementsById("user_last").value = "";
    document.getElementsById("location").value = "";
    document.getElementsById("states").value = "";
    document.getElementsById("bd_month").value = "";
    document.getElementsById("bd_day").value = "";
    document.getElementsById("bd_year").value = "";
    
    
    document.getElementsById("user_email").value = "";
    document.getElementsById("user_email_conf").value = "";
    document.getElementsById("user_pass").value = "";
    document.getElementsById("user_pass_conf").value = "";
	if(Signup) {    
	    document.getElementsById("file").value = "";
	}
}

