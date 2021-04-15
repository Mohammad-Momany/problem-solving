console.log("Problem Solving Q:14 ");

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
    const len = arr.length;
    if (len % 2 === 0) {
        const middle = len / 2;
        const avg = (arr[middle] + arr[middle - 1]) / 2;
        return avg;
    }
    let middleNum = Math.floor(len / 2);
    return arr[middleNum];
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/