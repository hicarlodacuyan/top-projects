const canvas = document.createElement('div');
const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clearBtn');

canvas.setAttribute('class', 'canvas');
container.appendChild(canvas);

function createCanvas(size) {
    const canvasDimensions = size * size;

    for (i = 1; i <= canvasDimensions; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        document.querySelector('.canvas').appendChild(cell);
    }

    // console.log(canvas);
}

createCanvas(32);

const cells = document.querySelectorAll('.cell');

// Listens for mouse over event and change the cell's color
cells.forEach(function(cell) {
    cell.addEventListener('mouseover', function(e) {
        e.target.classList.add('clicked');
    });
});

// When clear canvas button is clicked, reset the cell's color
clearBtn.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.classList.remove('clicked');
    });
});