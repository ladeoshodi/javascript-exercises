const fibonacci = function(number) {
    // ensure endSequence is a number
    const endSequence = parseInt(number);
    const fibonacciSequence = [1, 1];

    // return 0 if endSequence is 0 or "OOPS" if -ve or the last value in the fibonacci sequence
    if (endSequence === 0) {
        return 0
    } else if (endSequence < 0) {
        return "OOPS"
    } else {
        for (let i = 0; fibonacciSequence.length < endSequence; i++) {
            fibonacciSequence.push(fibonacciSequence[0 + i] + fibonacciSequence[1 + i]);
        }
    
        return fibonacciSequence[endSequence-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
