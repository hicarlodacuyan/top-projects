const palindromes = function (string) {
    const newString = string.toLowerCase().replace(/\s+/g, '').replace(/[^a-zA-Z ]/g, '');

    return newString === newString.split('').reverse().join('') ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
