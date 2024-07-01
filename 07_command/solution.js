class DBCommand {
  constructor() {
    if (new.target === DBCommand) {
      throw new Error(
        "DBCommand is an abstract class and cannot be instantiated directly."
      );
    }
  }
  execute() {
    throw new Error("execute method must be implemented");
  }
  undo() {
    throw new Error("undo method must be implemented");
  }
}

class DeductFundsCommand extends DBCommand {
  constructor(account, amount) {
    super();
    this.account = account;
    this.amount = amount;
  }
  execute() {
    console.log(`Deducting ${this.amount} from account ${this.account}`);
  }
  undo() {
    console.log(
      `Undoing deduction of ${this.amount} from account ${this.account}`
    );
  }
}

class CreditFundsCommand extends DBCommand {
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

class TransactionManager {
  constructor() {
    this.commands = [];
  }
  addCommand(command) {
    this.commands.push(command);
  }
  executeTransaction() {
    console.log("Starting transaction");
    try {
      this.commands.forEach((command) => command.execute());
      console.log("Transaction committed successfully");
    } catch (error) {
      console.log("Transaction failed, rolling back");
      this.rollbackTransaction();
      throw error;
    }
  }
  rollbackTransaction() {
    this.commands.reverse().forEach((command) => command.undo());
    console.log("Transaction rolled back");
  }
}

const transactionManager = new TransactionManager();

transactionManager.addCommand(new DeductFundsCommand("12345", 100));
transactionManager.addCommand(new CreditFundsCommand("67890", 100));

transactionManager.executeTransaction();
