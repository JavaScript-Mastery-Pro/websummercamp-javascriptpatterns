## With & Without the Strategy Pattern

### Dynamic Strategy Assignment
- **Problem.js:** Uses conditional statements to select and apply algorithms, which is less flexible.
- **Solution.js:** Uses `compressionContext` function with `setStrategy` method for dynamic assignment, enabling runtime changes without modifying client code.

### Separation of Concerns
- **Problem.js:** Mixes logic for selecting and applying algorithms with their implementation.
- **Solution.js:** Separates context from strategy implementation, with `compressionContext` handling strategy application and strategy functions focused on compression specifics.

### Improved Maintainability and Extensibility
- **Problem.js:** Adding new algorithms requires modifying existing conditional logic.
- **Solution.js:** New algorithms can be added as new strategy functions without altering existing code, adhering to the open/closed principle.