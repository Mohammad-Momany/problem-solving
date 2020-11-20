console.log('Problem Solving Q: 4 ');

/* Codeland Username Validation */

/*  
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

// function CodelandUsernameValidation(str) {
//   if(str[str.length - 1].replace(/['"]+/g, '') === '_'){
//     return false 
//   } 
//   if(!(str[0].replace(/['"]+/g, '')) ===  ){}
//   if (str.length > 3 && str.length < 26  ) {
//   return true
  
// }
// }

/* 


Examples:
CodelandUsernameValidation('aa_'); // => false
CodelandUsernameValidation('u__hello_world123'); // => true

*/




// the first characters split[split.length - 1]
// the last characters split[0]
/// remove the quotationsome ( .replace(/['"]+/g, ''))