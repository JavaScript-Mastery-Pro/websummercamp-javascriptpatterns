### 1. Approach using Constants and Functions

**Pros:**

- Readable and easy to understand, especially for developers familiar with procedural programming.
- Straightforward pricing logic using constants and a switch statement.

**Cons:**

- Limited flexibility and extensibility. Adding new toppings or modifying pricing logic may require directly modifying the `createPizza` function.
- Code may become repetitive or tightly coupled when handling multiple combinations of toppings.

### 2. Approach using Classes and Decorators

**Pros:**

- Object-oriented design promotes code organization and reusability.
- Decorator pattern allows for easy addition of new toppings by creating new decorator classes.

**Cons:**

- Requires a deeper understanding of object-oriented principles and design patterns.
- Modifying existing toppings or the base pizza may require changes to multiple classes, potentially violating the Open/Closed Principle.
- Requires defining multiple classes for each type of topping, which might be overkill for small projects or simple use cases.

### 3. Approach using Higher-order Functions

**Pros:**

- Promotes composability, separation of concerns, and immutability.
- Functional programming techniques make the code easier to reason about and maintain.
- Adding new toppings involves creating new higher-order functions, allowing for independent modification without altering existing code.

**Cons:**

- May be less familiar to developers not accustomed to functional programming concepts.
- Functional programming techniques like function composition may introduce a small performance cost compared to direct method calls.

### Which is Better

The approach using Higher-order Functions (Approach 3) is better overall. It offers improved readability, flexibility, and extensibility compared to the other approaches.

It promotes functional programming principles, which align well with modern JavaScript development practices. Additionally, it provides a clear separation of concerns and encourages a more declarative and concise coding style.
