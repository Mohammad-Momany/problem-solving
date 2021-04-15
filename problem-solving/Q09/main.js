console.log("Problem Solving Q: 9");

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(array) {

    let observeNums = 0
    let longest = 0
    for (let num of array) {

        if (num === 1) {
            observeNums++
        } else if (observeNums > longest || !num) {
            longest = observeNums
            observeNums = 0
        }

    }
    if (!longest) {
        return 'There is no one sequenced'
    }
    return observeNums > longest ? observeNums : longest


}



/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/