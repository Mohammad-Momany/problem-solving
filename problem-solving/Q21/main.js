console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
  str =str.split("")
  // str = str.split("");
  // let char = str[0];
  // let char1 = [];
  // for (let i = 0; i < str.length; i++) {
  //   str.shift();
  //   if (str.includes(char)) {
  //     str.push(char);
  //     char = str[i];
  //   } else {
  //     return char1.push(char);
  //   }
  //   i--;
  //   console.log(char1);
  // }
  // return char1;
  let uniqueItemLength = [];
  nums.forEach((num) => {
    if (!uniqueItemLength.includes(num)) {
      uniqueItemLength.push(num);
    }
  });
  return uniqueItemLength.length;
}

/* 
onlyUnique('hello there') // => 'o tr'
Examples:
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/