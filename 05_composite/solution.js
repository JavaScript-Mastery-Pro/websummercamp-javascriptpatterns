class Role {
  constructor(name) {
    this.name = name;
    this.permissions = [];
    this.subRoles = [];
  }

  addPermission(permission) {
    this.permissions.push(permission);
  }

  addRole(role) {
    this.subRoles.push(role);
  }

  getPermissions() {
    let allPermissions = new Set(this.permissions);

    for (let role of this.subRoles) {
      for (let permission of role.getPermissions()) {
        allPermissions.add(permission);
      }
    }

    return Array.from(allPermissions);
  }

  display(indent = "") {
    console.log(`${indent}- Role: ${this.name}`);
    console.log(`${indent}  Permissions: ${this.permissions.join(", ")}`);
    this.subRoles.forEach((subRole) => subRole.display(indent + "  "));
  }
}

// Define roles
const employeeRole = new Role("Employee");
employeeRole.addPermission("read_documents");

const managerRole = new Role("Manager");
managerRole.addPermission("approve_documents");
managerRole.addRole(employeeRole); // Manager has all permissions of Employee

const adminRole = new Role("Administrator");
adminRole.addPermission("delete_documents");
adminRole.addRole(managerRole); // Administrator has all permissions of Manager

// Display role hierarchy and permissions
adminRole.display();

console.log("\nAdministrator Permissions:", adminRole.getPermissions());
console.log("Manager Permissions:", managerRole.getPermissions());
console.log("Employee Permissions:", employeeRole.getPermissions());
