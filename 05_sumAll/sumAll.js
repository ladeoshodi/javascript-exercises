const sumAll = function(start, end) {
    // first method
    // if ((typeof start === "number" && start > 0) && (typeof end === "number" && end > 0)) {
    //     let sum = 0;
    //     if (start < end) {
    //         for (let i = start; i <= end; i++) {
    //             sum += i;
    //         }
    //         return sum
    //     } else if (start > end) {
    //         for (let i = start; i >= end; i--) {
    //             sum += i;
    //         }
    //         return sum
    //     } else {
    //         return sum += start;
    //     }
    // } else {
    //     return "ERROR"
    // }

    // using Array.reduce()
    if ((typeof start === "number" && start > 0) && (typeof end === "number" && end > 0)) {
        // create a range between start and stop as an array
        let integerArray = [];
        if (start < end) {
            for (let i = start; i <= end; i++) {
                integerArray.push(i);
            }
        } else if (start > end) {
            for (let i = start; i >= end; i--) {
                integerArray.push(i);
            }
        } else {
            integerArray.push(start)
        }

        // Let's use the reduce function to sum up the values in the array
        return integerArray.reduce((sum, integer) => sum += integer);
    } else {
        return "ERROR"
    }

};

// Do not edit below this line
module.exports = sumAll;
