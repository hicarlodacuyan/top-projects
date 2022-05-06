const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('.clearBtn');
const rainbowBtn = document.querySelector('.colorBtn');
const blackBtn = document.querySelector('.blackBtn');
const slider = document.getElementById('slider');
const label = document.querySelector('.label');
const randomColor = ['red', 'blue', 'yellow', 'green', 'violet', 'orange', 'pink'];
let cells = document.querySelectorAll('.cell');

function createCanvas(size) {
    label.textContent = `Canvas size: 20x20`;
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
                    e.target.style.setProperty('background', `${randomColor.at(Math.floor(Math.random() * randomColor.length))}`);
                    break;
                default:
                    e.target.style.setProperty('background', `black`);
                    break;
            }
        });
    });
}

function changeLabel(value) {
    label.textContent = `Canvas size: ${value}x${value}`;
}

rainbowBtn.addEventListener('click', function() {
    listen('rainbow');
}); 

blackBtn.addEventListener('click', function() {
    listen('black');
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

createCanvas(20);
listen();