// Define Constants for Pizza Types and Toppings
const BASIC_PIZZA_PRICE = 10;
const CHEESE_TOPPING_PRICE = 2;
const PEPPERONI_TOPPING_PRICE = 3;

// Define Function to Create Pizzas with Toppings
function createPizza(toppings) {
  let price = BASIC_PIZZA_PRICE;

  switch (toppings) {
    case "cheese":
      price += 2;
      break;
    case "pepperoni":
      price += 3;
      break;
    case "cheese_and_pepperoni":
      price += 5;
      break;
    default:
      // Basic pizza with no toppings
      break;
  }

  return {
    price: price,
  };
}

// Example Usage
const basicPizza = createPizza(); // Basic pizza with no toppings
const pizzaWithCheese = createPizza("cheese");
const pizzaWithPepperoni = createPizza("pepperoni");
const pizzaWithBoth = createPizza("cheese_and_pepperoni");

console.log("Basic pizza price:", basicPizza.price); // Output: 10
console.log("Pizza with cheese price:", pizzaWithCheese.price); // Output: 12
console.log("Pizza with pepperoni price:", pizzaWithPepperoni.price); // Output: 13
console.log("Pizza with cheese and pepperoni price:", pizzaWithBoth.price); // Output: 15
