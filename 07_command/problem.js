function deductFunds(command) {
  console.log(`Deducting ${command.amount} from account ${command.account}`);
}

function creditFunds(command) {
  console.log(`Crediting ${command.amount} to account ${command.account}`);
}

function executeTransaction(commands) {
  console.log("Starting transaction");
  try {
    commands.forEach((command) => command.action(command));
    console.log("Transaction committed successfully");
  } catch (error) {
    console.log("Transaction failed, rolling back");
    rollbackTransaction(commands);
    throw error;
  }
}

function rollbackTransaction(commands) {
  commands.reverse().forEach((command) => undoCommand(command));
  console.log("Transaction rolled back");
}

function undoCommand(command) {
  if (command.action === deductFunds) {
    console.log(
      `Undoing deduction of ${command.amount} from account ${command.account}`
    );
  } else if (command.action === creditFunds) {
    console.log(
      `Undoing credit of ${command.amount} to account ${command.account}`
    );
  }
}

// Example usage
const commands = [
  { action: deductFunds, account: "12345", amount: 100 },
  { action: creditFunds, account: "67890", amount: 100 },
];

executeTransaction(commands);
