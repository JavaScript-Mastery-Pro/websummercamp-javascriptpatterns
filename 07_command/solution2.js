// Base command function
const createCommand = (execute, undo) => ({
  execute,
  undo,
});

// DeductFundsCommand function
const createDeductFundsCommand = (account, amount) =>
  createCommand(
    () => console.log(`Deducting ${amount} from account ${account}`),
    () => console.log(`Undoing deduction of ${amount} from account ${account}`)
  );

// CreditFundsCommand function
const createCreditFundsCommand = (account, amount) =>
  createCommand(
    () => console.log(`Crediting ${amount} to account ${account}`),
    () => console.log(`Undoing credit of ${amount} to account ${account}`)
  );

// TransactionManager functions
const createTransactionManager = () => {
  let commands = [];

  const addCommand = (command) => {
    commands.push(command);
  };

  const executeTransaction = () => {
    console.log("Starting transaction");
    try {
      commands.forEach((command) => command.execute());
      console.log("Transaction committed successfully");
    } catch (error) {
      console.log("Transaction failed, rolling back");
      rollbackTransaction();
      throw error;
    }
  };

  const rollbackTransaction = () => {
    commands.reverse().forEach((command) => command.undo());
    console.log("Transaction rolled back");
  };

  return {
    addCommand,
    executeTransaction,
    rollbackTransaction,
  };
};

// Client Code
const transactionManager = createTransactionManager();

transactionManager.addCommand(createDeductFundsCommand("12345", 100));
transactionManager.addCommand(createCreditFundsCommand("67890", 100));

transactionManager.executeTransaction();
