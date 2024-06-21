const palindromes = function (word) {
    // only match alphanumeric values
    const pattern = /[a-zA-Z0-9]/g;
    let matchedWord = word.match(pattern).join("").toLowerCase();

    let reversedWord = ""
    for (let i = matchedWord.length - 1; i >= 0; i--) {
        reversedWord += matchedWord[i];
    }

    return matchedWord === reversedWord



};

// Do not edit below this line
module.exports = palindromes;
