/* PSEUDOCODE
1. Feed the array data into the function parameter
2. Sort the array items from highest to lowest
3. Return the 3rd item from the sorted array */

function findThirdHighest(number) {
    return number.sort((a, b) => b - a).at(2);
}