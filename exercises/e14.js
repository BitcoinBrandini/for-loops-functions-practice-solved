
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {

  const filteredAccounts = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    const deposits = account.deposits || [];
    const withdrawals = account.withdrawals || [];
    const depositSum = deposits.reduce((acc, curr) => acc + curr, 0);
    const withdrawalSum = withdrawals.reduce((acc, curr) => acc + curr, 0);
    const actualBalance = depositSum - withdrawalSum;

    if (actualBalance !== account.balance) {
      filteredAccounts.push(account);
    }
  }

  return filteredAccounts;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
