const isNum = document.querySelectorAll('.is-num');
const largeInput = document.querySelector('.large-input');
const smallInput = document.querySelector('.small-input');
const isPlus = document.querySelector('.is-plus');
const isMinus = document.querySelector('.is-minus');
const isTimes = document.querySelector('.is-times');
const isDivide = document.querySelector('.is-divide');

let displayValue = 0;
let operation;
let output = 0;

isNum.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if (largeInput.value == 0 && e.target.innerText == 0) {
            console.log("You can't have 0 as the first number!");
        } else if (displayValue > 0 && operation != undefined) {
            smallInput.value = smallInput.value + e.target.innerText;
            largeInput.value = operate(operation, displayValue, parseInt(e.target.innerText));
            displayValue = largeInput.value;
        } else {
            smallInput.value += e.target.innerText;
            largeInput.value += e.target.innerText;
            displayValue = parseInt(largeInput.value);
        }
    });
});

function operatorsListener() {
    isPlus.addEventListener('click', function(e) {
        operation = add;
        smallInput.value = smallInput.value + e.target.innerText;
        displayValue = largeInput.value;
        largeInput.value = 0;

        console.log(`Small Input Value: ${smallInput.value}`);
        console.log(`dislayValue: ${displayValue}`)
        console.log(`operation: ${operation}`)
    });

    isMinus.addEventListener('click', function(e) {
        // console.log(e.target.innerText);
    });

    isTimes.addEventListener('click', function(e) {
        // console.log(e.target.innerText);
    });

    isDivide.addEventListener('click', function(e) {
        // console.log(e.target.innerText);
    });
}

function add(a, b) {
    return a + b;
}
  
function minus(a, b) {
    return a - b;
}
  
function times(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

operatorsListener();