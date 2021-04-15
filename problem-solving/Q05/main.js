console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
 the first element will represent a list of comma-separated numbers sorted in ascending order,
  the second element will represent a second list of comma-separated numbers (also sorted).
   Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. 
   If there is no intersection, return the string false.
*/


function findIntersection(strArr) {

    function cuteArr(part) {
        return strArr[part].split(",")
    }
    const firstArr = cuteArr(0)
    const secondArr = cuteArr(1)
    let len;

    firstArr.length > secondArr.length ? len = firstArr.length : len = secondArr.length


    let similarNumbers = []
    for (let i = 0; i < len; i++) {
        if (secondArr.includes(firstArr[i])) {
            similarNumbers.push(firstArr[i])
        }

    }
    return similarNumbers.join()

}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/