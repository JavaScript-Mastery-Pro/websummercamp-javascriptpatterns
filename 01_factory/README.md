### 1. Approach using normal functions

**Pros:**

- **Simple and Direct**: This approach uses straightforward functions to handle payments, making it easy to understand and implement.
- **No Overhead**: It does not involve class definitions or factory methods, keeping the codebase lightweight.
- **Immediate Invocation**: Payment processing functions are invoked directly, reducing potential overhead or complexity introduced by class instantiation.

**Cons:**

- **Limited Scalability**: Adding new payment gateways would require modifying the `processOrder` function, potentially leading to code duplication or increased complexity.
- **Hardcoded Logic**: Payment processing logic is tightly coupled with the `processOrder` function, making it less flexible for future changes or extensions.
- **Less Reusable**: The payment processing logic is not encapsulated within objects, limiting reusability and maintainability.

### 2. Approach using Factory Pattern

**Pros:**

- **Modular and Extensible**: Utilizes classes and a factory method pattern, making it easy to add new payment gateways without modifying existing code.
- **Encapsulation**: Payment gateway implementations are encapsulated within their respective classes, promoting cleaner code and separation of concerns.
- **Error Handling**: Incorporates error handling using try-catch blocks, providing more robustness and resilience to unexpected scenarios.

**Cons:**

- **Increased Complexity**: Introduction of classes, factory methods, and error handling adds complexity compared to the simpler approach.
- **Potential Overhead**: Class instantiation and method calls may introduce slight overhead compared to direct function invocation.
- **Learning Curve**: Developers unfamiliar with object-oriented programming concepts might find this approach more challenging to grasp initially.

### Which is Better

Itdepends on the specific requirements and constraints of your project.

**Approach 1** might be preferable for smaller projects or scenarios where simplicity and immediacy are prioritized.

**Approach 2**, on the other hand, offers better scalability, maintainability, and extensibility, making it suitable for larger projects or those expecting frequent changes and additions to payment gateways.
