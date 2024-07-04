const processPaymentWithPayPal = (amount) => {
  console.log(`Processing ${amount} through PayPal`);
};

const processPaymentWithStripe = (amount) => {
  console.log(`Processing ${amount} through Stripe`);
};

const processPaymentUnsupported = () => {
  console.log(`Unsupported`);
};

const getPaymentProcessor = (type) => {
  const processors = {
    paypal: processPaymentWithPayPal,
    stripe: processPaymentWithStripe,
  };

  return processors[type] || processPaymentUnsupported;
};

const processOrder = (paymentType, amount) => {
  const processPayment = getPaymentProcessor(paymentType);

  processPayment(amount);
};

processOrder("paypal", 100);
processOrder("stripe", 200);
processOrder("unsupported", 300);
