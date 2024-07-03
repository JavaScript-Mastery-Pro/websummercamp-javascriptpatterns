class PayPalGateway {
  // constructor is a special method that is called when a new instance of the class is created.
  constructor() {
    this.name = "PayPal";
  }

  // A method that logs a message indicating processing the given amount through PayPal.
  processPayment(amount) {
    console.log(`Processing ${amount} through ${this.name}`);
  }
}

class StripeGateway {
  constructor() {
    this.name = "Stripe";
  }

  processPayment(amount) {
    console.log(`Processing ${amount} through ${this.name}`);
  }
}

class PaymentFactory {
  /**
   *
   * @param {string} type
   * @returns
   *
   * @note By using the static keyword, the createPaymentGateway() method is defined as a static method of the PaymentFactory class.
   * @note This means it belongs to the class itself rather than any specific instance of the class.
   * @note Defined to allow it to be accessed directly on the class itself without requiring an instance of the class
   */
  static createPaymentGateway(type) {
    switch (type) {
      case "paypal":
        return new PayPalGateway();
      case "stripe":
        return new StripeGateway();
      default:
        throw new Error("Unsupported payment gateway type");
    }
  }
}

function processOrder(paymentType, amount) {
  try {
    // Since we defined the createPaymentGateway method as a static method, we can call it directly on the PaymentFactory class.
    const paymentGateway = PaymentFactory.createPaymentGateway(paymentType);
    // Call the processPayment method of the created payment gateway with the given amount.
    paymentGateway.processPayment(amount);
  } catch (error) {
    console.error(error.message);
  }
}

processOrder("paypal", 100);
processOrder("stripe", 200);
processOrder("unsupported", 300);
