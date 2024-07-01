class Pizza {
  constructor() {
    this.description = "Plain Pizza";
  }

  getPrice() {
    return 10;
  }

  getDescription() {
    return this.description;
  }
}

class ToppingDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getPrice() {
    return this.pizza.getPrice();
  }

  getDescription() {
    return this.pizza.getDescription();
  }
}

class Cheese extends ToppingDecorator {
  constructor(pizza) {
    super(pizza);
    this.description = "Cheese";
  }

  getPrice() {
    return this.pizza.getPrice() + 2;
  }

  getDescription() {
    return `${this.pizza.getDescription()}, ${this.description}`;
  }
}

class Pepperoni extends ToppingDecorator {
  constructor(pizza) {
    super(pizza);
    this.description = "Pepperoni";
  }

  getPrice() {
    return this.pizza.getPrice() + 3;
  }

  getDescription() {
    return `${this.pizza.getDescription()}, ${this.description}`;
  }
}

// Create a custom pizza with various toppings
let customPizza = new Pizza();
customPizza = new Cheese(customPizza);
customPizza = new Pepperoni(customPizza);

console.log(
  "Custom Pizza: ",
  customPizza.getDescription(),
  "Price:",
  customPizza.getPrice()
);

// Create another custom pizza with different toppings
let anotherCustomPizza = new Pizza();
anotherCustomPizza = new Pepperoni(anotherCustomPizza);
anotherCustomPizza = new Pepperoni(anotherCustomPizza);
anotherCustomPizza = new Cheese(anotherCustomPizza);

console.log(
  "Another Custom Pizza: ",
  anotherCustomPizza.getDescription(),
  "Price:",
  anotherCustomPizza.getPrice()
);
