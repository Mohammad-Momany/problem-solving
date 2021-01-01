console.log("Problem Solving Q: 21");

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  str = str.split("");
  let obj = {};
  let unique = [];
  str.forEach((char) => {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;  
    }
  });
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] === 1) {
      unique.push(entries[i][0]);
    }
  }
  return unique.join("")
}

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/
