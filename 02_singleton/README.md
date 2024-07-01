### 1. Approach using Functions and Global Variables

**Pros:**

- **Simple Implementation**: Directly uses middleware and functions without introducing additional complexity.
- **Easy to Understand**: The code is straightforward and easy to comprehend, especially for developers familiar with Express.js middleware.
- **Immediate Usage**: Middleware and functions are readily available for use without additional instantiation or setup.

**Cons:**

- **Limited Scalability**: Adding additional functionality, such as custom session management, might require significant modification and increase complexity.
- **Potential Code Duplication**: Middleware and functions are defined globally, which might lead to code duplication if similar functionality is required elsewhere.
- **Lack of Encapsulation**: Session management and authentication logic are spread across multiple middleware and functions, potentially leading to less maintainable code.
- **Eager Initialization**: The memory client or any session client you'll use (e.g. Redis client and session store) will be initialized as soon as the module is loaded, which is eager initialization.
- **Multiple Instances**: In a large application, different modules might inadvertently create multiple instances if they don't share the same module correctly

### 2. Approach using Singleton Pattern

**Pros:**

- **Encapsulation**: Session management functionality is encapsulated within the `SessionManager` class, promoting cleaner code and separation of concerns.
- **Scalability**: Easily extendable and adaptable to future changes by modifying the `SessionManager` class methods.
- **Modularity**: The session management logic is modularized, making it easier to maintain and test.
- **Lazy Initialization**: The session store is initialized only when needed, which can be beneficial for performance.

  It ensures that the instance of the class (e.g., `SessionManager`) is created only when it is first accessed. This is different from directly exporting an object, which creates the object as soon as the module is loaded.

**Cons:**

- **Increased Complexity**: Introduction of a class and singleton pattern adds complexity compared to the straightforward middleware approach.
- **Potential Overhead**: Class instantiation and method calls might introduce slight overhead compared to direct middleware usage.
- **Learning Curve**: Developers unfamiliar with object-oriented programming concepts or design patterns might find this approach more challenging to grasp initially.

### Which is Better

It depends on the project requirements and constraints. **Approach 1** might be preferable for smaller projects or scenarios where simplicity and immediate implementation are prioritized.

**Approach 2**, however, offers better scalability, maintainability, and extensibility, making it suitable for larger projects or those expecting frequent changes and additions to session management.
