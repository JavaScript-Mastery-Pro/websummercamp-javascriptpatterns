let counter = 0;

class Counter {
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

// Not a Singleton - A Singleton should only be able to get instantiated once!
console.log(counter1.getInstance() === counter2.getInstance()); // false