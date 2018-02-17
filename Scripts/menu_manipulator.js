var visibleDivId = "profile";

function showProfileDiv(profileDivId) {
 document.getElementById(visibleDivId).style.display = "none";
 document.getElementById(profileDivId).style.display = "block";
 visibleDivId = profileDivId;
}
