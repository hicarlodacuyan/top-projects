const repeatString = function(string, num) {
    let output = '';

    if (num < 0) {
        return 'ERROR';
    }

    for (x = 1; x <= num; x++) {
        output += `${string}`;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
