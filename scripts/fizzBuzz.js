function fizzBuzz (number) {
    let output = [];

    for (x = 1; x <= number; x++) {
        if (x % 5 === 0 && x % 3 === 0) {
            output.push('FizzBuzz');
        } else if (x % 5 === 0) {
            output.push('Buzz');
        } else if (x % 3 === 0) {
            output.push('Fizz');
        } else {
            output.push(x);
        }
    }

    return output;
}