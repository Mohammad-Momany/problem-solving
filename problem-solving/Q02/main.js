console.log("Problem Solving Q: 2 ");

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.
*/

function LongestWord_2(sen) {
    if (!sen) {
        return "Zero Words";
    }

    let clearString = ''
    let words = []
    for (let i = 0; i < sen.length; i++) {
        if (sen[i - 1] === " ") {
            words.push(clearString)
            clearString = ""
        }
        if (sen[i] >= 'a' && sen[i] <= 'z') {
            clearString += sen[i]
        }
    }
    return clearString.reduce((longestWord, word) => {
        if (word.length > longestWord.length) {
            longestWord = word
        }
        return longestWord
    }, '')
}

/* 
Examples:
LongestWord_2('lol!- time.'); // => 'time'
LongestWord_2('I** love, cats'); // => 'love'
LongestWord_2('coding&& is awesome'); // => 'awesome'
LongestWord_2('hello|| world'); // => 'hello'
*/