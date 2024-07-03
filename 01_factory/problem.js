function processOrder(paymentType, amount) {
  switch (paymentType) {
    case "paypal":
      console.log(`Processing ${amount} through PayPal`);
      break;
    case "stripe":
      console.log(`Processing ${amount} through Stripe`);
      break;
    default:
      console.error("Unsupported payment gateway type");
  }
}

processOrder("paypal", 100);
processOrder("stripe", 200);
processOrder("unsupported", 300);
