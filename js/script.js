const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('.clearBtn');
const rainbowBtn = document.querySelector('.colorBtn');
const blackBtn = document.querySelector('.blackBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const slider = document.getElementById('slider');
const label = document.querySelector('.label');
let cells = document.querySelectorAll('.cell');

function createCanvas(size) {
    changeLabel(slider.value);
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

function listen(color) {
    cells.forEach(function(cell) {
        cell.addEventListener('mouseover' || 'clicked', function(e) {
            switch(color) {
                case 'black':
                    e.target.style.setProperty('background', `black`);
                    break;
                case 'rainbow':
                    e.target.style.setProperty('background', `#${Math.floor(Math.random()*16777215).toString(16)}`);
                    break;
                case 'eraser':
                    e.target.style.setProperty('background', `white`);
                    break;
                default:
                    e.target.style.setProperty('background', `black`);
                    break;
            }
        });
    });
}

function changeLabel(value) {
    label.textContent = `${value}x${value}`;
}

rainbowBtn.addEventListener('click', function() {
    listen('rainbow');
}); 

blackBtn.addEventListener('click', function() {
    listen('black');
}); 

eraserBtn.addEventListener('click', function() {
    listen('eraser');
});

clearBtn.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.classList.remove('hovered');
        cell.style.removeProperty('background');
    });
});

slider.addEventListener('change', function() {
    resetCanvas();
    createCanvas(this.value);
    changeLabel(this.value);
    listen();
});

createCanvas(slider.value);
listen();