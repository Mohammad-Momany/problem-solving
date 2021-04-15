console.log('Problem Solving Q: 12');

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
    let revChar = ''
    let revWord = ''

    for (let i = 0; i < str.length; i++) {

        revChar = str[i] + revChar
    }
    revChar = revChar.split(" ")
    for (let i = 0; i < revChar.length; i++) {
        revWord = revChar[i] + " " + revWord
    }

    return revWord
}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/