const leapYears = function(year) {
    // check if divisible by 4 but not divisible by 100
    if (year % 4 === 0 && !(year % 100 === 0)) {
        return true;
    // check if divisible by both 100 & 400
    } else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = leapYears;
