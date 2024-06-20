const reverseString = function(word) {
    // split the word into letters
    const letters = word.split("");
    let reversedLetters = [];
    const reversedWords = [];

    // loop over each letter in words
    for (let i = letters.length - 1; i >= 0; i--) {
        // if empty space join current reversed letters and push into reversed word list
        if (letters[i] === " ") {
            reversedWords.push(reversedLetters.join(""));
            // reset reversed letters list
            reversedLetters = [];
        } else {
            reversedLetters.push(letters[i]);
        }
    }
    // join current reversed letters and push into reversed word list
    reversedWords.push(reversedLetters.join(""))

    return reversedWords.join(" ");

};

// Do not edit below this line
module.exports = reverseString;
