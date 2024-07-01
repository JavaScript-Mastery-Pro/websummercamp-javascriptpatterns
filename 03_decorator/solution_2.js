// Higher-order function to create a base pizza
function createPizza() {
  return {
    description: "Plain Pizza",
    price: 10,
  };
}

// Higher-order function to add a topping to a pizza
function addTopping(topping) {
  return function (pizza) {
    const newDescription = pizza.description + ", " + topping.name;
    const newPrice = pizza.price + topping.price;
    return {
      description: newDescription,
      price: newPrice,
    };
  };
}

// Example toppings
const cheeseTopping = { name: "Cheese", price: 2 };
const pepperoniTopping = { name: "Pepperoni", price: 3 };

// Compose toppings onto a base pizza
const customPizza = addTopping(pepperoniTopping)(
  addTopping(cheeseTopping)(createPizza())
);

console.log(
  "Custom Pizza: ",
  customPizza.description,
  "Price:",
  customPizza.price
);
