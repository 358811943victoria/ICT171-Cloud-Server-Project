emailjs.init("04JUpCpA2diJioW99"); 

function sendEmail(name, email, orderDetails, address, payment, delivery) {
  emailjs.send("service_q7pzqrk", "template_jugqs4x", {
    from_name: name,
    from_email: email,
    to_name: "Store Owner",
    message: `Order Details:\n${orderDetails}\n\nAddress:\n${address}\nPayment: ${payment}\nDelivery: ${delivery}`
  })
  .then(() => {
    alert("Order sent successfully!");
    cartItems.length = 0;
    updateCart();
    document.getElementById('checkout-form').reset();
  })
  .catch(err => {
    alert("Failed to send order.");
    console.error(err);
  });
}
