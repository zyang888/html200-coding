// Declare at least 4 variables, and then do math operations on them. Mix and match operators and variables and console log the results of these operations

let a = 'the first function recursively calculates the facotral of input'
console.log(a)

//prompt user to enter a number to calculate the factorial
let num = prompt('What number do you want to find the factorial of?')

//recursive
let factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

console.log('factorial of '+ num.toString() + ' is '+ factorial(num));

let b = 'the next function recursively reverses a string';
console.log(b);

let str0 = prompt('What string do you want to reverse?');

function revStr(str){
  if (str === '') return '';
  return revStr(str.substr(1)) + str[0];
}

console.log(revStr(str0));
