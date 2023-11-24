const sumAll = function(first, last) {
    let sum = 0;

    for (const arg of arguments) {
        if (arg < 0) return 'ERROR';
        if (typeof arg === 'string') return 'ERROR';
        if (isNaN(arg)) return 'ERROR';
    }

    if (first < last) {
        for (i = first; i <= last; i++) {
            sum += i;
        }
    } else {
        for (i = last; i <= first; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
