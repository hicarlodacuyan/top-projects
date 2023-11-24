function numberChecker() {
    const number = Number(prompt('Please enter a number: '));

    if (number >= 10) {
        return true;
    } else {
        return false;
    }
}