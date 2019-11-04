// decrease variable by one, and log that number, and stop after the number prints 0;

console.log('the first function uses for loop for count down');
//prompt user to enter a number to calculate the factorial
let num = prompt('What number do you want to start the count down?')

for (let i = num; i>=0; i--) {
  console.log(i);
}
