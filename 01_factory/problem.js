function processPayPalPayment(amount) {
  console.log(`Processing ${amount} through PayPal`);
}

function processStripePayment(amount) {
  console.log(`Processing ${amount} through Stripe`);
}

function processOrder(paymentType, amount) {
  switch (paymentType) {
    case "paypal":
      processPayPalPayment(amount);
      break;
    case "stripe":
      processStripePayment(amount);
      break;
    default:
      console.error("Unsupported payment gateway type");
  }
}

processOrder("paypal", 100);
processOrder("stripe", 200);
processOrder("unsupported", 300);
