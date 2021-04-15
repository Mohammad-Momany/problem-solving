console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
*/

function LongestWord(sen) {
    if (!sen) {
        return "Zero Words"
    }
    return sen.split(" ").reduce((bigWord, word) => {
        if (word.length > bigWord.length) {
            bigWord = word
        }
        return bigWord
    }, '');

}


/* 
Examples:
LongestWord('lol time'); // => 'time'
LongestWord('I love cats'); // => 'love'
LongestWord('coding is awesome'); // => 'awesome'
LongestWord('hello world'); // => 'hello'
*/