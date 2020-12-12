console.log('Problem Solving Q:26 ');

/*  */

/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(arr) {
  const clone = [].concat(arr) 
  return clone
}

array_Clone ([1,2,3]) // =>[1,2,3]
/* 
Examples:
array_Clone ([1,9,8]) // =>[1,9,8]
*/