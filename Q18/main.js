console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
  let num = 1
  for (let i = n; i >= 0; i--) {
    num = i * num
  }
  return num
}

 
// Examples:
// factorial(1) // => 1
// factorial(3) // => 6
// factorial(4) // => 24