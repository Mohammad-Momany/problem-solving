console.log("Problem Solving Q: 20");

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
    arr = arr.sort((a, b) => b - a)
    return arr[0] * arr[1] * arr[2]
}

/* 
largestProductOfThree([2, 1, 3, 7]); // => 42
Examples:
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/