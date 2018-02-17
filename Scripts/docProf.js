window.onload = function () {
	var profile ={
		name: "Mark Young, MD",
		identity: "Family Medicine",
		location: "San Diego, CA",
		birthday: "01/01/1977",
		email: "my1977@email.com",
		phone: "858-699-1111",
		gender: "Male"
	}
	document.getElementById('prof_name').innerHTML = profile.name;
	document.getElementById('prof_identity').innerHTML = profile.identity;
	document.getElementById('prof_location').innerHTML = profile.location;
	document.getElementById('prof_birth').innerHTML = profile.birthday;
	document.getElementById('prof_email').innerHTML = profile.email;
	document.getElementById('prof_gender').innerHTML = profile.gender;

}