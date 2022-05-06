function createCanvas(size) {
    const canvasDimensions = size * size;
    const canvas = document.createElement('div');
    const container = document.querySelector('.container');

    canvas.setAttribute('class', 'canvas');
    container.appendChild(canvas);

    for (i = 1; i <= canvasDimensions; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        document.querySelector('.canvas').appendChild(cell);
    }

    // console.log(canvas);
}

createCanvas(32);

const cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('mouseover', function(e) {
        e.target.classList.add('clicked');
    });
});