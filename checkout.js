document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  if (cartItems.length === 0) {
    alert('Cart is empty!');
    return;
  }

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const address = form.address.value;
  const payment = form.payment.value;
  const delivery = form.delivery.value;
  const orderDetails = cartItems
    .map(item => `${item.name} - $${item.price.toFixed(2)}`)
    .join('\n');

  sendEmail(name, email, orderDetails, address, payment, delivery);
});
