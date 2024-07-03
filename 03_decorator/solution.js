const BASIC_PIZZA_PRICE = 10;
const CHEESE_TOPPING_PRICE = 2;
const PEPPERONI_TOPPING_PRICE = 3;
const HOT_SAUCE_TOPPING_PRICE = 1;

// Basic pizza price function
const basicPizzaPrice = () => BASIC_PIZZA_PRICE;

// Topping decorators as functions
const addCheese = (price) => price + CHEESE_TOPPING_PRICE;
const addPepperoni = (price) => price + PEPPERONI_TOPPING_PRICE;
const addHotSauce = (price) => price + HOT_SAUCE_TOPPING_PRICE;

// Function to apply toppings
const applyTopping = (price, topping) => {
  switch (topping) {
    case "cheese":
      return addCheese(price);
    case "pepperoni":
      return addPepperoni(price);
    case "hot_sauce":
      return addHotSauce(price);
    default:
      return price;
  }
};

const createPizza = (toppings = []) => {
  return toppings.reduce(applyTopping, basicPizzaPrice());
};

const basicPizza = createPizza(); // Basic pizza with no toppings
const pizzaWithCheese = createPizza(["cheese"]);
const pizzaWithPepperoni = createPizza(["pepperoni"]);
const pizzaWithBoth = createPizza(["cheese", "pepperoni"]);

console.log("Basic pizza price:", basicPizza); // Output: 10
console.log("Pizza with cheese price:", pizzaWithCheese); // Output: 12
console.log("Pizza with pepperoni price:", pizzaWithPepperoni); // Output: 13
console.log("Pizza with cheese and pepperoni price:", pizzaWithBoth); // Output: 15