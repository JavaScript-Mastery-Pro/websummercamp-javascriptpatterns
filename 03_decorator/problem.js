const BASIC_PIZZA_PRICE = 10;
const CHEESE_TOPPING_PRICE = 2;
const PEPPERONI_TOPPING_PRICE = 3;
const HOT_SAUCE_TOPPING_PRICE = 1;

function createPizza(toppings) {
  let price = BASIC_PIZZA_PRICE;

  switch (toppings) {
    case "cheese":
      price += CHEESE_TOPPING_PRICE;
      break;
    case "pepperoni":
      price += PEPPERONI_TOPPING_PRICE;
      break;
    case "cheese_and_pepperoni":
      price += CHEESE_TOPPING_PRICE + PEPPERONI_TOPPING_PRICE;
      break;
    case "hot_sauce":
      price += HOT_SAUCE_TOPPING_PRICE;
      break;
    default:
      // Basic pizza with no toppings
      break;
  }

  return {
    price
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
