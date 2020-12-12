console.log('Problem Solving Q: 25');

/*is_array   */

/*  
Write a JavaScript function to check whether an `input` is an array or not.
*/

function is_array(arr) {
  if (Array.isArray(arr)) {
   return true
}
return false
}
 
/* 
Examples:
is_array ([1, 2, 4, 0]) // => true

*/