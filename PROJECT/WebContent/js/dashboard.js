document.addEventListener("DOMContentLoaded", function () {
  // Get the user name from the query parameter (you can use your server response)
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("username");
  document.getElementById("userName").textContent = userName;

  // Fetch EMI card and remaining balance from the server
  fetch("/fetchUserData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: userName }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("emiCard").textContent = data.emiCard;
      document.getElementById("remainingBalance").textContent = data.remainingBalance;
    })
    .catch((error) => console.error("Error fetching user data:", error));

  // Fetch purchased products from the server
  fetch("/fetchPurchasedProducts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: userName }),
  })
    .then((response) => response.json())
    .then((data) => {
      const productList = document.getElementById("productList");
      data.products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
      });
    })
    .catch((error) => console.error("Error fetching purchased products:", error));
});
