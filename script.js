document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const course = document.getElementById("course").value;

  if (name === "" || email === "" || isNaN(age)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  if (age < 10 || age > 100) {
    alert("Age must be between 10 and 100.");
    return;
  }

  if (course === "") {
    alert("Please select a course.");
    return;
  }

  alert("Form submitted successfully!");
});

// Show/Hide Image functions
function showImage() {
  document.getElementById("imageBox").style.display = "block";
}

function hideImage() {
  document.getElementById("imageBox").style.display = "none";
}
