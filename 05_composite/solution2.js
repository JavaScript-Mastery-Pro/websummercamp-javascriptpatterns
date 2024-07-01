function createRole(name) {
  return {
    name,
    permissions: [],
    subRoles: [],
  };
}

function addPermission(role, permission) {
  return {
    ...role,
    permissions: [...role.permissions, permission],
  };
}

function addRole(role, subRole) {
  return {
    ...role,
    subRoles: [...role.subRoles, subRole],
  };
}

function getPermissions(role) {
  const allPermissions = role.subRoles.reduce((acc, subRole) => {
    const permissions = getPermissions(subRole);
    return new Set([...acc, ...permissions]);
  }, new Set(role.permissions));

  return Array.from(allPermissions);
}

function displayRole(role, indent = "") {
  console.log(`${indent}- Role: ${role.name}`);
  console.log(`${indent}  Permissions: ${role.permissions.join(", ")}`);
  role.subRoles.forEach((subRole) => displayRole(subRole, indent + "  "));
}

// Define roles
const employeeRole = addPermission(createRole("Employee"), "read_documents");

const managerRole = addRole(
  addPermission(createRole("Manager"), "approve_documents"),
  employeeRole // Manager has all permissions of Employee
);

const adminRole = addRole(
  addPermission(createRole("Administrator"), "delete_documents"),
  managerRole // Administrator has all permissions of Manager
);

// Display role hierarchy and permissions
displayRole(adminRole);

console.log("\nAdministrator Permissions:", getPermissions(adminRole));
console.log("Manager Permissions:", getPermissions(managerRole));
console.log("Employee Permissions:", getPermissions(employeeRole));
