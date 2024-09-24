var dform = document.getElementById("dynamicForm");
// dform.setAttribute("style", "display:flex;flex-direction:column")

// dform.innerHTML=""
var userName = document.createElement("input");
userName.setAttribute("placeholder", "Name");
dform.appendChild(userName);
var userEmail = document.createElement("input");
userEmail.setAttribute("placeholder", "Email");
userEmail.setAttribute("type", "email");
dform.appendChild(userEmail);
// Create the submit button
var sButton = document.createElement("button");
sButton.setAttribute("type", "submit");
sButton.textContent = "Submit";
// Append the button to the form
dform.appendChild(sButton);

function test() {
  // Function to load stored data from local storage
  // Retrieing data
  var uid = document.getElementById("localUsername").value;
  var email = document.getElementById("localEmail").value;
  var pw = document.getElementById("localPassword").value;

  // Storing Data

  var user = localStorage.setItem("uid", uid);
  var em = localStorage.setItem("email", email);
  var pass = localStorage.setItem("pw", pw);

  // Retrieing stored data

  var user = localStorage.getItem("uid", uid);
  var em = localStorage.getItem("email", email);
  var pass = localStorage.getItem("pw", pw);

  var a, b, c;
  a = "Brindha";
  b = "brindha@gmail.com";
  c = 123456;

  if (a == user && b == em && c == pass) {
    alert("Login Successfull !");
  } else {
    alert("Invalid Details !!");
  }
}
