### 1. Approach using normal functions

**Pros:**

1. **Simplicity**: It's a straightforward procedural approach without the need for classes or object-oriented concepts.
2. **Flexibility**: Commands are represented as plain objects, making it easy to construct them dynamically.
3. **Less Boilerplate**: No need for class definitions and inheritance hierarchies, reducing the amount of code required.

**Cons:**

1. **Lack of Encapsulation**: The functions are not encapsulated within objects, potentially leading to a less organized codebase.
2. **Less Reusable**: The functions are defined globally, which might not be as reusable or modular as encapsulated classes.

### 2. Approach using Command Pattern (Object Oriented Programming)

**Pros:**

1. **Encapsulation**: Commands are encapsulated within classes, promoting better organization and encapsulation of related behavior.
2. **Polymorphism**: Allows for polymorphic behavior through inheritance, enabling easy extension and customization of command behavior.
3. **Readability**: The use of classes and method calls can make the code more readable and self-explanatory.

**Cons:**

1. **Complexity**: Requires the use of classes and inheritance, which might be considered overkill for simpler scenarios.
2. **More Boilerplate**: The use of classes and method definitions adds more boilerplate code compared to a functional approach.
3. **Requires OOP Knowledge**: Developers need to understand object-oriented programming concepts to work with this approach effectively.

### 3. Approach using Command Pattern (Functional Programming)

**Pros:**

1. **Encapsulation and Flexibility**: Commands are encapsulated within functions, promoting better organization while still allowing for dynamic construction.
2. **Readability**: Functions are defined in a modular and readable manner, similar to Approach 1.
3. **Less Boilerplate**: No need for class definitions and inheritance hierarchies, reducing boilerplate code.

**Cons:**

1. **Lack of Polymorphism**: While it offers encapsulation and flexibility, it doesn't provide the same level of polymorphism as classes and inheritance.
2. **Limited Extensibility**: Adding new types of commands might require modifying existing functions rather than extending classes, potentially leading to less flexible code.

### Which is Better

All three approaches have their own merits and can be suitable depending on the specific requirements and preferences of the project and development team.

- **Approach 1** is simple and straightforward, suitable for smaller projects or scenarios where object-oriented concepts are not necessary.
- **Approach 2** is more suitable for larger projects or scenarios where polymorphism and encapsulation are desired, and developers are comfortable with object-oriented programming.
- **Approach 3** strikes a balance between encapsulation and simplicity, offering a middle ground for projects that need some level of organization without the overhead of classes and inheritance.

For a project where a moderate level of organization and encapsulation is desired without the full complexity of object-oriented programming, **Approach 3** might be the better choice.

However, for larger projects with more complex requirements, **Approach 2** could be more suitable.
