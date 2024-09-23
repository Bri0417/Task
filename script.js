$(document).ready(function () {
  //   $('.slider').slick({
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,

  //   });
  $(".slider").slick({
    infinite: true,
    autoplay: false,
    dots: true,
    arrows: true,
    autoplaySpeed: 4000,
  });
  // Dropdown site navigation
  document
    .getElementById("site-select")
    .addEventListener("change", function () {
      var selectedSite = this.value;
      if (selectedSite) {
        window.location.href = selectedSite;
      }
    });

  // Set default form action (optional)
  $("#myForm").attr("action", "/default-action");

  // Dynamically change form action based on button clicked
  $("#save-btn").click(function () {
    $("#myForm").attr("action", "/save");
  });

  $("#view-btn").click(function () {
    $("#myForm").attr("action", "/view");
  });

  $("#edit-btn").click(function () {
    $("#myForm").attr("action", "/edit");
  });
});
$(document).ready(function () {
  // Add button: Move only one item from List 1 to List 2 on each click
  $("#add-btn").click(function () {
    let selectedOption = $("#list1 option:selected").first(); // Select only the first selected option
    if (selectedOption.length > 0) {
      selectedOption.remove().appendTo("#list2"); // Move it to List 2
    }
  });

  // Add All button: Move all items from List 1 to List 2
  $("#add-all-btn").click(function () {
    $("#list1 option").each(function () {
      $(this).remove().appendTo("#list2");
    });
  });

  // Add Multiple button: Move selected items from List 1 to List 2
  $("#add-multiple-btn").click(function () {
    $("#list1 option:selected").each(function () {
      $(this).remove().appendTo("#list2");
    });
  });

  // Reset button: Move all items back to List 1
  $("#reset-btn").click(function () {
    $("#list2 option").each(function () {
      $(this).remove().appendTo("#list1");
    });
  });
});
// Reusable validation functions
const validation = {
  isNotEmpty: (value) => value.trim() !== "",
  isAlphabetic: (value) => /^[A-Za-z]+$/.test(value),
  isPhoneNumber: (value) => /^\d{10}$/.test(value),
  isEmailValid: (value) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
};

// Function to validate the form
function validateForm() {
  let valid = true;

  // Get form values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const nationality = document.getElementById("nationality").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

  // Validate fields
  if (
    !validation.isNotEmpty(firstname) ||
    !validation.isAlphabetic(firstname)
  ) {
    alert("First Name is required and should contain only alphabets.");
    valid = false;
  }
  if (!validation.isNotEmpty(lastname) || !validation.isAlphabetic(lastname)) {
    alert("Last Name is required and should contain only alphabets.");
    valid = false;
  }
  if (!validation.isNotEmpty(phone) || !validation.isPhoneNumber(phone)) {
    alert("Phone number must be 10 digits and numeric only.");
    valid = false;
  }
  if (!validation.isNotEmpty(email) || !validation.isEmailValid(email)) {
    alert("Please enter a valid email address.");
    valid = false;
  }
  // if (!validation.isNotEmpty(nationality)) {
  //     alert("Please select a nationality.");
  //     valid = false;
  // }
  // if (!gender) {
  //     alert("Please select a gender.");
  //     valid = false;
  // }
  // if (hobbies.length === 0) {
  //     alert("Please select at least one hobby.");
  //     valid = false;
  // }

  return valid;
}

// On form submit event
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate the form
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  });
