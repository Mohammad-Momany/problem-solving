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

  const num0 = [strArr[0]];
  const num1 = [strArr[1]];

  const num00 = num0.join().replace(/,/g, "").split(" ");

  const num11 = num1.join().replace(/,/g, "").split(" ");

  array = num00.filter( num => {
    return num11.includes(num);
  });
   if(array.length > 0){
    return array.join()
  }else{
    return "the string false"
  }
}

/* 
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
