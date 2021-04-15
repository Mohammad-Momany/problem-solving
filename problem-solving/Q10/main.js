console.log('Problem Solving Q: 10');

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {

    const chars = [...str].reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1
        return obj
    }, {})

    let maxChar = 0
    for (const char in chars) {
        if (chars[char] > maxChar) {
            maxChar = chars[char]
        }
    }
    return maxChar

}

/* 
Examples:
timesOfMostFreqChar('hello world') // => 3
timesOfMostFreqChar('hello world lol') // => 5
timesOfMostFreqChar('hello world lol woooow') // => 7
timesOfMostFreqChar('hello world lol wow www.com') // => 6
*/