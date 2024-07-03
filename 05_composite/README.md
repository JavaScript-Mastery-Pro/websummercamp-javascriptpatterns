### 1. Approach using Object Literal

**Pros:**

1. **Simplicity:** Object literals are straightforward and easy to understand.
2. **Declarative:** Role hierarchy is defined directly in the object structure.
3. **Minimalist:** It requires less boilerplate code.

**Cons:**

1. **Limited Abstraction:** It lacks clear separation of concerns. Logic and data are mixed, making it harder to maintain and extend.
2. **Mutability:** The role structure is mutable, which might lead to unintended changes.
3. **Recursive Functions:** The `getPermissions` and `displayRoleHierarchy` functions are recursive, potentially leading to stack overflow errors for deeply nested role hierarchies.

### 2. Approach using Composition

**Pros:**

1. **Encapsulation:** Roles are encapsulated within objects, providing a clear separation of concerns.
2. **Inheritance:** Utilizes object-oriented principles like inheritance to model role hierarchies.
3. **Readability:** Class methods like `getPermissions` and `display` provide clear and readable code.