//responsive navbar
function MyFunc() {
  let x = document.getElementById("topNav");
  if (x.className === "navlinks") {
    x.className += " responsive";
  } else {
    x.className = "navlinks";
  }
}

// email logic



function sendEmail() {
  
  let Name = document.getElementById('Name').value;
  let Mail = document.getElementById('Email').value;
  let Nummber = document.getElementById('Number').value;
  let Message = document.getElementById('Message').value;
  
  let msg = 'Name: ' + Name + "<br/> Email: " + Mail + "<br/> Number: " + Nummber + "<br/> Message: " + Message ;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abhiy18y@gmail.com",
    Password: "FAF51C623C29DB8A62BD495519B43ACFD093",
    To: "escapechai@gmail.com",
    From: "abhiy18y@gmail.com",
    Subject: "Sending Email using javascript",
    Body: msg ,
  }).then(function (message) {
    alert("mail sent successfully");
  });
}
