console.log("Problem Solving Q: 7");

/* Sum Array Odd */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

function SumOddNumber(nums) {
  const newArr = [];
  nums.filter((num) => {
    if (num % 2 !== 0) {
      newArr.push(num);
    }
  });
  return newArr.reduce((a, b) => a + b, 0);
}

/* 
Examples:
SumOddNumber([1, 2, 3, 4, 5]) // => 9
SumOddNumber([1, 5, 3, 4, 5]) // => 14
SumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
*/
