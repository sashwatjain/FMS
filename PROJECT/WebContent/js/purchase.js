document.addEventListener("DOMContentLoaded", function () {
  const purchaseForm = document.getElementById("purchaseForm");

  purchaseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    buyProduct();
  });

  function buyProduct() {
    const productName = document.getElementById("productName").value;
    const productCost = document.getElementById("productCost").value;
    const emiScheme = document.getElementById("emiScheme").value;
    const userName = "<USERNAME>"; // Replace with the actual username (e.g., from the query parameter)

    // Send product purchase data to the server
    fetch("/buyProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName,
        productCost,
        emiScheme,
        username: userName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display a success message
        const responseMessage = document.createElement("p");
        responseMessage.className = "response-message";
        responseMessage.textContent = data.message;
        document.body.appendChild(responseMessage);
        setTimeout(function () {
          responseMessage.remove();
        }, 5000);
      })
      .catch((error) => console.error("Error buying product:", error));
  }
});
