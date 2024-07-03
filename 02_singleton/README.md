### 1. Approach without a Singleton

**Pros:**
- **Simplicity**: The implementation is straightforward and easy to understand.
- **Flexibility**: Allows for the creation of multiple instances,

**Cons**:
- **Shared State Vulnerability**: The global counter can lead to issues with state management in a multi-instance scenario.

### 2. Approach with a Singleton

**Pros**:
- **Encapsulated State**: The state is encapsulated within the Singleton instance, preventing external modification and ensuring consistent access.

### State management in React
In React, we often rely on a global state through state management tools such as **Redux** or **React Context** instead of using Singletons.

Although their global state behavior might seem similar to that of a Singleton, these tools provide a **read-only** state rather than the mutable state of the Singleton. When using Redux, only pure function reducers can update the state, after a component has sent an action through a dispatcher.