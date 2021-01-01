console.log("Problem Solving Q:15 ");

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(first, second) {
  let arr = [];
  let first1 = first.split(" ").join("").split("");
  let second1 = second.split(" ").join("").split("");

  first1.filter((char) => {
    if (second1.includes(char)) { 
      if (!arr.includes(char)) arr.push(char);
    }
  });
  return arr.join("");
}

Examples: commonCharacters("abc", "abc"); // => 'abc'
commonCharacters("What is love?", "Baby don't hurt me"); // => 'hatoe'
commonCharacters("Riding on a buffalo makes me more approachable", "so what"); // => 'oash'
