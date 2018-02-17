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
  document.getElementById("user_city").value = "";
  docu
date:ment.getElementById("input_year").value = "";
}

function updateUserInfo() {
  verifyEditFields();
  updateInfo();
  showUserInformation();
  showProfileDiv("profile");
  alert("Your information has been updated!");
}

function verifyEditFields() {

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

  for (i = requests.length-1; i >= 0; i--) {
    document.getElementById("historyTable").innerHTML +=
      "<th>"+ (i+1) +"</th>" +
      "<td>"+ requests[i].date.toString() +"</td>" +
      "<td>"+ requests[i].doctorName +"</td>" +
      "<td>"+ setStatus(requests[i].status) +"</td>";
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
  historyFiller(false);
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
