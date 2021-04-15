console.log("Problem Solving Q:15 ");

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/


function commonCharacters(first, second) {
    return [...second].reduce((commonChar, char) => {
        if (first.includes(char) && !commonChar.includes(char) && (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z')) {
            console.log(char);
            commonChar += char
        }
        return commonChar
    }, '')
}

// Examples: commonCharacters("abc", "abc"); // => 'abc'
// commonCharacters("What is love?", "Baby don't hurt me"); // => 'hatoe'
// commonCharacters("Riding on a buffalo makes me more approachable", "so what"); // => 'oash'