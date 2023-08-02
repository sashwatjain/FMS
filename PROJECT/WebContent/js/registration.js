function validateRegistrationForm() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate name (non-empty)
  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  // Validate phone (non-empty and numeric)
  if (phone.trim() === "" || isNaN(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  // Validate email (non-empty and a valid email format)
  if (email.trim() === "" || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate username (non-empty)
  if (username.trim() === "") {
    alert("Please enter a username.");
    return false;
  }

  // Validate password (non-empty)
  if (password.trim() === "") {
    alert("Please enter a password.");
    return false;
  }

  // Validate password and confirm password (must match)
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

function validateEmail(email) {
  // Regular expression for basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
