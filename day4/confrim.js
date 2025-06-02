const data = JSON.parse(localStorage.getItem("orderData"));
    if (data) {
      document.getElementById("orderSummary").innerHTML = `
        <tr><td><strong>Name</strong></td><td>${data.name}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Address</strong></td><td>${data.address}</td></tr>
        <tr><td><strong>Total Price</strong></td><td>₹${data.total}</td></tr>
        <tr><td><strong>Discount Applied</strong></td><td>${data.discount * 100}%</td></tr>
        <tr><td><strong>Final Amount</strong></td><td>₹${data.finalAmount}</td></tr>
      `;
    }
    function confirmOrder() {
      alert("Your order has been placed successfully!");
      localStorage.removeItem("orderData");
      window.location.href = "day4.html";
    }