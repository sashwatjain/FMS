document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
  });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
  });

  function registerUser() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const address = document.getElementById("address").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const cardType = document.getElementById("cardType").value;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const ifsc = document.getElementById("ifsc").value;

    // Simulate server response for registration
    const registrationData = {
      name,
      phone,
      email,
      username,
      password,
      address,
      cardType,
      bank,
      accountNumber,
      ifsc,
    };

    // Replace the following with actual AJAX call to the server
    simulateServerResponse(registrationData, "Registration");
  }

  function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate server response for login
    const loginData = {
      username,
      password,
    };

    // Replace the following with actual AJAX call to the server
    simulateServerResponse(loginData, "Login");
  }

  function simulateServerResponse(data, action) {
    // Simulate server response delay (3 seconds)
    setTimeout(function () {
      const responseMessage = document.createElement("p");
      responseMessage.className = "response-message";
      if (action === "Registration") {
        responseMessage.textContent = "User successfully registered!";
      } else if (action === "Login") {
        responseMessage.textContent = "User logged in successfully!";
      }
      document.body.appendChild(responseMessage);
      setTimeout(function () {
        responseMessage.remove();
      }, 5000);
    }, 3000);
  }
});
