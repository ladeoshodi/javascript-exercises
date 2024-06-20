const repeatString = function(word, multiple) {
    try {
        return word.repeat(multiple);
    } catch {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
