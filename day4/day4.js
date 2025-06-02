function placeOrder() {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const address = document.getElementById("address").value;
      const comboInputs = document.querySelectorAll(".combo:checked");
        if (!name || !phone || !email || !address) {
    alert("Please fill in all required fields.");
    return;
  }
      if (comboInputs.length === 0) {
    alert("Please select at least one product to place your order.");
    return false;
  }
      let total = 0;
      comboInputs.forEach(cb => total += parseInt(cb.value));
      const discount = total >= 2000 ? 0.20 : 0;
      const finalAmount = total - (total * discount);
      const orderData = {
        name, phone, email, address, total, discount, finalAmount
      };
      localStorage.setItem("orderData", JSON.stringify(orderData));
      window.location.href = "confirm.html";
    }