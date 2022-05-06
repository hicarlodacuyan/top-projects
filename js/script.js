const canvas = document.querySelector('.canvas');
const clearBtn = document.querySelector('.clearBtn');
const slider = document.getElementById('slider');

function createCanvas(size) {
    const canvasDimensions = size * size;
    canvas.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);

    for (i = 1; i <= canvasDimensions; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        document.querySelector('.canvas').appendChild(cell);
    }
}

function resetCanvas() {
    let child = canvas.lastElementChild;
    
    while(child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }
}

slider.oninput = function() {
    resetCanvas();
    createCanvas(this.value);
}

createCanvas(slider.value);

const cells = document.querySelectorAll('.cell');

// Listens for mouse over event and change the cell's color
cells.forEach(function(cell) {
    cell.addEventListener('mouseover' || 'clicked', function(e) {
        e.target.classList.add('hovered');
    });
});

// When clear canvas button is clicked, reset the cell's color
clearBtn.addEventListener('click', function() {
    cells.forEach(function(cell) {
        cell.classList.remove('hovered');
    });
});
