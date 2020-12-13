console.log("Problem Solving Q: 7");

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(nums) {
  const arr = [];
  nums.filter((num) => {
    if (num % 2 !== 0) {
      newArr.push(num);
    }
  });
  return arr.reduce((a, b) => a + b);
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
