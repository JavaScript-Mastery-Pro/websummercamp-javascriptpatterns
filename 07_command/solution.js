// Command interface
class Command {
  execute() {}
  undo() {}
}

// Concrete command for deducting funds
class DeductFundsCommand extends Command {
  constructor(account, amount) {
    super();
    this.account = account;
    this.amount = amount;
  }

  execute() {
    console.log(`Deducting ${this.amount} from account ${this.account}`);
  }

  undo() {
    console.log(`Undoing deduction of ${this.amount} from account ${this.account}`);
  }
}

// Concrete command for crediting funds
class CreditFundsCommand extends Command {
  constructor(account, amount) {
    super();
    this.account = account;
    this.amount = amount;
  }

  execute() {
    console.log(`Crediting ${this.amount} to account ${this.account}`);
  }

  undo() {
    console.log(`Undoing credit of ${this.amount} to account ${this.account}`);
  }
}

function executeTransaction(commands) {
  console.log("Starting transaction");
  try {
    commands.forEach((command) => command.execute());
    console.log("Transaction committed successfully");
  } catch (error) {
    console.log("Transaction failed, rolling back");
    rollbackTransaction(commands);
    throw error;
  }
}

function rollbackTransaction(commands) {
  commands.slice().reverse().forEach((command) => command.undo());
  console.log("Transaction rolled back");
}

// Example usage
const commands = [
  new DeductFundsCommand("12345", 100),
  new CreditFundsCommand("67890", 100),
];

executeTransaction(commands);