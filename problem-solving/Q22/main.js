console.log("Problem Solving Q: 22");

/* characterFrequency */

/*  
 Write a function that takes as its input a string and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
  str = str.split("").sort();
  let obj = {};
  str.forEach((char) => {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }); 
  let entries = Object.entries(obj);
 
    return entries.sort((num1, num2) => num2[1] - num1[1])
  
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/
