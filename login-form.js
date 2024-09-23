// // Function to dynamically create the login form inside the container

// function createLoginForm() {
//     // Select the container where the form will be placed
//     let loginContainer = document.querySelector('.login-container');

//     // Create the form element
//     let form = document.createElement('form');
//     form.setAttribute('id', 'loginForm');
//     form.setAttribute('onsubmit', 'return validateLoginForm()');

//     // Username field
//     let usernameLabel = document.createElement('label');
//     usernameLabel.setAttribute('for', 'username');
//     usernameLabel.innerText = 'Username:';
//     form.appendChild(usernameLabel);

//     let usernameInput = document.createElement('input');
//     usernameInput.setAttribute('type', 'text');
//     usernameInput.setAttribute('id', 'username');
//     usernameInput.setAttribute('name', 'username');
//     usernameInput.setAttribute('placeholder', 'Enter your username');
//     form.appendChild(usernameInput);

//     // Password field
//     let passwordLabel = document.createElement('label');
//     passwordLabel.setAttribute('for', 'password');
//     passwordLabel.innerText = 'Password:';
//     form.appendChild(passwordLabel);

//     let passwordInput = document.createElement('input');
//     passwordInput.setAttribute('type', 'password');
//     passwordInput.setAttribute('id', 'password');
//     passwordInput.setAttribute('name', 'password');
//     passwordInput.setAttribute('placeholder', 'Enter your password');
//     form.appendChild(passwordInput);

//     // Submit button
//     let submitButton = document.createElement('button');
//     submitButton.setAttribute('type', 'submit');
//     submitButton.innerText = 'Login';
//     form.appendChild(submitButton);

//     // Append form to the container
//     loginContainer.appendChild(form);
// }

// // Form validation function
// function validateLoginForm() {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     let valid = true;

//     // Clear previous errors
//     document.querySelectorAll('.error').forEach(function (error) {
//         error.remove();
//     });

//     // Username validation
//     if (username === '') {
//         let error = document.createElement('div');
//         error.className = 'error';
//         error.innerText = 'Username is required';
//         document.getElementById('username').after(error);
//         valid = false;
//     }

//     // Password validation
//     if (password === '') {
//         let error = document.createElement('div');
//         error.className = 'error';
//         error.innerText = 'Password is required';
//         document.getElementById('password').after(error);
//         valid = false;
//     }

//     return valid; // Return true if valid, false otherwise
// }

// // Create the login form when the page loads
// window.onload = createLoginForm;

// Function to dynamically create the login form inside the container using Bootstrap classes
function createLoginForm() {
  // Select the container where the form will be placed
  let loginContainer = document.querySelector(".login-container");

  // Create the form element
  let form = document.createElement("form");
  form.setAttribute("id", "loginForm");
  form.setAttribute("onsubmit", "return validateLoginForm()");

  // Form Group for Username
  let formGroupUsername = document.createElement("div");
  formGroupUsername.className = "form-group";

  let usernameLabel = document.createElement("label");
  usernameLabel.setAttribute("for", "username");
  usernameLabel.innerText = "Username:";
  formGroupUsername.appendChild(usernameLabel);

  let usernameInput = document.createElement("input");
  usernameInput.setAttribute("type", "text");
  usernameInput.setAttribute("id", "username");
  usernameInput.setAttribute("name", "username");
  usernameInput.setAttribute("placeholder", "Enter your username");
  usernameInput.className = "form-control";
  formGroupUsername.appendChild(usernameInput);
  form.appendChild(formGroupUsername);

  // Form Group for Password
  let formGroupPassword = document.createElement("div");
  formGroupPassword.className = "form-group";

  let passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  passwordLabel.innerText = "Password:";
  formGroupPassword.appendChild(passwordLabel);

  let passwordInput = document.createElement("input");
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("id", "password");
  passwordInput.setAttribute("name", "password");
  passwordInput.setAttribute("placeholder", "Enter your password");
  passwordInput.className = "form-control";
  formGroupPassword.appendChild(passwordInput);
  form.appendChild(formGroupPassword);

  // Submit Button
  let submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.innerText = "Login";
  submitButton.className = "btn btn-primary btn-block";
  form.appendChild(submitButton);

  // Append form to the container
  loginContainer.appendChild(form);
}

// Form validation function
function validateLoginForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let valid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(function (error) {
    error.remove();
  });

  // Username validation
  if (username === "") {
    let error = document.createElement("div");
    error.className = "error text-danger";
    error.innerText = "Username is required";
    document.getElementById("username").after(error);
    valid = false;
  }

  // Password validation
  if (password === "") {
    let error = document.createElement("div");
    error.className = "error text-danger";
    error.innerText = "Password is required";
    document.getElementById("password").after(error);
    valid = false;
  }

  return valid; // Return true if valid, false otherwise
}

// Create the login form when the page loads
window.onload = createLoginForm;
