var user = {
    First: "Ben",
    Last: "Chafik",
    Email: "achafik@ucsd.edu",
    Password: "123456",
    City: "San Diego",
    State: "CA",
    Birthday:
      {
        Day: 1,
        Month: 8,
        Year: 1994,
        bdayToString: function()
        {
          return this.Day + "/" + this.Month + "/" + this.Year;
        }
      },
    Gender: 0,
    Session: "No session at the moment",
    fullName: function()
    {
      return this.First + " " + this.Last;
    },
    getLocation: function()
    {
      return this.City + ", " +this.State;
    }
};

var requests = [
  {
    date:
    {
      Day: 10,
      Month: 29,
      Year: 2016,
      toString: function()
      {
        return this.Day + "/" + this.Month + "/" + this.Year;
      }
    },
    doctorName: "Monica Guntaler",
    symptoms: "",
    log: ["You submitted a request to Monica Guntaler.",
      "Monica Guntaler reviewed request.",
      "Monica Guntaler rejected request, reason: <br />\"Patient does not provide enough information.\""],
    status: 0
  },
  {
    date:
    {
      Day: 6,
      Month: 15,
      Year: 2017,
      toString: function()
      {
        return this.Day + "/" + this.Month + "/" + this.Year;
      }
    },
    doctorName: "John Selvester",
    symptoms: "",
    log: ["You submitted a request to John Selvester",
      "John Selvester reviewed request.",
      "John Selvester accepted request.",
      "John Selvester set a chat meeting at 06/15/2017 4:20 PM",
      "Chatted with John Selvester",
      "Chat log: <br />\"CHAT LOG HERE\"",
      "John Selvester left a comment and rated the conversation",
      "You left a comment and rated the conversation"],
    status: 1
  },
  {
    date:
    {
      Day: 12,
      Month: 5,
      Year: 2017,
      toString: function()
      {
        return this.Day + "/" + this.Month + "/" + this.Year;
      }
    },
    doctorName: "Mark Young",
    symptoms: "",
    log: ["You submitted a request to Mark Young"],
    status: 2
  }
];

function showUserInformation() {
  document.getElementById("info_name").innerHTML = user.fullName();
  document.getElementById("info_bday").innerHTML = user.Birthday.bdayToString();
  document.getElementById("info_email").innerHTML = user.Email;
  document.getElementById("info_location").innerHTML = user.getLocation();
  document.getElementById("info_session").innerHTML = user.Session;
  document.getElementById("info_gender").innerHTML = (user.Gender == 0) ? "Male" : "Female";
}

function setEditFields() {
  document.getElementById("user_first").value = user.First;
  document.getElementById("user_last").value = user.Last;
  document.getElementById("user_email").value = user.Email;
  document.getElementById("user_email_conf").value = user.Email;
  document.getElementById("input_city").value = user.City;
  document.getElementById("user_state").value = user.State;
  document.getElementById("bd_month").value = user.Birthday.Month;
  document.getElementById("bd_day").value = user.Birthday.Day;
  document.getElementById("input_year").value = user.Birthday.Year;
  document.getElementById("radio_male").checked = (user.Gender == 0);
  document.getElementById("radio_female").checked = (user.Gender == 1);
}

function clearEditFields() {
  document.getElementById("user_first").value = "";
  document.getElementById("user_last").value = "";
  document.getElementById("user_email").value = "";
  document.getElementById("user_email_conf").value = "";
  document.getElementById("input_city").value = "";
  document.getElementById("user_state").value = "";
  document.getElementById("bd_month").value = "";
  document.getElementById("bd_day").value = "";
  document.getElementById("input_year").value = "";
  document.getElementById("radio_male").checked = "";
  document.getElementById("input_year").value = "";
}

function updateUserInfo() {
  if(!verifyEditFields())
    return;
  updateInfo();
  showUserInformation();
  showProfileDiv("profile");
  alert("Your information has been updated!");
}

function verifyEditFields() {
  return true;
}

function updateInfo() {
  user.First = document.getElementById("user_first").value;
  user.Last = document.getElementById("user_last").value;
  user.Email = document.getElementById("user_email").value;
  user.Password = document.getElementById("user_new_pass").value;
  user.City = document.getElementById("input_city").value;
  user.State = document.getElementById("user_state").value;
  user.Birthday.Month = document.getElementById("bd_month").value;
  user.Birthday.Day = document.getElementById("bd_day").value;
  user.Birthday.Year = document.getElementById("input_year").value;
  user.Gender = (document.getElementById("radio_male").checked == true) ? 0 : 1;
}

function historyFiller() {
  document.getElementById("historyTable").innerHTML =
  "<tr>    <td>#</td>    <th>Date</th>    <th>Doctor</th>    <th>Status</th> </tr>";

  var idName;
  var todoList;
  for (i = requests.length-1; i >= 0; i--) {
    idName = "request_" + (i+1);
    todoList = "<li class=\"list_title\">History Log</li>";
    for (j = 0; j < requests[i].log.length; j++) {
      todoList +=
      "<li>" +
      requests[i].log[j] +
      "</li>";
    }
    document.getElementById("historyTable").innerHTML +=
      "<tr onmouseover=\"showList('" + idName + "');\" onmouseout=\"hideList('"+idName+"');\">" +
      "<th>"+ (i+1) +"</th>" +
      "<td>"+ requests[i].date.toString() +"</td>" +
      "<td>"+ requests[i].doctorName +"</td>" +
      "<td>"+ setStatus(requests[i].status) +
      "<ul id="+ idName +" class=\"todo_list\" style=\"display:none;\">" +
      todoList +
      "</ul>" +
      "</td>" +
      "</tr>";
    console.log("init:" + document.getElementById(idName).className);
     document.getElementById(idName).className = "todo_list";
     console.log("after:" + document.getElementById(idName).className);

  }
}

function setStatus(st) {
  if(st == 0)
    return "&#9746; Rejected";
  else if (st == 1)
    return "&#9745; Approved";
  else
    return "&#9744; Pending"
}

function requestAdder() {
  if (!verifyRequestFields())
    return;
  addRequest();
  historyFiller();
  showProfileDiv("requestHistory");
  alert("Your request has been submited!");
}

function verifyRequestFields() {
  return true;
}

function addRequest() {
  var request = {};
  request.date = {
    Day: 10,
    Month: 29,
    Year: 2016,
    toString: function()
    {
      return this.Day + "/" + this.Month + "/" + this.Year;
    }
  };
  request.doctorName = document.getElementById("doctor_names").value;
  request.symptoms = document.getElementById("symptoms_input").value;
  request.status = "2";

  requests.push(request);
}

function showUserInformationRequest() {
  document.getElementById("info_name").innerHTML = user.fullName();
  document.getElementById("info_age").innerHTML = 2018 - user.Birthday.Year;
  document.getElementById("info_email").innerHTML = user.Email;
  document.getElementById("info_gender").innerHTML = (user.Gender == 0) ? "Male" : "Female";
}

function showList(divName) {
  document.getElementById(divName).style.display= "block";
}
function hideList(divName) {
  document.getElementById(divName).style.display= "none";
}
