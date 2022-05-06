const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('.clearBtn');
const slider = document.getElementById('slider');
let cells = document.querySelectorAll('.cell');

function createCanvas(size) {
    const canvasDimension = size * size;
    canvas.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);

    for (i = 1; i <= canvasDimension; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        document.querySelector('.canvas').appendChild(cell);
    }

    cells = document.querySelectorAll('.cell');
}

function resetCanvas() {
    let child = canvas.lastElementChild;
    
    while(child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }

    cells = document.querySelectorAll('.cell');
}

function listen() {
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover' || 'clicked', function(e) {
            e.target.classList.add('hovered');
        });
    });
}

clearBtn.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.classList.remove('hovered');
    });
});

slider.addEventListener('change', function() {
    resetCanvas();
    createCanvas(this.value);
    listen();
});

createCanvas(16);
listen();