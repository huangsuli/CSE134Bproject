var doc_user = {
    First: "Mark",
    Last: "Young",
    title: "Family Medicine",
    Email: "my1977@email.com",
    Password: "12291309",
    City: "San Diego",
    State: "CA",
    Birthday:
      {
        Day: 1,
        Month: 1,
        Year: 1977,
        bdayToString: function()
        {
          return this.Day + "/" + this.Month + "/" + this.Year;
        }
      },
    Gender: 0,
    //Session: "No session at the moment",
    fullName: function()
    {
      return this.First + " " + this.Last;
    },
    getLocation: function()
    {
      return this.City + ", " +this.State;
    }
};

var pending_requests = [
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
    patientName: "Calvin Jack",
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
    patientName: "Joseph Don",
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
    patientName: "Lewis Mack",
    symptoms: "",
    status: 2
  }
];

var accepted_requests = [
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
    patientName: "Nicky Romero",
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
    patientName: "Axwell Ingrosso",
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
    patientName: "Martin Garrix",
    symptoms: "",
    status: 2
  }
];

var rejected_requests = [
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
    patientName: "James Jones",
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
    patientName: "Alex Kim",
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
    patientName: "Sam Wan",
    symptoms: "",
    status: 2
  }
];
function showDocUserInformation() {
  document.getElementById("info_name").innerHTML = doc_user.fullName();
  document.getElementById("info_bday").innerHTML = doc_user.Birthday.bdayToString();
  document.getElementById("info_email").innerHTML = doc_user.Email;
  document.getElementById("info_location").innerHTML = doc_user.getLocation();
  document.getElementById("info_title").innerHTML = doc_user.title;
  document.getElementById("info_gender").innerHTML = (doc_user.Gender == 0) ? "Male" : "Female";
}

function setEditFields() {
  document.getElementById("user_first").value = doc_user.First;
  document.getElementById("user_last").value = doc_user.Last;
  document.getElementById("user_email").value = doc_user.Email;
  document.getElementById("user_email_conf").value = doc_user.Email;
  document.getElementById("input_city").value = doc_user.City;
  document.getElementById("user_state").value = doc_user.State;
  document.getElementById("bd_month").value = doc_user.Birthday.Month;
  document.getElementById("bd_day").value = doc_user.Birthday.Day;
  document.getElementById("input_year").value = doc_user.Birthday.Year;
  document.getElementById("radio_male").checked = (doc_user.Gender == 0);
  document.getElementById("radio_female").checked = (doc_user.Gender == 1);
}

function clearEditFields() {
  document.getElementById("user_first").value = "";
  document.getElementById("user_last").value = "";
  document.getElementById("user_email").value = "";
  document.getElementById("user_email_conf").value = "";
  document.getElementById("input_city").value = "";
  document.getElementById("input_year").value = "";
}


function updateUserInfo() {
  if(!verifyEditFields())
    return;

  updateInfo();
  showDocUserInformation();
  showProfileDiv("profile");
  alert("Your information has been updated!");
}

function verifyEditFields() {
  return true;
}


function updateInfo() {
  doc_user.First = document.getElementById("user_first").value;
  doc_user.Last = document.getElementById("user_last").value;
  doc_user.Email = document.getElementById("user_email").value;
  doc_user.Password = document.getElementById("user_new_pass").value;
  doc_user.City = document.getElementById("input_city").value;
  doc_user.State = document.getElementById("user_state").value;
  doc_user.Birthday.Month = document.getElementById("bd_month").value;
  doc_user.Birthday.Day = document.getElementById("bd_day").value;
  doc_user.Birthday.Year = document.getElementById("input_year").value;
  doc_user.Gender = (document.getElementById("radio_male").checked == true) ? 0 : 1;
}

function rejectedFiller() {
  document.getElementById("historyTable").innerHTML = "<tr>    <td>#</td>    <th>Date</th>    <th>Patient</th>  </tr>";

  for (i = rejected_requests.length-1; i >= 0; i--) {
    document.getElementById("historyTable").innerHTML +=
      "<th>"+ (i+1) +"</th>" +
      "<td>"+ rejected_requests[i].date.toString() +"</td>" +
      "<td>"+ rejected_requests[i].patientName +"</td>";
  }
}

function pendingFiller() {
  document.getElementById("pendingTable").innerHTML = "<tr>    <td>#</td>    <th>Date</th>    <th>Patient</th>     <th></th></tr>";
  for (i = pending_requests.length-1; i >= 0; i--) {
    document.getElementById("pendingTable").innerHTML +=
      "<th>"+ (i+1) +"</th>" +
      "<td>"+ pending_requests[i].date.toString() +"</td>" +
      "<td>"+ pending_requests[i].patientName +"</td>" +
      "<td><button class=\"medium_blue_r_button table_button\" onclick=\"window.location.href=\'requestDetail.html\'\" >Details</button></td>";
  }
}

function acceptedFiller() {
  document.getElementById("acceptedTable").innerHTML = "<tr>    <td>#</td>    <th>Date</th>    <th>Patient</th>     <th></th></tr>";
  for (i = accepted_requests.length-1; i >= 0; i--) {
    document.getElementById("acceptedTable").innerHTML +=
      "<th>"+ (i+1) +"</th>" +
      "<td>"+ accepted_requests[i].date.toString() +"</td>" +
      "<td>"+ accepted_requests[i].patientName +"</td>" +
      "<td><button class=\"medium_blue_r_button table_button\" onclick=\"window.location.href=\'chat.html\' \">Chat</button></td>";
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
