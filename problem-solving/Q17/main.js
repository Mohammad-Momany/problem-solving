console.log("Problem Solving Q:17 ");

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

console.log("Problem Solving Q:17 ");

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function findFirstNonIterativedCharacter(str) {

    const chars = [...str].reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1
        return obj
    }, {})

    for (const char in chars) {
        if (chars[char] === 1) {
            return char
        }
    }
}

/* 
Examples:
findFirstNonIterativedCharacter('ABCDBIRDUP') // => 'A'
findFirstNonIterativedCharacter('ALABAMA') // => 'L'
findFirstNonIterativedCharacter('Uber for horses') // => 'U'
*/