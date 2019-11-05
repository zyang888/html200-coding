// Create a JavaScript file that does the following:
//
// Take a sentence of at least five words and a period.
// Make an array from that sentence and console.log the third word.

let str = prompt('Please input a sentence of at least five words and a period?');
let a = str.split(' ');
if (a.length >= 6 && a.includes(','))  {
  console.log(a[3]);
} else {
  alert('Input does not satisfy requirement');
}
