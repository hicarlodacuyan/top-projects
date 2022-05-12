const smallInput = document.querySelector('.small-input');
const largeInput = document.querySelector('.large-input');
const btnEquals = document.querySelector('.is-equals');
const btnClear = document.querySelector('.is-clear');
const btnOperators = document.querySelectorAll('.is-operation');
const btnNum = document.querySelectorAll('.is-num');
let currentNum = '',
    previousNum = '',
    operation = undefined;

function updateDisplay() {
    largeInput.value = currentNum;

    if (operation != undefined) {
        smallInput.value = previousNum + operation;
    } else {
        smallInput.value = '';
    }
}

function appendNumber(number) {
    currentNum += number;
}

function chooseOperation(operator) {
    if (currentNum === '') return;
    if (previousNum != '') compute();

    operation = operator;
    previousNum = currentNum;
    currentNum = '';
}

function compute() {
    let total;
    const prev = parseInt(previousNum);
    const curr = parseInt(currentNum);

    if (isNaN(prev) || isNaN(curr)) return;

    switch(operation) {
        case '+':
            total = prev + curr;
            break;
        case '-':
            total = prev - curr;
            break;
        case '×':
            total = prev * curr;
            break;
        case '÷':
            total = prev / curr;
            break;
        default:
            return '';
    }

    currentNum = total;
    previousNum = '';
    operation = undefined;
}

function clear() {
    currentNum = '';
    previousNum = '';
    operation = undefined;
}

btnNum.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        appendNumber(e.target.textContent);
        updateDisplay();
    });
});

btnOperators.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        chooseOperation(e.target.textContent);
        updateDisplay();
    });
});

btnEquals.addEventListener('click', function() {
    compute();
    updateDisplay();
});

btnClear.addEventListener('click', function() {
    clear();
    updateDisplay();
});