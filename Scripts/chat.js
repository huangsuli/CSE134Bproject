window.onload = function() {
  console.log("a")
  document.getElementById('usermsg').addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  
        sendChat()
    }
  });
  
}

function sendChat(){
    var message = document.getElementById('usermsg').value;
    if(message != "") {
      document.getElementById('usermsg').value = "";
      if(document.getElementById('radio_doctor').checked == true) {
          document.getElementById('chatbox').innerHTML += "<p id=\"doctor\">Mark: " + message+"</p>";
      }
      if(document.getElementById('radio_patient').checked == true) {
          document.getElementById('chatbox').innerHTML += "<p id=\"patient\">John: " + message+"</p>";
      }
    }

}

function exitChat(){
    if(document.getElementById('radio_doctor').checked == true) {
            window.location.href = "../Pages/doc_rate.html"
        }
        if(document.getElementById('radio_patient').checked == true) {
            window.location.href = "../Pages/pa_rate.html"
        }
}

function changeUser(doctor){
    if(doctor) {
      document.getElementById('welcome_message').innerHTML="Welcome, Mark"
    }
    else {
      document.getElementById('welcome_message').innerHTML="Welcome, John"
    }
}