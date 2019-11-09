function myBank(){

  let input;
  let balance = 0;

  while (input !== "Q") {
    input = prompt('Balance = '+balance+'\nEnter an action\n"W" to withdraw\n"D" to deposit\n"Q" to quit');
    switch (input) {
      case "W":
      amount = prompt('Enter a withdraw amount');
      balance = balance - parseInt(amount);
      break;
      case "D":
      amount = prompt('Enter a deposit amount');
      balance = balance + parseInt(amount);
      case "B":
      alert("Balance is " + balance);
      break;
      default:"";
    }
  }
  document.getElementById('balance').value = balance;
}
