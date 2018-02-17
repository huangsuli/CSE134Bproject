
function clearForm(Signup) {
	document.getElementsByName("user_first")[0].value = "";
    document.getElementsByName("user_last")[0].value = "";
    document.getElementsByName("location")[0].value = "";
    document.getElementsByName("states")[0].value = "";
    document.getElementsByName("bd_month")[0].value = "";
    document.getElementsByName("bd_day")[0].value = "";
    document.getElementsByName("bd_year")[0].value = "";
    
    
    document.getElementsByName("user_email")[0].value = "";
    document.getElementsByName("user_email_conf")[0].value = "";
    document.getElementsByName("user_pass")[0].value = "";
    document.getElementsByName("user_pass_conf")[0].value = "";
	if(Signup) {    
	    document.getElementsByName("file")[0].value = "";
	}
}

