console.log("Problem Solving Q:17 ");

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
  str = str.split("");
  let char = str[0];
  for (let i = 0; i < str.length; i++) {
    str.shift();
    if (str.includes(char)) {
      str.push(char);
      char = str[i];
    } else {
      return char;
    }
    i--;
  }

  return char;
}

// Examples: firstNonRepeatedCharacter("ABCDBIRDUP"); // => 'A'
// // firstNonRepeatedCharacter("ALABAMA"); // => 'L'
// // firstNonRepeatedCharacter("Uber for horses"); // => 'U'